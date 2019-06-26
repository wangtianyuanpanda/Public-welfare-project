<template>
    <div class="container">
      <Header title="智能补助金查询平台" :is-toggle="isResult" style="margin-bottom: 10px" @back="toggleResult"></Header>
      <a-drawer
        title="筛选条件"
        placement="left"
        :closable="false"
        :maskClosable="true"
        @close="onClose"
        :visible="visible"
        class="drawer"
      >
        <p style="display: flex">
          <span style="white-space: nowrap; height: 1.8rem; line-height: 1.8rem">名称：</span>
          <a-input v-model="formInline.title"></a-input>
        </p>
        <p style="display: flex">
          <span style="white-space: nowrap; height: 1.8rem; line-height: 1.8rem">时间：</span>
          <a-input v-model="formInline.time"></a-input>
        </p>
        <p style="display: flex">
          <span style="white-space: nowrap; height: 1.8rem; line-height: 1.8rem">金额：</span>
          <a-input v-model="formInline.award_money"></a-input>
        </p>
        <p style="display: flex">
          <span style="white-space: nowrap; height: 1.8rem; line-height: 1.8rem">种类：</span>
          <a-input v-model="formInline.category"></a-input>
        </p>
        <p>
          <span>年份：</span>
          <a-select style="width: 100px" v-model="formInline.year">
            <a-select-option v-for="i in years" :value="i">
              {{ i }}
            </a-select-option>
          </a-select>
        </p>
        <p class="reset-btn" @click="reset">
          重置
        </p>
      </a-drawer>
      <div v-if="!isResult">
        <div class="top-panel">
          <img src="../assets/search.png" v-on:click="toggleDrawer" style="margin-left: -1.5rem; margin-right: 0.5rem; width: 1.7rem;"/>
          <a-input-search
            placeholder="input search text"
            v-model="formInline.keywords"
            style="width: 80%; margin-bottom: 5px;"
            @search="onSearch"></a-input-search>
          <a-checkbox @change="onCheck">仅显示本人奖学金</a-checkbox>
          <a-carousel autoplay class="carousel-con">
            <div><img src="../assets/p1.jpg"/></div>
            <div><img src="../assets/p2.jpg"/></div>
            <div><img src="../assets/p3.jpg"/></div>
          </a-carousel>
        </div>
        <div class="main-panel">
          <a-tooltip v-for="(item, index) in list" :key="index" :title="item" placement="topLeft" >
            <p>{{ item }}</p>
          </a-tooltip>
        </div>
        <div class="bottom-panel">
          <p>浏览量：{{ PV }}</p>
        </div>
      </div>
      <div v-else style="height: calc(100% - 20px); width: 100%; overflow-x: hidden;">
        <div v-for="(item, index) in data" class="list-item" :key="index">
          <p>
            标题：{{item.fields.title}}
          </p>
          <p>
            年份：{{item.fields.time}}
          </p>
        </div>
      </div>
    </div>
</template>

<script>
import Option from "ant-design-vue/es/vc-select/Option";
import Header from './elements/Header';
import {welfarePost} from "../common/common";

