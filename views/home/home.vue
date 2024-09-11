<script lang="ts" setup>
import foot from '../../components/foot.vue';
import { onMounted, ref } from 'vue'
import headNav from '../../components/headNav.vue';
import subNav from '../../components/subNav.vue';
import Fjpg from '../../../public/1.jpg'
import Sjpg from '../../../public/2.jpg'
import fo from '../../../public/4.jpg'
import ten from '../../../public/ten.png'
import guest1 from '../../../public/guest1.png'
import guest2 from '../../../public/guest2.png'
import guest3 from '../../../public/guest3.png'
import guest4 from '../../../public/guest4.png'
import guest5 from '../../../public/guest5.png'
import guest6 from '../../../public/guest6.png'
const isV = ref(false)
const isF = ref(false)
const isR = ref(false)
const isY = ref(false)
const isX = ref(false)
const isG = ref(false)
const isZ = ref(false)
const isB = ref(false)

//监听窗口滚动
const windowScrollListener = ()=> {
  //获取操作元素最顶端到页面顶端的垂直距离
  var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
  if (scrollTop > 10) {
    isZ.value = true
    isB.value = true
  }
  if (scrollTop > 1500) {
    isF.value = true
  } 
  if (scrollTop > 1600) {
    isV.value = true
  }
  if (scrollTop > 2400) {
    isR.value = true
  }
  if (scrollTop > 3000) {
    isX.value = true
  }
  if (scrollTop > 2000) {
    isY.value = true
  }
  if (scrollTop > 3200) {
    isG.value = true
  }
}

import { useRouter } from "vue-router"
let router = useRouter()
const live = () => {
  router.push('live')
}
const celebrity = () => {
  router.push('celebrity')
}
const news = () => {
  router.push('news')
}
onMounted(() => {
  window.addEventListener('scroll', windowScrollListener)
    })
