<template>
  <div id="d">
    <input type="text" v-model="past" />
    <br />
    <div id="content">
      <textarea name="message" id="message" style="border:0;border-radius:5px;background-color:rgba(255, 249, 240, 0);width: 100%;height: 90%;padding: 10px;resize: none;border-style: none;outline: none;font-size:20px;" v-model="message"></textarea>

    </div>
    <div id="butt">
      <button @click="updateTodo">保存</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: String,
  },
  data() {
    return {
      past:"",
      message:'',
    };
  },
  computed: {
    todo(){
        return this.id
    },
  },
  mounted() {
    this.past = this.id
    let a = this.$store.state.todos.find((value)=>value.name==this.id)
    if(a){
        this.message = a.details
    }else{
        this.message = ''
    }
  },
  updated(){
    
  },
  beforeRouteUpdate(to){
    this.past = to.query.id
    let a = this.$store.state.todos.find((value)=>value.name==to.query.id)
    if(a){
        this.message = a.details
    }else{
        this.message = ''
    }
 
  },
  methods: {
    updateTodo() {
      if(!this.past){
          return
      }
      let item = {};
      item.past = this.todo
      let mess = {}
      mess.name = this.past
      mess.details=this.message
      item.value = mess
      /*
      this.$store.state.todos.forEach((value,index,array)=>{
        if(value.name===item.past){
          array[index] = item.value
        }
      })*/
      this.$store.state.uptodo = true
      this.$store.dispatch("updateTodo", item);
      this.$router.push({name:'tododetails',query:{id:this.past}})
    },
  },
};
</script>

<style>
#d {
  position: relative;
  height: 100%;
  margin-left: 5%;
}
input {
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
#butt {
  position: relative;
  bottom: 0%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 10px;
}
button {
  border-radius: 3px;
  border-color: rgb(122, 253, 253);
  background-color: rgb(122, 253, 253);
  box-shadow: 2px 2px 2px 1px rgb(181, 201, 207);
  font-size: 15px;
}
button:hover {
  background-color: aqua;
  box-shadow: 2px 2px 2px 1px rgb(120, 194, 216);
}
#content {
  height: 80%;
}
</style>