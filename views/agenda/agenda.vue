<template>
<headNav/>
<div class="bg_a">
    <div class="title animate__animated animate__fadeIn animate__delay-1s">
        <h1>大会议程</h1>
        <h4>西湖论剑·数字安全大会</h4>
    </div>
    <div class="mainbody">
        <el-timeline class="timeLine">
    <el-timeline-item timestamp="5/5 上午" placement="top" color="skyblue" class="animate__animated animate__slideInLeft">
      <el-card>
        <h4>格致论道@西湖论剑</h4>
        <p>Tom committed 2018/4/12 20:46</p>
        <button class="subscribe" @click="gocenter">订阅</button>
      </el-card>
    </el-timeline-item>
    <el-timeline-item timestamp="5/5 下午" placement="top" color="skyblue" class="animate__animated animate__slideInRight">
      <el-card>
        <h4>95后极客青年Talk</h4>
        <p>Tom committed 2018/4/3 20:46</p>
        <button class="subscribe" @click="gocenter">订阅</button>
      </el-card>
    </el-timeline-item>
    <el-timeline-item timestamp="5/6 上午" placement="top" color="skyblue" class="animate__animated animate__slideInLeft">
      <el-card>
        <h4>当科幻照进现实我们会更安全吗？</h4>
        <p>Tom committed 2018/4/2 20:46</p>
        <button class="subscribe" @click="gocenter">订阅</button>
      </el-card>
      <el-card>
        <h4>人工智能会颠覆安全行业吗？</h4>
        <p>Tom committed 2018/4/2 20:46</p>
        <button class="subscribe" @click="gocenter">订阅</button>
      </el-card>
    </el-timeline-item>
    <el-timeline-item timestamp="5/6 下午" placement="top" color="skyblue" :class="[{'animate__animated':isF},{'animate__slideInRight':isF},{'animate__slower':isF}]">
      <el-card>
        <h4>反诈直播间@西湖论剑</h4>
        <p>Tom committed 2018/4/2 20:46</p>
        <button class="subscribe" @click="gocenter">订阅</button>
      </el-card>
      <el-card>
        <h4>主论坛</h4>
        <p>Tom committed 2018/4/2 20:46</p>
        <button class="subscribe" @click="gocenter">订阅</button>
      </el-card>
      <el-card>
        <h4>生态合作伙伴分论坛</h4>
        <p>Tom committed 2018/4/2 20:46</p>
        <button class="subscribe" @click="gocenter">订阅</button>
      </el-card>
    </el-timeline-item>
    <el-timeline-item timestamp="5/7 上午" placement="top" color="skyblue" :class="[{'animate__animated':isR},{'animate__slideInLeft':isR},{'animate__slower':isR}]">
      <el-card>
        <h4>数字中国安全治理论坛</h4>
        <p>Tom committed 2018/4/2 20:46</p>
        <button class="subscribe" @click="gocenter">订阅</button>
      </el-card>
    </el-timeline-item>
    <el-timeline-item timestamp="5/7 下午" placement="top" color="skyblue" :class="[{'animate__animated':isY},{'animate__slideInRight':isY},,{'animate__slower':isY}]">
      <el-card>
        <h4>信创软件供应链安全论坛</h4>
        <p>Tom committed 2018/4/2 20:46</p>
        <button class="subscribe" @click="gocenter">订阅</button>
      </el-card>
      <el-card>
        <h4>车联网安全论坛</h4>
        <p>Tom committed 2018/4/2 20:46</p>
        <button class="subscribe" @click="gocenter">订阅</button>
      </el-card>
    </el-timeline-item>
    <el-timeline-item timestamp="5/8 上午" placement="top" color="skyblue" :class="[{'animate__animated':isQ},{'animate__slideInLeft':isQ},{'animate__slower':isQ}]">
      <el-card>
        <h4>第二直播间</h4>
        <p>Tom committed 2018/4/2 20:46</p>
        <button class="subscribe" @click="gocenter">订阅</button>
      </el-card>
    </el-timeline-item>
    <el-timeline-item timestamp="5/8 下午" placement="top" color="skyblue" :class="[{'animate__animated':isC},{'animate__slideInRight':isC},{'animate__slower':isC}]">
      <el-card>
        <h4>生态“朋友圈”</h4>
        <p>Tom committed 2018/4/2 20:46</p>
        <button class="subscribe" @click="gocenter">订阅</button>
      </el-card>
    </el-timeline-item>
  </el-timeline>
    </div>
</div>
<subNav/>
<foot/>
</template>
<script setup lang='ts'>
import headNav from '../../components/headNav.vue';
import subNav from '../../components/subNav.vue';
import foot from '../../components/foot.vue'
import { onMounted, ref } from 'vue';
import { useRouter } from "vue-router"
let router = useRouter()
const gocenter = () => {
  router.push('center')
}
const isF = ref(false)
const isY = ref(false)
const isR = ref(false)
const isQ = ref(false)
const isC = ref(false)
const windowScrollListener = () => {
  //获取操作元素最顶端到页面顶端的垂直距离
  var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
  if (scrollTop > 50) {
    isF.value = true
  }
  if (scrollTop > 600) {
    isY.value = true
  }
  if (scrollTop > 400) {
    isR.value = true
  }
  if (scrollTop > 800) {
    isQ.value = true
  }
  if (scrollTop > 1000) {
    isC.value = true
  }
}
onMounted(() => {
  window.addEventListener('scroll', windowScrollListener)
    })
</script>
<style scoped lang='scss'>
.bg_a{
    height: 2200px;
    width: 100%;
    background: url(https://gd-hbimg.huaban.com/672ed86fc3705e9070122d311028206cc7dfe9821bbf7f-fMv5yw_fw1200webp) no-repeat center center;
    background-size: cover;
}
.title{
    margin-top: 80px;
    margin-bottom: 50px;
    color: #fff;
    h1{
        padding-top: 50px;
    }
    h1,h4{
        text-align: center;
    }
    h4{
        padding-top: 10px;
    }
}
.mainbody{
    height: 1800px;
    width: 1200px;
    margin: auto;
    background: rgba(255, 255, 255, 0.8);
    .timeLine{
        padding-top: 50px;
    }
}

</style>

<style lang="scss">
.el-timeline-item__timestamp {
    font-size: 24px !important;
    background: linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
.el-card{
    margin-top: 20px;
}
.el-timeline{
  margin-left: 100px;
  width: 1000px;
}
.el-card__body{
    position: relative;
    background-image: linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%);
    h4,p{
      font-size: 16px;
      color: white;
    }
    p{
      margin-top: 10px;
    }
    .subscribe{
      font-size: 18px;
      color: white;
      position: absolute;
      text-align: center;
      top: 22px;
      left: 850px;
      width: 80px;
      height: 45px;
      border: 2px solid white; 
      background: transparent;
      border-radius: 30px;
    }
    .subscribe:hover{
      transition: all .2s ease-in;
      background-color: white;
      color: #455EB5;
      overflow: hidden;
      z-index: 2;
    }
}
.el-timeline-item__tail{
  border-left: 3px solid var(--el-timeline-node-color);
}
</style>