onMounted(() => {
      //5月5日
  var myChart = $echarts.init(document.getElementById('char1'));
  myChart.setOption({
        color: ['#67F9D8', '#FFE434'],
  legend: {
    data: ['首映', '回放'],
  },
  radar: {
    axisName: {
        formatter: '{value}',
        color: 'white'
      },
    indicator: [
      { name: '观看人数', max: 6500 },
      { name: '关注量', max: 16000 },
      { name: '播放次数', max: 30000 },
      { name: '点赞量', max: 38000 },
      { name: '分享次数', max: 52000 },
      { name: '讨论度', max: 25000 }
    ]
  },
  series: [
    {
      name: '第二直播间',
      type: 'radar',
      data: [
        {
          value: [4200, 3000, 20000, 35000, 50000, 18000],
          name: '首映',
          
        },
        {
          value: [5000, 14000, 28000, 26000, 42000, 21000],
          name: '回放'
        }
      ]
    }
    ],
  animationDuration: 2000, 
  animationEasing: "cubicIn", 
  });
  //5月6日
  var data = [
  {
    name: '热度',
    children: [
      {
        name: '关注',
        value: 15,
        children: [
          {
            name: '比例',
            value: 7,
            children: [
              {
                name: '上午',
                value: 3
              },
              {
                name: '下午',
                value: 4
              }
            ]
          },
          {
            name: '数量',
            value: 8
          }
        ]
      },
      {
        name: '点赞',
        value: 10,
        children: [
          {
            name: '上午',
            value: 5
          },
          {
            name: '下午',
            value: 5
          }
        ]
      }
    ]
  },
  {
    name: '讨论',
    children: [
      {
        name: '更多',
        children: [
          {
            name: '分享',
            value: 3
          },
          {
            name: '转发',
            value: 4
          }
        ]
      }
    ]
  }
];
  var myChart = $echarts.init(document.getElementById('char2'));
      myChart.setOption({
        series: {
    type: 'sunburst',
    data: data,
    radius: [0, '90%'],
    label: {
      rotate: 'radial'
    }
  }
      });
  //5月7日
      const dataBJ = [
  [1, 55, 9, 56, 0.46, 18, 6, ],
  [2, 25, 11, 21, 0.65, 34, 9, ],
  [3, 56, 7, 63, 0.3, 14, 5, ],
  [4, 33, 7, 29, 0.33, 16, 6, ],
  [5, 42, 24, 44, 0.76, 40, 16, ],
  [6, 82, 58, 90, 1.77, 68, 33, ],
  [7, 74, 49, 77, 1.46, 48, 27, ],
  [8, 78, 55, 80, 1.29, 59, 29, ],
  [9, 267, 216, 280, 4.8, 108, 64, ],
  [10, 185, 127, 216, 2.52, 61, 27, ],
  [11, 39, 19, 38, 0.57, 31, 15, ],
  [12, 41, 11, 40, 0.43, 21, 7, ],
  [13, 64, 38, 74, 1.04, 46, 22, ],
  [14, 108, 79, 120, 1.7, 75, 41, ],
  [15, 108, 63, 116, 1.48, 44, 26, ],
  [16, 33, 6, 29, 0.34, 13, 5, ],
  [17, 94, 66, 110, 1.54, 62, 31, ],
  [18, 186, 142, 192, 3.88, 93, 79, ],
  [19, 57, 31, 54, 0.96, 32, 14, ],
  [20, 22, 8, 17, 0.48, 23, 10, ],
  [21, 39, 15, 36, 0.61, 29, 13, ],
  [22, 94, 69, 114, 2.08, 73, 39, ],
  [23, 99, 73, 110, 2.43, 76, 48, ],
  [24, 31, 12, 30, 0.5, 32, 16, ],
  [25, 42, 27, 43, 1, 53, 22, ],
  [26, 154, 117, 157, 3.05, 92, 58, ],
  [27, 234, 185, 230, 4.09, 123, 69, ],
  [28, 160, 120, 186, 2.77, 91, 50, ],
  [29, 134, 96, 165, 2.76, 83, 41, ],
  [30, 52, 24, 60, 1.03, 50, 21, ],
  [31, 46, 5, 49, 0.28, 10, 6, ]
];

var dataGZ = [
  [1, 26, 37, 27, 1.163, 27, 13, ],
  [2, 85, 62, 71, 1.195, 60, 8, ],
  [3, 78, 38, 74, 1.363, 37, 7, ],
  [4, 21, 21, 36, 0.634, 40, 9, ],
  [5, 41, 42, 46, 0.915, 81, 13, ],
  [6, 56, 52, 69, 1.067, 92, 16, ],
  [7, 64, 30, 28, 0.924, 51, 2, ],
  [8, 55, 48, 74, 1.236, 75, 26, ],
  [9, 76, 85, 113, 1.237, 114, 27, ],
  [10, 91, 81, 104, 1.041, 56, 40, ],
  [11, 84, 39, 60, 0.964, 25, 11, ],
  [12, 64, 51, 101, 0.862, 58, 23, ],
  [13, 70, 69, 120, 1.198, 65, 36, ],
  [14, 77, 105, 178, 2.549, 64, 16, ],
  [15, 109, 68, 87, 0.996, 74, 29, ],
  [16, 73, 68, 97, 0.905, 51, 34, ],
  [17, 54, 27, 47, 0.592, 53, 12, ],
  [18, 51, 61, 97, 0.811, 65, 19, ],
  [19, 91, 71, 121, 1.374, 43, 18, ],
  [20, 73, 102, 182, 2.787, 44, 19, ],
  [21, 73, 50, 76, 0.717, 31, 20, ],
  [22, 84, 94, 140, 2.238, 68, 18, ],
  [23, 93, 77, 104, 1.165, 53, 7, ],
  [24, 99, 130, 227, 3.97, 55, 15, ],
  [25, 146, 84, 139, 1.094, 40, 17, ],
  [26, 113, 108, 137, 1.481, 48, 15, ],
  [27, 81, 48, 62, 1.619, 26, 3, ],
  [28, 56, 48, 68, 1.336, 37, 9, ],
  [29, 82, 92, 174, 3.29, 0, 13, ],
  [30, 106, 116, 188, 3.628, 101, 16, ],
  [31, 118, 50, 0, 1.383, 76, 11, ]
];

var dataSH = [
  [1, 91, 45, 125, 0.82, 34, 23],
  [2, 65, 27, 78, 0.86, 45, 29],
  [3, 83, 60, 84, 1.09, 73, 27],
  [4, 109, 81, 121, 1.28, 68, 51],
  [5, 106, 77, 114, 1.07, 55, 51],
  [6, 109, 81, 121, 1.28, 68, 51],
  [7, 106, 77, 114, 1.07, 55, 51],
  [8, 89, 65, 78, 0.86, 51, 26],
  [9, 53, 33, 47, 0.64, 50, 17],
  [10, 80, 55, 80, 1.01, 75, 24],
  [11, 117, 81, 124, 1.03, 45, 24],
  [12, 99, 71, 142, 1.1, 62, 42],
  [13, 95, 69, 130, 1.28, 74, 50],
  [14, 116, 87, 131, 1.47, 84, 40],
  [15, 108, 80, 121, 1.3, 85, 37],
  [16, 134, 83, 167, 1.16, 57, 43],
  [17, 79, 43, 107, 1.05, 59, 37],
  [18, 71, 46, 89, 0.86, 64, 25],
  [19, 97, 71, 113, 1.17, 88, 31],
  [20, 84, 57, 91, 0.85, 55, 31],
  [21, 87, 63, 101, 0.9, 56, 41],
  [22, 104, 77, 119, 1.09, 73, 48],
  [23, 87, 62, 100, 1, 72, 28],
  [24, 168, 128, 172, 1.49, 97, 56],
  [25, 65, 45, 51, 0.74, 39, 17],
  [26, 39, 24, 38, 0.61, 47, 17],
  [27, 39, 24, 39, 0.59, 50, 19],
  [28, 93, 68, 96, 1.05, 79, 29],
  [29, 188, 143, 197, 1.66, 99, 51],
  [30, 174, 131, 174, 1.55, 108, 50],
  [31, 187, 143, 201, 1.39, 89, 53]
];

var schema = [
  { name: 'date', index: 0, text: '日期' },
  { name: 'AQIindex', index: 1, text: '观看' },
  { name: 'PM25', index: 2, text: '点赞' },
  { name: 'PM10', index: 3, text: '转发' },
  { name: 'CO', index: 4, text: ' 分享' },
  { name: 'NO2', index: 5, text: '下载' },
  { name: 'SO2', index: 6, text: '活跃' },
];

var lineStyle = {
  width: 1,
  opacity: 0.5
};

      var myChart = $echarts.init(document.getElementById('char3'));
      myChart.setOption({
  legend: {
    bottom: 30,
    data: ['第一直播', '第二直播', '第三直播'],
    itemGap: 20,
    textStyle: {
      color: '#fff',
      fontSize: 14
    }
  },
  tooltip: {
    padding: 10,
    backgroundColor: '#222',
    borderColor: '#777',
    borderWidth: 1
  },
  parallelAxis: [
    {
      dim: 0,
      name: schema[0].text,
      inverse: true,
      max: 31,
      nameLocation: 'start'
    },
    { dim: 1, name: schema[1].text },
    { dim: 2, name: schema[2].text },
    { dim: 3, name: schema[3].text },
    { dim: 4, name: schema[4].text },
    { dim: 5, name: schema[5].text },
    { dim: 6, name: schema[6].text },
  ],
  parallel: {
    left: '5%',
    right: '18%',
    bottom: 100,
    parallelAxisDefault: {
      type: 'value',
      name: 'AQI指数',
      nameLocation: 'end',
      nameGap: 20,
      nameTextStyle: {
        color: '#fff',
        fontSize: 12
      },
      axisLine: {
        lineStyle: {
          color: '#aaa'
        }
      },
      axisTick: {
        lineStyle: {
          color: '#777'
        }
      },
      splitLine: {
        show: false
      },
      axisLabel: {
        color: '#fff'
      }
    }
  },
  series: [
    {
      name: '第一直播',
      type: 'parallel',
      lineStyle: lineStyle,
      data: dataBJ
    },
    {
      name: '第二直播',
      type: 'parallel',
      lineStyle: lineStyle,
      data: dataSH
    },
    {
      name: '第三直播',
      type: 'parallel',
      lineStyle: lineStyle,
      data: dataGZ
    }
  ]
      });
  //5月8日
      var myChart = $echarts.init(document.getElementById('char4'));
      myChart.setOption({
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c}%'
  },
  toolbox: {
    feature: {
      dataView: { readOnly: false },
      restore: {},
      saveAsImage: {}
    }
  },
  series: [
    {
      name: 'Expected',
      type: 'funnel',
      left: '10%',
      width: '80%',
      label: {
        formatter: '{b}'
      },
      labelLine: {
        show: false
      },
      itemStyle: {
        opacity: 0.7
      },
      emphasis: {
        label: {
          position: 'inside',
          formatter: '{b}: {c}%'
        }
      },
      data: [
        { value: 60, name: 'Visit' },
        { value: 40, name: 'Inquiry' },
        { value: 20, name: 'Order' },
        { value: 80, name: 'Click' },
        { value: 100, name: 'Show' }
      ]
    },
    {
      name: 'Actual',
      type: 'funnel',
      left: '10%',
      width: '80%',
      maxSize: '80%',
      label: {
        position: 'inside',
        formatter: '{c}%',
        color: '#fff'
      },
      itemStyle: {
        opacity: 0.5,
        borderColor: '#fff',
        borderWidth: 2
      },
      emphasis: {
        label: {
          position: 'inside',
          formatter: '{b}Actual: {c}%'
        }
      },
      data: [
        { value: 30, name: 'Visit' },
        { value: 10, name: 'Inquiry' },
        { value: 5, name: 'Order' },
        { value: 50, name: 'Click' },
        { value: 80, name: 'Show' }
      ],
      z: 100
    }
  ]
      });
      //主题演讲
       var myChart = $echarts.init(document.getElementById('charts1'));
      myChart.setOption({
        title: [
          {
            left: "center",
            text: '500+',  // 主标题名称
            textStyle: {                  //主标题文本设置
              color: '#5643CC',           //颜色
              fontSize: 48,               //大小
              fontWeight: '700',          //粗体
              fontFamily: 'FZShuTi',
            },
          },
          {
            left: "left",
            subtext: '主题演讲',     //副标题名称 
            subtextStyle: {//副标题的属性
            color: '#5643CC',
            fontSize: 28,               //大小
            fontWeight: '400',          //粗体
            fontFamily: 'SimHei',    //字体
        },
          },
        ],
        
  xAxis: {
    type: 'category',
    data: ['A', 'B', 'C'],
    name:'主题演讲'
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [100, 200, 500],
      type: 'line',
      smooth: true,
      color:'#5643CC'
    }
          ],
  animationDuration: 6000, 
  animationEasing: "cubicIn", 
      });

      //行业从业者
      var myChart = $echarts.init(document.getElementById('charts2'));
      myChart.setOption({
          title: [
          {
            left: "center",
            text: '10000+',  // 主标题名称
            textStyle: {                  //主标题文本设置
              color: '#5643CC',           //颜色
              fontSize: 48,               //大小
              fontWeight: '700',          //粗体
              fontFamily: 'FZShuTi',
            },
          },
          {
            left: "left",
            subtext: '行业从业者',     //副标题名称 
            subtextStyle: {//副标题的属性
            color: '#5643CC',
            fontSize: 28,               //大小
            fontWeight: '400',          //粗体
            fontFamily: 'SimHei',    //字体
        },
          },
        ],
      xAxis: {
          type: 'category',
          data: ['1月', '3月', '5月'],
          name:'行业从业者'
        },
      yAxis: {
          type: 'value'
        },
  series: [
    {
      data: [1, 3, 10],
      type: 'bar',
      smooth: true,
      color:'#5643CC'
    }
          ],
  animationDuration: 6000, 
  animationEasing: "cubicIn", 
      });

      //直播观看人数
      var myChart = $echarts.init(document.getElementById('charts3'));
      myChart.setOption({
       title: [
          {
            left: "center",
            text: '2500w+',  // 主标题名称
            textStyle: {                  //主标题文本设置
              color: '#5643CC',           //颜色
              fontSize: 48,               //大小
              fontWeight: '700',          //粗体
              fontFamily: 'FZShuTi',
            },
          },
          {
            left: "left",
            subtext: '直播观看',     //副标题名称 
            subtextStyle: {//副标题的属性
            color: '#5643CC',
            fontSize: 28,               //大小
            fontWeight: '400',          //粗体
            fontFamily: 'SimHei',    //字体
        },
          },
        ],
  xAxis: {
    type: 'category',
            data: ['A', 'B', 'C'],
    name:'直播观看'
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [500,1000, 1800, 2500],
      type: 'line',
      smooth:true
    }
          ],
  animationDuration: 6000, 
  animationEasing: "cubicIn", 
        });
        //与会嘉宾
      var myChart = $echarts.init(document.getElementById('charts4'));
      myChart.setOption({
          title: [
          {
            left: "center",
            text: '10000+',  // 主标题名称
            textStyle: {                  //主标题文本设置
              color: '#5643CC',           //颜色
              fontSize: 48,               //大小
              fontWeight: '700',          //粗体
              fontFamily: 'FZShuTi',
            },
          },
          {
            left: "left",
            subtext: '与会嘉宾',     //副标题名称 
            subtextStyle: {//副标题的属性
            color: '#5643CC',
            fontSize: 28,               //大小
            fontWeight: '400',          //粗体
            fontFamily: 'SimHei',   //字体
        },
          },
        ],
  series: [
    {
      type: 'pie',
      data: [
        {
          value: 335,
          name: '3月与会嘉宾'
        },
        {
          value: 234,
          name: '4月与会嘉宾'
        },
        {
          value: 1548,
          name: '5月与会嘉宾'
        }
      ]
    }
  ],
  animationDuration: 6000, 
  animationEasing: "cubicIn", 
      });
    })
    
    import { inject } from 'vue'
    let $echarts = inject("echarts")
