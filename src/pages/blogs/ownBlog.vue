<template>  
    <div style="height: 500px;">
        <input type="text" v-model="title">
        <textarea v-model="contents" style="border:0;border-radius:5px;background-color:rgba(255, 249, 240, 0);width: 100%;height: 100%;padding: 10px;resize: none;border-style: none;outline: none;font-size:10px;"></textarea>
    </div>
    <button @click="saveblog">save</button>
    <userComment></userComment>

</template>

<script>
import userComment from "@/components/userComment.vue"
export default {
    data(){
        return{
            title:'',
            contents:'',
            index:0,
        }
    },
    components:{
        userComment
    },
    mounted(){
        this.title = this.$route.query.id
        this.index = this.$route.query.index
        let a = this.$store.state.blog.find((item)=>item.title == this.$route.query.id)
        if(a){
            this.contents = a.content
        }else{
            this.contents = ''
        }
        
    },
    methods: {
        async saveblog(){
            let a = {title:this.title,content:this.contents,comment:[{username:'ty',commentcontent:'ty',agree:0,disagree:0}]}
            await this.$store.state.blog.splice(+this.$route.query.index,1,a)
            await this.$store.dispatch('updateblog')
        }
    },
}

</script>

<style>


</style>