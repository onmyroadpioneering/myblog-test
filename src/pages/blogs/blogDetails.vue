<template>  
    <div>
        <input v-model="title">
        <textarea v-model="contents" style="border:0;border-radius:5px;background-color:rgba(255, 249, 240, 0);width: 100%;height: 50%;padding: 10px;resize: none;border-style: none;outline: none;font-size:20px;"></textarea>
    </div>
    <addComment></addComment>


</template>

<script>
import addComment from "../../components/addComment.vue"
export default {
    data(){
        return{
            title:'',
            contents:'',
            index:0
        }
    },
    components:{
        addComment
    },

    mounted(){
        this.title = this.$route.query.id
        this.index = this.$route.query.index
        let a = this.$store.state.blog.find((item)=>item.title == this.$route.query.id)
        console.log(a)
        if(a){
            this.contents = a.content
        }else{
            this.contents = ''
        }
        
    },
    methods: {
        
    },
}

</script>

<style>


</style>