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
    background-color: rgb(185, 185, 185);
  }
  input{
    background-color: rgba(255, 255, 255, 0);
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
