<template>
    <headNav />
    <div class="all">
        <div class="title">
            <h1 class="animate__animated animate__fadeInLeft">大咖云集</h1>
        </div>
        <div class="expert">
            <span class="title1 animate__animated animate__fadeInDown animate__delay-1s">专家委员会</span>
            <span class="title2 animate__animated animate__fadeInLeft animate__delay-1s">Expert Committee</span>
            <span class="title3 animate__animated animate__fadeInRight animate__delay-1s">(专家排名不分先后)</span>
            <el-carousel :interval="4000" type="card"
                class="guest animate__animated animate__fadeInDown animate__delay-2s" autoplay="false">
                <el-carousel-item class="celebrity">
                    <img :src="left" alt="">
                    <h1>左晓栋</h1>
                    <h3>
                        中国科学技术大学网络空间安全学院教授、科技人文高等研究院副院长
                    </h3>
                </el-carousel-item>
                <el-carousel-item class="celebrity">
                    <img :src="gy" alt="">
                    <h1>崔光耀</h1>
                    <h3>《中国信息安全》杂志原主编</h3>
                </el-carousel-item>
                <el-carousel-item class="celebrity">
                    <img :src="bz" alt="">
                    <h1>顾炳中</h1>
                    <h3>中国计算机用户协会理事长</h3>
                </el-carousel-item>
                <el-carousel-item class="celebrity">
                    <img :src="xy" alt="">
                    <h1>李新友</h1>
                    <h3>国家信息中心研究员</h3>
                </el-carousel-item>
                <el-carousel-item class="celebrity">
                    <img :src="qu" alt="">
                    <h1>曲胜</h1>
                    <h3>中国能源研究会能源网络安全技术研究中心常务副主任</h3>
                </el-carousel-item>
                <el-carousel-item class="celebrity">
                    <img :src="wb" alt="">
                    <h1>王秉政</h1>
                    <h3>全国信安标委成员</h3>
                </el-carousel-item>
            </el-carousel>
            <span class="title4"
                :class="[{'animate__animated':isV},{'animate__fadeInDown':isV},{'animate__delay-1s':isV}]">演讲嘉宾</span>
            <span class="title2"
                :class="[{'animate__animated':isV},{'animate__fadeInLeft':isV},{'animate__delay-1s':isV}]">Expert
                Committee</span>
            <span class="title3"
                :class="[{'animate__animated':isV},{'animate__fadeInRight':isV},{'animate__delay-1s':isV}]">(专家排名不分先后)</span>
            <div class="guests"
                :class="[{'animate__animated':isF},{'animate__fadeInUp':isF},{'animate__delay-1s':isF}]">
                <div class="one">
                    <img :src="cyf" alt="">
                    <h3>陈跃峰</h3>
                    <h4>嘉善县政务数据办</h4>
                </div>
                <div class="two">
                    <img :src="st" alt="">
                    <h3>邓释天</h3>
                    <h4>清华大学长三角研究院 AI计算机图形学首席科学家</h4>
                </div>
                <div class="three">
                    <img :src="cb" alt="">
                    <h3>刘长波</h3>
                    <h4>中央企业电子商务联盟跨境专委会副主任</h4>
                </div>
                <div class="four">
                    <img :src="nb" alt="">
                    <h3>刘博</h3>
                    <h4>杭州安恒信息技术股份有限公司 首席科学家</h4>
                </div>
                <div class="five">
                    <img :src="hb" alt="">
                    <h3>马红斌</h3>
                    <h4>湖州市大数据发展管理局 党组成员 市数据服务中心主任</h4>
                </div>
                <div class="six">
                    <img :src="xw" alt="">
                    <h3>熊伟</h3>
                    <h4>openEuler技术委员会委员</h4>
                </div>
                <div class="seven">
                    <img :src="tf" alt="">
                    <h3>杨廷锋</h3>
                    <h4>杭州安恒车联网安全技术有限公司副总经理</h4>
                </div>
                <div class="eight">
                    <img :src="yj" alt="">
                    <h3>刘应杰</h3>
                    <h4>中国创新战略和政策研究中心副主任</h4>
                </div>
                <div class="nine">
                    <img :src="cj" alt="">
                    <h3>曹静</h3>
                    <h4>灰度安全CEO</h4>
                </div>
                <div class="ten">
                    <img :src="john" alt="">
                    <h3>John Bai</h3>
                    <h4>亚马逊云科技大中华区安全合规与治理服务总监</h4>
                </div>
            </div>
            <el-button @click="file(1)" class="go">嘉宾ppt下载</el-button>
        </div>
        <div class="body">

        </div>
        <subNav />
        <foot />
    </div>
