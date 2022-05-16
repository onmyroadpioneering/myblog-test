import NotFound from '../pages/notFound'
import {createRouter , createWebHashHistory } from 'vue-router'
import myBlog from '../pages/myBlog'
import myProject from'../pages/myProject'
import mainPage from '../pages/mainPage'
import myTest from '../pages/myTest'
import myTodos from '../pages/myTodos'
import todoDetails from '../pages/todoDetails'
import store from '@/store'
import logIN from '../pages/login'
import echartsCic from '../pages/projects/echartsCic'
import blogDetails from '../pages/blogs/blogDetails'
import ownBlog from '../pages/blogs/ownBlog'
import addBlog from '../pages/blogs/addBlog'
const routes = [

    { path: '/',name:'main',meta:{title:'主页'}, component: mainPage ,children:[
        { path: '/myblogs', name:'myblogs',meta:{title:'博客'},component: ()=>myBlog ,children:[
            {path:'blogdetails',name:'blogdetails',component:()=>blogDetails,beforeEnter: (to, from, next) => {
                // ...
                if(store.state.nowuser){
                    console.log(from,to)
                    next({name:'ownBlog',query:{id:to.query.id,index:to.query.index}})}else{next()}
            }},
            {path:'ownblog',name:'ownBlog',component:()=>ownBlog,beforeEnter: (to, from, next) => {
                // ...
                if(store.state.nowuser){next()}else{next({name:'blogdetails',query:{id:to.query.id}})}
            }
            },
            {path:'addblog',name:'addblog',component:addBlog},
        ]},
        { path: '/myprojects', name:'myprojects',meta:{title:'项目'},component: ()=>myProject,children:[
            {path:'echartscic',name:'echartscic',component:()=>echartsCic}
        ]},
        { path: '/mytest', name:'mytest',meta:{title:'测试'},component: ()=>myTest },
        { path: '/login', name:'login',meta:{title:'登录'},component: logIN },
        { path: '/mytodos', name:'mytodos',meta:{title:'任务'},component: ()=>myTodos ,children:[
            {path:'tododetails',name:'tododetails',component:todoDetails,props($route){
                return{
                    id:$route.query.id
                }
            }}
        ]},
    ]},

    // 将匹配所有内容并将其放在 `$route.params.pathMatch` 下
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
    // 将匹配以 `/user-` 开头的所有内容，并将其放在 `$route.params.afterUser` 下

    
]



export const router = createRouter({
    history: createWebHashHistory(),
    routes
})
router.beforeEach((to,from,next) => {
    if(from.name=='mytodos'&&to.name!='mytodos'&&store.state.todos.length!=0&&to.name!='tododetails'&&store.state.uptodo){
        store.dispatch('uptodo')
        next()
    }
    else if (!store.state.isAuthenticated&&to.name!='main'){
        next({name:'main'})
    }else{
        next()
    }
  })

