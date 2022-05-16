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

  <el-card class="box-card" @click="jumpadd">
                <template #header>
                    <div class="card-h">
                        <span><svg t="1652672431338" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1911" width="40" height="40"><path d="M511.5 957.9C264.9 957.9 65 758.2 65 511.9s199.9-446 446.5-446S958 265.6 958 511.9c0.1 246.3-199.8 446-446.5 446zM509 149.1c-200.4 0-355.8 162.2-355.8 362.3 0 200.1 155.4 356.8 355.8 356.8s362.9-156.7 362.9-356.8c0-200.1-162.5-362.3-362.9-362.3zM690.5 556h-134v133.8c0 24.6-20 44.6-44.6 44.6h-0.1c-24.6 0-44.6-19.9-44.6-44.6V556h-134c-24.7 0-44.6-19.9-44.6-44.5v-0.1c0-24.6 20-44.6 44.6-44.6h134V333c0-24.6 20-44.6 44.6-44.6h0.1c24.7 0 44.6 19.9 44.6 44.6v133.8h134c24.7 0 44.6 19.9 44.6 44.6v0.1c0 24.6-19.9 44.5-44.6 44.5z m0 0" p-id="1912"></path></svg></span>
                    </div>
                </template>
    </el-card>

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
      this.flag=true
    },
    beforeRouteEnter (to, from, next) {
      // ...
      to.flag=true
      next()
    },
    methods: {
      jump(e){

        this.flag = false
        let a = e.path.length-10
        if(e.path.length == 15){
          this.$router.push({name:'blogdetails',query:{id:e.path[0].innerText,index:e.path[a].__vnode.key}})
        }else if(e.path.length == 14){
          this.$router.push({name:'blogdetails',query:{id:e.path[2].firstChild.innerText,index:e.path[a].__vnode.key}})
        }else{
          this.$router.push({name:'blogdetails',query:{id:e.path[1].children[0].innerText,index:e.path[a].__vnode.key}})
        }
        
        //e.path[2].firstChild.innerText}
      },
      jumpadd(){
        this.flag = false
        this.$router.push({name:'addblog'})
        
        //e.path[2].firstChild.innerText}
      },
      ret(){
        this.flag = true
        this.$router.push({name:'myblogs'})
      }

    }
}
</script>

<style scoped>
.card-h {

    text-align:center;
}


.box-card {
    width: 80%;
    margin-left: 10%;
    margin-bottom: 30px;
}
</style>

