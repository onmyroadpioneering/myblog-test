import { defineStore } from 'pinia'
import { createStore } from 'vuex'
import request from '../api/request'
export default createStore({
  state:{
    isAuthenticated: false,
    nowuser:'',
    uptodo:false,
    blog:[
      {name:'个人信息',msg:'姓名：滕岩 年龄：22 毕业时间：2021   应聘方向：前端 --社招/校招'},
      {name:'联系方式：',msg:'tel-17860513209 email-1365440346@qq.com'},
      {name:'学校及专业：',msg:'山东财经大学 计算机科学与技术专业'},
      
      {name:'个人技能',msg:'熟悉HTML5新特性 熟悉CSS3 熟悉JavaScript es6新特性 熟悉Vue.js vue-cli vue-router vuex '},
      {name:'个人技能',msg:'熟悉Ajax，axios 了解typescript 了解webpack 了解node.js 了解Express框架'},
      
      {name:'工作经历',msg:'浪潮通用软件有限公司 2021.3-2021.6 前端开发 学习前端相关知识:在学校学习的基础进一步学习了javascript，学习了angular,vue框架。'},
      {name:'主要工作:',msg:'大屏展示图表部件效果实现，实现大屏中的页面效果。'},
      
      {name:'项目经验',msg:'学校相关课程设计：基于python的就业资讯查询及推送系统  '},
      {name:'浪潮通用软件有限公司：',msg:'2021.3-2021.6 江苏国资委国资国企在线监管项目'},
      {name:'*',msg:'出差南京项目现场，与实施沟通需求并使用css,js实现页面需要的样式及功能，'},
      {name:'*',msg:'使用echarts等js图表库实现需要的图表部件。根据需要使用css的自定义动画、使用canvas实现页面动画效果等。'},
      {name:'个人练习项目',msg:'在线社交平台'},
      {name:'*',msg:'使用vue-cli实现项目框架，分离可复用的组件和按用户身份的页面，使用vue-router实现路由导航和路由守卫。'},
      {name:'*',msg:'使用axios与后端服务器交互，使用node.js,express框架搭建服务器，处理前端请求。使用MySQL存储用户信息。'},
      
      {name:'自我评价',msg:'本人积极好学，有良好的学习能力，能够快速学习新技术并实践。'},
      {name:'*',msg:'对待工作认真负责，有责任心。愿意自我驱动，敢于接受挑战。愿意尝试新鲜事物，不断学习提高自己。'},
    
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
