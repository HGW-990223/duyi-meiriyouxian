<template>
  <div class="login">
    <a-form-model class="login-form" ref="loginForm" :model="loginForm" :rules="rules" v-bind="layout">
      <a-form-model-item has-feedback label="邮箱" prop="email">
        <a-input v-model="loginForm.email" type="email" autocomplete="off" value="邮箱"/>
      </a-form-model-item>
      <a-form-model-item has-feedback label="密码" prop="password">
        <a-input v-model="loginForm.password" type="password" autocomplete="off" value="密码" />
      </a-form-model-item>
      <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-button type="primary" @click="submitForm('loginForm')">
          提交
        </a-button>
        <a-button style="margin-left: 10px" @click="resetForm('loginForm')">
          注册
        </a-button>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>
<script>
import { login } from '@/api/user.js'

export default {
  data() {
    let emailValidator = /^[\w-]+@[\w.-]+.com$/;
    let checkEmail = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请输入邮箱'));
      }
      if( emailValidator.test(value) ) {
        return callback()
      }else{
        return callback(new Error('邮箱格式不正确'));
      }
      
    };
    let validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.loginForm.password !== '') {
          this.$refs.loginForm.validateField('password');
        }
        callback();
      }
    };
    return {
      loginForm: {
        email: '',
        password: '',
      },
      rules: {
        password: [{ validator: validatePass, trigger: 'change' }],
        email: [{ validator: checkEmail, trigger: 'change' }],
      },
      layout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 },
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          login(this.loginForm).then(res => {
            this.$store.dispatch('setUserInfo',res);
            this.$router.push({
              name: 'Home'
            })
          }).catch(error => {
            this.$message.error(error)
          })
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style lang="less">
  @import url("~@/assets/css/login.less");
</style>
