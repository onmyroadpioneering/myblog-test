<template>
<div id="box">
			<img src="../../assets/shm.png" />
			<img src="../../assets/shm.png" />
			<img src="../../assets/sbx.png" />
			<img src="../../assets/sbx.png" />
			<img src="../../assets/sbx.png" />
			<img src="../../assets/sbx.png" />
		</div>
</template>
<script>
export default{

    mounted(){
		var oWrap = document.getElementById('box');
		var oImg = oWrap.children;
		var le = 1500 / oImg.length;
		for (var i = 0; i < oImg.length; i++) {
			oImg[i].style.left = '' + le * i + 'px';
			oImg[i].style.top = '' + le * i + 'px';
		}
			setInterval(function() {
				for (var i = 0; i < oImg.length; i++) {
					if(oImg[i].style.top=='0px'){
						oImg[i].style.top = 600 + "px";
						
					}
					else{
						oImg[i].style.top = oImg[i].offsetTop + -1 + "px";
					}
				}
			}, 10);
		}
    }
		
	</script>
<style type="text/css">
			#box {
				width: 25px;
				height: 90px;
				/*margin: 100px auto;*/
				position: absolute;
				top: 0;
				left: 0;
			}

			#box img {
				position: absolute;
				top: 0;
				left: 0;
				
				height: 100%;
				border-radius: 3px;
			}
			#box img:hover{
				background-color: coral;
			}
		</style>
		
	