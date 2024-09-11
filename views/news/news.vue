<template>
    <headNav />
    <div class="title">
        <h1 class="animate__animated animate__fadeInTopLeft">媒体中心</h1>
    </div>
    <div class="body">
        <el-tabs type="border-card" class="demo-tabs animate__animated animate__fadeIn animate__delay-1s">
            <el-tab-pane>
                <template #label>
                    <span class="custom-tabs-label">
                        <el-icon>
                            <calendar />
                        </el-icon>
                        <span>精彩视频</span>
                    </span>
                </template>
                <div class="main3">
                    <video :poster="bg10" height="600px" controls="true" autoplay="true"
                        width="1000px" src="https://img2023.gcsis.cn/2023/3/dd8d928e6e734c9592cb5833597564c6.mp4"
                        class="first"></video>
                    <img :src="iconbg2" alt="" class="bg2">
                    <img :src="indexbg1" alt="" class="bg1">
                    <div class="roll">
                        <el-row>
                            <el-col :span="6">
                                <el-statistic title="主题演讲" :value="outputValue" />
                            </el-col>
                            <el-col :span="6">
                                <el-statistic title="行业从者" :value="outputValue2" />
                            </el-col>
                            <el-col :span="6">
                                <el-statistic title="与会嘉宾" :value="outputValue3" />
                            </el-col>
                            <el-col :span="6">
                                <el-statistic title="直播观看" :value="outputValue4" />
                            </el-col>
                            <el-col :span="6">
                                <el-statistic title="合作伙伴" :value="outputValue5" />
                            </el-col>
                            <el-col :span="6">
                                <el-statistic title="点赞数量" :value="outputValue6" />
                            </el-col>
                            <el-col :span="6">
                                <el-statistic title="评论数量" :value="outputValue7" />
                            </el-col>
                            <el-col :span="6">
                                <el-statistic title="讨论热度" :value="outputValue8" />
                            </el-col>
                        </el-row>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane>
                <template #label>
                    <span class="custom-tabs-label">
                        <el-icon>
                            <calendar />
                        </el-icon>
                        <span>精彩图片</span>
                    </span>
                </template>
                <div class="main2">
                    <img :src="iconbg2" alt="" class="bg2">
                    <img :src="indexbg1" alt="" class="bg1">
                    <div class="all2">
                        <div class="unit n1">
                            <img :src="n1" alt="">
                        </div>
                        <div class="unit n2">
                            <img :src="n2" alt="">
                        </div>
                        <div class="unit n3">
                            <img :src="n3" alt="">
                        </div>
                        <div class="unit n4">
                            <img :src="n4" alt="">
                        </div>
                        <div class="unit n5">
                            <img :src="n5" alt="">
                        </div>
                        <div class="unit n6">
                            <img :src="n6" alt="">
                        </div>
                        <div class="unit n7">
                            <img :src="n7" alt="">
                        </div>
                        <div class="unit n8">
                            <img :src="n8" alt="">
                        </div>
                        <div class="unit n9">
                            <img :src="n9" alt="">
                        </div>
                        <div class="unit n10">
                            <img :src="n10" alt="">
                        </div>
                        <div class="unit n11">
                            <img :src="n11" alt="">
                        </div>
                        <div class="unit n12">
                            <img :src="n12" alt="">
                        </div>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane>
                <template #label>
                    <span class="custom-tabs-label">
                        <el-icon>
                            <calendar />
                        </el-icon>
                        <span>新闻中心</span>
                    </span>
                </template>
                <div class="main">
                    <img :src="iconbg2" alt="" class="bg2">
                    <img :src="indexbg1" alt="" class="bg1">
                    <div class="ppt">
                        <img :src="four" alt="">
                        <h1 class="bigtitle">【重磅干货】大家都关心的嘉宾PPT下载指南来啦！</h1>
                        <h4 class="subtitle">指路贴来啦！大家都关心的嘉宾PPT下载指南在这里！一图解锁西湖论剑官网小程序下载路径，看众多专家真知灼见，干货满满 ，引领行业思辨！</h4>
                        <div class="box">
                            <h4>西湖论剑</h4>
                        </div>
                        <h4 class="date">2023-06-12</h4>
                    </div>
                    <div class="ppt">
                        <img :src="jb" alt="">
                        <h1 class="bigtitle">2023西湖论剑·数字安全大会举办</h1>
                        <h4 class="subtitle">央广网杭州6月8日消息(记者
                            姜頔)自山下而仰山巅谓之高远，自山前而窥山后谓之深远，自近山而望远山谓之平远。6月7日，以“数字安全@数字中国”为主题的2023西湖论剑·数字安全大会在杭州成功举办。</h4>
                        <div class="box">
                            <h4>西湖论剑</h4>
                        </div>
                        <h4 class="date">2023-06-08</h4>
                    </div>
                    <div class="ppt">
                        <img :src="jb" alt="">
                        <h1 class="bigtitle">2023西湖论剑·数字安全大会在杭举行</h1>
                        <h4 class="subtitle">人民网杭州6月7日电
                            （张帆）今天，以“数字安全@数字中国”为主题的2023西湖论剑·数字安全大会（原西湖论剑·网络安全大会）在杭州举行。大会围绕“数字安全赋能数字中国”开展百余场专题报告，输出数字中国安全建设前沿经验，为助力千行百业数字化转型、守护数字中国建设成果、筑牢中国的数字安全屏障建言献策。
                        </h4>
                        <div class="box">
                            <h4>西湖论剑</h4>
                        </div>
                        <h4 class="date">2023-06-10</h4>
                    </div>
                    <div class="ppt">
                        <img :src="newTen" alt="">
                        <h1 class="bigtitle">“新十年”扬帆起航 2023西湖论剑·数字安全大会举办</h1>
                        <h4 class="subtitle">
                            6月7日，以“数字安全@数字中国”为主题的2023西湖论剑·数字安全大会（原西湖论剑·网络安全大会）成功举办。本届大会设一个主论坛、一个数字安全成果展、十个平行论坛和一个科普讲坛，来自政府部门、科研机构、高校以及数字生态从业者等2000余人出席大会。
                        </h4>
                        <div class="box">
                            <h4>西湖论剑</h4>
                        </div>
                        <h4 class="date">2023-06-09</h4>
                    </div>
                    <div class="ppt">
                        <img :src="two" alt="">
                        <h1 class="bigtitle">方滨兴：数据资源已成国家战略性资源</h1>
                        <h4 class="subtitle">在日前举行的2023西湖论剑·数字安全大会论坛上，《2023 中国数字安全能力洞察报告》发布，《报告》对数字安全的未来提出了展望。</h4>
                        <div class="box">
                            <h4>西湖论剑</h4>
                        </div>
                        <h4 class="date">2023-06-10</h4>
                    </div>
                </div>
            </el-tab-pane>
        </el-tabs>
    </div>
    <div class="bot"></div>
    <subNav />
    <foot />
