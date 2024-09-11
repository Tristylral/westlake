<template>
<headNav/>
<subNav/>
<div class="title">
    <h1 class="animate__animated animate__fadeInDownBig">关于大会</h1>
</div>
<div class="body">
    <img :src="iconbg2" alt="" class="bg2">
    <img :src="indexbg1" alt="" class="bg1">
    <div class="movie animate__animated animate__fadeInTopLeft">
        <video poster="https://gd-hbimg.huaban.com/2fde7c0da1c03d6514549e90d1f0aa84d13a902cb26a-T05J1d_fw1200webp" height="350px" controls="true" autoplay="false" width="600px" src="https://img2023.gcsis.cn/2023/3/dd8d928e6e734c9592cb5833597564c6.mp4"></video>
    </div>
    <div class="intro animate__animated animate__fadeInBottomRight">
        <h1>大会介绍</h1>
        <h3>About Conference</h3>
        <div class="detail">
            西湖论剑·网络安全大会自2012年创办，是国内首个已举办十周年的网络安全大会。十届以来，大会线下参会嘉宾累计超过10000人次，线上直播观看累计超过2500万人次，已成为国内网络安全领域的一张“金名片”。历届大会期间，国家部委、省市领导，院士、知名专家和优秀企业代表齐聚杭州，共商数字时代的安全之道。

2023年是全面贯彻落实党的二十大精神的开局之年，为深入学习贯彻党的二十大精神，推动落实《数字中国建设整体布局规划》尤其是筑牢数字安全屏障的要求，推进数字安全人才培养、科技创新、产业融合发展，以保障数字政务、数字经济、数字社会等数字化生态安全发展。在迎来大会十一年之际，由“西湖论剑·网络安全大会”升级为“西湖论剑·数字安全大会”，定于5月5日-8日在杭州举办。

本届大会主题为“数字安全@数字中国”，大会将邀请相关政府部门、科研院所，以及数字生态各领域的参与者、构建者、守护者，共同探讨数字中国的发展和安全之道。大会将设主论坛、数字安全成果展、多个平行论坛及研讨会，结合数字安全前沿技术、行业应用、人才培养、企业治理等议题展开讨论、展示成果。
        </div>
    </div>
</div>


<foot/>
</template>
<script setup lang='ts'>
import headNav from '../../components/headNav.vue';
import subNav from '../../components/subNav.vue';
import foot from '../../components/foot.vue'
import iconbg2 from '../../../public/icon_bg2.png'
import indexbg1 from '../../../public/index_bg1.png'
</script>
<style scoped lang='scss'>
.title{
    margin-top: 80px;
    z-index: -1;
    width: 100%;
    height: 400px;
    background: url(https://gd-hbimg.huaban.com/418340dadb3589c71894e65302f7cc83906e29e9178f62-T2yO9w_fw1200webp);
    background-size: cover;
    h1{
        padding-top: 8%;
        padding-left:15%;
        color: white;
        font-size: 36px;
    }
}
.body{
    position: relative;
    height: 800px;
    width: 100%;
    .bg2{
        z-index: -1;
        position: absolute;
        top: 100px;
        left: 80%;
    }
    .bg1{
        z-index:-1;
        position: absolute;
        top: 400px;
    }
    .movie{
        width: 600px;
        height: 350px;
        position: absolute;
        top: 100px;
        left: 15%;
    }
    .intro{
        width: 700px;
        height: 470px;
        position: absolute;
        top: 200px;
        left: 45%;
        background: url(https://gd-hbimg.huaban.com/ca9fc7015b3c62111c6a6cbbcdcfcac30d5feb0311dd8d-pYbFhI_fw1200webp);
        z-index: -1;
        h1{
            margin-top: 50px;
            margin-left: 150px;
            color: white;
        }
        h3{
            margin-top: 5px;
            margin-left: 150px;
            color: white;
        }
        .detail{
            margin-top: 20px;
            margin-left: 150px;
            width: 500px;
            height: 210px;
            overflow-y:auto;
            color: white;
    }
}
}
.detail::-webkit-scrollbar {
    width: 5px;
    height: 10px;
}

/* 滚动条上的滚动滑块 */
.detail::-webkit-scrollbar-thumb {
    background-color: #49b1f5;
    /* 关键代码 */
    background-image: -webkit-linear-gradient(45deg,
            rgba(255, 255, 255, 0.4) 25%,
            transparent 25%,
            transparent 50%,
            rgba(255, 255, 255, 0.4) 50%,
            rgba(255, 255, 255, 0.4) 75%,
            transparent 75%,
            transparent);
    border-radius: 32px;
}

/* 滚动条轨道 */
.detail::-webkit-scrollbar-track {
    background-color: #dbeffd;
    border-radius: 32px;
}

</style>