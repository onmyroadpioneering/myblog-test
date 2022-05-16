<template>
<div id="a">
  <div class="main" v-show="!pageflag">
    <div class="log" v-if="islog">
      <label for="userid"><input type="text" placeholder="用户名" v-model="userid" class="inputt"></label><br>
      
      <label for="pwd">
        <input type="password" class="inputt" placeholder="请输入密码" v-model="pwd" @keyup.enter="login"></label><br>
      <label><a-button @click="login" class="butt" type="primary">登录</a-button></label><br>
      <label>没有账号？前往<a @click="translog">_注册_</a>或<a>_游客登录_</a></label>
    </div>
    <div class="log" v-if="!islog">
      <label for="userid"><input type="text" class="inputt" id="userid" placeholder="请输入用户名" v-model="userid"></label><a v-if="!idflag">wrong</a><br>
      <label for="pwd"><input type="password" class="inputt" id="pwd" v-model="pwd"></label><br>
      <label for="pwdcf"><input type="password" class="inputt" id="pwdcf" v-model="pwdcf"></label><a v-if="!pwdflag">error!</a><br>
      <label><button @click="logon" class="butt">注册</button></label><br>
      <label id="logtext">注册完成...<a @click="translog">前往登录</a></label><br>
    </div>
  </div>
  <div v-show="pageflag">
    <el-avatar> {{user}} </el-avatar>
    <a @click="logout">注销</a>
  </div>
</div> 
</template>

<script>

export default {
  name: 'LogIn',
  components: {
},
  data() {  
    return {  
      name:'',
      islog:true,
      userid:'',
      pwd:'',
      pwdcf:'',
      pageflag:false,
      user:'user'
    }
  },
  activated(){
    this.user=this.$store.state.nowuser
    this.name = this.$store.state.name
    if(this.$store.state.nowuser){
      this.pageflag=true
    }else{
        this.pageflag=false
    }
   
    
  },
  methods:{
    translog(){
      this.islog=!this.islog
    },
    login(){
      if(this.idflag){
        this.$store.dispatch('userConfirm', {id:this.userid,pwd:this.pwd})   
      }
    },
    logon(){
      if(this.idflag){
        this.$store.dispatch('userRegister', {id:this.userid,pwd:this.pwd})
      }
    },
    logout(){
      this.$store.dispatch('logout')
    }
  },
  watch:{
    
  },
  computed:{
    pwdflag(){
      return  (this.pwd.slice(0,this.pwdcf.length)===this.pwdcf && this.pwdcf) || this.pwd===this.pwdcf 
    },
    idflag(){
      return this.userid && (this.userid.slice(0,1).match(/^[A-z]/) && !this.userid.match(/[^a-zA-Z0-9_]/))
    }
  }
}
</script>

<style scoped>
#a{
  position: relative;
}
.main{
  position: flex;
  margin-left: 50%;
  margin-top: 50px;
  width: 500px;
  height: 400px;
  background-color: rgba(181, 249, 149, 0.3);
  border-radius: 13px;
  transform: translateX(-50%);
  box-shadow: 4px 2px 2px 1px rgb(154, 154, 146);
  backdrop-filter: blur(5px);
}
.main:hover{
  box-shadow: 4px 2px 2px 1px rgb(155, 184, 165);
}
.log{
  position:relative;
  top: 50%;
  left: 50%;
  width: 50%;
  height: 50%;
  transform: translate(-50%,-50%);

}
.inputt{
  margin-top: 5%;
  width: 80%;
}

.butt{
  margin-top: 5%;
  width: 80%;
  margin-bottom: 5%;
  border-radius: 3px;
  border-color: rgb(122, 253, 253);
  background-color: rgb(122, 253, 253);
  box-shadow: 2px 2px 2px 1px rgb(181, 201, 207);
  font-size: 15px;
  color: black;
}
.butt:hover {
  background-color: aqua;
  box-shadow: 2px 2px 2px 1px rgb(120, 194, 216);
}
label{
  margin-left: 10%;
  
}
a:hover{
  color: blue;
}
</style>
