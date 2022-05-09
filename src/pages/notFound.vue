<template>
  <div class="notf">
      <p>{{$route.params.pathMatch[0]}}不存在</p><br>
      <p>请不要乱输地址</p><br>
      <p>404 not found</p>  
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