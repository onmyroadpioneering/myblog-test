<template>  
    <div>
        <input type="text" v-model="title">
        <textarea v-model="contents"></textarea>
    </div>
    <userComment></userComment>

</template>

<script>
import userComment from "@/components/userComment.vue"
export default {
    data(){
        return{
            title:'',
            contents:''
        }
    },
    components:{
        userComment
    },
    mounted(){
        this.title = this.$route.query.id
        let a = this.$store.state.blog.find((item)=>item.title == this.$route.query.id)
        if(a){
            this.contents = a.content[0]
        }else{
            this.contents = ''
        }
        
    },
}

</script>

<style>


</style>