</script>

<template>
  <!-- 头部导航栏 -->
  <headNav />
  <!-- 轮播图 -->
  <el-carousel height="810px" class="swiper">
    <el-carousel-item>
      <img :src="Fjpg" alt="">
    </el-carousel-item>
    <el-carousel-item>
      <img :src="Sjpg" alt="">
    </el-carousel-item>
    <el-carousel-item>
      <img :src="ten" alt="">
    </el-carousel-item>
    <el-carousel-item>
      <img :src="fo" alt="">
    </el-carousel-item>
  </el-carousel>
  <!-- 侧栏 -->
  <subNav />
  <!-- 副导航栏 -->
  <el-tabs type="border-card" class="demo-tabs">
    <el-tab-pane>
      <template #label>
        <span class="custom-tabs-label">
          <span>5月5日</span>
        </span>
      </template>
      <div class="may">
        <el-container class="common-layout">
          <el-aside width="360px"
            :class="[{'animate__animated':isZ},{'animate__backInLeft':isZ}]">
            <div class="slide first">
              <div class="top">
                <div class="tagl">平行论坛</div>
                <div class="tagr">8:30-12:00</div>
              </div>
              <h2>MSS安全托管运营服务论坛</h2>
              <div id="char1"></div>
            </div>
          </el-aside>
          <div class="main" :class="[{'animate__animated':isB},{'animate__backInRight':isB}]">
            <div class="ax-img ax-img1">
            </div>
            <div class="ax-bottom">
              <div class="axl">
                <h1>MSS安全托管运营服务论坛</h1>
                <span>
                  1.首次提出以人为中心的安全运营飞轮，筑造新一代安全运营体系，塑造安全大运营和产品即服务的理念 2.安恒信息 MSS 2.0 新安全运营体系升级发布 3.持续深入探讨MSS市场的现状和行业应用
                </span>
              </div>
              <div class="axr">
                <button class="go" @click="live">前往会场</button>
              </div>
              <a href=""></a>
            </div>
          </div>
        </el-container>
      </div>
    </el-tab-pane>
    <el-tab-pane>
      <template #label>
        <span class="custom-tabs-label">
          <span>5月6日</span>
        </span>
      </template>
      <div class="may">
        <el-container class="common-layout">
          <el-aside width="360px">
            <div class="slide first">
              <div class="top">
                <div class="tagl">平行论坛</div>
                <div class="tagr">8:30-12:00</div>
              </div>
              <h2>生态“朋友圈”</h2>
              <div id="char2"></div>
            </div>
          </el-aside>
          <div class="main">
            <div class="ax-img ax-img2">
            </div>
            <div class="ax-bottom">
              <div class="axl">
                <h1>生态“朋友圈”</h1>
                <span>
                  2023西湖论剑·生态“朋友圈”
                </span>
              </div>
              <div class="axr">
                <button class="go" @click="live">前往会场</button>
              </div>
              <a href=""></a>
            </div>
          </div>
        </el-container>
      </div>
    </el-tab-pane>
    <el-tab-pane>
      <template #label>
        <span class="custom-tabs-label">
          <span>5月7日</span>
        </span>
      </template>
      <div class="may">
        <el-container class="common-layout">
          <el-aside width="360px">
            <div class="slide first">
              <div class="top">
                <div class="tagl">平行论坛</div>
                <div class="tagr">8:30-12:00</div>
              </div>
              <h2>金融行业网络安全论坛</h2>
              <div id="char3"></div>
            </div>
          </el-aside>
          <div class="main">
            <div class="ax-img ax-img3">
            </div>
            <div class="ax-bottom">
              <div class="axl">
                <h1>金融行业网络安全论坛</h1>
                <span>
                  金融行业网络安全论坛
                </span>
              </div>
              <div class="axr">
                <button class="go" @click="live">前往会场</button>
              </div>
              <a href=""></a>
            </div>
          </div>
        </el-container>
      </div>
    </el-tab-pane>
    <el-tab-pane>
      <template #label>
        <span class="custom-tabs-label">
          <span>5月8日</span>
        </span>
      </template>
      <div class="may">
        <el-container class="common-layout">
          <el-aside width="360px">
            <div class="slide first">
              <div class="top">
                <div class="tagl">平行论坛</div>
                <div class="tagr">8:30-12:00</div>
              </div>
              <h2>第二直播间</h2>
              <div id="char4"></div>
            </div>
          </el-aside>
          <div class="main">
            <div class="ax-img ax-img4">
            </div>
            <div class="ax-bottom">
              <div class="axl">
                <h1>第二直播间</h1>
                <span>
                  精彩干货不间断
                </span>
              </div>
              <div class="axr">
                <button class="go" @click="live">前往会场</button>
              </div>
              <a href=""></a>
            </div>
          </div>
        </el-container>
      </div>
    </el-tab-pane>
  </el-tabs>
  <div class="lighter">
    <h1>大会亮点</h1>
    <span>Conference Highlights</span>
  </div>
  <div class="tian">
    <div id="charts1">
    </div>
    <div id="charts2">
    </div>
    <div id="charts3">
    </div>
    <div id="charts4">
    </div>
  </div>
  <div class="vip" :class="[{'animate__animated':isF},{'animate__fadeIn':isF},{'animate__delay-1s':isF}]">
    <h1>重磅嘉宾</h1>
    <span>Important Guests</span>
  </div>
  <div class="guests">
    <el-carousel :interval="4000" type="card" class="guest"
      :class="[{'animate__animated':isV},{'animate__fadeIn':isV},{'animate__delay-1s':isV}]">
      <el-carousel-item class="celebrity">
        <img :src="guest1" alt="">
        <h1>范渊</h1>
        <h3>安恒信息董事长</h3>
      </el-carousel-item>
      <el-carousel-item class="celebrity">
        <img :src="guest2" alt="">
        <h1>刘世锦</h1>
        <h3>国务院发展研究中心原副主任、中国发展研究基金会副理事长</h3>
      </el-carousel-item>
      <el-carousel-item class="celebrity">
        <img :src="guest3" alt="">
        <h1>谭晓生</h1>
        <h3>北京赛博英杰科技有限公司董事长</h3>
      </el-carousel-item>
      <el-carousel-item class="celebrity">
        <img :src="guest4" alt="">
        <h1>左晓栋</h1>
        <h3>中国科学技术大学网络空间安全学院教授、科技人文高等研究院副院长</h3>
      </el-carousel-item>
      <el-carousel-item class="celebrity">
        <img :src="guest5" alt="">
        <h1>沈昌祥</h1>
        <h3>中国工程院院士</h3>
      </el-carousel-item>
      <el-carousel-item class="celebrity">
        <img :src="guest6" alt="">
        <h1>邬贺铨</h1>
        <h3>中国工程院院士</h3>
      </el-carousel-item>
    </el-carousel>
    <div class="intro" :class="[{'animate__animated':isY},{'animate__fadeIn':isY},{'animate__delay-1s':isY}]">
      <div class="more">
        <button class="go ne" @click="celebrity">更多嘉宾</button>
      </div>
    </div>
  </div>
  <!--新闻资讯 -->
  <div class="active" :class="[{'animate__animated':isR},{'animate__fadeIn':isR},{'animate__delay-1s':isR}]">
    <h1>新闻资讯</h1>
    <span>News Report</span>
  </div>

  <el-tabs type="border-card" class="demo-tabs">
    <el-tab-pane>
      <template #label>
        <span class="custom-tabs-label">
          <span>格致论道</span>
        </span>
      </template>
      <div class="yami ya1">
        <div class="m" :class="[{'animate__animated':isX},{'animate__fadeIn':isX},{'animate__delay-1s':isX}]">
          <h2>格致论道</h2>
          <h1>让“圈外人”关注网络安全，让“冷”科普做到“热”传播</h1>
          <p>5月5日 18:30 “格致论道”是中国科学院计算机网络信息中心和中国科学院科学传播局联合主办的科学文化讲坛。</p>
          <p>致力于非凡思想的跨界交流，提倡以"格物致知"的精神探讨科技、教育、生活、未来的发展</p>
        </div>
        <button class="go" @click="news">
          了解详情
        </button>
      </div>
    </el-tab-pane>
    <el-tab-pane>
      <template #label>
        <span class="custom-tabs-label">
          <span>掌上论剑</span>
        </span>
      </template>
      <div class="yami ya2">
        <div class="m" :class="[{'animate__animated':isX},{'animate__fadeIn':isX}]">
          <h2>掌上论剑</h2>
          <h1>线下“精致”、线上“亮眼”</h1>
          <p>以西湖论剑官网为载体，精心策划“掌上论剑”系列活动，推出“点亮网安，守护城市”、“ 守护每一份网安愿景”等互动活动</p>
          <p>今夜不破防》、《十日谈》、《新时代安全观对话》等亮点节目，打造一档精彩、有趣的掌上论剑特色节目</p>
        </div>
        <button class="go" @click="news">
          了解详情
        </button>
      </div>
    </el-tab-pane>
    <el-tab-pane>
      <template #label>
        <span class="custom-tabs-label">
          <span>西湖论剑安全特训营</span>
        </span>
      </template>
      <div class="yami ya3">
        <div class="m" :class="[{'animate__animated':isX},{'animate__fadeIn':isX}]">
          <h2>西湖论剑安全特训营</h2>
          <h1>数字安全人才助推器</h1>
          <p>5月4-6日 西湖论剑安全特训营是国内领先的数字安全人才交流、孵化及实训平台，致力于成为数字时代的“数字安全人才助推器”</p>
          <p>以体系化课程、实战化导向为显著特色，服务于数字化转型背景下的政府、企事业单位，为其培养数字安全的管理者、实战人才提供有力支撑，为国家数字安全人才发展持续输出强有力的“燃料”</p>
        </div>
        <button class="go" @click="news">
          了解详情
        </button>
      </div>
    </el-tab-pane>
    <el-tab-pane>
      <template #label>
        <span class="custom-tabs-label">
          <span>十周年回顾</span>
        </span>
      </template>
      <div class="yami ya4">
        <div class="m" :class="[{'animate__animated':isX},{'animate__fadeIn':isX}]">
          <h2 :class="[{'animate__animated':isY},{'animate__fadeIn':isY},{'animate__delay-1s':isY}]">西湖论剑十周年回顾</h2>
          <h1 :class="[{'animate__animated':isX},{'animate__fadeIn':isX},{'animate__delay-1s':isX}]">十年磨一剑</h1>
          <p>2022年第十届西湖论剑·网络安全大会，十年磨一剑</p>
          <p>向世界递出一张具有全球影响力、全国引领力、浙江辨识度的网络安全大会金名片</p>
        </div>
        <button class="go" @click="news">
          了解详情
        </button>
      </div>
    </el-tab-pane>
  </el-tabs>
  <!-- 底部 -->
  <foot />
