
<template>
  <div class="cont">
      
      <div v-for="(item,index) in purl" :key="index" class="pic" >
            <div>
                <img :src="item">
            </div>
      </div>
     
      <div class="conth">

      </div>
  </div>
</template>

<script>

export default {

    components:{
        
    },
    data(){
        return{
            picnum:20
        }
    },
    setup(){

    },
    computed:{
        purl(){
            let list = []
            for(let i = 1 ; i <= this.picnum ; i ++){
                if(i<10){
                    list.push(require('../assets/imgs/'+'0'+i+'.jpg'))
                }else{
                    list.push(require('../assets/imgs/'+i+'.jpg'))
                }
            }
            return list
        }
    }
}
</script>

<style scoped>
.cont{
    width: 100%;
    height: 900px;
    display: flex;
    flex-direction:column;
    flex-wrap: wrap;
    justify-content:flex-start;
    align-items: flex-start;
    align-content: center;
    overflow: hidden;
}
.conth{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: bisque;
    opacity: 0.8;
    visibility: hidden;
}
.pic{
    height: auto;
    flex-grow: 1;
    text-align: center;
    margin-left: 2px;
}

img{
    width: 200px;
    border-radius: 5px;
    object-fit: contain;
}
.pic:hover +.conth{
    visibility: visible;
}
.pic:hover img{
    width: 400px;
}
</style>