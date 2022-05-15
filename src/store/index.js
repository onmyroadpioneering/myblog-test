import { defineStore } from 'pinia'
import { createStore } from 'vuex'
import request from '../api/request'
import { router } from '@/route/router'


export default createStore({
  state:{
    isAuthenticated: false,
    nowuser:'',
    uptodo:false,
    blog:[
      {title:'a',content:['aaaaaaaa','ssssssss']},
      {title:'b',content:['bbbbbbbb']},
      {title:'c',content:['cccccccc']},
      {title:'d',content:['dddddddd']},
      {title:'e',content:['eeeeeeee']},
      {title:'f',content:['ffffffff']},
      {title:'g',content:['gggggggg']},
      {title:'h',content:['hhhhhhhh']},
      {title:'i',content:['iiiiiiii']},
    ],
    todos:[
      
    ]
  },
  mutations:{
    deleteTodo(state,item){
      state.todos=state.todos.filter((value)=>{
        if(value.name===item){
          return false
        }else{
          return true
        }
      })
    },
    updateTodo(state,item){
      //console.log(item)
      
      state.todos.forEach((value,index,array)=>{
        if(value.name===item.past){
          //console.log(index,item.value)
          array.splice(index,1,item.value)
        }
      })
    },
    userCon(state,f){
      console.log(f)
      try {
          if(f==true){
              state.lever=true
              alert('登录成功')
              this.dispatch('initTodoData')
          }else{
              state.lever=false
              alert('登录失败')
          }
      } catch (error) {
          alert('请输入账号密码')
      }
    },
    userReg(state,f){
      try {
          if(f==true){
              alert('注册成功')
          }else{
              alert('注册失败')
          }
      } catch (error) {
          alert('ERROR')
      }
    },
    initTodoData(state,f){
      console.log(f)
      state.todos = f
      router.push('mytodos')
    },
    uptodo(state,f){
      console.log(f)
    }

  },
  actions:{
    async deleteTodo(context,item){
      await this.commit('deleteTodo',item)
    }
    ,
    async updateTodo(context,item){
      //console.log(item)
      await this.commit('updateTodo',item)
      
    },
    userConfirm(context,user){
      //fetch(url,{
      //    method:'POST',
      //    body:user,
      //}).then((response)=>{})
      /*let r = fetch('http://127.0.0.1:3000/')
      r.then((Response)=>{
          Response.text().then((data)=>console.log(data))
      })*/
      this.state.nowuser = user.id
      request({name:'commit',id:user.id,pwd:user.pwd}).then((res)=>{
        context.commit('userCon',res.data)
      }).catch(error => console.log(error))
    },
    userRegister(context,user){
      request({name:'logon',id:user.id,pwd:user.pwd}).then((res)=>{
        context.commit('userReg',res.data)
      }).catch(error => console.log(error))
    },
    initTodoData(context){

      request({name:'initdata',id:this.state.nowuser}).then((res)=>{
        context.commit('initTodoData',res.data[0].data)
      }).catch(error => console.log(error))
    },
    uptodo(context){
      request({name:'updatedata',id:this.state.nowuser,list:this.state.todos}).then((res)=>{
        context.commit('uptodo',res.data)
      }).catch(error => console.log(error))
    }
  },
  getters: {
    todo:(state)=>{
      return state.todos.map((item)=>{return item.name})
    }
  }

})




export const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0 }),
  getters: {
    double: state => state.count * 2,
  },
  actions: {
    increment() {
      this.count++
    },
  },
})
