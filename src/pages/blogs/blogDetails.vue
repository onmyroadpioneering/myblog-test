<template>  
    <div>
        {{title}}
        ----{{contents}}
    </div>


</template>

<script>
export default {
    data(){
        return{
            title:'',
            contents:''
        }
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