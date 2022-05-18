<template>
  <div id="proj">
    <div v-show="this.id=='2'">
        <transDemo></transDemo>
    </div>
    <div v-show="this.id=='3'">
        <canvasBall></canvasBall>
    </div>
    <div v-show="this.id=='4'">
        <JasAni></JasAni>
    </div>
    <div v-show="this.id==6">
        <SunMov></SunMov>
    </div>
  </div>
</template>
<script>
import transDemo from './transDemo.vue';
import canvasBall from './canvasBall'
import JasAni from './jasAni.vue'
import SunMov from './sunMov.vue';
export default {
    data() {
        return {
            id: "",
         };
  },
  components:{
    transDemo,
    canvasBall,
    JasAni,
    SunMov
},  
mounted() {
    this.id = this.$route.query.id;
    }
}
</script>
<style scoped>
#proj{
  position: relative;
  background-color: rgba(156, 195, 195, 0.4);
  backdrop-filter: blur(10px);
  width: 80%;
  left: 10%;
  right: 10%;
  border-radius: 13px;
}
</style>