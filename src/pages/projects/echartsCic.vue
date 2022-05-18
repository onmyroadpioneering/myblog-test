<template>
  <div id="proj">
    <div>
      <div id="main" style="width: 80%; height: 500px"></div>
    </div>
    
  </div>
</template>

<script>
//import transDemo from "./transDemo.vue";
import * as echarts from "echarts";

export default {
  data() {
    return {
      id: "",
    };
  },
  components:{
   /* transDemo,
   <div v-if="this.id=='2'">
        <transDemo></transDemo>
    </div>
   */

},  
  mounted() {
    this.id = this.$route.query.id;
    let dataStyle = {
      normal: {
        label: { show: false },
        labelLine: { show: false },
      },
    };
    let placeHolderStyle = {
      normal: {
        color: "rgba(57, 86, 89, 0.0)",
        label: { show: true },
        labelLine: { show: true },
      },
      emphasis: {
        color: "rgba(63, 91, 87, 0.0)",
      },
    };

    let option = {
      title: {},
      tooltip: {
        show: true,
        formatter: "{a} <br/>{b} : {c} ({d}%)",
      },
      legend: {
        padding: [55, 0, 0, 20],
        orient: "vertical",
        x: document.getElementById("main").offsetWidth / 2,
        y: 45,
        itemGap: 12,
        data: [
          "68%的人表示过的不错",
          "29%的人表示生活压力很大",
          "3%的人表示“我姓曾”",
          "52%的人过的不错",
          "44%的人表示压力很大",
          "36%的人表示“我姓曾”",
        ],
      },
      toolbox: {
        show: true,
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          restore: { show: true },
          saveAsImage: { show: true },
        },
      },

      series: [
        {
          name: "1",
          type: "pie",
          roundCap: true,
          clockWise: false,
          radius: [130, 150],
          itemStyle: dataStyle,
          data: [
            {
              value: 68,
              name: "68%的人表示过的不错",
            },
            {
              value: 32,
              name: "invisible",
              itemStyle: placeHolderStyle,
            },
          ],
        },
        {
          name: "2",
          type: "pie",
          roundCap: true,
          clockWise: false,
          radius: [105, 125],
          itemStyle: dataStyle,
          data: [
            {
              value: 29,
              name: "29%的人表示生活压力很大",
            },
            {
              value: 71,
              name: "invisible",
              itemStyle: placeHolderStyle,
            },
          ],
        },
        {
          name: "3",
          type: "pie",
          roundCap: true,
          clockWise: false,
          radius: [80, 100],
          itemStyle: dataStyle,
          data: [
            {
              value: 3,
              name: "3%的人表示“我姓曾”",
            },
            {
              value: 97,
              name: "invisible",
              itemStyle: placeHolderStyle,
            },
          ],
        },
        {
          name: "4",
          type: "pie",
          roundCap: true,
          clockWise: false,
          radius: [55, 75],
          itemStyle: dataStyle,
          data: [
            {
              value: 52,
              name: "52%的人过的不错",
            },
            {
              value: 48,
              name: "invisible",
              itemStyle: placeHolderStyle,
            },
          ],
        },
        {
          name: "5",
          type: "pie",
          roundCap: true,
          clockWise: false,
          radius: [30, 50],
          itemStyle: dataStyle,
          data: [
            {
              value: 44,
              name: "44%的人表示压力很大",
            },
            {
              value: 56,
              name: "invisible",
              itemStyle: placeHolderStyle,
            },
          ],
        },
        {
          name: "6",
          type: "pie",
          roundCap: true,
          clockWise: false,
          radius: [5, 25],
          itemStyle: dataStyle,
          data: [
            {
              value: 36,
              name: "36%的人表示“我姓曾”",
            },
            {
              value: 64,
              name: "invisible",
              itemStyle: placeHolderStyle,
            },
          ],
        },
      ],
    };
    var myChart = echarts.init(document.getElementById("main"));
    myChart.setOption(option);
  },
  beforeRouteEnter() {
    /*
        console.log(to)
        if(to.query.id){
            this.id = to.query.id
        }
        */
  },
};
</script>

<style scoped>
#proj{
  position: relative;
  background-color: rgba(156, 195, 195, 0.4);
  backdrop-filter: blur(10px);
  width: 80%;
  left: 10%;
  right: 10%;
  border-radius: 13px;
}
</style>