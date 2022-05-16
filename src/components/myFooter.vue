<template>
  <div>

    <div id="light">

    <svg @click="changeblack" t="1652673777485" 
      class="icon" viewBox="0 0 1024 1024" 
      version="1.1" xmlns="http://www.w3.org/2000/svg" 
      p-id="2987" width="30" height="30"><path d="M512 232c15.5 0 28-12.5 28-28V92c0-15.5-12.5-28-28-28s-28 12.5-28 28v112c0 15.5 12.5 28 28 28zM512 792c-15.5 0-28 12.5-28 28v112c0 15.5 12.5 28 28 28s28-12.5 28-28V820c0-15.5-12.5-28-28-28zM932 484H820c-15.5 0-28 12.5-28 28s12.5 28 28 28h112c15.5 0 28-12.5 28-28s-12.5-28-28-28zM232 512c0-15.5-12.5-28-28-28H92c-15.5 0-28 12.5-28 28s12.5 28 28 28h112c15.5 0 28-12.5 28-28zM274.4 314c10.9 10.9 28.7 10.9 39.6 0 10.9-10.9 10.9-28.7 0-39.6l-79.2-79.2c-10.9-10.9-28.7-10.9-39.6 0s-10.9 28.7 0 39.6l79.2 79.2zM749.6 710c-10.9-10.9-28.7-10.9-39.6 0s-10.9 28.7 0 39.6l79.2 79.2c10.9 10.9 28.7 10.9 39.6 0 10.9-10.9 10.9-28.7 0-39.6L749.6 710zM749.6 314l79.2-79.2c10.9-10.9 10.9-28.7 0-39.6s-28.7-10.9-39.6 0L710 274.4c-10.9 10.9-10.9 28.7 0 39.6 10.9 10.9 28.7 10.9 39.6 0zM274.4 710l-79.2 79.2c-10.9 10.9-10.9 28.7 0 39.6 10.9 10.9 28.7 10.9 39.6 0l79.2-79.2c10.9-10.9 10.9-28.7 0-39.6s-28.7-10.9-39.6 0zM512 288c-123.7 0-224 100.3-224 224s100.3 224 224 224 224-100.3 224-224-100.3-224-224-224z m0 392c-92.6 0-168-75.4-168-168s75.4-168 168-168 168 75.4 168 168-75.4 168-168 168z" p-id="2988"></path></svg>
    </div>
    <div id="github">
    <a href="https://github.com/tenyarn/myblog-test" > 
      <svg 
        t="1652159440831"
        class="icon" 
        viewBox="0 0 1024 1024" 
        version="1.1" xmlns="http://www.w3.org/2000/svg" 
        p-id="2245" width="30" height="30"
      >
        <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9 23.5 23.2 38.1 55.4 38.1 91v112.5c0.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" p-id="2246">
        </path>
      </svg>
    </a>
    </div>

  </div>
</template>

<script>

export default {
    components:{
    },
    methods: {
      changeblack(){
        console.log('black')
      }
    },
}
</script>

<style scoped>
    div{
        text-align: center;
        margin-top: 50px;
    }
    svg{
      margin-left:10px;
    }
    #light{
      display: inline-block;
      width: 30px;
      height: 30px;
      margin-left:10px;
    }
    #light :hover{
      animation: mymove 5s infinite linear;
    }
    #github{
      display: inline-block;
      width: 30px;
      height: 30px;
      margin-left:10px;
    }
    @-webkit-keyframes mymove {
				from {
					transform: rotate(360deg);
				}

				to {
					transform: rotate(0deg);
				}
			}

    @font-face {
  font-family: 'iconfont';  /* project id 3389654 */

  src: url('?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_3389654_5kta6rthyz3.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_3389654_5kta6rthyz3.woff') format('woff'),
  url('//at.alicdn.com/t/font_3389654_5kta6rthyz3.ttf') format('truetype'),
  url('#iconfont') format('svg');
}

</style>