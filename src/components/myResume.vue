<template>

    <div class="con">
        <div class="left">
            <ready-test></ready-test>
        </div>
        <div class="center">
            <div id="texta">
                <h2>个人信息:</h2>
                <h4>姓名：滕岩 年龄：22 </h4>
                <h4>联系方式：tel-17860513209 email-1365440346@qq.com</h4>
                <h4>学校及专业： 山东财经大学 计算机科学与技术专业</h4>
                <hr>
                <h2>个人技能 </h2>
                <h4>熟悉HTML5新特性 熟悉CSS3 熟悉JavaScrih4t es6新特性 熟悉Vue.js vue-cli vue-router vuex </h4>
                <h4> 熟悉Ajax，axios 了解tyh4escrih4t 了解webh4ack 了解node.js 了解Exh4ress框架</h4>
                <hr>
                <h2>项目经验 </h2>
                <h4>学校相关课程设计：基于h4ython的就业资讯查询及推送系统 </h4>
                <h4>浪潮通用软件有限公司： 2021.3-2021.6 江苏国资委国资国企在线监管项目</h4>
                <h4> 出差南京项目现场，与实施沟通需求并使用css,js实现页面需要的样式及功能</h4>
                <h4> 使用echarts等js图表库实现需要的图表部件。根据需要使用css的自定义动画、使用canvas实现页面动画效果等</h4>
                <h4>个人练习项目 在线社交平台'},</h4>
                <h4> 使用vue-cli实现项目框架，分离可复用的组件和按用户身份的页面，使用vue-router实现路由导航和路由守卫</h4>
                <h4> 使用axios与后端服务器交互，使用node.js,exh4ress框架搭建服务器，处理前端请求。使用MySQL存储用户信息</h4>
                <hr>
                <h2>工作经历 </h2>
                <h4>浪潮通用软件有限公司 2021.3-2021.6 前端开发 学习前端相关知识:在学校学习的基础进一步学习了javascrih4t，学习了angular,vue框架</h4>
                <h4>主要工作: 大屏展示图表部件效果实现，实现大屏中的页面效果</h4>
                <hr>
                <h2>自我评价</h2>
                <h4> 本人积极好学，有良好的学习能力，能够快速学习新技术并实践</h4>
                <h4> 对待工作认真负责，有责任心。愿意自我驱动，敢于接受挑战。愿意尝试新鲜事物，不断学习提高自己</h4>
            </div>




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
    display: flex;
}

#texta {
    margin-left: 20px;
    font-size: 20px;
}

.left {
    width: 10%;
    display: inline-block;
    box-shadow: 0px, 0px, 2px, 2px, rgb(231, 3, 45);
}

.center {
    width: 1000px;
    display: inline-block;
    box-sizing: border-box;
    /*border-left: 1h4x solid rgb(203, 207, 206);
        border-right: 1h4x solid rgb(203, 207, 206);*/
    box-shadow: 2px, 2px, 2px, 2px, rgb(243, 6, 6);
    background-color: rgba(219, 210, 210, 0.2);
    backdrop-filter: blur(2px);
    border-radius: 10px;
    font-size: medium;
}

.right {
    display: inline-block;
    width: 10%;
    box-shadow: 2px, 2px, 2px, 2px, rgb(243, 6, 6);
}

ul {
    list-style: none;
}

li {
    font-size: 20h4x;
    color: rgb(255, 255, 255);
}

hr {
    border: 0h4x;
}
</style>