<template>
  <div class="fixedtool" v-show="backTopFlag">
    <div class="sub back" @click="backTop">
      <img :src="right5" alt="返回顶部">
      <button>返回顶部</button>
    </div>
    <div class="sub share" @click="dialogVisible = true">
      <img :src="right1" alt="分享海报">
      <button>生成海报</button>
    </div>
    <div class="sub uni" @click="miniVisible = true">
      <img :src="right4" alt="去小程序">
      <button>去小程序</button>
    </div>
  </div>
  <!--分享海报的弹出层-->
  <el-dialog v-model="dialogVisible" title="你的海报" width="30%" :before-close="handleClose">
    <h4 class="choo">请选择一张图片作为背景</h4>
    <div class="chosen">
      <button @click="one()" class="one pick"></button>
      <button @click="two()" class="two pick"></button>
      <button @click="three()" class="three pick"></button>
      <button @click="four()" class="four pick"></button>
    </div>
    <img id="pic" :src="imgArr[0]" alt="" class="choose">
    <div class="posters">
      <h1>{{textarea}}</h1>
      <img :src="miniWestLake" alt="">
    </div>
    <template #footer>
      <div class="introduc">
        <div class="ti">{{activeName}}</div>
        <div class="desc">{{des}}</div>
      </div>
      <div class="dialog-footer">
        <el-input v-model="textarea" :rows="2" placeholder="请输入您的文字" class="self" />
        <button class="downLo" @click="PosterDown(1)">下载海报</button>
      </div>
    </template>
  </el-dialog>
  <!-- 小程序 -->
  <el-dialog v-model="miniVisible" title="扫码前往小程序" width="30%" :before-close="handleClose">
    <div class="mini">
      <img :src="miniWestLake" alt="">
    </div>
  </el-dialog>
</template>
<script setup lang='ts'>
import { onMounted, onUnmounted, ref } from 'vue'
import { ElMessageBox } from 'element-plus'
import api from '../api/api.js'
import right5 from '../../public/right_5.png'
import right1 from '../../public/right_1.png'
import right4 from '../../public/right_4.png'
import miniWestLake from '../../public/miniWestLake.jpg'

const des = ref('')
const activeName = ref('')
const dialogVisible = ref(false)
const miniVisible = ref(false)
const textarea = ref('')
const imgArr = [
  "center.jpg",
  "shu.png",
  "center3.jpg",
  "loginm.webp"
]
const one =() => {
  var msg = document.getElementById("pic");
  //切换到另一个图片
  msg!.src = "https://gd-hbimg.huaban.com/b782e230e3fedd0fd43f86f74fc281c372c70687e76a8-16Xw6Q_fw1200webp";
  getPoster(1)
}
const two = () => {
  var msg = document.getElementById("pic");
  //切换到另一个图片
  msg!.src = "https://gd-hbimg.huaban.com/76d3b20b7deaa847f104311498ab2338b096bb5b77cdc6-8lUVLr_fw480webp";
  getPoster(2)
}
const three = () => {
  var msg = document.getElementById("pic");
  //切换到另一个图片
  msg!.src = "https://gd-hbimg.huaban.com/726b35b5f97a6585ca3484fec49094979ffb9501118186-kXBCK1_fw1200webp";
  getPoster(3)
}
const four = () => {
  var msg = document.getElementById("pic");
  //切换到另一个图片
  msg!.src = "https://gd-hbimg.huaban.com/ca8123811e6c2ba90af6adb0b2dd4d3d6b066bfc9b7a-SyoHJJ_fw1200webp";
  getPoster(4)
}

const getPoster = async (id:string) => {
  await api.get(`http://111.231.60.148:8999/service/active/active/auth/share/${id}`).then(res => {
      activeName.value = res.data.data.activeName
      des.value = res.data.data.des
    }, err => {
      console.log(err);
    })
}

