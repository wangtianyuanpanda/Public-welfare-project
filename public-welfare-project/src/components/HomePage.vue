<template>
    <div class="container">
      <div class="top-panel">
        <a-input-search
        placeholder="input search text"
        style="width: 80%; margin-bottom: 20px;"
        @search="onSearch"></a-input-search>
        <a-carousel autoplay>
          <div>p1</div>
          <div>p2 </div>
          <div>p3</div>
        </a-carousel>
      </div>
      <div class="main-panel">
        <a-tooltip v-for="item in list" :key="item" :title="item" placement="topLeft">
          <p>{{ item }}</p>
        </a-tooltip>
      </div>
      <div class="bottom-panel">
        <p>浏览量：{{ PV }}</p>
      </div>
    </div>
</template>

<script>
export default {
  name: 'HomePage',
  data () {
    return {
      PV: 888,
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
      this.$message.info('searching')
    }
  }
}
</script>

<style lang="less" scoped>

  .container {
    padding: 20px 10px;
    height: calc(100% - 50px);
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
    }

    .main-panel {
      height: calc(100% - 350px);
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
</style>