export default {
  name: 'HomePage',
  components: {Option, Header},
  data () {
    return {
      PV: 888,
      visible: false,
      formInline: {
        title: '',
        academy_apply: '',
        time: '',
        condition: '',
        category: '',
        quata: '',
        award_money: '',
        year: '',
        continue_get: '',
      },
      years: [
        2010,2011,2012,2013,2014,2015,2016,2017,2018,2019
      ],
      data: [{
        title: '宝钢奖学金',
        time: 2019
      },{
        title: '宝钢奖学金',
        time: 2012
      }],
      isPrivate: false,
      isResult: false,
      list: [
        '一等学业奖学金&&&不限制&&&不需要学生本人申请，于秋冬学期根据成绩排名和品德等级自动产生&&&1.学习努力、成绩优秀的学生2.评选比例不超过参评学生总人数的3%&&&教育基金会;校设常规奖学金#老体系&&&2000/每人&&&不限制&&&no',
        '二等学业奖学金&&&不限制&&&不需要学生本人申请，根据成绩排名和品德等级自动产生&&&1.学习努力、成绩优秀的学生2.评选比例不超过参评学生总人数的8%&&&教育基金会;校设常规奖学金#老体系&&&1500/每人&&&不限制&&&no',
        '公益服务标兵&&&不限制&&&秋冬学期开学一个月内&&&1.勇于承担社会责任，在公益服务中表现优秀。具体在公益活动、志愿服务、社会实践、同学帮扶等方面表现优秀;2.原则上不超过参评学生总人数的35%;&&&#新体系&&&无&&&不限制&&&no',
        '文体活动标兵&&&不限制&&&秋冬学期开学一个月内&&&1.在文体活动及竞赛中表现优秀;2.原则上不超过参评学生总人数的35%;&&&#新体系&&&无&&&不限制&&&no',
        '新生獎學金優秀獎&&&全日制普通本科新生(不含少數民族預科生、內地高中班學生、台港澳僑學生及體育類、藝術類學生等)&&&新生報到註冊2個月內&&&1.在我校本科一批招生計劃40人以上的省份，高考投檔分位居所在省（市、自治區）文科21-80名，理科21-100名;2.在我校本科一批招生計劃40人（含）以下的省份，高考投檔分位居所在省（市、自治區）文科6-40名，理科6-50名&&&教育基金会;校设常规奖学金&&&20000/每人，分四年發放&&&不限制&&&yes',
        '专业奖学金优秀奖&&&農林、師範、體育、地學專業&&&9月底前&&&获当学年一、二、三等学业奖学金的学生&&&教育基金会;校设常规奖学金&&&1000/每人&&&不限制&&&no',
        '专业奖学金普通奖&&&農林、師範、體育、地學專業&&&9月底前&&&当学年表现良好的学生（获得专业奖学金优秀奖除外）&&&教育基金会;校设常规奖学&&&500/每人&&&不限制&&&no',
        '优秀学生奖学金一等奖&&&不限制&&&9月底前&&&1.德智体美全面发展的学生;2.获当学年一等学业奖学金，思想品德评价等级为优秀&&&教育基金会;校设常规奖学#老体系&&&6000/每人&&&不限制&&&no',
        '优秀学生奖学金二等奖&&&不限制&&&9月底前&&&1.德智体美全面发展的学生;2.获当学年二等学业奖学金，思想品德评价等级为优秀&&&教育基金会;校设常规奖学#老体系&&&3000/每人&&&不限制&&&no',
        '优秀学生奖学金三等奖&&&不限制&&&9月底前&&&1.德智体美全面发展的学生;2.获当学年三等学业奖学金;3.学业成绩排名列专业年级前50％并获得文体活动奖学金、社会实践奖学金、社会工作奖学金、研究与创新一等奖学金中任何两项及以上奖励;4.思想品德评价等级为优秀&&&教育基金会;校设常规奖学#老体系&&&2000/每人&&&不限制&&&no'
      ]
    }
  },
  methods: {
    onSearch: function () {
      // TODO
      // this.$message.info('searching');
      welfarePost('/search/', this.formInline).then(ret => {
        console.log(ret['data']);
        this.data = ret['data'];
        console.log('success')
      }).catch(e => {
        console.log('error')
      })
      this.toggleResult();
    },
    toggleDrawer: function () {
      this.visible = !this.visible;
    },
    onClose: function () {
      this.visible = false
    },
    onCheck: function (e) {
      this.isPrivate = e.target.checked;
    },
    toggleResult: function () {
      this.isResult = !this.isResult;
    },
    reset: function () {
      this.formInline = {
        title: '',
        academy_apply: '',
        time: '',
        condition: '',
        category: '',
        quata: '',
        award_money: '',
        year: '',
        continue_get: '',
      };
    }
  }
}
</script>

<style lang="less" scoped>

  .container {
    height: calc(100% - 10px);
    width: 100%;
    overflow-x: hidden;
    .top-panel {
        :global(.slick-slide) {
              text-align: center;
              height: 260px;
              line-height: 260px;
              background: #364d79;
              overflow: hidden;
              color: #fff
            }
      .carousel-con {
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .main-panel {
      /*height: calc(100% - 350px);*/
      height: 300px;
      width: 100%;
      padding: 20px 0;
      overflow-x: hidden;
      overflow-y: scroll;
      p {
        white-space: nowrap;
        text-overflow: ellipsis}
    }
    .bottom-panel {
      position: absolute;
      bottom: 20px;
      left: 50%;
      transform: translate(-50%, 0);
    }

    }
    .drawer {
      p {
        display: flex;
      }
    }
  .list-item {
    background: #AEEEEE;
    border-radius: 4px;
    margin: 0 10px 10px;
    padding: 7px 6px 1px;
    text-align: left;
  }
  .reset-btn {
    width: 100%;
    height: 3rem;
    line-height: 3rem;
    position: absolute;
    bottom: 0;
    left: 0;
    margin-bottom: unset;
    background: #D3D3D3;
    text-align: center;
    font-size: 20px;
    box-shadow: 0 2px 9px #D3D3D3;
  }
</style>
