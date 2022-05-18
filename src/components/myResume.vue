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
                <h4>熟练掌握JavaScript es6+</h4>
                <h4>熟练掌握Vue全家桶并对其实现原理有一定了解</h4>
                <h4>熟悉antdesign,elementui等主流ui组件库进行快速开发</h4>
                <h4>熟悉node 能够使用Express框架进行开发,了解中间件的使用</h4>
                <h4>熟悉typescript提高代码开发效率及规范性</h4>
                <h4>熟悉echarts等数据可视化工具，有图表组件开发经历</h4>
                <hr>
                <h2>项目经验 </h2>
                <h4>--学校相关课程设计：基于python的就业资讯查询及推送系统 </h4>
                <h4>--浪潮通用软件有限公司： 江苏国资委国资国企在线监管项目</h4>
                <h4>主要技术栈：jquery + echarts.js + css</h4>
                <h4>按设计稿开发静态页面。</h4>
                <h4>开发echarts图表组件：按设计稿和后端数据格式，处理数据，生成echarts图表。</h4>
                <h4>页面效果组件：使用css，js，canvas实现动画效果</h4>
                <h4>--个人网站</h4>
                <h4>主要技术栈：vue+node+mongodb</h4>
                <h4>使用vue相关技术实现前端页面</h4>
                <h4>使用vuex做状态管理，后端数据注入store驱动页面数据的变化。</h4>
                <h4>使用express框架完成后端连接数据库，数据处理的任务。</h4>
                <hr>
                <h2>工作经历 </h2>
                <h4>浪潮通用软件有限公司 2021.3-2021.6 前端开发实习 </h4>
                <h4>主要工作: 与实施方沟通需求，开发大屏中静态页面，动态效果，图表部件。</h4>
                <hr>
                <h2>自我评价</h2>
                <h4> 本人积极好学，有良好的学习能力，能够快速学习新技术并实践</h4>
                <h4> 对待工作认真负责，有责任心。愿意自我驱动，敢于接受挑战。</h4>
                <h4>愿意尝试新鲜事物，不断学习提高自己</h4>
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