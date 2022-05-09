<template>
    <div class="con">
        <div class="left"><ready-test></ready-test></div>
        <div class="center">
            <ul v-for="(item,index) in msgs" :key="index">
                <li>{{item.name}}--{{item.msg}}</li>
            </ul>
        </div>
        <div class="right"><ready-test></ready-test></div>
    </div>
</template>

<script>
import readyTest from '../components/readyTest.vue'
export default {
    components:{
        readyTest
    },
    setup(){
        return{
         
        }
    },
    data(){
        return{
            msgs:[]
        }
    },
    mounted(){
        this.msgs=this.$store.state.blog
    }
}
</script>

<style scoped>
    .con{
        width: 100%;
        height: 100%;
        margin-bottom: 50px;
        
    }
    .left{
        width: 20%;
        display: inline-block;
        box-shadow: 0px,0px,2px,2px,rgb(231, 3, 45);
    }
    .center{
        width: 60%;
        display: inline-block;
        box-sizing:border-box;
        /*border-left: 1px solid rgb(203, 207, 206);
        border-right: 1px solid rgb(203, 207, 206);*/
        box-shadow: 2px,2px,2px,2px,rgb(243, 6, 6);
        background-color: rgba(18, 101, 76, 0.2);
        backdrop-filter: blur(2px);
        border-radius: 2px;
    }
    .right{
        display: inline-block;
        width: 20%;
        box-shadow: 2px,2px,2px,2px,rgb(243, 6, 6);
    }
    ul{
        list-style: none;
    }
    li{
        font-size: 20px;
        color: rgb(255, 255, 255);
    }
</style>