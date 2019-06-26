<template>
    <div>
      <section>
        <Header title="注册新账户"></Header>
        <section>
          <a-form :form="form" layout="horizontal" style="padding: 20px 15px;">
            <a-form-item
              label="用户名"
              required
              :label-col="{ span: 5 }"
              :wrapper-col="{ span: 12 }">
              <a-input
                v-decorator="[
                'name',
                {rules: [{ required: true, message: 'Please input your name!' }]}
              ]"
              />
            </a-form-item>
            <a-form-item
              label="密码"
              required
              :label-col="{ span: 5 }"
              :wrapper-col="{ span: 12 }">
              <a-input
                v-decorator="[
                'password',
                {rules: [{ required: true, message: 'Please input your password!' }]}
                ]"
                type="password"
                placeholder="Password"
              />
            </a-form-item>
            <!--<a-form-item-->
              <!--label="手机"-->
              <!--required-->
              <!--:label-col="{ span: 5 }"-->
              <!--:wrapper-col="{ span: 12 }">-->
              <!--<a-input-->
                <!--v-decorator="[-->
                <!--'tel',-->
              <!--]"-->
              <!--/>-->
            <!--</a-form-item>-->
            <!--<a-form-item class="flex"-->
              <!--label="验证码"-->
              <!--required-->
              <!--:label-col="{ span: 5 }"-->
              <!--:wrapper-col="{ span: 12 }">-->
              <!--<a-input-->
                <!--v-decorator="[-->
                <!--'validation',-->
              <!--]"-->
              <!--/>-->
              <!--<a-button @click="getValidateCode">获取验证码</a-button>-->
            <!--</a-form-item>-->
            <a-form-item
              label="入学年份">
              <a-select placeholder="请选择入学年份">
                <a-select-option v-for="(year, index) in years" :value="year" :key="index">
                  {{ year }}
                </a-select-option>
              </a-select>
            </a-form-item>
            <a-form-item
              label="学院">
              <a-select placeholder="请选择学院">
                <a-select-option v-for="(item, index) in departments" :value="item" :key="index">
                  {{ item }}
                </a-select-option>
              </a-select>
            </a-form-item>
          </a-form>
          <a-button type="primary" @click="register">注册新用户</a-button>
        </section>
      </section>
    </div>
</template>

<script>
import AFormItem from 'ant-design-vue/es/form/FormItem'
import Header from './elements/Header'
const md5 = require('js-md5');
const accountSID = '25ff03e7301038182d51cf9788e7cb42'
const authToken = '6dc848afc1c34a0a349edadcd8c41e4b'
export default {
  name: 'Register',
  components: {AFormItem, Header},
  data () {
    return {
      formLayout: 'inline',
      form: this.$form.createForm(this),
      years: [
        2010,2011,2012,2013,2014,2015,2016,2017,2018,2019
      ],
      departments: [
        '计算机学院',
        '经济学院'
      ]
    }
  },
  methods: {
    getValidateCode: function () {
      let timestamp = Date.parse(new Date());
      let postData = {
        timestamp: timestamp,
        to: this.form.getFieldValue('tel'),
        sig: md5(accountSID + authToken + timestamp),
        accountSid: accountSID
      };
      let headers = {
        'Content-type': 'application/x-www-form-urlencoded'
      }
      fetch('https://openapi.miaodiyun.com/distributor/sendSMS', {
        credentials: 'include',
        method: 'POST',
        headers: headers,
        mode: 'no-cors',
        body: JSON.stringify(postData)
      }).then(ret => {
        console.log('success')
      })
    },
    register: function () {
      console.log(this.form.getFieldValue('name'))
      //todo
    }
  }
}
</script>

<style lang="less">
  .ant-form-item-children {
    display: flex !important;

  }
</style>
