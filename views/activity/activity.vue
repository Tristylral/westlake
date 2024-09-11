<template>
    <div class="all">
        <headNav />
        <div class="title">
            <h1>精彩活动</h1>
        </div>
        <div class="bgi">
        <div class="body">
            <div class="group1 animate__animated animate__zoomInLeft animate__slow	1s">
                <div class="leftG">
                    <h1>{{all0.name}}</h1>
                    <h3>{{all0.des}}</h3>
                    <h4>{{ all0.year }}-{{ all0.month }}-{{ all0.day }} {{all0.participant}}人预约</h4>
                    <h4 class="loca">地点：{{all0.location}}</h4>
                    <button class="goL" @click="gocenter">订阅</button>
                </div>
                <div class="rightG">
                    <img :src="new1" alt="">
                </div>
            </div>
            <div class="group2"
                :class="[{'animate__animated':isF},{'animate__zoomInLeft':isF},{'animate__slow	1s':isF}]">
                <div class="leftD">
                    <img :src="activity3" alt="">
                </div>
                <div class="rightD">
                    <h1>{{all1.name}}</h1>
                    <h3>{{ all1.des }}</h3>
                    <h4>{{ all1.year }}-{{ all1.month }}-{{ all1.day }} {{ all1.participant }}人预约</h4>
                    <h4 class="loca">地点：{{ all1.location}}</h4>
                    <button class="goG" @click="gocenter">订阅</button>
                </div>
            </div>
            <div class="group1"
                :class="[{'animate__animated':isV},{'animate__zoomInLeft':isV},{'animate__slow	1s':isV}]">
                <div class="leftG">
                    <h1>{{ all2.name}}</h1>
                    <h3>{{ all2.des}}</h3>
                    <h4>{{ all2.year }}-{{ all2.month }}-{{ all2.day }} {{ all2.participant}}人预约</h4>
                    <h4 class="loca">地点：{{ all2.location}}</h4>
                    <button class="goL" @click="gocenter">订阅</button>
                </div>
                <div class="rightG">
                    <img :src="activity2" alt="">
                </div>
            </div>
            <div class="group2"
                :class="[{'animate__animated':isR},{'animate__zoomInLeft':isR},{'animate__slow	1s':isR}]">
                <div class="leftD">
                    <img :src="activity4" alt="">
                </div>
                <div class="rightD">
                    <h1>{{ all3.name}}</h1>
                    <h3>{{ all3.des}}</h3>
                    <h4>{{ all3.year }}-{{ all3.month }}-{{ all3.day }} {{ all3.participant}}人预约</h4>
                    <h4 class="loca">地点：{{ all3.location}}</h4>
                    <button class="goG" @click="gocenter">订阅</button>
                </div>
            </div>
        </div>
        <subNav />
        </div>
    </div>
    <foot />
</template>
<script setup lang='ts'>
import headNav from '../../components/headNav.vue';
import subNav from '../../components/subNav.vue';
import foot from '../../components/foot.vue'
import { onMounted, ref } from 'vue';
import { useRouter } from "vue-router"
import api from '../../api/api.js'

import new1 from '../../../public/news1.jpeg'
import activity3 from '../../../public/activity3.jpg'
import activity2 from '../../../public/activity2.png'
import activity4 from '../../../public/activity4.jpg'



type activities = {
    /** 说明 */
    des: string
    /** 地点 */
    location: string
    /** 标题 */
    name: string
    /** 图片集合[ 图片路径 ] */
    image: string
    /** 参与人数 */
    participant: string
    year: number
    month: number
    day:number
}

const allin = ref([])
const all0 = ref<activities>([])
const all1 = ref<activities>([])
const all2 = ref<activities>([])
const all3 = ref<activities>([])
//请求活动数据
const getActInfo = () => {
    api.get('http://111.231.60.148:8999/service/active/active/list').then((res) => {
        if (res.status = 200) {
            allin.value = res.data.data
            all0.value = allin.value[0]
            all1.value = allin.value[1]
            all2.value = allin.value[2]
            all3.value = allin.value[3]
        }
    })
}


let router = useRouter()
const gocenter = () => {
  router.push('center')
}
const isV = ref(false)
const isF = ref(false)
const isR = ref(false)
const windowScrollListener = ()=> {
  //获取操作元素最顶端到页面顶端的垂直距离
  var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
  if (scrollTop > 20) {
    isF.value = true
  } 
  if (scrollTop > 500) {
    isV.value = true
  }
  if (scrollTop > 1000) {
    isR.value = true
  }
}

