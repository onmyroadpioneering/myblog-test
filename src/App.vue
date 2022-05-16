<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  mounted(){
    this.$store.state.isAuthenticated=true
    let a = localStorage.getItem('user')
    if(a){
      this.$store.state.nowuser = a
    }
    console.log('2'<'100')
  }
  /*mounted(){
    this.$router.push({
      name: 'NotFound',
      params: { pathMatch: this.$route.path.split('/') },
    })
  }*/
  //overflow-x: hidden;
}
</script>

<style>
  body{
    margin: 0;
    /*background-image: url('./assets/sunset.jpg');*/
    background-color: rgb(255, 255, 255);
  }
  input{
    background-color: rgba(255, 255, 255, 0);
  margin-top: 5%;
  border: 0;
  height: 30px;
  width: 100%;
  border-bottom: 1px solid;
  line-height: 30px;
  vertical-align: middle;
  font-size: 30px;
  outline: none;
}
  ::-webkit-scrollbar{
    width: 5px;   /* 滚动条宽度， width：对应竖滚动条的宽度  height：对应横滚动条的高度*/
    background-color: #fff;
  }
  ::-webkit-scrollbar-track { 
    background-color: #fff;
    /* 较少使用 */
    border-radius: 3px; 
  } 
  ::-webkit-scrollbar-thumb { 
    border-radius: 3px; 
    height: 100px;    /* 滚动条滑块长度 */
    background-color: rgb(214, 214, 214);
  }
</style>