</template>
<script setup lang='ts'>
import headNav from '../../components/headNav.vue';
import subNav from '../../components/subNav.vue';
import foot from '../../components/foot.vue'
import { onMounted, ref } from 'vue';
import left from '../../../public/左.png'
import gy from '../../../public/崔gy.jpg'
import bz from '../../../public/顾bz.jpg'
import xy from '../../../public/李xy.jpg'
import qu from '../../../public/曲.jpg'
import wb from '../../../public/王bz.jpg'
import cyf from '../../../public/陈跃峰.png'
import st from '../../../public/邓st.png'
import hb from '../../../public/马红b.png'
import cb from '../../../public/刘cb.png'
import nb from '../../../public/刘b.png'
import xw from '../../../public/熊伟.png'
import tf from '../../../public/杨tf.png'
import yj from '../../../public/刘英杰.png'
import cj from '../../../public/曹静.jpg'
import john from '../../../public/john.jpg'
const isV = ref(false)
const isF = ref(false)
const windowScrollListener = ()=> {
  //获取操作元素最顶端到页面顶端的垂直距离
  var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
  if (scrollTop > 150) {
    isF.value = true
  } 
  if (scrollTop > 100) {
    isV.value = true
  }
}
onMounted(() => {
  window.addEventListener('scroll', windowScrollListener)
})
const file = (id:number) => {
    let url = `http://111.231.60.148:8999/service/exhibit/auth/download/${id}`;
    fetch(url, {
        method: "get",
    }).then(res => res.blob()).then((res) => {
        const a = document.createElement('a');
        document.body.appendChild(a);
        a.style.display = 'none';
        // 指定下载路径
        const url = window.URL.createObjectURL(res);
        a.href = url;
        a.download = '嘉宾ppt.zip';
        a.click();
        // 移除a标签和url对象
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    })
}


</script>
<style scoped lang='scss'>
.title{
    z-index: -1;
    margin-top: 10px;
    width: 100%;
    height: 800px;
    background: url(https://gd-hbimg.huaban.com/02e781c80eebb222a1356b6b1e17601a686f74c2bf214-10AYRD_fw1200webp);
    background-size: cover;
    h1{
        padding-top: 200px;
        padding-left: 250px;
        color: white;
        font-size: 40px;
    }
}
.all{
    width: 100%;
    height: 2000px;
    position: relative;
}
.expert{
    position: absolute;
    left: 50%;
    margin-left: -600px;
        float: left;
        width: 1200px;
        margin-top: -450px;
        height: 1600px;
        background: linear-gradient(180deg, rgba(255, 255, 255, .6), rgba(255, 255, 255, .8),  rgba(255, 255, 255, 1));
        .title1{
            display: block;
            text-align: center;
            margin-top: 30px;
            font-size: 35px;
            background: linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .title2{
            display: block;
            text-align: center;
            margin-top: 5px;
            font-size: 18px;
            background: linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .title3{
            display: block;
            text-align: center;
            margin-top: 5px;
            font-size: 18px;
            background: linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .title4{
            display: block;
            text-align: center;
            margin-top: 50px;
            font-size: 35px;
            background: linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .guest{
            padding-left: 50px;
            padding-top: 30px;
            height: 450px;
            width: 1000px;
            margin-left: 140px;
            
        }
        .celebrity{
            width: 300px;
            height: 450px;
            background: linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%);
            border-radius: 30px;
            img{
                margin-top: 10px;
                width: 300px;
                height: 300px;
                border-radius: 50%;
            }
            h1{
                margin-top: 10px;
                text-align: center;
                color: white;
            }
            h3{
                margin-top: 10px;
                text-align: center;
                color: white;
                font-weight: lighter;
            }
        }
        .guests{
            width: 1200px;
            margin: auto;
            height: 800px;
            position: relative;
            .one,.two,.three,.four,.five,.six,.seven,.eight,.nine,.ten{
                position: absolute;
                width: 150px;
                height: 300px;
                img{
                    width: 150px;
                    height: 150px;
                    border-radius: 50%;
                }
                h3{
                    margin-top: 10px;
                    font-weight: normal;
                    text-align: center;
                }
                h4{
                    margin-top: 10px;
                    font-weight: normal;
                    text-align: center;
                }
            }   
            .one{
                top: 30px;
                left: 130px;
            }
            .two{
                top: 30px;
                left: 330px;
            }  
            .three{
                top: 30px;
                left: 530px;
            }
            .four{
                top: 30px;
                left: 730px;
            }
            .five{
                top: 30px;
                left: 930px;
            }   
            .six{
                top: 300px;
                left: 130px;
            } 
            .seven{
                top: 300px;
                left: 330px;
            } 
            .eight{
                top: 300px;
                left: 530px;
            } 
            .nine{
                top: 300px;
                left: 730px;
            } 
            .ten{
                top: 300px;
                left: 930px;
            } 

        }
    }
.body{
    width: 100%;
    height: 1200px;
    background: linear-gradient(180deg,#070D19,#526AFF,white);
}

::v-deep(.el-carousel__arrow--left){
    top: 200px;
    left: -50px;
}
::v-deep(.el-carousel__arrow--right){
    top: 200px;
    right: 120px;
}
::v-deep(.el-carousel__indicators--horizontal){
    left: 44%;
}
.go{
    position: absolute;
    top: 1400px;
    left: 45%;
    background-image: linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%);
    border-radius: 8px;
    border-style: none;
    box-sizing: border-box;
    color: #FFFFFF;
    cursor: pointer;
    flex-shrink: 0;
    font-family: "Inter UI", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
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
</style>