<template>
  <div>
    <div id="nav">
    <div class="main">
      <div class="son" id="left"><router-link to="/" @click="flag=false">主页</router-link></div>
      <div  id="space"></div>
      <div class="son"><router-link to="/myblogs" @click="flag=true">blog</router-link></div>
      <div class="son"><router-link to="/myprojects" @click="flag=true">projects</router-link></div>
      <div class="son"><router-link to="/mytest" @click="flag=true">test</router-link></div>
      <div class="son"><router-link to="/mytodos" @click="flag=true">todo</router-link></div>  
      <div class="son"><router-link to="/login" @click="flag=true">登录</router-link></div>  
    </div>
    </div>
    <div class="maincopy">

    </div>
    <hr>
    <transition name="routeview">
          <router-view v-show="flag"></router-view>
    </transition>

    <transition name="resume">
      <div v-show="!flag">
        <my-resume></my-resume>
    </div>
    </transition>

    <MyFooter />
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import myResume from '../components/myResume.vue'
import MyFooter from '../components/myFooter.vue'
export default {
  components: {
    myResume,
    MyFooter
},
  setup(){
      const flag =ref(false)

      return{
          flag
      }
  }
}
</script>

<style scoped>
.resume-enter-active,
.resume-leave-active {
  transition: opacity 1s ease;
}

.resume-enter-from,
.resume-leave-to {
  opacity: 0;
}

.routeview-enter-active,
.routeview-leave-active {
  transition: opacity 1s ease;
}

.routeview-enter-from,
.routeview-leave-to {
  opacity: 0;
}
hr{
  transform: translateY(-10px);
}
.main{
    position: relative;
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content:flex-end;
    align-items: stretch;

    border-color: black;
    z-index: 1000;
    box-shadow: 0px,0px,2px,2px,green;

}
.maincopy{
  position: relative;
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content:flex-end;
    align-items: stretch;

    border-color: black;
    z-index: 9;
    box-shadow: 0px,0px,2px,2px,green;
}
.son{
    width: 50px;
    height: auto;
    flex-grow: 1;
    line-height: 50px;
    text-align: center;
}
.son:hover{
  background-color: rgba(143, 195, 241, 0.3);
  box-shadow: 0px,0px,10px,10px,green;
}
#space{
    flex-grow: 20;
}
a{
    text-decoration:none;
    color: rgb(44, 0, 221);
    font-style: italic;
}
#nav{
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 10;
  background-color: rgba(69, 228, 226, 0);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(213, 216, 216,0.5);
}
</style>