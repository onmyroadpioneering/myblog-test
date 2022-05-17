<template>
  <div>
      <div class="parent" v-show="proflag">
        <div class="child" @click="topro">1</div>
        <div class="child" @click="topro">2</div>
        <div class="child" @click="topro">3</div>
        <div class="child" @click="topro">4</div>
        <div class="child" @click="topro">5</div>
        <div class="child" @click="topro">6</div>
        <div class="child" @click="topro">7</div>
        <div class="child" @click="topro">8</div>
        <div class="child" @click="topro">9</div>
        <div class="child" @click="topro">10</div>
        <div class="child" @click="topro">11</div>
        <div class="child" @click="topro">12</div>
        <div class="child" @click="topro">13</div>
        <div class="child" @click="topro">14</div>
        <div class="child" @click="topro">15</div>
        <div class="child" @click="topro">16</div>
      </div>
      <router-view v-show="!proflag"></router-view>
  </div>
</template>

<script>

export default {
  data(){
    return{
      proflag:true,

    }
  },
  methods:{
    topro(e){
      this.proflag=!this.proflag
      this.$router.push({name:'echartscic',query:{id:e.path[0].innerText}})
    }
  },
  beforeRouteUpdate(to){
    if(to.name=='myprojects'){
      this.proflag = true
    }
    
  },
  activated(){
    this.proflag = true
  },
  mounted(){
    this.proflag = true
  }
}
</script>

<style scoped>
.parent{
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  align-content: space-around;
}
.child{
  height: 250Px;
  width: 350px;
  /*margin-left: 3%;*/
  margin-top: 40px;
  background-color: aquamarine;
  border-radius: 12px;
}
</style>