<template>
    <div class="login-con">
      <img class="background-img" src="../../assets/bg3.jpg"/>
      <div class="input-con">
        <p class="title" style="color: white">智能补助金查询平台</p>
        <form style="width: 60%; margin: 0px auto" :form="form" @submit="toLogin">
          <div class="input-item">
            <span>姓名：</span>
            <AInput v-model="formInline.name" placeholder="请输入账号"></AInput>
          </div>
          <div class="input-item">
            <span>密码：</span>
            <AInput v-model="formInline.password" placeholder="请输入密码" type="password"></AInput>
          </div>
          <div style="display: flex; justify-content: space-between">
            <a-button @click="toRegister">注册</a-button>
            <a-button type="primary" @click="toLogin">登陆</a-button>
          </div>
        </form>
      </div>

    </div>
</template>

<script>
import AFormItem from 'ant-design-vue/es/form/FormItem'
import { welfareGet, welfarePost } from '../../common/common'
import { ACCOUNTS } from '../../const/const'

export default {
  name: 'login',
  components: {AFormItem},
  data () {
    return {
      formInline: {
        name: '',
        password: ''
      },
      form: this.$form.createForm(this),
      showLoading: false

    }
  },
  methods: {
    toLogin: function () {
      //本地数据mock登陆
      // let res = ACCOUNTS.filter(el => {
      //   return el.name === this.formInline.name
      // })
      // console.log(res);
      // if (res.length === 0) {
      //   this.$message.warn('账户不存在')
      // } else {
      //   if (res[0].password.toString() === this.formInline.password) {
      //     location.href = '#/home'
      //   } else {
      //     this.$message.warn('密码错误')
      //   }
      // }
      //后端接口登陆
      welfarePost('/login/', {account: this.formInline.name, password: this.formInline.password}).then(ret => {
        this.$message.info('登陆成功');
        location.href = '#/home'
      })
    },
    toRegister: function () {
      location.href = '#/register'
    }
  }
}
</script>

<style lang="less" scoped>
.login-con {
  .background-img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -999;
  }
  .input-con {
    padding: 40px 30px;
    .input-item {
      display: flex;
      white-space: nowrap;
      margin: 20px 0 20px;
      color: white;
      span {
        height: 32px;
        line-height: 32px;
      }
      .ant-input {
        color: white;
      }
    }
    .title {
      font-size: 26px;
      font-weight: 500;
      margin: 20px 0 110px;
    }
    input {
      background: transparent;
    }

  }
  .ant-form-item-control-wrapper {
    display: inline-block;
  }
}
</style>
