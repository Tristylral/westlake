<template>
    <headNav />
    <div class="title">
        <h1 class="animate__animated animate__bounce">成果发布</h1>
    </div>
    <div class="mainup">
        <h1 class="animate__animated animate__pulse">蓝皮书</h1>
        <h2 class="animate__animated animate__pulse">Blue paper</h2>
        <div class="main1 animate__animated animate__backInRight">
            <div class="demo-collapse">
                <el-collapse v-model="activeName" accordion>
                    <el-collapse-item title="金融行业解决方案蓝皮书" name="1">
                        <div>
                            数字安全是未来数字化发展的重要组成部分，立足数字安全建设。备预不虞，为国常道，安恒信息结合多年网络安全、数据安全经验以及对行业发展趋势的理解和把握
                            <img :src="blue1" alt="">
                        </div>
                    </el-collapse-item>
                    <el-collapse-item title="教育行业解决方案蓝皮书" name="2">
                        <div>
                            建没数宇中国是我国的重要国策。在《数宇中国建设整体布局规划〉 (以下简称《规划》)中明确了数字中国建设按照“2522”的整体框架进行布局。
                        </div>
                        <img :src="blue2" alt="">
                    </el-collapse-item>
                    <el-collapse-item title="运营行业解决方案蓝皮书" name="3">
                        <div>
                            数字经济成为全球新一轮科技革命和产业变革的重要引擎，将开启人类数字文明的新时代。数字安全的基础性作用日益突出，在数字化建设进程中，加紧实施国家信息化发展战略，筑牢可信可控的数字安全屏障
                        </div>
                        <img :src="blue3" alt="">
                    </el-collapse-item>
                    <el-collapse-item title="网信行业解决方案蓝皮书" name="4">
                        <div>
                            建没数宇中国是我国的重要国策。在《数宇中国建设整体布局规划〉 (以下简称《规划》)中明确了数字中国建设按照“2522”的整体框架进行布局。
                        </div>
                        <img :src="blue4" alt="">
                    </el-collapse-item>
                </el-collapse>
            </div>
        </div>
        <img :src="indexbg7" alt="">
    </div>
    <div class="mainmid">
        <h1 :class="[{'animate__animated':isF},{'animate__jello':isF}]">新品发布</h1>
        <h2>New Product Launch</h2>
        <div class="allin">
            <div class="part one" :class="[{'animate__animated':isY},{'animate__fadeInLeft':isY}]">
                <div class="image first">
                </div>
                <p>下一代防火墙</p>
                <span>明御防火墙（DAS-TGFW）秉持“持续边界安全态势改善”的理念，以用户为核心，以边界、应用、威胁、权限为防护对象，构建了以资产...</span>
            </div>
            <div class="part two" :class="[{'animate__animated':isR},{'animate__fadeInUp':isR}]">
                <div class="image second">
                </div>
                <p>安全托管运营服务MSS</p>
                <span>提供体系化、常态化的安全托管服务，协助构建7*24小时全天候、全方位的安全运营体系， 实现安全风险从发现到响应处置的闭环，持...</span>
            </div>
            <div class="part three" :class="[{'animate__animated':isQ},{'animate__fadeInRight':isQ}]">
                <div class="image third">
                </div>
                <p>西湖论剑</p>
                <span>西湖论剑·网络安全大会自2012年创办，是国内首个已举办十周年的网络安全大会。十届以来，大会线下参会嘉宾累计超过10000人次，线上直播观看累计超过2500万人次，已成为国内网络安全领域的一张“金名片”...</span>
            </div>
        </div>
    </div>
    <div class="maindown">
        <h1 :class="[{'animate__animated':isC},{'animate__flipInY':isC}]">相关书籍</h1>
        <h2>Books</h2>
        <div class="pic">
            <img :src="indexbg1" alt="">
        </div>
        <div class="main3">
            <el-carousel :interval="5000" arrow="always" autoplay="false">
                <el-carousel-item>
                    <img :src="book1" alt="">
                </el-carousel-item>
                <el-carousel-item>
                    <img :src="book2" alt="">
                </el-carousel-item>
            </el-carousel>
            <div class="rightpart">
                <h3>数据安全与隐私计算</h3>
                <h4>本书首先介绍了业内多个具备代表性的数据安全理论及实践框架，从数
                    据常见风险出发，引出数据安全保护最佳实践，然后介绍了数字经济时代数据要素市场的基本信息，基于构建数据要素市场、促进数据合规安全流通，释放数据价值等场景中的实践，抽象并总结了一套数据要素可信、安全、合
                    规流通的体系架构，包括数据安全保护技术与保护数据价值释放的隐私计算 技术，最后针对政务、金融、电力能源、公安行业等重点行业，分析了数据
                    安全与数据孤岛现象的根本原因，介绍了数据安全实践案例，以及如何通过 部署数据要素流通体系架构，打破“数据壁垒”，促进多方数据融合计算的实践案例。
                    本书可以作为高校学生、隐私计算技术从业者、数据要素市场从业者、 数据安全行业从业者的入门读物，也可作为相关机构或组织进行数据要素市 场流通体系建设实践的参考指南。</h4>
            </div>
        </div>
    </div>
    <subNav />
    <foot />
