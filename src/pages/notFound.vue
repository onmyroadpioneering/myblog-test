<template>
  <div class="notf">
      <p>{{$route.params.pathMatch[0]}} not found</p><br> 
  </div>
</template>

<script>

export default {
    setup(){
        
    }
}
</script>

<style scoped>
  .notf{
    top: 50%;
    left: 50%;
    transform: translate(40%,50%);
  }
  p{
    font-size: large;
     color: rgb(255, 0, 0);;
  }
</style>