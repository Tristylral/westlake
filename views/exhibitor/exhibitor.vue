<template>
    <headNav />
    <subNav />
    <div class="main">
        <h1 class="animate__animated animate__flipInX animate__delay-1s">展商风采</h1>
        <video :poster="poste" height="350px" controls="true" autoplay="false" width="600px"
            src="https://img2023.gcsis.cn/2023/3/dd8d928e6e734c9592cb5833597564c6.mp4"></video>
    </div>
    <div class="allin">
        <div class="show">
            <img :src="earth" alt="" class="earthBg">
            <h1>展商风采</h1>
            <h2>Exhibitor Style</h2>
            <div class="logo1 animate__animated animate__pulse animate__infinite">
                <img :src="logo" alt="">
            </div>
            <div class="logo2 logo animate__animated animate__pulse animate__infinite">
                <img :src="oo" alt="">
            </div>
            <div class="logo3 logo animate__animated animate__pulse animate__infinite">
                <img :src="tt" alt="">
            </div>
            <div class="logo4 logo animate__animated animate__pulse animate__infinite">
                <img :src="hh" alt="">
            </div>
            <div class="logo5 logo animate__animated animate__pulse animate__infinite">
                <img :src="ff" alt="">
            </div>
            <div class="logo6 logo animate__animated animate__pulse animate__infinite">
                <img :src="vv" alt="">
            </div>
            <div class="logo7 logo animate__animated animate__pulse animate__infinite">
                <img :src="ss" alt="">
            </div>
            <div class="logo8 logo animate__animated animate__pulse animate__infinite">
                <img :src="ee" alt="">
            </div>
            <div class="logo9 logo animate__animated animate__pulse animate__infinite">
                <img :src="ii" alt="">
            </div>
            <div class="logo10 logo animate__animated animate__pulse animate__infinite">
                <img :src="nn" alt="">
            </div>
        </div>
    </div>
    <foot />
</template>
<script setup lang='ts'>
import headNav from '../../components/headNav.vue';
import subNav from '../../components/subNav.vue';
import foot from '../../components/foot.vue';
import poste from '../../../public/背景10.webp';
import earth from '../../../public/earth.png';
import logo from '../../../public/logo.png'
import oo from '../../../public/11.png'
import tt from '../../../public/22.png'
import hh from '../../../public/33.png'
import ff from '../../../public/44.png'
import vv from '../../../public/55.png'
import ss from '../../../public/66.png'
import ee from '../../../public/77.png'
import ii from '../../../public/88.png'
import nn from '../../../public/99.png'
</script>
<style scoped lang='scss'>
.main{
    position: relative;
    z-index: -1;
    width:100%;
    height: 1000px;
    background: url(https://gd-hbimg.huaban.com/a1bd1f36bca18a0e3c3c54e1737f432e6a9b3b2f13cd7e-mCLG5O_fw1200webp);
    h1{
        position: absolute;
        top: 200px;
        left: 45%;
        color: white;
        font-size: 40px;
    }
    video{
        width: 1000px;
        height: 500px;
        position: absolute;
        top: 350px;
        left: 50%;
        margin-left: -500px;
        z-index: 100;
    }
}

.show{
    margin-top: 50px;
    margin-bottom: 200px;
    position: relative;
    height: 1000px;
    width: 100%;
    h1,h2{
        position: absolute;
        background: linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    h1{
        top: 150px;
        left: 46%;
    }
    h2{
        top: 200px;
        left: 45%;
    }
    .logo{
        width: 180px;
        height: 180px;
        border-radius: 50%;
        background: white;
    }
    .logo1{
        position: absolute;
        top: 40%;
        left: 50%;
        margin-left: -125px;
        width: 250px;
        height: 250px;
        border-radius: 50%;
        background: white;
        img{
            padding-top: 100px;
            padding-left: 40px;
            width: 180px;
            height: 50px;
        }
    }
    .logo2{
        position: absolute;
        top: 25%;
        left: 28%;
        img{
            padding-top: 40px;
            padding-left: 15px;
            width: 150px;
            height: 100px;
        }
    }
    .logo3{
        position: absolute;
        top: 70%;
        left: 30%;
        img{
            padding-top: 40px;
            padding-left: 15px;
            width: 150px;
            height: 100px;
        }
    }
    .logo4{
        position: absolute;
        top: 85%;
        left: 50%;
        margin-left: -75px;
        overflow: hidden;
        img{
            padding-top: 30px;
            padding-left: 15px;
            width: 150px;
            height: 120px;
        }
    }
    .logo5{
        position: absolute;
        top: 70%;
        left: 60%;
        img{
            padding-top: 40px;
            padding-left: 15px;
            width: 150px;
            height: 100px;
        }
    }
    .logo6{
        position: absolute;
        top: 30%;
        left: 63%;
        img{
            padding-top: 40px;
            padding-left: 15px;
            width: 150px;
            height: 100px;
        }
    }
    .logo7{
        position: absolute;
        top: 2%;
        left: 30%;
        overflow: hidden;
        img{
            padding-top: 15px;
            padding-left: 15px;
            width: 150px;
            height: 150px;
        }
    }
    .logo8{
        position: absolute;
        top: 2%;
        left: 60%;
        overflow: hidden;
        img{
            padding-top: 30px;
            padding-left: 15px;
            width: 150px;
            height: 120px;
        }
    }
    .logo9{
        position: absolute;
        top: 50%;
        left: 18%;
        overflow: hidden;
        img{
            padding-top: 20px;
            padding-left: 15px;
            width: 150px;
            height: 140px;
        }
    }
    .logo10{
        position: absolute;
        top: 50%;
        left: 72%;
        overflow: hidden;
        img{
            padding-top: 10px;
            padding-left: 15px;
            width: 150px;
            height: 150px;
        }
    }
}
.earthBg{
    width: 100%;
    height: 100%;
}
</style>