</template>
<script setup lang="ts">
import headNav from '../../components/headNav.vue';
import subNav from '../../components/subNav.vue';
import foot from '../../components/foot.vue';
import { onMounted, ref } from 'vue';

import blue1 from '../../../public/blue1.jpg'
import blue2 from '../../../public/blue2.jpg'
import blue3 from '../../../public/blue3.jpg'
import blue4 from '../../../public/blue4.jpg'
import indexbg7 from '../../../public/index_bg7.png'
import indexbg1 from '../../../public/index_bg1.png'
import book1 from '../../../public/book1.png'
import book2 from '../../../public/book2.png'

const isF = ref(false)
const isY = ref(false)
const isR = ref(false)
const isQ = ref(false)
const isC = ref(false)
const windowScrollListener = () => {
  //获取操作元素最顶端到页面顶端的垂直距离
  var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
  if (scrollTop > 500) {
    isF.value = true
  }
  if (scrollTop > 650) {
    isY.value = true
    isR.value = true
    isQ.value = true
  }
  if (scrollTop > 1200) {
    isC.value = true
  }
}
onMounted(() => {
  window.addEventListener('scroll', windowScrollListener)
    })
const activeName = ref('1')
</script>
<style scoped lang='scss'>
.title{
    z-index: -1;
    margin-top: 80px;
    width: 100%;
    height: 500px;
    background: url(https://gd-hbimg.huaban.com/67af5818a051e4de71a40de0ba472431f9ca9a1771b689-rl5Sxv_fw1200webp);
    background-size: cover;
    h1{
        padding-top: 200px;
        padding-left: 250px;
        color: rgb(87, 87, 87);
        font-size: 40px;
    }
}
.mainup,.mainmid,.maindown{
    height: 750px;
    width: 100%;
}
.main3{
    width: 1000px;
    height: 500px;
    margin: auto;
}
.mainup,.maindown{
    background-color: #fff;
}
.mainmid{
    background-color: rgb(203, 230, 240);
    position: relative;
    h1,h2{
        background: linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-align: center;
    }
    h1{
        padding-top: 50px;
        font-size: 36px;
    }
    .allin{
        width: 1700px;
        position: absolute;
        left: 50%;
        margin-left: -850px;
        margin-top: -100px;
    }
    .part{
        width: 400px;
        height: 450px;
        background: white;
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
.mainup{
    position: relative;
    img{
        position: absolute;
        top: 100px;
        left: 1400px;
    }
    h1,h2{
        background: linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-align: center;
    }
    h1{
        padding-top: 50px;
        font-size: 36px;
    }
    .main1{
        position: relative;
        width: 700px;
        height: 500px;
        margin-left: 300px;
        margin-top: 50px;
        border: 1px solid white;
        box-shadow: rgba(131, 131, 131, 0.5) 0 1px 30px;
        transition-duration: .1s;
        img{
            border: 0.5px solid rgb(146, 146, 146);
            position: absolute;
            left: 800px;
            width: 450px;
            height: 300px;
        }

    }
}

.maindown{
    .pic{
        float: left;
    }
    h1,h2{
        background: linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-align: center;
    }
    h1{
        padding-top: 50px;
        font-size: 36px;
    }
    .main3{
        margin-top: 50px;
        background: url(https://gd-hbimg.huaban.com/2ca2d2a15a6460603e91ab25fd1b76c8b65fcb612a8918-y9KjwX_fw480webp);
        background-size: cover;
        background-repeat: no-repeat;
        border: 1px solid white;
        box-shadow: rgba(131, 131, 131, 0.5) 0 1px 30px;
        transition-duration: .1s;
        position: relative;
        .rightpart{
            position: absolute;
            left: 500px;
            top: 0px;
            width: 400px;;
            margin-top: 80px;
            h4{
                margin-top: 30px;
                font-weight: normal;
            }
        }
    }
}
</style>

<style lang="scss" scoped>
    ::v-deep(.el-carousel__container){
        margin-top: 80px;
        margin-left: 150px;
        width: 320px;
        height: 300px;
        img{
            margin-top: 50px;
            margin-left: 50px;
            width: 220px;
            height: 220px;
        }
    }
    ::v-deep(.el-tabs__content){
        width: 800px;
        height: 500px;
        .el-tab-pane{
            width: 700px;
            height: 400px;
        }
    }
    ::v-deep(.el-collapse-item__header){
        display: block;
        margin-left: -200px;
        font-weight: bold;
        font-size: 20px;
        background: linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    ::v-deep(.el-collapse-item__wrap){
        font-weight: bold;
        display: block;
        margin-left: 30px;
    }
    ::v-deep(.el-collapse-item){
        height: 100px;
    }
</style>