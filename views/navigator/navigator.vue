<template>
<headNav/>
<div class="title">
    <h1 class=" animate__animated animate__rotateInDownLeft">参会指南</h1>
</div>
<div class="nav animate__animated animate__zoomIn animate__delay-1s" :class="[{'fixe':isL}]">
        <button class="safe" @click="place">大会场馆</button>
        <button class="safe" @click="tran">大会交通</button>
        <button class="safe" @click="hotel">酒店住宿</button>
        <button class="safe" @click="sign">大会签到</button>
        <button class="safe" @click="phone">联系我们</button>
</div>
<div class="place" id="pla">
    <div class="schedule">
      <h1>大会场馆</h1>
      <h4>Hall Plan</h4>
    </div>
    <div class="box">
            <el-tabs type="border-card" class="demo-tabs">
                <el-tab-pane>
                    <template #label>
                        <span class="custom-tabs-label">
                            <span class="tit1">杭州洲际酒店</span>
                        </span>
                    </template>
                    <div class="tab-box"><img :src="place1" alt=""></div>
                </el-tab-pane>
                <el-tab-pane>
                <template #label>
                    <span class="custom-tabs-label">
                        <span class="tit2">会场平面图</span>
                    </span>
                </template>
                <div class="tab-box"><img :src="map1" alt=""></div>
                </el-tab-pane>
            </el-tabs>
	</div>
</div>
<div class="transport" id="tran">
    <h1 :class="[{'animate__animated':isF},{'animate__jackInTheBox':isF}]">大会交通</h1>
    <h4>Transport</h4>
    <div class="hotel"  :class="[{'animate__animated':isY},{'animate__bounceInUp':isY}]">
        <div class="left">
            <span class="pos">杭州萧山国际机场—杭州洲际酒店</span>
            <img :src="subway1" alt="" class="subway">
            <span class="way">搭乘地铁7号线（吴山广场方向）至市民中心站，M1出口出站后，步行700米至杭州洲际酒店。</span>
            <img :src="taxi1" alt="" class="taxi">
            <span class="dis">路程25公里 时间约50分钟 车费60元左右</span>
        </div>
        <div class="right">
            <span class="pos2">杭州东站—杭州洲际酒店</span>
            <img :src="subway1" alt="" class="subway2">
            <span class="way2">搭乘地铁4号线（浦沿方向）至市民中心站，M1出口出站后，步行700米至杭州洲际酒店。</span>
            <img :src="taxi1" alt="" class="taxi2">
            <span class="dis2">路程7公里时长约20分钟车费20元左右。</span>
        </div>
    </div>
</div>
<div class="accom">
    <h1 id="hotel" :class="[{'animate__animated':isR},{'animate__jackInTheBox':isR}]">酒店住宿</h1>
    <h4>Hotel Accommodation</h4>
    <div :class="[{'animate__animated':isQ},{'animate__heartBeat':isQ}]" class="devi">
        <img :src="sche1" alt="" class="pic1">
        <img :src="sche2" alt="" class="pic2">
    </div>
</div>
<div class="bot" id="sign">
    <h1 :class="[{'animate__animated':isC},{'animate__jackInTheBox':isC}]">大会签到</h1>
    <h4>Sign In</h4>
    <img :src="indexbg1" alt="" class="indexbg">
    <div class="sign" :class="[{'animate__animated':isB},{'animate__zoomInLeft':isB}]">
        <span class="q1">签到位置</span>
        <span class="q2">杭州洲际酒店正门入口</span>
        <span class="q3">签到时间</span>
        <span class="q4">5月7日 上午 08:00-9:00 下午13:00-13:30</span>
        <span class="q5">5月8日 上午 08:00-9:00 下午13:00-13:30</span>
        <span class="q6">签到流程</span>
        <span class="q7">通过大会【短信】签到，领取大会胸卡</span>
        <div class="notice">
            <p>嘉宾领取大会胸卡须知:</p>
            <p>① 嘉宾自行领取个人参会胸卡，不代领</p>
            <p>② 每位嘉宾专属码只有一次领证时效，不可重复领取</p>
            <p>③ 大会胸卡将作为参会期间唯一身份认证，遗失无补，请妥善保管</p>
            <p>④ 嘉宾在会议期间需全程佩戴</p>
        </div>
    </div>
    <img :src="icon2" alt="" class="icon1">
    <h1 id="phone" :class="[{'animate__animated':isP},{'animate__jackInTheBox':isP}]">联系我们</h1>
    <h4>Contact Person</h4>
    <div class="L" :class="[{'animate__animated':isJ},{'animate__bounceInLeft':isJ}]">
        <span class="xue">薛女士</span>
        <span class="meet">会务咨询</span>
        <img :src="phone1" alt="" class="phone">
        <span class="num">+86-13810244613</span>
        <img :src="email1" alt="" class="email">
        <span class="addr">mia.xue@dbappsecurity.com.cn</span>
    </div>
    <div class="R" :class="[{'animate__animated':isO},{'animate__bounceInRight':isO}]">
        <span class="xue">朱女士</span>
        <span class="meet">商务合作</span>
        <img :src="phone1" alt="" class="phone">
        <span class="num">+86-15988310161</span>
        <img :src="email1" alt="" class="email">
        <span class="addr">yuki.zhu@dbappsecurity.com.cn</span>
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

