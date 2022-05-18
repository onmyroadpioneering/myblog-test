<template>

    <div style="height:500px ;width:500px">
        <canvas id="boxc"  width="500" height="500"></canvas>
    </div>
</template>
	<script>
export default {

    mounted() {
        const canvas = document.getElementById("boxc")
        const ctx = canvas.getContext("2d")
        /*
        function drawball(){
            for(var i=0;i<500;i=i+25){
                for(var j=0;j<500;j=j+25){
                    createball(i,j)
                }
            }
            var imgData=ctx.getImageData(0,0,5,5);
            console.log(imgData);
        }
        function createball(x, y) {
            //ctx.translate(x,y)
            ctx.beginPath();
            ctx.strokeStyle = "rgba(255,255,0,0.5)";
            ctx.arc(x, y, 5, 0, 2 * Math.PI)
            ctx.fillStyle = "rgba(255,255,0,0.5)"
            ctx.fill()
            ctx.stroke()
        }*/
        /*
        function ballposition() {

        }*/
        function draw() {
            ctx.clearRect(0,0, 500, 500); //清空所有的内容
            /*绘制 太阳*/
            ctx.save();
            ctx.translate(200, 200);
            ctx.fill()
            //绘制earth轨道
            ctx.beginPath();
            ctx.strokeStyle = "rgba(255,255,0,0.5)";
            ctx.arc(0, 0, 50, 0, 2 * Math.PI)
            ctx.fillStyle = "rgba(255,255,0,0.5)"
            ctx.fill()
            ctx.stroke()

            let time = new Date();
            //绘制地球
            ctx.rotate(2 * Math.PI / 60 * time.getSeconds() + 2 * Math.PI / 60000 * time.getMilliseconds())
            ctx.translate(100, 0)

            //绘制月球轨道
            ctx.beginPath();
            ctx.strokeStyle = "rgba(0, 170, 255, 0.3)";
            ctx.arc(0, 0, 40, 0, 2 * Math.PI);
            ctx.fillStyle = "rgba(0, 255, 255, 0.3)"


            ctx.fill()
            ctx.stroke();
            //绘制月球
            ctx.rotate(2 * Math.PI / 6 * time.getSeconds() + 2 * Math.PI / 6000 * time.getMilliseconds());
            ctx.translate(40, 0);
            ctx.restore();
            requestAnimationFrame(draw);
        }
        draw()
    }
}

</script>