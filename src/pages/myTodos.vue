<template>
  <div id="main">
    <div id="left">
      <div v-show="searchflag" id="header"><input @keyup.enter="select" v-model="selectitem"></div>
      <div v-show="!searchflag" id="header">
        <button @click="search">查找</button>
        <button @click="reset">重置</button>
        <button @click="increase">添加</button>
      </div>
      <div id="content" class="list">
        <div id="content-inner">
        <transition-group 
          name="list-complete"
          tag="p"
        >
      <div 
      v-for="(item, index) in todos" :key="item.name" 
      id="items" 
      draggable="true"
      class="list-complete-item"
      @dragenter="dragenter($event,index)"
      @dragover="dragover($event)"
      @dragstart="dragstart($event,index)"
      >
        <div>
        <router-link :to="{
          name:'tododetails',
          query:{
            id:item.name ? item.name : '',
          }
        }" :id="item.name? item.name : '' ">{{item.name}}</router-link>
        <button @click="del" :value="item.name">x</button>
        </div>
      </div>
      </transition-group>
      </div>
      </div>
    </div>
    <div id="right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

//import TodoList from '../components/todoList.vue';
export default {
  components:{
    //TodoList
  },
  data(){
    return{
      todos:[],
      flag:'',
      searchflag:false,
      selectitem:'',
      dragIndex:'',
      enterIndex:'',

    }
  },
  mounted(){
    this.todos=this.$store.state.todos
  },
  methods:{
    gotodo(i){
      this.flag=i
    },
    increase(){
      this.$store.state.todos.push({name:'new',details:'new'})
      this.$router.push({name:'tododetails',query:{id:'new'}})
      this.todos=this.$store.state.todos
      this.$store.state.uptodo = true
    },
    search(){
      this.searchflag=!this.searchflag
    },
    select(){
      if(this.selectitem){
        let a = this.selectitem.split(' ')
        for(let i=0;i<a.length;i++){
          this.todos = this.$store.state.todos.filter((value)=>{
            let str = JSON.stringify(value.name)
            let s = a[i].toString()
            return str.includes(s)
          })
        }
        this.searchflag=!this.searchflag
      }else{
        this.searchflag=!this.searchflag
      }
    },
    reset(){
      this.todos=this.$store.state.todos
    },
    del(e){
      this.$store.state.uptodo = true
      let str
      if(e.srcElement._value.toString()){
        str = e.srcElement._value.toString()
      }else{
       // console.log(e) 
        str=''
      }
      
      //console.log(str)
      this.$store.dispatch('deleteTodo',str)
      let delInd = 0
      this.todos.forEach((value,index)=>{if(value.name==str){delInd=index}})
       // console.log(delInd)
      this.todos.splice(+delInd,1)
      //console.log(this.$route.query.id)

      if(this.$route.query.id==str){

        this.$router.push({name:'tododetails'})
      }
      //this.$router.push({name:'tododetails'})
      //this.todos=this.$store.state.todos
    },
    dragenter(e,index){
      e.preventDefault();
      if(+this.dragIndex !== +index){
        const source = this.todos[+this.dragIndex]
        this.todos.splice(+this.dragIndex,1)
        this.todos.splice(+index,0,source)
        this.dragIndex = index
        this.$store.state.uptodo = true
      }
    },
    dragstart(e,index){
      this.dragIndex=index
    },
    dragover:(e)=>{
      e.preventDefault()
    }

  }
}
</script>

<style scoped>
#main{
  position: relative;
  height: 600px;
  left: 10%;
  width: 80%;
  display: flex;
  flex-wrap: nowrap;
  background-color: rgba(255, 249, 240, 0.7);
  border-radius: 10px;
  padding: 20px;
  backdrop-filter: blur(10px);
}
#left{
  width: 25%;
  height: 100%;
  display: inline-block;
  border-right: 2px solid;
  border-color: white;
  
}
#right{
  width: 75%;
  height: 100%;
  display: inline-block;
}
#items{
  margin-top: 10%;
  font-size: 20px;
  width: 80%;
  border-bottom: 1px solid rgb(154, 165, 165);
  direction: ltr;
  margin-right: 20px;
}
button{
  float: right;
  
}
a{
  text-decoration:none
}
#header{
  margin-bottom: 20px;
  display: flex;
}
#content{
  overflow-x: hidden;
  overflow-y: scroll;
  direction:rtl
}
::-webkit-scrollbar{
    width: 5px;   /* 滚动条宽度， width：对应竖滚动条的宽度  height：对应横滚动条的高度*/
  }
  ::-webkit-scrollbar-track { 
    background-color: rgba(255, 249, 240, 0.7);
    /* 较少使用 */
    border-radius: 3px; 
  } 
  ::-webkit-scrollbar-thumb { 
    border-radius: 3px; 
    height: 100px;    /* 滚动条滑块长度 */
    background-color: rgb(202, 197, 213);
  }
.list-complete-item {
  transition: all 1s;
  display: inline-block;
}
.list-complete-enter, .list-complete-leave-to
/* .list-complete-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transform:translateX(30px);
}
.list-complete-leave-active {
  position: relative;
}
</style>>
