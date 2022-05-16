<template>
    <div>
        <input type="text" v-model="title">

        <textarea  v-model="content" style="border:0;border-radius:5px;background-color:rgba(255, 249, 240, 0);width: 100%;height: 50%;padding: 10px;resize: none;border-style: none;outline: none;font-size:20px;"></textarea>

        <button @click="saveblog">save</button>
    </div>
</template>
<script>
export default{
    data(){
        return{
            title:'',
            content:'',
        }
    },
    methods: {
        saveblog(){
            this.$store.state.blog.push({title:this.title,content:this.content,comment:[{username:'ty',commentcontent:'ty',agree:0,disagree:0}]})
            this.$store.dispatch('updateblog')
        }
    },
}

</script>

<style scoped>

</style>