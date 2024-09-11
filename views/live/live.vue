<template>
  <headNav />
  <subNav />
  <div class="live">
    <div class="mask">
      <div ref="container" style="width:1000px;height:500px"></div>
    </div>
    <div class="menu animate__animated animate__fadeInUp">
      <h1>主论坛</h1>
      <img :src="view1" alt="" class="view">
      <h4 class="views">{{liveData0.participants}}</h4>
      <h4 class="thumbs">{{liveData0.name}}</h4>
      <button class="subscribe" @click="tosub">+ 订阅</button>
    </div>
    <div class="schedu animate__animated animate__fadeInTopRight">
      <div class="meeting">
        <h1>会议议程</h1>
      </div>
      <div class="timeline">
        <el-timeline class="timeLine">
          <el-timeline-item timestamp="09:00 - 09:05" placement="top" color="skyblue">
            <el-card>
              <h4>主持人开场</h4>
              <p>茅莹 浙江经视主持人</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="09:05 - 09:25" placement="top" color="skyblue">
            <el-card>
              <h4>领导致辞</h4>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="09:25 - 09:35" placement="top" color="skyblue">
            <el-card>
              <h4>大会启动暨西湖论剑新十年规划发布仪式</h4>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="09:25 - 09:35" placement="top" color="skyblue">
            <el-card>
              <h4>网络安全标准化人才实训基地揭牌仪式</h4>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="09:25 - 09:35" placement="top" color="skyblue">
            <el-card>
              <h4>《2023数字安全能力洞察报告》发布仪式</h4>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="09:35 - 10:00" placement="top" color="skyblue">
            <el-card>
              <h4>主题演讲：数字经济与高质量发展</h4>
              <p>刘世锦 中国发展研究基金会副理事长、国务院发展研究中心原副主任</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="10:00 - 10:25" placement="top" color="skyblue">
            <el-card>
              <h4>主题演讲：破解数据要素流动与隐私保护相冲突的局</h4>
              <p>方滨兴 中国工程院院士</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="10:25 - 10:35" placement="top" color="skyblue">
            <el-card>
              <h4>IPv6护航数据安全流动</h4>
              <p>邬贺铨 中国工程院院士（视频）</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="10:35 - 10:40" placement="top" color="skyblue">
            <el-card>
              <h4>仪式：亚运赛事网络安全保护联合启动仪式</h4>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="10:40 - 11:05" placement="top" color="skyblue">
            <el-card>
              <h4>主题演讲：构筑可信可控的数字安全屏障</h4>
              <p>范渊 安恒信息董事长</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="11:05 - 11:55" placement="top" color="skyblue">
            <el-card>
              <h4>圆桌论坛：长三角数字城市安全治理实践</h4>
              <p>惠志斌（主持人） 上海社会科学院互联网研究中心主任，上海赛博网络安全产业创新研究院院长、首席研究员
                齐同军 杭州市数据资源管理局副局长
                张亮 无锡市城市运行管理中心党支部书记、副主任
                方坚 芜湖市数据资源管理局副局长
                郑磊 复旦大学国际关系与公共事务学院教授，上海市一网统管城市数字治理实验室主任
                刘博 安恒信息首席科学家、高级副总裁</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="11:55 - 12:00" placement="top" color="skyblue">
            <el-card>
              <h4>数据安全自律倡议签署</h4>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </div>
    </div>
    <div class="mainmid animate__animated animate__slideInDown">
      <h1 :class="[{'animate__animated':isO},{'animate__jackInTheBox':isO}]">新品发布</h1>
      <h2 :class="[{'animate__animated':isO},{'animate__jackInTheBox':isO}]">New Product Launch</h2>
      <div class="allin">
        <div class="part one" :class="[{'animate__animated':isF},{'animate__jackInTheBox':isF}]">
          <div class="image first">
          </div>
          <p>下一代防火墙</p>
          <span>明御防火墙（DAS-TGFW）秉持“持续边界安全态势改善”的理念，以用户为核心，以边界、应用、威胁、权限为防护对象，构建了以资产...</span>
        </div>
        <div class="part two" :class="[{'animate__animated':isY},{'animate__jackInTheBox':isY}]">
          <div class="image second">
          </div>
          <p>安全托管运营服务MSS</p>
          <span>提供体系化、常态化的安全托管服务，协助构建7*24小时全天候、全方位的安全运营体系， 实现安全风险从发现到响应处置的闭环，持...</span>
        </div>
        <div class="part three" :class="[{'animate__animated':isC},{'animate__jackInTheBox':isC}]">
          <div class="image third">
          </div>
          <p>西湖论剑</p>
          <span>西湖论剑·网络安全大会自2012年创办，是国内首个已举办十周年的网络安全大会。十届以来，大会线下参会嘉宾累计超过10000人次，线上直播观看累计超过2500万人次，已成为国内网络安全领域的一张“金名片”...</span>
        </div>
      </div>
    </div>
    <div class="review">
      <h1 :class="[{ 'animate__animated': isQ }, { 'animate__flipInY': isQ }]">直播回放</h1>
      <h2 :class="[{ 'animate__animated': isP }, { 'animate__flipInY': isP }]">Live playback</h2>
      <el-tabs type="border-card" class="demo-tabs"
        :class="[{ 'animate__animated': isN }, { 'animate__bounceInUp': isN }]">
        <el-tab-pane>
          <template #label>
            <span class="custom-tabs-label">
              <span>直播回放1</span>
            </span>
          </template>
          <div>
            <video poster="https://gd-hbimg.huaban.com/2fde7c0da1c03d6514549e90d1f0aa84d13a902cb26a-T05J1d_fw1200webp" controls="true" autoplay="false" class="v1" src='https://tv.cctv.com/2023/09/22/VIDEMCpdBxCpjuTfoRwRkLsW230922.shtml'></video>
          </div>
        </el-tab-pane>
        <el-tab-pane>
          <template #label>
            <span class="custom-tabs-label">
              <span>直播回放2</span>
            </span>
          </template>
          <div>
            <video :poster="bg10" controls="true" autoplay="false" class="v1" :src=liveLoc?.video></video>
          </div>
        </el-tab-pane>
        <el-tab-pane>
          <template #label>
            <span class="custom-tabs-label">
              <span>直播回放3</span>
            </span>
          </template>
          <div>
            <video :poster="bg11" controls="true" autoplay="false" class="v1" :src=liveLoc?.video></video>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
  <foot />