onMounted(() => {
    window.addEventListener('scroll', windowScrollListener)
    getActInfo()
    })
</script>
<style scoped lang='scss'>
.title{
    z-index: -1;
    margin-top: 80px;
    width: 100%;
    height: 500px;
    background: url(https://gd-hbimg.huaban.com/fd410066dfd57c9aa7f911f04f7b05914f20058f1237e-OLkUQd_fw1200webp);
    background-size: cover;
    h1{
        margin-left: 10%;
        padding-top: 100px;
        padding-left: 200px;
        color: white;
        font-size: 36px;
    }
}
.all{
    width: 100%;
    position: relative;
    height: 2200px;
    .bgi{
        width: 100%;
        height: 1700px;
        background-image: url(https://gd-hbimg.huaban.com/beb462c570907244930e21988fb436609b8a08c7ee675-fjotiE_fw480webp);
        background-size: contain;
    }
}
.body{
    position: absolute;
    left: 50%;
    margin-left: -600px;
    width: 1200px;
    height: 1800px;
    margin-top: -150px;
    background-image: url(https://gd-hbimg.huaban.com/beb462c570907244930e21988fb436609b8a08c7ee675-fjotiE_fw480webp);
    background-size: cover;
    border: 0;
    border-radius: 10px;
    .group1{
        position: relative;
        width: 1200px;
        margin-top: 50px;
        height: 400px;
        .leftG{
            position: absolute;
            left: 0;
            width: 600px;
            height: 100%;
            background: url(https://gd-hbimg.huaban.com/a6bbb67434916419067e381ec778f7dd16713a4e353e-PYdnEW_fw1200webp);
            background-size: cover;
            background-repeat: no-repeat;
            .loca{
                margin-top: -20px;
                margin-left: 300px;
            }
            h1{
                margin-top: 30px;
                margin-left: 50px;
            }
            h3{
                width: 500px;
                font-size: 16px;
                font-weight: normal;
                margin-top: 50px;
                margin-left: 50px;
            }
            h4{
                font-weight: normal;
                margin-top: 80px;
                margin-left: 50px;
            }
            .goL{
                margin-top: -40px;
                margin-right: 20px;
                float: right;
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
   .goL:hover {
      box-shadow: rgba(80, 63, 205, 0.5) 0 1px 30px;
       transition-duration: .1s;
      }
  
    @media (min-width: 768px) {
        .goL {
        padding: 0 2.6rem;
        }
}
        }
        .rightG{
            position: absolute;
            left: 610px;
            width: 500px;
            height: 100%;
            img{
                width: 590px;
                height: 100%;
                object-fit: cover;
            }
        }
    }
    .group2{
        border-radius: 10px;
        position: relative;
        width: 1200px;
        margin-top: 50px;
        height: 400px;
        .leftD{
            position: absolute;
            left: 0px;
            width: 500px;
            height: 100%;
            img{
                width: 590px;
                height: 100%;
                object-fit: cover;
            }
        }
        .rightD{
            position: absolute;
            left: 600px;
            width: 600px;
            height: 100%;
            background: url(https://gd-hbimg.huaban.com/a6bbb67434916419067e381ec778f7dd16713a4e353e-PYdnEW_fw1200webp);
            background-repeat: no-repeat;
            background-size: cover;
            .loca {
                    margin-top: -20px;
                    margin-left: 300px;
                }
            h1{
                margin-top: 30px;
                margin-left: 50px;
            }
            h3{
                width: 500px;
                font-size: 16px;
                font-weight: normal;
                margin-top: 50px;
                margin-left: 50px;
            }
            h4{
                font-weight: normal;
                margin-top: 80px;
                margin-left: 50px;
            }
        }
    }
}

.goG{
    float: right;
    margin-top: -40px;
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
   .goG:hover {
      box-shadow: rgba(80, 63, 205, 0.5) 0 1px 30px;
       transition-duration: .1s;
      }
  
    @media (min-width: 768px) {
        .goG {
        padding: 0 2.6rem;
        }
}

.group1:hover{
    box-shadow: 0 16px 16px rgba(10, 16, 20, 0.24), 0 0 16px rgba(10, 16, 20, 0.12);
  	text-decoration: none;
}
.group2:hover{
    box-shadow: 0 16px 16px rgba(10, 16, 20, 0.24), 0 0 16px rgba(10, 16, 20, 0.12);
  	text-decoration: none;
}
</style>