<template>
  <div>
      <img :src="url" alt="">
  </div>
</template>

<script>
export default {
    name:'VuePic',
    props:{
        nurl:String
    },
    setup(props){
        const url ="../src/assets/imgs/"+props.nurl+'.jpg'
        return{
            url
        }
    }
}
</script>

<style>

</style>