</template>
<script setup lang="ts">
import headNav from '../../components/headNav.vue';
import subNav from '../../components/subNav.vue';
import foot from '../../components/foot.vue'
import { onMounted, reactive, ref } from 'vue';
import DPlayer from 'dplayer';
import api from '../../api/api';
import { useRouter } from "vue-router"

import view1 from '../../../public/view.png'
import bg10 from '../../../public/背景10.webp'
import bg11 from '../../../public/背景11.jpg'

const container = ref(null)

let router = useRouter()
const tosub = () => {
  router.push('center')
}

const isF = ref(false)
const isY = ref(false)
const isC = ref(false)
const isO = ref(false)
const isQ = ref(false)
const isP = ref(false)
const isN = ref(false)
const windowScrollListener = () => {
  //获取操作元素最顶端到页面顶端的垂直距离
  var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
  if (scrollTop > 200) {
    isF.value = true
  }
  if (scrollTop > 200) {
    isY.value = true
  }
  if (scrollTop > 200) {
    isC.value = true
  }
  if (scrollTop > 10) {
    isO.value = true
  }
  if (scrollTop > 700) {
    isP.value = true
  }
  if (scrollTop > 700) {
    isQ.value = true
  }
  if (scrollTop > 900) {
    isN.value = true
  }
}

type lives = {
  cover: string
  name: string
  participants: number
}

const liveData = ref([])
const liveData0 = reactive<lives>({
  participants: 0,
  name: '普通直播',
})
//请求活动数据
const getLiveInfo = () => {
  api.get('http://111.231.60.148:8999/service/active/live/auth/allRoom').then((res) => {
    if (res.status = 200) {
      liveData.value = res.data.data
      liveData0.value = liveData.value[0]
    }
  })
}

type liveLocs = {
  id: number
  pullAdd: string
  video:string
}

const liveLoc = ref<liveLocs>()
const getLiveLocation = ()=>{
  api.get(`http://111.231.60.148:8999/service/active/live/auth/pull/${5}`).then((res) => {
    if (res.status = 200) {
      console.log(res.data.data)
      liveLoc.value = res.data.data
    }
  })
}


