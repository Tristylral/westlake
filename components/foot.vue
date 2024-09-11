<template>
  <div class="footer">
    <div class="col-1">
      <h1>指导单位</h1>
      <ul>
        <li>
          <a href="" target="_blank">浙江省互联网信息办公室</a>
        </li>
        <li>
          <a href="" target="_blank">浙江省经济和信息化厅</a>
        </li>
        <li>
          <a href="" target="_blank">浙江省公安厅</a>
        </li>
        <li>
          <a href="" target="_blank">浙江省发展和改革委员会</a>
        </li>
        <li>
          <a href="" target="_blank">浙江省通信管理局</a>
        </li>
      </ul>
    </div>
    <div class="col-2">
      <h1>主办单位</h1>
      <li>
        <a href="" target="_blank">杭州市人民政府</a>
      </li>
    </div>
    <div class="col-3">
      <h1>联合主办单位</h1>
      <ul>
        <li>
          <a href="" target="_blank">中国信息通信研究院</a>
        </li>
        <li>
          <a href="" target="_blank">中国网络空间研究院</a>
        </li>
        <li>
          <a href="" target="_blank">国家工业信息安全发展研究中心</a>
        </li>
        <li>
          <a href="" target="_blank">中国电子技术标准化研究院</a>
        </li>
        <li>
          <a href="" target="_blank">工业和信息化部教育与考试中心</a>
        </li>
        <li>
          <a href="" target="_blank">杭州市滨江区人民政府</a>
        </li>
      </ul>
    </div>
    <div class="col-4">
      <h1>承办单位</h1>
      <ul>
        <li>
          <a href="" target="_blank">杭州市互联网信息办公室</a>
        </li>
        <li>
          <a href="" target="_blank">杭州市经济和信息化局</a>
        </li>
        <li>
          <a href="" target="_blank">杭州市公安局</a>
        </li>
        <li>
          <a href="" target="_blank">杭州市发展和改革委员会</a>
        </li>
        <li>
          <a href="" target="_blank">浙江省网络空间安全协会</a>
        </li>
        <li>
          <a href="" target="_blank">安恒信息</a>
        </li>
      </ul>
    </div>
    <div class="col-5">
      <h1>战略合作媒体</h1>
      <ul>
        <li>
          <a href="" target="_blank">新华网</a>
        </li>
      </ul>
    </div>
    <div class="col-6">
      <h1>特别支持媒体</h1>
      <ul>
        <li>
          <a href="" target="_blank">光明网</a>
        </li>
      </ul>
    </div>
    <hr class="hr0">
    <div class="footer_nav">
      <div class="footer_left">
        <a href="/" class="footer_logo">
          <img :src="botLogo" alt="">
        </a>
        <div class="privacy">
          <a href="/privacy">隐私协议</a>/<a href="/service">服务条款</a>
        </div>
      </div>
      <div class="footer_center">
        <ul>
          <li>
            <a href="/" data-id="0">首页</a>
          </li>
          <li>
            <a href="/agenda" data-id="1">大会议程</a>
          </li>
          <li>
            <a href="/about" data-id="2">关于大会</a>
          </li>
          <li>
            <a href="/expert" data-id="3">大咖云集</a>
          </li>
          <li>
            <a href="/wonderful_activity" data-id="4">精彩活动</a>
          </li>
          <li>
            <a href="/exhibitor" data-id="5">展商风采</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="/results" data-id="6">成果发布</a>
          </li>
          <li>
            <a href="/news" data-id="7">媒体中心</a>
          </li>
          <li>
            <a href="/attendance_guide" data-id="8">参会指南</a>
          </li>
          <li>
            <a href="/agendaLive" data-id="9">大会直播</a>
          </li>
          <li>
            <a href="/aiAsk" data-id="9">AI问答</a>
          </li>
          <li>
            <a href="/comm" data-id="9">大会评论</a>
          </li>
        </ul>
        <div class="company">
          <p>
            <span> © 服务外包论剑无疆团队</span>
            <a href="https://beian.miit.gov.cn/" target="_blank">浙ICP备2024084362号-1</a>
            <a href="https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=35018102000550" target="_blank">浙公网安备
              33010802009170号</a>
          </p>
        </div>

      </div>
      <div class="footer_right">
        <img :src="miniWestLake" alt="扫码进入小程序">
        <p>扫码进入小程序</p>
      </div>
    </div>
  </div>
</template>
<script setup lang='ts'>
import botLogo from '../../public/logo_bottom.png'
import miniWestLake from '../../public/miniWestLake.jpg'
</script>
<style scoped lang='scss'>
.footer{
  position: relative;
  z-index: -1;
  background: url(https://gd-hbimg.huaban.com/1f56f1a998cd91ec75d71950f33350454c974f31a8889-Cd5Fkz_fw1200webp);
  background-size: cover;
  height: 800px;
  width: 100%;
  .hr0{ 
    position: absolute;
    top: 450px;
    width: 100%;
    height:1px;
    border:none;
    border-top:1px dashed white;
  }
  .col-1{
    position: absolute;
    top: 80px;
    left: 10%;
    width: 200px;
    h1{
      color: white;
    }
    ul>li>a{
      color: white;
    }
    ul{
      display: block;
      margin-top: 30px;
    }
  }
  .col-2{
    position: absolute;
    top: 80px;
    left: 30%;
    width: 200px;
    h1{
      color: white;
    }
    li>a{  
      color: white;
    }
    li{
      display: block;
      margin-top: 30px;
    }
  }
  .col-3{
    position: absolute;
    top: 80px;
    left: 50%;
    width: 250px;
    h1{
      color: white;
    }
    ul>li>a{   
      color: white;
    }
    ul{
      display: block;
      margin-top: 30px;
    }
  }
  .col-4{
    position: absolute;
    top: 80px;
    left: 75%;
    width: 200px;
    h1{
      color: white;
    }
    ul>li>a{
      color: white;
    }
    ul{
      display: block;
      margin-top: 30px;
    }
  }
  .col-5{
    position: absolute;
    top: 300px;
    left: 10%;
    width: 200px;
    h1{
      color: white;
    }
    ul>li>a{
      color: white;
    }
    ul{
      display: block;
      margin-top: 30px;
    }
  }
  .col-6{
    position: absolute;
    top: 300px;
    left: 30%;
    width: 200px;
    h1{
      color: white;
    }
    ul>li>a{
      color: white;
    }
    ul{
      display: block;
      margin-top: 30px;
    }
  }
}
.footer_left{
  position: absolute;
  top: 500px;
  left: 10%;
  img{
    margin-top: -12px;
    width: 300px;
    height: 80px;
  }
  .privacy{
    margin-top: 30px;
    color: white;
    a{
      color: white;
    }
  }
}
.footer_center{
  position: absolute;
  top: 500px;
  left: 32%;
  ul>li{
    margin-left: 10px;
    display: inline-block
  }
  ul>li>a{
      color:white;
  }
  .company{
    p{
      display: block;
      margin-left: 10px;
      margin-top: 50px;
      span,a{
        color: white;
      }
    }
  }
}
.footer_right{
  position: absolute;
  top: 500px;
  left: 75%;
  img{
    width: 200px;
    height: 200px;
  }
  p{
    color: white;
  }
}
</style>