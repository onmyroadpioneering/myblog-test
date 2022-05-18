<template>
<div class="bod">
		<div class="can">
			<canvas id="mycanvas"></canvas>
		</div>
</div>        
</template>
<script>
export default{


    mounted(){
            const canvas = document.getElementById('mycanvas');
			const ctx = canvas.getContext('2d');
			//var imgball = new Image(); // 创建img元素
			//imgball.src = './img/Canvas_earth.png';
			function ball(x, y) {
				this.x = x;
				this.y = y;
				this.angle = 0;
                this.color = 'rgba(0, 0, 0, 1.0)'
				this.draw = function() {
					ctx.beginPath();
					ctx.fillStyle = this.color;
					//ctx.drawImage(obj, self.x, self.y);
					ctx.arc(this.x, this.y, 10, 0, 2 * Math.PI);
					ctx.fill();
				}
			}

			const ball01 = new ball(167, 100);

			function draw() {
				ctx.clearRect(0, 0, canvas.width, canvas.height);
				if (ball01.angle == 360) {
					ball01.angle = 0;
				}
                if (ball01.angle >100&&ball01.angle<200){
                    ball01.color = 'rgba(0, 0, 255, 1.0)'
                }
                if (ball01.angle <100&&ball01.angle>0){
                    ball01.color = 'rgba(0, 255, 0, 1.0)'
                }
                if (ball01.angle <360&&ball01.angle>200){
                    ball01.color = 'rgba(255, 0, 0, 1.0)'
                }
				ball01.angle += 1; //角度
				const radian = ball01.angle * (Math.PI / 180); //弧度
				const nx = (180 + 100 * Math.cos(radian)) - 24 / 2;
				const ny = (90 + 25 * Math.sin(radian)) - 24 / 2;
				ball01.x = nx * Math.cos(-1 / 6 * Math.PI) - ny * Math.sin(-1 / 6 * Math.PI) - 50;
				ball01.y = nx * Math.sin(-1 / 6 * Math.PI) + ny * Math.cos(-1 / 6 * Math.PI) + 80;
				ball01.draw();

				window.requestAnimationFrame(draw);
			}
			draw();
    }
}
			
		</script>

<style scoped>
			.bod {
				width: 500px;
				height: 500px;
			}
			
			.can {
				position: absolute;
				width: 300px;
				height: 300px;
				top: 120px;
				left: 20px;
				transform: rotate(90deg);
				z-index: 13;
			}

			#mycanvas {
				position: absolute;
				top: 0px;
				left: 0px;
			}
</style>