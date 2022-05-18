import { createStore } from 'vuex'
import request from '../api/request'
//import { router } from '@/route/router'


export default createStore({
  state: {
    isAuthenticated: false,
    nowuser: 'ty',
    islog:false,
    uptodo: false,
    blog: [

    ],
    todos: [

    ],
  },
  mutations: {
    deleteTodo(state, item) {
      state.todos = state.todos.filter((value) => {
        if (value.name === item) {
          return false
        } else {
          return true
        }
      })
    },
    updateTodo(state, item) {
      //console.log(item)

      state.todos.forEach((value, index, array) => {
        if (value.name === item.past) {
          //console.log(index,item.value)
          array.splice(index, 1, item.value)
        }
      })
    },
    userCon(state, f) {

      try {
        if (f == true) {
          
          this.dispatch('initBlog')
      
          this.dispatch('initTodoData')
        } else {
          state.lever = false
          alert('登录失败')
        }
      } catch (error) {
        console.log(error)
        alert('请输入账号密码')
      }
    },
    userReg(state, f) {
      try {
        if (f == true) {
          alert('注册成功')
        } else {
          alert('注册失败')
        }
      } catch (error) {
        alert('ERROR')
      }
    },
    initTodoData(state, f) {
      state.todos = f
    },
    initBlog(state, f) {
      state.blog=f.blog
    },
    uptodo(state, f) {
      return f
    },
    upblog(state, f){
      return f
    },
    logout(state, f){
      return f
      //router.push('/')
    },
    userlog(state){
      state.islog = true
    }

  },
  actions: {
    async deleteTodo(context, item) {
      await this.commit('deleteTodo', item)
    }
    ,
    async updateTodo(context, item) {
      //console.log(item)
      await this.commit('updateTodo', item)

    },
    userConfirm(context, user) {
      //fetch(url,{
      //    method:'POST',
      //    body:user,
      //}).then((response)=>{})
      /*let r = fetch('http://127.0.0.1:3000/')
      r.then((Response)=>{
          Response.text().then((data)=>console.log(data))
      })*/

      request({ name: 'commit', id: user.id, pwd: user.pwd }).then((res) => {
        if (res.data) {
          this.state.nowuser = user.id
          localStorage.setItem('user', user.id)
        }
        context.commit('userCon', res.data)
      }).catch(error => console.log(error))
    },
    userRegister(context, user) {
      request({ name: 'logon', id: user.id, pwd: user.pwd }).then((res) => {
        context.commit('userReg', res.data)
      }).catch(error => console.log(error))
    },
    initTodoData(context) {
      request({ name: 'initdata', id: this.state.nowuser }).then((res) => {
        context.commit('initTodoData', res.data[0].data)
      }).catch(error => console.log(error))
    },
    initBlog(context) {
      request({ name: 'initblog', id: this.state.nowuser }).then((res) => {
        context.commit('initBlog', res.data[0])

      }).catch(error => console.log(error))
    },
    uptodo(context) {
      request({ name: 'updatedata', id: this.state.nowuser, list: this.state.todos }).then((res) => {
        context.commit('uptodo', res.data)
      }).catch(error => console.log(error))
    },
    updateblog(context){
      request({ name: 'updateblog', id: this.state.nowuser, list: this.state.blog}).then((res) => {
        context.commit('upblog', res.data)
      }).catch(error => console.log(error))
    },
    logout(context){
      this.state.nowuser=''
      this.state.uptodo=false
      this.state.blog=[]
       this.state.todos= []
       let a = true
       context.commit('logout',a)
    },
    userlog(context){
      context.commit('userlog')
    }
  },
  getters: {
    todo: (state) => {
      return state.todos.map((item) => { return item.name })
    }
  }

})