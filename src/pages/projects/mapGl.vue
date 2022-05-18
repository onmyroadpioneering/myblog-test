<template>
<div id="maingl" style="width: 500px;height:500px;">

</div>
</template>
<script>
import * as echarts from "echarts";
import $ from 'jquery'
export default{
    data(){
        return{
          
        }
    },
    mounted(){
      let orgOptions = {keys:[{col:'fromcity'}],values:[{cols:[{col:'tocity'}]}]}
      var dom = document.getElementById('maingl')
      let data = [{fromcity:'济南',tocity:'天津'}]
      //console.log(JSON.stringify(orgOptions))
      // console.log(data);
      //*************************************************************
      //console.log(1)
      $.getJSON('country.json',function (res) {
        // console.log(res)
        var worldGeoData = res;
        echarts.registerMap('worldMap', worldGeoData);
        //*******************************************
        // 获取一个行字段
        function getRowName() {
          if (orgOptions.keys.length) {
            return orgOptions.keys[0].col;
          } else {
            return null;
          }
        }
        // 获取一个值字段
        function getValName() {
          if (orgOptions.values.length && orgOptions.values[0].cols.length) {
            return orgOptions.values.length && orgOptions.values[0].cols[0].col;
          } else {
            return null;
          }
        }
        // 获取echart的格式的数据
        function getEChartData() {
          var chartData = [];
          var rowName = getRowName();
          var valName = getValName();
          if (rowName && valName) {
            for (var i = 0, c = data.length; i < c; i++) {
              chartData.push({
                region: data[i][rowName],
                value: data[i][valName],
              });
            }
            return chartData;
          } else {
            return [];
          }
        }
        // 各个地区的坐标值,用来在地图上确定位置
        let geoCordMap = function (name) {
          var list = [
            { name: '济南', coord: [117.134748, 36.668256] },
            { name: '天津', coord: [117.208682, 39.101181] },
            { name: '北京', coord: [116.404184, 39.914578] },
            { name: '香港特别行政区', coord: [114.195466, 22.282751] },
            { name: '澳门特别行政区', coord: [113.5, 22, 2] },
            { name: '尼日利亚', coord: [-4.388361, 11.186148] },
            { name: '美国洛杉矶', coord: [-118.24311, 34.052713] },
            { name: '美国芝加哥', coord: [-87.801833, 41.870975] },
            { name: '加纳库马西', coord: [-4.62829, 7.72415] },
            { name: '英国曼彻斯特', coord: [-1.657222, 51.886863] },
            { name: '德国汉堡', coord: [10.01959, 54.38474] },
            { name: '哈萨克斯坦阿拉木图', coord: [45.326912, 41.101891] },
            { name: '俄罗斯伊尔库茨克', coord: [89.116876, 67.757906] },
            { name: '西班牙巴塞罗纳', coord: [2.175129, 41.385064] },
            { name: '柬埔寨金边', coord: [104.88659, 11.545469] },
            { name: '意大利米兰', coord: [9.189948, 45.46623] },
            { name: '乌拉圭蒙得维的亚', coord: [-56.162231, -34.901113] },
            { name: '莫桑比克马普托', coord: [32.608571, -25.893473] },
            { name: '阿尔及利亚阿尔及尔', coord: [3.054275, 36.753027] },
            { name: '阿联酋迪拜', coord: [55.269441, 25.204514] },
            { name: '匈牙利布达佩斯', coord: [17.108519, 48.179162] },
            { name: '澳大利亚悉尼', coord: [150.993137, -33.675509] },
            { name: '美国加州', coord: [-121.910642, 41.38028] },
            { name: '澳大利亚墨尔本', coord: [144.999416, -37.781726] },
            { name: '墨西哥', coord: [-99.094092, 19.365711] },
            { name: '加拿大温哥华', coord: [-123.023921, 49.311753] },
            { name: '阿富汗', coord: [69.11, 34.28] },
            { name: '阿尔巴尼亚', coord: [19.49, 41.18] },
            { name: '阿尔及利亚', coord: [3.08, 36.42] },
            { name: '美属萨摩亚', coord: [-170.43, -14.16] },
            { name: '安道尔', coord: [1.32, 42.31] },
            { name: '安哥拉', coord: [13.15, -8.5] },
            { name: '安提瓜和巴布达', coord: [-61.48, 17.2] },
            { name: '阿根廷', coord: [-60.0, -36.3] },
            { name: '亚美尼亚', coord: [44.31, 40.1] },
            { name: '阿鲁巴', coord: [-70.02, 12.32] },
            { name: '澳大利亚', coord: [149.08, -35.15] },
            { name: '奥地利', coord: [16.22, 48.12] },
            { name: '阿塞拜疆', coord: [49.56, 40.29] },
            { name: '巴哈马', coord: [-77.2, 25.05] },
            { name: '巴林', coord: [50.3, 26.1] },
            { name: '孟加拉国', coord: [90.26, 23.43] },
            { name: '巴巴多斯', coord: [-59.3, 13.05] },
            { name: '白俄罗斯', coord: [27.3, 53.52] },
            { name: '比利时', coord: [4.21, 50.51] },
            { name: '伯利兹', coord: [-88.3, 17.18] },
            { name: '贝宁', coord: [2.42, 6.23] },
            { name: '不丹', coord: [89.45, 27.31] },
            { name: '玻利维亚', coord: [-68.1, -16.2] },
            { name: '波斯尼亚和黑塞哥维那', coord: [18.26, 43.52] },
            { name: '博茨瓦纳', coord: [25.57, -24.45] },
            { name: '巴西', coord: [-47.55, -15.47] },
            { name: '英属维尔京群岛', coord: [-64.37, 18.27] },
            { name: '文莱', coord: [115.0, 4.52] },
            { name: '保加利亚', coord: [23.2, 42.45] },
            { name: '布基纳法索', coord: [-1.3, 12.15] },
            { name: '布隆迪', coord: [29.18, -3.16] },
            { name: '柬埔寨', coord: [104.55, 11.33] },
            { name: '喀麦隆', coord: [11.35, 3.5] },
            { name: '加拿大', coord: [-75.42, 45.27] },
            { name: '佛得角', coord: [-23.34, 15.02] },
            { name: '开曼群岛', coord: [-81.24, 19.2] },
            { name: '中非共和国', coord: [18.35, 4.23] },
            { name: '乍得', coord: [14.59, 12.1] },
            { name: '智利', coord: [-70.4, -33.24] },
            { name: '中国', coord: [116.2, 39.55] },
            { name: '哥伦比亚', coord: [-74.0, 4.34] },
            { name: '科摩罗', coord: [43.16, -11.4] },
            { name: '刚果', coord: [15.12, -4.09] },
            { name: '哥斯达黎加', coord: [-84.02, 9.55] },
            { name: '科特迪瓦', coord: [-5.17, 6.49] },
            { name: '克罗地亚', coord: [15.58, 45.5] },
            { name: '古巴', coord: [-82.22, 23.08] },
            { name: '塞浦路斯', coord: [33.25, 35.1] },
            { name: '捷克共和国', coord: [14.22, 50.05] },
            { name: '朝鲜', coord: [125.3, 39.09] },
            { name: '刚果(扎伊尔)', coord: [15.15, -4.2] },
            { name: '丹麦', coord: [12.34, 55.41] },
            { name: '吉布提', coord: [42.2, 11.08] },
            { name: '多米尼加', coord: [-61.24, 15.2] },
            { name: '多米尼加共和国', coord: [-69.59, 18.3] },
            { name: '东帝汶', coord: [125.34, -8.29] },
            { name: '厄瓜多尔', coord: [-78.35, -0.15] },
            { name: '埃及', coord: [31.14, 30.01] },
            { name: '萨尔瓦多', coord: [-89.1, 13.4] },
            { name: '赤道几内亚', coord: [8.5, 3.45] },
            { name: '厄立特里亚', coord: [38.55, 15.19] },
            { name: '爱沙尼亚', coord: [24.48, 59.22] },
            { name: '埃塞俄比亚', coord: [38.42, 9.02] },
            { name: '福克兰群岛(马尔维纳斯群岛)', coord: [-59.51, -51.4] },
            { name: '法罗群岛', coord: [-6.56, 62.05] },
            { name: '斐济', coord: [178.3, -18.06] },
            { name: '芬兰', coord: [25.03, 60.15] },
            { name: '法国', coord: [2.2, 48.5] },
            { name: '法属圭亚那', coord: [-52.18, 5.05] },
            { name: '法属波利尼西亚', coord: [-149.34, -17.32] },
            { name: '加蓬', coord: [9.26, 0.25] },
            { name: '冈比亚', coord: [-16.4, 13.28] },
            { name: '格鲁吉亚', coord: [44.5, 41.43] },
            { name: '德国', coord: [13.25, 52.3] },
            { name: '加纳', coord: [-0.06, 5.35] },
            { name: '希腊', coord: [23.46, 37.58] },
            { name: '格陵兰', coord: [-51.35, 64.1] },
            { name: '瓜德罗普岛', coord: [-61.44, 16.0] },
            { name: '危地马拉', coord: [-90.22, 14.4] },
            { name: '根西岛', coord: [-2.33, 49.26] },
            { name: '几内亚', coord: [-13.49, 9.29] },
            { name: '几内亚比绍', coord: [-15.45, 11.45] },
            { name: '圭亚那', coord: [-58.12, 6.5] },
            { name: '海地', coord: [-72.2, 18.4] },
            { name: '赫德岛和麦当劳群岛', coord: [74.0, -53.0] },
            { name: '洪都拉斯', coord: [-87.14, 14.05] },
            { name: '匈牙利', coord: [19.05, 47.29] },
            { name: '冰岛', coord: [-21.57, 64.1] },
            { name: '印度', coord: [77.13, 28.37] },
            { name: '印度尼西亚', coord: [106.49, -6.09] },
            { name: '伊朗', coord: [51.3, 35.44] },
            { name: '伊拉克', coord: [44.3, 33.2] },
            { name: '爱尔兰', coord: [-6.15, 53.21] },
            { name: '以色列', coord: [35.12, 31.47] },
            { name: '意大利', coord: [12.29, 41.54] },
            { name: '牙买加', coord: [-76.5, 18.0] },
            { name: '约旦', coord: [35.52, 31.57] },
            { name: '哈萨克斯坦', coord: [71.3, 51.1] },
            { name: '肯尼亚', coord: [36.48, -1.17] },
            { name: '基里巴斯', coord: [173.0, 1.3] },
            { name: '科威特', coord: [48.0, 29.3] },
            { name: '吉尔吉斯斯坦', coord: [74.46, 42.54] },
            { name: '老挝', coord: [102.36, 17.58] },
            { name: '拉脱维亚', coord: [24.08, 56.53] },
            { name: '黎巴嫩', coord: [35.31, 33.53] },
            { name: '莱索托', coord: [27.3, -29.18] },
            { name: '利比里亚', coord: [-10.47, 6.18] },
            { name: '阿拉伯利比亚民众国', coord: [13.07, 32.49] },
            { name: '列支敦士登', coord: [9.31, 47.08] },
            { name: '立陶宛', coord: [25.19, 54.38] },
            { name: '卢森堡', coord: [6.09, 49.37] },
            { name: '马达加斯加', coord: [47.31, -18.55] },
            { name: '马拉维', coord: [33.48, -14.0] },
            { name: '马来西亚', coord: [101.41, 3.09] },
            { name: '马尔代夫', coord: [73.28, 4.0] },
            { name: '马里', coord: [-7.55, 12.34] },
            { name: '马耳他', coord: [14.31, 35.54] },
            { name: '马提尼克岛', coord: [-61.02, 14.36] },
            { name: '毛里塔尼亚', coord: [57.3, -20.1] },
            { name: '马约特岛', coord: [45.14, -12.48] },
            { name: '密克罗尼西亚(联邦) ', coord: [158.09, 6.55] },
            { name: '摩尔多瓦共和国', coord: [28.5, 47.02] },
            { name: '莫桑比克', coord: [32.32, -25.58] },
            { name: '缅甸', coord: [96.2, 16.45] },
            { name: '纳米比亚', coord: [17.04, -22.35] },
            { name: '尼泊尔', coord: [85.2, 27.45] },
            { name: '荷兰', coord: [4.54, 52.23] },
            { name: '荷属安的列斯', coord: [-69.0, 12.05] },
            { name: '新喀里多尼亚', coord: [166.3, -22.17] },
            { name: '新西兰', coord: [174.46, -41.19] },
            { name: '尼加拉瓜', coord: [-86.2, 12.06] },
            { name: '尼日尔', coord: [2.06, 13.27] },
            { name: '诺福克岛', coord: [168.43, -45.2] },
            { name: '北马里亚纳群岛', coord: [145.45, 15.12] },
            { name: '挪威', coord: [10.45, 59.55] },
            { name: '阿曼', coord: [58.36, 23.37] },
            { name: '巴基斯坦', coord: [73.1, 33.4] },
            { name: '帕劳', coord: [134.28, 7.2] },
            { name: '巴拿马', coord: [-79.25, 9.0] },
            { name: '巴布亚新几内亚', coord: [147.08, -9.24] },
            { name: '巴拉圭', coord: [-57.3, -25.1] },
            { name: '秘鲁', coord: [-77.0, -12.0] },
            { name: '菲律宾', coord: [121.03, 14.4] },
            { name: '波兰', coord: [21.0, 52.13] },
            { name: '葡萄牙', coord: [-9.1, 38.42] },
            { name: '波多黎各', coord: [-66.07, 18.28] },
            { name: '卡塔尔', coord: [51.35, 25.15] },
            { name: '韩国', coord: [126.58, 37.31] },
            { name: '罗马尼亚', coord: [26.1, 44.27] },
            { name: '俄罗斯联邦', coord: [37.35, 55.45] },
            { name: '卢旺达', coord: [30.04, -1.59] },
            { name: '圣基茨和尼维斯', coord: [-62.43, 17.17] },
            { name: '圣卢西亚', coord: [-60.58, 14.02] },
            { name: '圣皮埃尔和密克隆', coord: [-56.12, 46.46] },
            { name: '圣文森特和格林纳丁斯', coord: [-61.1, 13.1] },
            { name: '萨摩亚', coord: [-171.5, -13.5] },
            { name: '圣马力诺', coord: [12.3, 43.55] },
            { name: '圣多美和普林西比', coord: [6.39, 0.1] },
            { name: '沙特阿拉伯', coord: [46.42, 24.41] },
            { name: '塞内加尔', coord: [-17.29, 14.34] },
            { name: '塞拉利昂', coord: [-13.17, 8.3] },
            { name: '斯洛伐克', coord: [17.07, 48.1] },
            { name: '斯洛文尼亚', coord: [14.33, 46.04] },
            { name: '所罗门群岛', coord: [159.57, -9.27] },
            { name: '索马里', coord: [45.25, 2.02] },
            { name: '比勒陀利亚', coord: [28.12, -25.44] },
            { name: '西班牙', coord: [-3.45, 40.25] },
            { name: '苏丹', coord: [32.35, 15.31] },
            { name: '苏里南', coord: [-55.1, 5.5] },
            { name: '斯威士兰', coord: [31.06, -26.18] },
            { name: '瑞典', coord: [18.03, 59.2] },
            { name: '瑞士', coord: [7.28, 46.57] },
            { name: '阿拉伯叙利亚共和国', coord: [36.18, 33.3] },
            { name: '塔吉克斯坦', coord: [68.48, 38.33] },
            { name: '泰国', coord: [100.35, 13.45] },
            { name: '马其顿', coord: [21.26, 42.01] },
            { name: '多哥', coord: [1.2, 6.09] },
            { name: '汤加', coord: [-174.0, -21.1] },
            { name: '突尼斯', coord: [10.11, 36.5] },
            { name: '土耳其', coord: [32.54, 39.57] },
            { name: '土库曼斯坦', coord: [57.5, 38.0] },
            { name: '图瓦卢', coord: [179.13, -8.31] },
            { name: '乌干达', coord: [32.3, 0.2] },
            { name: '乌克兰', coord: [30.28, 50.3] },
            { name: '阿联酋', coord: [54.22, 24.28] },
            { name: '英国', coord: [-0.05, 51.36] },
            { name: '坦桑尼亚', coord: [35.45, -6.08] },
            { name: '美国', coord: [-77.02, 39.91] },
            { name: '美属维尔京群岛', coord: [-64.56, 18.21] },
            { name: '乌拉圭', coord: [-56.11, -34.5] },
            { name: '乌兹别克斯坦', coord: [69.1, 41.2] },
            { name: '瓦努阿图', coord: [168.18, -17.45] },
            { name: '委内瑞拉', coord: [-66.55, 10.3] },
            { name: '越南', coord: [105.55, 21.05] },
            { name: '南斯拉夫', coord: [20.37, 44.5] },
            { name: '赞比亚', coord: [28.16, -15.28] },
            { name: '津巴布韦', coord: [31.02, -17.43] },
            { name: '百慕大', coord: [-64.78327, 32.304626] },
            { name: '日本', coord: [138.254649, 36.219034] },
            { name: '南朝鲜', coord: [126.58, 37.31] },
            { name: '南非', coord: [22.910485, -30.569184] },
            { name: '捷克', coord: [14.22, 50.05] },
            { name: '新加坡', coord: [103.835359, 1.354108] },
            { name: '蒙古', coord: [103.852405, 46.848889] },
          ];
          var items = list.filter((item) => item.name === name);
          return items.length >= 1 ? items[0].coord : null;
        };
        var chartData = getEChartData();
        var getChartOption = function () {
          const convertData = function (list, dict) {
            let data = [];
            for (let i = 0, c = list.length; i < c; i++) {
              let item = list[i];
              const fromCoord = dict('济南');
              const toCoord = dict(item.region);
              if (fromCoord && toCoord) {
                data.push({
                  name: item.region,
                  coords: [fromCoord, toCoord],
                });
              }
            }
            return data;
          };
          const convertPoint = function (list, dict) {
            let data = [];
            for (let i = 0, c = list.length; i < c; i++) {
              let item = list[i];
              const Coord = dict(item.region);
              if (Coord) {
                data.push({
                  name: item.region,
                  value: Coord.concat([item.value]),
                });
              }
            }
            return data;
          };
          const coreCoord = geoCordMap('济南');

          let option = {
            tooltip: {
              show:false,
              trigger: 'item',
              backgroundColor: 'rgba(0,0,0,0.7)',
              borderColor: '#FFFFCC',
              showDelay: 0,
              hideDelay: 0,
              enterable: true,
              transitionDuration: 0,
              extraCssText: 'z-index:100',
            },
            geo: {
              map: 'worldMap',
              // 鼠标缩放拖动
              roam: true,
              // 视点中心
              // center: [115.97, 29.71],
              //长宽比例
              aspectScale: 0.75,
              //自定义地区的名称映射，如：
              nameMap: [],
              layoutCenter: ['50%', '50%'],
              // 如果宽高比大于 1 则宽度为 100，如果小于 1 则高度为 100，保证了不超过 100x100 的区域
              layoutSize: '110%',
              zoom: 1.2,
              // top: "10%",
              // bottom: "3%",
              // left: "5%",
              // right: "5%",
              scaleLimit: {
                min: 1,
                max: 2,
              },
              itemStyle: {
                normal: {
                  areaColor: 'rgb(37,153,255)', //"rgb(9,28,61)", //区域颜色
                  color: '#fff',
                  borderWidth: 0.5, //线宽
                  borderColor: '#0085FF', //rgba(3,171,241,0.6)界线颜色
                  shadowBlur: 0,
                  // shadowColor: "rgba(61,196,246,0.6)" //		#00ccff	阴影颜色
                },
                emphasis: {
                  // 高亮状态下的样式rgba(8,105,183, 1)
                  borderWidth: 1,
                  borderColor: 'rgba(8,105,183, 1)',
                  areaColor: '#0085FF',
                  textStyle: {
                    color: '#fff',
                  },
                },
              },
              label: {
                //标签
                normal: {
                  show: false,
                  textStyle: {
                    color: '#fff',
                  },
                },
                emphasis: {
                  //高亮状态下的样式
                  show: false,
                  position: 'right', //标注位置
                  formatter: function (params) {
                    return params.name + ':' + params.name;
                  },
                  textStyle: {
                    color: 'white', //标注颜色
                  },
                },
              },
            },
            series: [
              {
                type: 'lines',
                zlevel: 2,
                effect: {
                  show: true,
                  period: 5, //箭头指向速度，值越小速度越快
                  trailLength: 0.6, //特效尾迹长度[0,1]值越大，尾迹越长重
                  symbol: 'circle', //箭头图标
                  symbolSize: 3, //图标大小
                  color: 'rgba(255,244,64,0.8)',
                  delay: function () {
                    return Math.random() * 3000;
                  },
                },
                lineStyle: {
                  color: 'rgba(255,244,64,0.1)',
                  width: 1,
                  type: 'dashed', //"dotted",
                  curveness: -0.2, // 曲线曲度
                },
                tooltip: {
                  show: false,
                },
                data: convertData(chartData, geoCordMap),
              },
              {
                type: 'effectScatter',
                zlevel: 2,
                coordinateSystem: 'geo',
                symbol: 'circle',
                symbolSize: function () {
                  return 6; //圆环大小
                },
                itemStyle: {
                  normal: {
                    show: false,
                    color: 'rgba(0,250,144,0.7)',
                  },
                },
                rippleEffect: {
                  //涟漪特效
                  period: 9, //动画时间，值越小速度越快
                  brushType: 'stroke', //波纹绘制方式 stroke, fill
                  scale: 1, //波纹圆环最大限制，值越大波纹越大
                },
                label: {
                  normal: {
                    show: true,
                    position: 'insideBottomRight', //显示位置
                    offset: [5, 0], //偏移设置
                    formatter: function (params) {
                      //圆环显示文字
                      return params.data.name;
                    },
                    color: '#ccc',
                    fontSize: 12,
                  },
                  emphasis: {
                    show: true,
                  },
                },
                tooltip: {
                  show: true,
                  // formatter: function (params) {
                  //   //圆环显示文字
                  //   // return params.data.name;
                  //   return (
                  //     params.data.name +
                  //     '<br/><hr/>企业数量: ' +
                  //     params.data.value[2] +
                  //     '<br/>资金: ' +
                  //     params.data.value[3] +
                  //     '亿元'
                  //   );
                  // },
                },
                data: convertPoint(chartData, geoCordMap),
              },
              {
                type: 'effectScatter',
                zlevel: 2,
                coordinateSystem: 'geo',
                symbol: 'circle',
                symbolSize: function () {
                  return 8; //圆环大小
                },
                itemStyle: {
                  normal: {
                    show: true,
                    color: 'rgba(255,222,0,0.5)',
                  },
                },
                rippleEffect: {
                  //涟漪特效
                  period: 9, //动画时间，值越小速度越快
                  brushType: 'stroke', //波纹绘制方式 stroke, fill
                  scale: 4, //波纹圆环最大限制，值越大波纹越大
                },
                label: {
                  normal: {
                    show: true,
                    position: 'insideBottomRight', //显示位置
                    offset: [5, 0], //偏移设置
                    formatter: function (params) {
                      return params.data.name;
                      // return (
                      //   params.data.name +
                      //   "\n企业数量: " +
                      //   params.data.value[2] +
                      //   "\n资金: " +
                      //   params.data.value[3] +
                      //   "亿元"
                      // );
                    },
                    color: 'rgba(200,200,200,0.7)',
                    fontSize: 12,
                  },
                  emphasis: {
                    show: true,
                  },
                },
                tooltip: { show: false },
                data: [
                  {
                    name: '济南',
                    value: coreCoord,
                  },
                ],
              },
              {
                name: 'mapSer',
                type: 'map',
                map: 'worldMap',
                roam: false,
                geoIndex: 0,
                label: {
                  show: false,
                },
                data: [
                  {
                    name: 'China',
                    value: 100000,
                    itemStyle: {
                      normal: {
                        areaColor: 'rgb(255,153,255)', //"rgb(9,28,61)", //区域颜色
                        color: '#e82222',
                        borderWidth: 0.5, //线宽
                        borderColor: '#0085FF', //rgba(3,171,241,0.6)界线颜色
                        shadowBlur: 0,
                        // shadowColor: "rgba(61,196,246,0.6)" //		#00ccff	阴影颜色
                      },
                      emphasis: {
                        // 高亮状态下的样式rgba(8,105,183, 1)
                        borderWidth: 1,
                        borderColor: 'rgba(8,105,183, 1)',
                        areaColor: '#e82222',
                        textStyle: {
                          color: '#fff',
                        },
                      },
                    },
                  },
                ],
              },
            ],
          };
          return option;
        };

        //*************************************************************

        var option = getChartOption()
        var myChart = echarts.init(dom)
        myChart.setOption(option)
    
      })
    }


    
}

</script>
<style scoped>
#maingl{
  width: auto;
  height: auto;
}

</style>