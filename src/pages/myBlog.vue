<template>
<div>

<div v-show="!flag">
<button @click="ret">back</button>
  <div>
  <router-view></router-view>
  
  </div>
  <div>
  </div>
</div>


<div v-show="flag">
  <div v-for="(item, index) in blog" :key="index" :value="item.title" @click="jump">
    <Blogdetail :title="item.title" :content="item.content" />
  </div>

  </div>
  </div>
</template>

<script>
//import userComment from "../components/userComment.vue"
import Blogdetail from "../components/blogDetail.vue"

export default {

    components: { Blogdetail,}
,
    data(){
      return{
        blog:[],
        flag:true
      }
    },
    activated() {
      this.blog = this.$store.state.blog
    },
    methods: {
      jump(e){
        this.flag = false
        if(e.target == 'span'){
          this.$router.push({name:'blogdetails',query:{id:e.path[0].innerText}})
        }else{
          this.$router.push({name:'blogdetails',query:{id:e.path[2].firstChild.innerText}})
        }
        
        //e.path[2].firstChild.innerText}
      },
      ret(){
        this.flag = true
        this.$router.push({name:'myblogs'})
      }

    }
}
</script>

<style>

</style>