import place1 from '../../../public/place.jpeg'
import map1 from '../../../public/map1.jpg'
import sche1 from '../../../public/sche1.png'
import sche2 from '../../../public/sche2.png'
import icon2 from '../../../public/icon_bg2.png'
import phone1 from '../../../public/phone.png'
import email1 from '../../../public/email.png'
import subway1 from '../../../public/subway.png'
import taxi1 from '../../../public/taxi.png'
import indexbg1 from '../../../public/index_bg1.png'

const isF = ref(false)
const isY = ref(false)
const isR = ref(false)
const isQ = ref(false)
const isC = ref(false)
const isP = ref(false)
const isB = ref(false)
const isJ = ref(false)
const isO = ref(false)
const isL = ref(false)
const windowScrollListener = () => {
  //获取操作元素最顶端到页面顶端的垂直距离
  var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
  if (scrollTop > 500) {
    isL.value = true
    }
   if (scrollTop < 100) {
    isL.value = false
  }
    if (scrollTop > 750) {
    isF.value = true
  }
  if (scrollTop > 900) {
    isY.value = true
  }
  if (scrollTop > 1200) {
    isR.value = true
    }
  if (scrollTop > 1300) {
    isQ.value = true
    }
  if (scrollTop > 2500) {
    isC.value = true
    }
  if (scrollTop > 3000) {
    isP.value = true
    }
  if (scrollTop > 2600) {
    isB.value = true
    }
  if (scrollTop > 3100) {
    isJ.value = true
    }
  if (scrollTop > 3100) {
    isO.value = true
  }
}
onMounted(() => {
  window.addEventListener('scroll', windowScrollListener)
    })
const place = () => {
    document.getElementById('pla')!.scrollIntoView({ behavior: 'smooth' })
}
const tran = () => {
    document.getElementById('tran')!.scrollIntoView({ behavior: 'smooth' })
}
const hotel = () => {
    document.getElementById('hotel')!.scrollIntoView({ behavior: 'smooth' })
}
const sign = () => {
    document.getElementById('sign')!.scrollIntoView({ behavior: 'smooth' })
}
const phone = () => {
    document.getElementById('phone')!.scrollIntoView({ behavior: 'smooth' })
}
</script>
<style scoped lang='scss'>
*{
            margin:0;
            padding:0;
        }
        /* 宽度为屏宽的一半，高度为屏高的一半，然后居中 */
        .box{
            width:50vw;
            height:50vh;
            margin:0 auto;
        }