</template>


<style lang="scss" scoped>

.swiper{
  margin-top: 80px;
  img{
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}

.el-menu-popper-demo{
  margin-top: -50px;
  margin-left: 270px;
  height: 100px;
  background-color: #fff;
  width: 1200px;
  border: 0px solid white;
  border-radius: 15px;
  overflow: hidden;
}
.time{
  width: 160px;
  margin: 0;
  font-size: large;
}
.date{
  margin-top: 40px;
  margin-left: 10px;
  width: 30px;
}

.common-layout{
  margin-left: 20%;
  height: 600px;
}
.demo-tabs{
  background: url(https://gd-hbimg.huaban.com/e194e49fc54a2f6010dc43e3a83fc1fe093e44901a004d-QmID2G_fw1200webp);
  background-size: cover;
}
.slide{
  width: 360px;
  height: 600px;
  border-radius: 10px;
  position: relative;
  background-image: linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%);
  #char1{
    position: absolute;
    top: 200px;
    width: 350px;
    height: 400px;
}
  #char2{
    position: absolute;
    top: 200px;
    width: 350px;
    height: 400px;
  }
  #char3{
    position: absolute;
    top: 200px;
    margin-left: 10px;
    width: 340px;
    height: 400px;
  }
  #char4{
    position: absolute;
    top: 200px;
    margin-left: -10px;
    width: 350px;
    height: 400px;
  }
}
.tagl,.tagr{
  color: white;
  margin-top: 10px;
  font-size: 16px;
}
.tagl{
 position: absolute;
 top: 10px;
 left: 10px;
}
.tagr{
 position: absolute;
 top: 10px;
 right: 10px;
}
.slide h2{
  color: white;
  padding-top: 100px;
  text-align: center;
  font-size: 28px;
}
.main{
  overflow: hidden;
  border-radius: 10px;
  background-color: rgb(251, 251, 251);
  width: 840px;
  height: 600px;
}
.ax-img{
  height: 450px;
  width: 840px;
  overflow: hidden;
}
.ax-img1{
  background: url(https://img2023.gcsis.cn/2024/4/afd2f2165baa4499b886c915d0221a17.jpg);
  background-size: cover;
}
.ax-img2{
  background: url(https://img2023.gcsis.cn/2024/4/5cfc2ee523b04200b9bb616d585db2dc.jpg);
  background-size: cover;
}
.ax-img3{
  background: url(https://img2023.gcsis.cn/2024/4/b40e6dd94acc4b2e8ccb986086edd822.jpg);
  background-size: cover;
}
.ax-img4{
  background: url(https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/3/440cacab48fa4b3fb646ade736a61bfb.jpeg);
  background-size: cover;
}

.ax-bottom{
  height: 150px;
  width: 840px;
}
.axl{
  width: 640px;
  float: left;
}
.axl h1{
  margin-top: 20px;
  margin-left: 5px;
  color: transparent;
  background-color : blue;
  text-shadow : rgba(255,255,255,0.5) 0 5px 6px, rgba(255,255,255,0.2) 1px 3px 3px;
  -webkit-background-clip : text;                  
}
.axl span{
  width: auto;

margin-top: 12px;
margin-left: 5px;

float: right;

font-family: 'Trebuchet MS', Arial, Helvetica, sans-serif;

font-size: 16px;

color: #9b9696;

line-height: 25px;

letter-spacing: 1px;
}
.axr{
  float: right;
}
.go{
  margin-top: 50px;
  margin-right: 20px;
      background-image: linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%);
      border-radius: 8px;
      border-style: none;
      box-sizing: border-box;
      color: #FFFFFF;
      cursor: pointer;
      flex-shrink: 0;
      font-family: "Inter UI","SF Pro Display",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif;
      font-size: 16px;
      font-weight: 500;
      height: 4rem;
      padding: 0 1.6rem;
      text-align: center;
      text-shadow: rgba(0, 0, 0, 0.25) 0 3px 8px;
      transition: all .5s;
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
  }
   .go:hover {
      box-shadow: rgba(80, 63, 205, 0.5) 0 1px 30px;
       transition-duration: .1s;
      }
  
    @media (min-width: 768px) {
        .go {
        padding: 0 2.6rem;
        }
}

.lighter,.vip,.active{
  margin: auto;
  h1{
    margin-top: 50px;
    background: linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 36px;
    text-align: center;
  }
  span{
    background: linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 16px;
    display:block;
    text-align: center;
}
}

#charts1,#charts2,#charts3,#charts4{
  margin-top:50px;
  margin-left: 5%;
  width:42%;
  height:400px;
}

.tian{
   display: flex;
   flex-wrap: wrap;
}

.guest{
  padding-top:50px;
  height: 600px;
  width: 900px;
  position: absolute;
  left: 50%;
  margin-left: -450px;
}
.vip{
  margin-top: 100px;
}
.guests{
  width: 100%;
  height: 1000px;
  margin-top: 50px;
  background: url(https://gd-hbimg.huaban.com/04789939dedbc375fd0f3dad7b96c6b01b816fb5a01a4-nOmlx0_fw1200webp);
  background-size: cover;
}
.celebrity{
  height: 600px;
  width: 450px;
  img{
    width: 450px;
    height: 450px;
  }
  h1{
    margin-top: 30px;
  }
  h1,h3{
    text-align: center;
    color: #ffffff;
  }
}
.intro{
  margin-top: 50px;
  .more{
    position: relative;
    .ne{
      margin-top: 700px;
      width: 200px;
      position: absolute;
      left: 50%;
      margin-left: -100px;
    }
  }
}
.active{
  margin-top: 100px;
  margin-bottom: 50px;
}

.yami{
    height: 500px;
    width: 100%;
    background-color: #fff;
    position: relative;
    background-size: cover;
    .go{
    position: absolute;
    top: 300px;
    left: 100px;
    }
}
.ya1{
  background: url(https://gd-hbimg.huaban.com/7dd378ab1db5b42a5ed678971c974293b69095dc4ff32-CQbQ0x_fw1200webp);
}
.ya2{
  background: url(https://gd-hbimg.huaban.com/4eb03750824dfc736458351a3110ab0fb716992ae77d8-sefRVy_fw1200);
}
.ya3{
  background: url(https://img2023.gcsis.cn/2024/4/0c077d696db94a9c86e0cccd5ca41673.jpg);
}
.ya4{
  background: url(https://gd-hbimg.huaban.com/ee6fbddac135bb45841354de2b9a10f657674314b6fa0-8mIMhs_fw1200webp);
}
::v-deep(.el-tabs__item) {
    width: 25%;
    padding-top: 50px;
    padding-bottom: 50px;
    height: 60px;
    font-size: 20px;
}
::v-deep(.el-tabs__nav){
    width: 60%;
    left: 20%;
}
::v-deep(.el-tabs__nav-wrap){
    background: url(https://gd-hbimg.huaban.com/4a979906aaeacaee8704406298df149257635155e510e-Z4WXO7_fw480webp);
    background-size: cover;
}
.news{
  margin-top: 40px;
  margin-left: 10px;
  width: 30px;
}
.new{
  margin-left: 270px;
  height: 100px;
  background-color: #fff;
  width: 1200px;
  border: 0px solid white;
  border-radius: 15px;
  overflow: hidden;
}
.m{
  position: absolute;
  top: 100px;
  left: 100px;
  h2,h1,p{
    color: rgb(255, 255, 255);
  }
  h1{
    margin-top: 40px;
  }
  p{
    margin-top: 20px;
  }
}

.may{
  width: 100%;
  height: 600px;
  position: relative;
}
::v-deep(.el-carousel__mask){
  width: 0;
  height: 0;
}
</style>