onMounted(() => {
  getLiveInfo()
  getLiveLocation()
  window.addEventListener('scroll', windowScrollListener)
  const dp = new DPlayer({
    container: container.value,
    live: true,
    video: {
      url: 'http://pull.westlaker.xyz/live/111.flv',  //liveLoc.value?.pullAdd,//appname是密钥
      type: 'flv',
    },
  });
})
</script>
<style scoped lang='scss'>
.live{
    width: 100%;
    height: 2500px;
    background: url(https://gd-hbimg.huaban.com/e791fe3c2f299e9a0ae2efd31f0870cec0fa4eef220a4-D9Eqt6_fw480webp);
    background-size: cover;
    position: relative;
    .mask{
    width: 1000px;
    height: 500px;
    position: absolute;
    top: 200px;
    left: 15%;
    }
    .menu{
        height: 80px;
        width: 1000px;
        position: absolute;
        top: 700px;
        left: 15%;
        background: white;
        line-height: 80px;
        h1{
            font-size: 36px;
            float: left;
            background: linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-left: 50px;
        }
        .view{
            width: 30px;
            height: 30px;
            float: left;
            margin-top: 30px;
            margin-left: 400px;
        }
        .views{
            float: left;
            margin-top: 5px;
            margin-left: 10px;
        }
        .thumb{
            width: 25px;
            height: 25px;
            float: left;
            margin-top: -55px;
            margin-left: 700px;
        }   
        .thumbs{
            font-family: simHei;
            float: left;
            font-size: 24px;
            margin-top: -85px;
            margin-left: 700px;
        }
        .subscribe{
            float: left;
            height: 50px;
            width: 120px;
            margin-top: -70px;
            margin-left: 850px;
            background-color: #fff;
            border: 2px solid#455EB5;
            border-radius: 30px;
            color: #455EB5;
            font-size: 20px;
            text-align: center;
            line-height: 50px;
        }
        .subscribe:hover{
            background: linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%);
            color: white;
            border: 2px solid white;
        }
    }
    .schedu{
        position: absolute;
        width: 300px;
        height: 600px;
        left: 80%;
        top: 200px;
        .meeting{
            width: 300px;
            height: 60px;
            text-align: center;
            line-height: 60px;
            color: white;
            background: linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%);
            h1{
                font-size: 25px;
                font-weight: lighter;
            }
        }
        .timeline{
            margin-top: 20px;
            width: 300px;
            height: 500px;
            background-color: #fff;
            overflow: scroll;
            .timeLine{
                margin-top: 10px;
            }
        }
    }
    .mainmid{
      width: 100%;
      top: 900px;
      position: relative;
    h1,h2{
        background: linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-align: center;
    }
    h1{
        font-size: 36px;
    }
    .allin{
      position: absolute;
      left: 50%;
      margin-left: -840px;
    }
    .part{
        width: 400px;
        height: 450px;
        background: white;
        .image{
    margin-top: 20px;
    width: 360px;
    height: 220px;
    margin-left: 20px;
    transition: all 0.4s;
}
.image:hover{
    box-shadow: 0 8px 8px 0 grey;
    transform: translate(0, -10px);
    transform: scale(1.1)
}
.first{
    background: url(https://gd-hbimg.huaban.com/e0533c5308d6531f29f37388098b1aac15aca83acef8-XqpLZK_fw480webp);
    background-size:100% 100%;
}
.second{
    background: url(https://img2023.gcsis.cn/2024/4/a3f633e9367349f78d9a43e20f6eb4c2.jpg);
    background-size:100% 100%;
}
.third{
    background: url(https://img2023.gcsis.cn/2024/4/ba6fc9e759e9472ca12b0a5c2c66057f.jpg);
    background-size:100% 100%;
}
        p{
            display: block;
            margin-top: 15px;
            font-size: 24px;
            text-align: center;
        }
        span{
            font-weight: lighter;
            display: block;
            margin-left: 20px;
            margin-right: 20px;
            margin-top: 15px;
        }
    }
    .one{
        position: absolute;
        top: 180px;
        left: 140px;
    }
    .two{
        position: absolute;
        top: 180px;
        left: 640px;
    }
    .three{
        position: absolute;
        top: 180px;
        left: 1140px;
    }
}
}

::v-deep(.el-timeline-item__timestamp) {
    font-size: 16px !important;
    background: linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
::v-deep(.el-card){
    margin-top: 10px;
}
::v-deep(.el-timeline){
  margin-left: 10px;
  width: 250px;
}
::v-deep(.el-card__body){
    position: relative;
    background-image: linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%);
    h4,p{
      font-size: 16px;
      color: white;
    }
    p{
        font-weight: lighter;
        margin-top: 10px;
    }
}
::v-deep(.el-timeline-item__tail){
  border-left: 3px solid var(--el-timeline-node-color);
}

.review{
      width: 100%;
      position: absolute;
      top: 1700px;
      h1,h2 {
        background: linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-align: center;
      }
      h1 {
        font-size: 36px;
      }
}

.demo-tabs{
  margin-top: 50px;
  width: 60%;
  margin-left: 20%;
}
.v1{
  margin-left: 10%;
  width: 80%;
}
 .demo-tabs>.el-tabs__content {
   padding: 32px;
   color: #6b778c;
   font-size: 40px;
   font-weight: 600;
 }

 .demo-tabs .custom-tabs-label .el-icon {
   vertical-align: middle;
 }

 .demo-tabs .custom-tabs-label span {
   vertical-align: middle;
   margin-left: 4px;
 }

 ::v-deep(.el-tabs__item) {
   width: 300px;
   height: 80px;
   font-size: 24px;
   font-family: simHei;
 }

 ::v-deep(.el-tabs__nav) {
   left: 50%;
   margin-left: -440px;
 }
 ::v-deep(.el-tabs__nav-wrap) {
   background: url(https://gd-hbimg.huaban.com/4a979906aaeacaee8704406298df149257635155e510e-Z4WXO7_fw480webp);
   background-size: cover;
 }

</style>