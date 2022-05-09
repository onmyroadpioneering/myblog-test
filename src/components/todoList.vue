<template>
  <div>
      {{item}}<button @click="deleteTodo(item)">x</button>
  </div>
</template>

<script>
export default {
    props:{
        item:String
    },
    methods:{
        deleteTode(i){
            console.log(i)
            this.$store.dispatch('deleteTodo',{item:i})
        }
    }
}
</script>

<style>

</style>