.fixe{
    z-index: 10000;
    position: fixed;
    top: 200px;
    left: 0;
}
.title{
    z-index: -1;
    margin-top: 80px;
    width: 100%;
    height: 500px;
    background: url(https://gd-hbimg.huaban.com/ac840f09ac141c59807fbca87482ae28409048c245121c-GTgHH3_fw1200webp);
    background-size: cover;
    h1{
        padding-top: 200px;
        padding-left: 250px;
        color: white;
        font-size: 40px;
    }
}
.nav{
    float: inline-start;
    margin-top: -120px;
    margin-left: 15%;
    height: 100px;
    background: url(https://gd-hbimg.huaban.com/70932f6a288f6da1e832cfda06cd11b7126fda86e69f-eyguKR_fw480webp);
    background-size: cover;
    width: 70%;
    border-radius: 15px;
    .safe{
        margin-top: 20px;
        margin-left: 50px;
        width: 15%;
        height: 50px;
        border: 2px solid rgba(80, 63, 205, 0.5);
        border-radius: 20px;
        text-align: center;
        line-height: 50px;
        background-color: white;
        font-size: 18px;
        font-weight: bold;
        color: rgba(56, 34, 221, 0.5);
    }
    .safe:hover{
        border: 2px solid white;
        background-color: rgba(80, 63, 205, 0.5);
        color: white;
    }
}
.fixedNavbar {
      position: fixed;
      z-index: 2032;
      top: 0;
      left: 20%;
    }
.schedule{
    h1{
        padding-top: 80px;
        text-align:center;
        line-height: 70px;
        background: linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    h4{
        text-align:center;
        line-height: 20px;
        background: linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
}
.place{
    height: 1000px;
    width: 100%;
    background: url(https://gd-hbimg.huaban.com/70932f6a288f6da1e832cfda06cd11b7126fda86e69f-eyguKR_fw480webp);
    background-size: cover;
    position: relative;
    .box{
        position: absolute;
        margin-top: 50px;
        left: 50%;
        margin-left: -600px;
        width: 1200px;
        height: 1000px;
        .tit1,.tit2{
            font-size: 20px;
        }
		.tab-box{
			width: 100%;
			height: 600px;
            img{
                margin-left: 10%;
                width: 80%;
                height: 600px;
                transition: all 0.4s;
            }
            img:hover{
                box-shadow: 0 8px 8px 0 grey;
                transform: translate(0, -10px);
                transform: scale(1.1)
            }
		}
    }
}
::v-deep(.el-tabs__item) {
    width: 300px;
    padding: 30px 20px;
    height: 100px;
    font-size: 24px;
}
::v-deep(.el-tabs__nav){
    left: 25%;
}
::v-deep(.el-tabs__nav-wrap){
    background-color: #fff;
}
.transport{
    height: 650px;
    background: url(https://gd-hbimg.huaban.com/103acc5ab32d3e7bc752de50a07dd01b6acbe69f481a4-PbJwJv_fw480webp);
    background-size: cover;
    h1{
        font-family: SimHei;
        padding-top: 50px;
        text-align:center;
        line-height: 70px;
        background: linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    h4{
        text-align:center;
        line-height: 20px;
        background: linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin-bottom: 30px;
    }
    .hotel{
        height: 400px;
        width: 1200px;
        margin: auto;
        border: 1px solid rgb(235, 235, 235);
        box-shadow: 0 8px 8px 0 rgb(182, 182, 182);
        .left{
            position: relative;
            img{
                position: absolute;
                width: 30px;
                height: 30px;
            }
            .subway{
                margin-top: 40px;
                top: 80px;
                left: 80px;
            }
            .pos{
                margin-top: 30px;
                position: absolute;
                font-size: 20px;
                top: 30px;
                left: 80px;
            }
            .pos:after{
                content: "";
                display: block;
                position: absolute;
                left: -2.5rem;
                width: 0.4rem;
                height: 2.4rem;
                top: 0;
                background-image: linear-gradient(47deg, #3b7bc9, #59afb8);
            }
            .way{
                margin-top: 40px;
                width: 300px;
                position: absolute;
                top: 80px;
                left: 120px;
            }
            .taxi{
                position: absolute;
                top: 240px;
                left: 80px;
            }
            .dis{
                position: absolute;
                top: 240px;
                left: 120px;
            }
        }
        .right{
            position: relative;
            img{
                position: absolute;
                width: 30px;
                height: 30px;
            }
            .subway2{
                margin-top: 50px;
                top: 80px;
                left: 700px;
            }
            .pos2{
                margin-top: 30px;
                position: absolute;
                font-size: 20px;
                top: 30px;
                left: 700px;
            }
            .way2{
                margin-top: 50px;
                width: 300px;
                position: absolute;
                top: 80px;
                left: 740px;
            }
            .taxi2{
                position: absolute;
                top: 240px;
                left: 700px;
            }
            .dis2{
                position: absolute;
                top: 240px;
                left: 740px;
            }
            .pos2:after{
                content: "";
            display: block;
            position: absolute;
            left: -2.5rem;
            width: 0.4rem;
            height: 2.4rem;
            top: 0;
            background-image: linear-gradient(47deg, #3b7bc9, #59afb8);
            }
        }
    }
    .hotel:hover{
        transform: translateY(-10px);
    }
}
.accom{
    height: 980px;
    width: 100%;
    position: relative;
    background: url(https://gd-hbimg.huaban.com/70932f6a288f6da1e832cfda06cd11b7126fda86e69f-eyguKR_fw480webp);
    background-size: contain;
    .devi{
        position: absolute;
        left: 50%;
        width: 1800px;
        margin-left: -850px;
    }
    h1{
        padding-top: 50px;
        text-align:center;
        line-height: 70px;
        background: linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    h4{
        text-align:center;
        line-height: 20px;
        background: linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin-bottom: 30px;
    }
        .pic1{
            position: absolute;
            left: 200px;
            background-color: white;
        }
        .pic2{
            position: absolute;
            left: 1000px;
            background-color: white;
        }
}
.bot{
    position: relative;
    background: url(https://gd-hbimg.huaban.com/103acc5ab32d3e7bc752de50a07dd01b6acbe69f481a4-PbJwJv_fw480webp);
    background-size: cover;
    height: 1200px;
    .icon1{
        position: absolute;
        top: 200px;
        left: 1400px;
        width: 300px;
        height: 300px;
    }
    .indexbg{
        position: absolute;
        top: 400px;
    }
    h1{
        padding-top: 50px;
        text-align:center;
        line-height: 70px;
        background: linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    h4{
        text-align:center;
        line-height: 20px;
        background: linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin-bottom: 30px;
    }
    .sign{
        position: relative;
        background: url(https://gd-hbimg.huaban.com/103acc5ab32d3e7bc752de50a07dd01b6acbe69f481a4-PbJwJv_fw480webp);
        background-size: cover;
        height: 400px;
        width: 1200px;
        margin: auto;
        border: 1px solid rgb(235, 235, 235);
        box-shadow: 0 8px 8px 0 rgb(182, 182, 182);
        .q1:after{
            content: "";
            display: block;
            position: absolute;
            left: -2.5rem;
            width: 0.4rem;
            height: 2.4rem;
            top: 0;
            background-image: linear-gradient(47deg, #3b7bc9, #59afb8);
        }
        .q3:after{
            content: "";
            display: block;
            position: absolute;
            left: -2.5rem;
            width: 0.4rem;
            height: 2.4rem;
            top: 0;
            background-image: linear-gradient(47deg, #3b7bc9, #59afb8);
        }
        .q6:after{
            content: "";
            display: block;
            position: absolute;
            left: -2.5rem;
            width: 0.4rem;
            height: 2.4rem;
            top: 0;
            background-image: linear-gradient(47deg, #3b7bc9, #59afb8);
        }
        .q1{
            position: absolute;
            top: 30px;
            left: 100px;
            font-size: 20px;
        }
        .q2{
            position: absolute;
            top: 80px;
            left: 100px;
        }
        .q3{
            position: absolute;
            top: 30px;
            left: 450px;
            font-size: 20px;
        }
        .q4{
            position: absolute;
            top: 80px;
            left: 450px;
        }
        .q5{
            position: absolute;
            top: 120px;
            left: 450px;
        }
        .q6{
            position: absolute;
            top: 30px;
            left: 900px;
            font-size: 20px;
        }
        .q7{
            position: absolute;
            top: 80px;
            left: 900px;
        }
        .notice{
            position: absolute;
            top: 220px;
            left: 80px;
        }
    }
    .L{
        background: url(https://gd-hbimg.huaban.com/103acc5ab32d3e7bc752de50a07dd01b6acbe69f481a4-PbJwJv_fw480webp);
        background-size: cover;
        position: absolute;
        height: 300px;
        width: 30%;
        left: 15%;
        top: 800px;
        border: 1px solid rgb(235, 235, 235);
        box-shadow: 0 8px 8px 0 rgb(182, 182, 182);
        .xue{
            display: block;
            margin-top: 50px;
            margin-left: 80px;
            font-size: 30px;
        }
        .meet{
            display: block;
            margin-left: 200px;
            margin-top: -20px;
        }
        .phone{
            width: 30px;
            height: 30px;
            margin-top: 30px;
            margin-left: 80px;
        }
        .num{
            display: block;
            margin-left: 150px;
            margin-top: -25px;
        }
        .email{
            width: 30px;
            height: 30px;
            margin-top: 30px;
            margin-left: 80px;
        }
        .addr{
            display: block;
            margin-left: 150px;
            margin-top: -25px;
        }
    }
    .R{
        background: url(https://gd-hbimg.huaban.com/103acc5ab32d3e7bc752de50a07dd01b6acbe69f481a4-PbJwJv_fw480webp);
        background-size: cover;
        position: absolute;
        height: 300px;
        width: 30%;
        left: 55%;
        top: 800px;
        border: 1px solid rgb(235, 235, 235);
        box-shadow: 0 8px 8px 0 rgb(182, 182, 182);
        .xue{
            display: block;
            margin-top: 50px;
            margin-left: 80px;
            font-size: 30px;
        }
        .meet{
            display: block;
            margin-left: 200px;
            margin-top: -20px;
        }
        .phone{
            width: 30px;
            height: 30px;
            margin-top: 30px;
            margin-left: 80px;
        }
        .num{
            display: block;
            margin-left: 150px;
            margin-top: -25px;
        }
        .email{
            width: 30px;
            height: 30px;
            margin-top: 30px;
            margin-left: 80px;
        }
        .addr{
            display: block;
            margin-left: 150px;
            margin-top: -25px;
        }
    }
}
</style>