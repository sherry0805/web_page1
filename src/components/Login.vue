//登录

<template>
    <div>
        <div class="login-header"></div>
        <div class="login-main">
            <div class="login-form">
                <el-form
                    :model="ruleForm"
                    status-icon
                    :rules="rules"
                    ref="ruleForm"
                    label-width="100px"
                >
                    <el-form-item label="用户名" prop="user">
                        <el-input v-model="ruleForm.user"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="pass">
                        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <!-- `checked` 为 true 或 false -->
                        <el-checkbox v-model="ruleForm.autoLogin">下次自动登录</el-checkbox>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="danger" round @click="login('ruleForm')">登录</el-button>
                    </el-form-item>
                </el-form>
            </div>
            <Loading v-if="isLoging" marginTop="-30%"></Loading>
        </div>
        <div class="login-footer"></div>
    </div>
</template>

<script>
import Loading from './Loading.vue'
export default {
  name: 'Login',
  data() {
      var validateUser = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入用户名'));
        } else {
          callback();
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          callback();
        }
      };

    return {
        isLoging: false,
        ruleForm: {
            autoLogin: false,
            user: 'admin',
            pass: ''
        },
        rules: {
            user: [
                { validator: validateUser, trigger: 'blur' }
            ],
            pass: [
                { validator: validatePass, trigger: 'blur' }
            ]
        }
    }
  },
  components:{
    Loading
  },
  methods:{
    // 登录逻辑
    login(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // alert('submit!');
            if (this.ruleForm.user !== 'admin') {
                this.$alert('用户名不存在.');
            } else if (this.ruleForm.pass !== 'admin') {
                this.$alert('密码错，请输入正确的密码.');
            } else {
                this.toLogin();
            }
          } else {
            // console.log('error submit!!');
            return false;
          }
        });
    },

  	//登录请求
  	toLogin(){

  		//一般要跟后端了解密码的加密规则
  		//这里例子用的哈希算法来自./js/sha1.min.js
  		let password_sha = hex_sha1(hex_sha1( this.ruleForm.pass ));

  		//需要想后端发送的登录参数
  		let loginParam = {
  			account: this.ruleForm.user,
  			password_sha
  		}

      //设置在登录状态
      this.isLoging = true;
      
  		//请求后端,比如:
  		/*this.$http.post( 'example.com/login.php', {
  		param: loginParam).then((response) => {
        if(response.data.code == 1){
          let expireDays = 1000 * 60 * 60 * 24 * 15;
          this.setCookie('session', response.data.session, expireDays);
          //登录成功后
          this.$router.push('/mainPage'); 
        }
	    }, (response) => {
	        //Error
	    });
  		*/
  	   
      //演示用
  		setTimeout(()=>{
        //登录状态15天后过期
        let expireDays = 1000 * 60 * 60 * 24 * 15;
  			this.setCookie('session','blablablablabla...', expireDays);
        this.isLoging = false;
        //登录成功后
  			this.$router.push('/mainPage/');
  		}, 3000);
  	}
  }
}
</script>

<style scoped>

.login-header, .login-main, .login-footer {
    left: 50%;
    top: 50%;
    position: fixed;
}

.login-header {
    width: 300px;
    margin-left: -150px;
    margin-top: -300px;
}

.login-main {
    width: 600px;
    margin-left: -300px;
    margin-top: -185px;
}

.login-footer {
    width: 1200px;
    margin-left: -600px;
    margin-top: 165px;
}

.login-form {
    border: 2px solid #ebebeb;
    border-radius: 3px;
    transition: .2s;
    padding: 40px;
    /* box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04) */
    box-shadow: 0 0 25px #cac6c6;
}

.login-form .el-form {
    width: 460px;
}

.el-button.is-round {
    width: 350px;
}

.el-button--danger {
    background-color: #EA2F4A;
}

.login-header {
    background-image: url(../images/login_logo.png);
    background-repeat: no-repeat;
    height: 90px;
}
.login-footer {
    background-image: url(../images/login_city.png);
    background-repeat: no-repeat;
    height: 160px;
}
</style>