</template>
<script setup lang='ts'>
import headNav from '../../components/headNav.vue';
import subNav from '../../components/subNav.vue';
import foot from '../../components/foot.vue'
import { Calendar } from '@element-plus/icons-vue'
import { ref } from 'vue'
import { useTransition } from '@vueuse/core'
import bg10 from '../../../public/背景10.webp'
import iconbg2 from '../../../public/icon_bg2.png'
import indexbg1 from '../../../public/index_bg1.png'
import n1 from '../../../public/n1.jpeg'
import n2 from '../../../public/n2.jpg'
import n3 from '../../../public/n3.jpg'
import n4 from '../../../public/n4.jpg'
import n5 from '../../../public/n5.jpg'
import n6 from '../../../public/n6.jpg'
import n7 from '../../../public/n7.jpg'
import n8 from '../../../public/n8.jpg'
import n9 from '../../../public/n9.jpg'
import n10 from '../../../public/n10.jpeg'
import n11 from '../../../public/n11.jpeg'
import n12 from '../../../public/n12.jpeg'
import four from '../../../public/4.jpg'
import jb from '../../../public/举办.jpg'
import newTen from '../../../public/新十年.jpg'
import two from '../../../public/2.jpg'
const source = ref(0)
const source2 = ref(0)
const source3 = ref(0)
const source4 = ref(0)
const source5 = ref(0)
const source6 = ref(0)
const source7 = ref(0)
const source8 = ref(0)
const outputValue = useTransition(source, {
  duration: 3000,
})
const outputValue2 = useTransition(source2, {
  duration: 5000,
})
const outputValue3 = useTransition(source3, {
  duration: 4000,
})
const outputValue4 = useTransition(source4, {
  duration: 3000,
})
const outputValue5 = useTransition(source5, {
  duration: 3000,
})
const outputValue6 = useTransition(source6, {
  duration: 5000,
})
const outputValue7 = useTransition(source7, {
  duration: 4000,
})
const outputValue8 = useTransition(source8, {
  duration: 5000,
})
source.value = 600
source2.value = 7000
source3.value = 2000
source4.value = 2600
source5.value = 550
source6.value = 10000
source7.value = 3000
source8.value = 8000
</script>
<style scoped lang='scss'>
.title{
    z-index: -1;
    margin-top: 80px;
    width: 100%;
    height: 600px;
    background: url(https://gd-hbimg.huaban.com/778b265a87bb43228c5638b8e29921346a276319119bb7-IdaQxG_fw1200webp);
    background-size: cover;
    h1{
        padding-top: 200px;
        padding-left: 260px;
        color: white;
        font-size: 40px;
    }
}
*{
            margin:0;
            padding:0;
        }
        .body{
            width: 100%;
            height: 800px;
            background-color: #fff;
        }
        .demo-tabs > .el-tabs__content {
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
    padding: 30px 20px;
    height: 100px;
    font-size: 24px;
}
::v-deep(.el-tabs__nav){
    left: 50%;
    margin-left: -440px;
}
::v-deep(.el-tabs__nav-wrap){
    background: url(https://gd-hbimg.huaban.com/4a979906aaeacaee8704406298df149257635155e510e-Z4WXO7_fw480webp);
    background-size: cover;
}
.main{
    height: 1600px;
    width: 100%;
    background-color: #fff;
    .bg1{
        float: left;
        padding-top: 300px;
    }
    .bg2{
        padding-top: 800px;
       float: right;
    }
    .ppt{
    width: 1200px;
    height: 280px;
    margin: 30px auto;
    background-color: #fff;
    position: relative;
        img{
            position: absolute;
            top: 40px;
            left: 60px;
            width: 360px;
            height: 200px;
        }
        .bigtitle{
            position: absolute;
            top: 60px;
            left: 460px;
            font-size: 24px;
        }
        .subtitle{
            position: absolute;
            top: 100px;
            left: 460px;
            font-weight: lighter;
        }
        .box{
            position: absolute;
            top: 200px;
            left: 460px;
            width: 100px;
            height: 40px;
            border-radius:20px;
            background-image: linear-gradient(92.88deg, #456EB6 9.16%, #6643CC 43.89%, #673FD7 64.72%);
            h4{
                text-align: center;
                line-height: 40px;
                color: white;
                font-weight: normal;
                font-size: 14px;
            }
        }
        .date{
            font-weight: lighter;
            position: absolute;
            left: 700px;
            top: 210px;
        }
    }
    .ppt:hover{
    background-color: rgb(261, 261, 261);
    }
}
.bot{
    width: 100%;
    height: 1000px;
    background-color: #fff;
    z-index: -10;
}
.all2{
    width: 1600px;
    position: absolute;
    left: 50%;
    margin-left: -800px;
}
.main2{
    height: 1700px;
    width: 100%;
    background-color: #fff;
    position: relative;
    .bg1{
        float: left;
        padding-top: 300px;
    }
    .bg2{
        padding-top: 800px;
       float: right;
    }
    .unit{
        position: absolute;
        width: 400px;
        height: 300px;
        transition: all 0.4s;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .unit:hover{
        box-shadow: 0 8px 8px 0 grey;
        transform: translate(0, -10px);
        transform: scale(1.1)
    }
    .n1{
        top: 60px;
        left: 130px;
    }
    .n2{
        top: 60px;
        left: 630px;
    }
    .n3{
        top: 60px;
        left: 1130px;
    }
    .n4{
        top: 460px;
        left: 130px;
    }
    .n5{
        top: 460px;
        left: 630px;
    }
    .n6{
        top: 460px;
        left: 1130px;
    }
    .n7{
        top: 860px;
        left: 130px;
    }
    .n8{
        top: 860px;
        left: 630px;
    }
    .n9{
        top: 860px;
        left: 1130px;
    }
    .n10{
        top: 1260px;
        left: 130px;
    }
    .n11{
        top: 1260px;
        left: 630px;
    }
    .n12{
        top: 1260px;
        left: 1130px;
    }
}
.main3{
    height: 1600px;
    width: 100%;
    background-color: #fff;
    position: relative;
    .bg1{
        float: left;
        padding-top: 300px;
    }
    .bg2{
        padding-top: 800px;
       float: right;
    }
    .first{
        width: 1000px;
        height: 600px;
        position: absolute;
        top: 600px;
        left: 50%;
        margin-left: -500px;
        z-index: 100;
    }
    .second{
        width: 1000px;
        height: 600px;
        position: absolute;
        top: 800px;
        left: 360px;
        z-index: 100;
    }
}

.el-col {
  text-align: center;
}
.roll{
    width: 100%;
    height: 400px;
}
::v-deep(.el-statistic__head){
    margin-top: 100px;
    font-weight: lighter;
    font-size: 24px;
    background: linear-gradient(92.88deg, #456EB6 9.16%, #6643CC 43.89%, #673FD7 64.72%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    height: 60px;
}
::v-deep(.el-statistic__number){
    font-size: 48px;
    background: linear-gradient(92.88deg, #456EB6 9.16%, #6643CC 43.89%, #673FD7 64.72%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>