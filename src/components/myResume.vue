<template>

    <div class="con">
        <div class="left">
            <ready-test></ready-test>
        </div>
        <div class="center">

            <p>个人信息:姓名：滕岩 年龄：22 毕业时间：2021 应聘方向：前端 --社招/校招</p>
            <p>姓名：滕岩 年龄：22 毕业时间：2021 应聘方向：前端 --社招/校招</p>
            <p>联系方式：tel-17860513209 email-1365440346@qq.com</p>
            <p>学校及专业： 山东财经大学 计算机科学与技术专业</p>

            <p>>个人技能 熟悉HTML5新特性 熟悉CSS3 熟悉JavaScript es6新特性 熟悉Vue.js vue-cli vue-router vuex </p>
            <p>个人技能 熟悉Ajax，axios 了解typescript 了解webpack 了解node.js 了解Express框架</p>

            <p>工作经历 浪潮通用软件有限公司 2021.3-2021.6 前端开发 学习前端相关知识:在学校学习的基础进一步学习了javascript，学习了angular,vue框架</p>
            <p>主要工作: 大屏展示图表部件效果实现，实现大屏中的页面效果</p>

            <p>项目经验 学校相关课程设计：基于python的就业资讯查询及推送系统 </p>
            <p>浪潮通用软件有限公司： 2021.3-2021.6 江苏国资委国资国企在线监管项目</p>
            <p> 出差南京项目现场，与实施沟通需求并使用css,js实现页面需要的样式及功能</p>
            <p> 使用echarts等js图表库实现需要的图表部件。根据需要使用css的自定义动画、使用canvas实现页面动画效果等</p>
            <p>个人练习项目 在线社交平台'},</p>
            <p> 使用vue-cli实现项目框架，分离可复用的组件和按用户身份的页面，使用vue-router实现路由导航和路由守卫</p>
            <p> 使用axios与后端服务器交互，使用node.js,express框架搭建服务器，处理前端请求。使用MySQL存储用户信息</p>

            <p>自我评价 本人积极好学，有良好的学习能力，能够快速学习新技术并实践</p>
            <p> 对待工作认真负责，有责任心。愿意自我驱动，敢于接受挑战。愿意尝试新鲜事物，不断学习提高自己</p>





        </div>
        <div class="right">
            <ready-test></ready-test>
        </div>
    </div>
</template>

<script>
import readyTest from '../components/readyTest.vue'
export default {
    components: {
        readyTest
    },
    setup() {
        return {

        }
    },
    data() {
        return {
            msgs: []
        }
    },
    mounted() {
        this.msgs = this.$store.state.blog

    }
}
</script>

<style scoped>
.con {
    width: 100%;
    height: 100%;
    margin-bottom: 50px;

}

.left {
    width: 20%;
    display: inline-block;
    box-shadow: 0px, 0px, 2px, 2px, rgb(231, 3, 45);
}

.center {
    width: 60%;
    display: inline-block;
    box-sizing: border-box;
    /*border-left: 1px solid rgb(203, 207, 206);
        border-right: 1px solid rgb(203, 207, 206);*/
    box-shadow: 2px, 2px, 2px, 2px, rgb(243, 6, 6);
    background-color: rgba(18, 101, 76, 0.2);
    backdrop-filter: blur(2px);
    border-radius: 10px;
}

.right {
    display: inline-block;
    width: 20%;
    box-shadow: 2px, 2px, 2px, 2px, rgb(243, 6, 6);
}

ul {
    list-style: none;
}

li {
    font-size: 20px;
    color: rgb(255, 255, 255);
}
</style>