const handleClose = (done: () => void) => {
  ElMessageBox.confirm('确定关闭窗口?')
    .then(() => {
      done()
    })
    .catch(() => {
      // catch error
    })
}
const backTopFlag = ref(false)//用来判断样式
 const backTop = () => {
      let top = document.documentElement.scrollTop//获取点击时页面的滚动条纵坐标位置
      const timeTop = setInterval(() => {
        document.documentElement.scrollTop = top -= 50//一次减50往上滑动
        if (top <= 0) {
          clearInterval(timeTop)
        }
      }, 5)//定时调用函数使其更顺滑
    }
    const handleScroll = () => {
      if (document.documentElement.scrollTop > 200) {
        backTopFlag.value = true
      } else {
        backTopFlag.value = false
      }
      //往下滑超过20则显示 否则则不显示按钮
}
    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
        getPoster(1)
    }),
    //监听滚动事件
    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })//离开页面时移除监听事件

const PosterDown = (id:string) => {
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
        a.download = '海报.zip';
        a.click();
        // 移除a标签和url对象
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    })
}

</script>
<style scoped lang='scss'>
.fixedtool{
  z-index: 500;
    position: fixed;
    overflow: hidden;
    border-radius: 10px;
    top: 300px;
    left: 96%;
    background-image: linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%);
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
}

.sub{
  width: 80px;
  height: 90px;
  padding: 12px 12px;
  color: aliceblue;
}
.sub:hover,
	.sub:focus {
    cursor: pointer;
		box-shadow: 0 0.5em 0.5em -0.4em var(--hover);
		-webkit-transform: translateY(-0.25em);
		transform: translateY(-0.25em);
	}
.sub img{
  padding-left: 5px;
  width: 35px;
  height:35px;
}
.sub button{
  color: white;
  background-image: linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%);
  font-size: 18px;
  border: none;
  width: 50px;
}
.dialog-footer {
  width: 100%;
  height: 60px;
  position: relative;
  .self{
    margin-right: 35%;
    width: 60%;
    margin-top: 10px;
  }
  .downLo{
    position: absolute;
    left: 75%;
    top: 10px;
    width: 20%;
    height: 35px;
    line-height: 35px;
    cursor: pointer;
    border-radius: 10px;
    border: 1px solid white;
    color: white;
    background-image: linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%);
  }
}

.choose{
  float: left;
  z-index: -1;
  margin-left: 5%;
  width: 90%;
  height: 240px;
}

.posters{
  width: 100%;
  height: 240px;
  position: relative;
  h1{
    position: absolute;
    top: 200px;
    left: 50px;
    color: white;
    font-size: 16px;
  }
  img{
    position: absolute;
    width: 80px;
    height: 80px;
    top: 120px;
    left: 75%;
  }
}
.mini{
  margin-left: 27%;
  img{
    width: 200px;
    height: 200px;
  }
}
.chosen{
  width: 100%;
  height: 80px;
    .pick{
    width: 21%;
    height: 60px;
    background-size: cover;
    margin-left: 2%;
    margin-right: 2%;
  }
}
.one{
  background-image: url(https://gd-hbimg.huaban.com/b782e230e3fedd0fd43f86f74fc281c372c70687e76a8-16Xw6Q_fw1200webp);
}
.two{
  background-image: url(https://gd-hbimg.huaban.com/76d3b20b7deaa847f104311498ab2338b096bb5b77cdc6-8lUVLr_fw480webp);
}
.three{
  background-image: url(https://gd-hbimg.huaban.com/726b35b5f97a6585ca3484fec49094979ffb9501118186-kXBCK1_fw1200webp);
}
.four{
    background-image: url(https://gd-hbimg.huaban.com/ca8123811e6c2ba90af6adb0b2dd4d3d6b066bfc9b7a-SyoHJJ_fw1200webp);
}
.choo{
  margin-left: 10px;
  margin-bottom: 10px;
}

.introduc{
  width: 90%;
  margin-left: 5%;
  font-family: simHei;
  .ti{
    text-align: center;
    font-size: 18px;
  }
  .desc{
    font-size: 14px;
    margin-top: 10px;
    text-align: left;
  }
}
</style>