<template>
  <headNav />
  <subNav />
  <div class="title">
    <h1>个人中心</h1>
  </div>
  <div class="person">
    <div class="inputer">
      <el-upload
        class="avatar-uploader"
        action="http://111.231.60.148:8999/service/user/userInfo/auth/imageUpload"
        :show-file-list="false"
        :on-success="handleAvatarSuccess">
        <img v-if="imageUrl" :src="imageUrl" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
      <button class="checkin" @click="checknow">{{insign ? "大会签到" : "已签到"}}</button>
      <h1>{{formLabelAlign.name}}</h1>
      <div class="audio">线上观众</div>
      <h4>我的积分</h4>
      <img :src="credit1" alt="">
      <h2>{{formLabelAlign.integral}}</h2>
      <span class="company same">性别:{{formLabelAlign.sex}}</span>
      <span class="job same">年龄:{{formLabelAlign.age}}</span>
      <span class="tele same">联系电话:{{formLabelAlign.phone}}</span>
      <el-button plain @click="dialogTableVisible = true" class="change">
        修改资料
      </el-button>
      <el-button plain @click="LogOut" class="change">
        退出登录
      </el-button>
      <el-dialog v-model="dialogTableVisible" title="修改个人资料" width="800">
        <el-form :label-position="labelPosition" label-width="auto" :model="formLabelAlign" style="max-width: 600px">
          <el-form-item label="姓名">
            <el-input v-model="formLabelAlign.name" />
          </el-form-item>
          <el-form-item label="年龄">
            <el-input v-model="formLabelAlign.age" />
          </el-form-item>
          <el-form-item label="联系电话">
            <el-input v-model="formLabelAlign.phone" />
          </el-form-item>
          <el-form-item label="性别">
            <el-input v-model="formLabelAlign.sex" />
          </el-form-item>
          <el-button type="primary" @click="dialogTableVisible = false; finish()">完成</el-button>
        </el-form>
      </el-dialog>
    </div>
    <div class="subnav">
      <el-tabs type="border-card" class="demo-tabs">
        <el-tab-pane>
          <template #label>
            <span class="custom-tabs-label">
              <img :src="subscribe2png" alt="" class="ic">
              <span class="sub">我的活动</span>
            </span>
          </template>
          <div class="subc">
            <el-tabs type="border-card" class="demo-tabs">
              <el-tab-pane>
                <template #label>
                  <span class="custom-tabs-label">
                    <span class="submeet">一期活动订阅</span>
                  </span>
                </template>
                <div class="act">
                  <div class="talk">
                    <div class="saber" @click="backToB">MSS安全托管运营服务论坛</div>
                    <button class="cribe" @click="subscribe5">{{ischange5 ? "订阅" : "取消订阅"}}</button>
                  </div>
                  <div class="talk">
                    <div class="saber" @click="backToB">2023西湖论剑·生态“朋友圈”</div>
                    <button class="cribe" @click="subscribe6">{{ischange6 ? "订阅" : "取消订阅"}}</button>
                  </div>
                  <div class="talk">
                    <div class="saber" @click="backToB">金融行业网络安全论坛</div>
                    <button class="cribe" @click="subscribe7">{{ischange7 ? "订阅" : "取消订阅"}}</button>
                  </div>
                  <div class="talk">
                    <div class="saber" @click="backToB">精彩干货不间断</div>
                    <button class="cribe" @click="subscribe8">{{ischange8 ? "订阅" : "取消订阅"}}</button>
                  </div>
                </div>
              </el-tab-pane>
              <el-tab-pane>
                <template #label>
                  <span class="custom-tabs-label">
                    <span class="submeet">二期活动订阅</span>
                  </span>
                </template>
                <div class="contain">
                  <div class="sword">
                    <div class="saber" @click="backToA">格致论道@西湖论剑</div>
                    <button class="cribe" @click="subscribe">{{ischange ? "订阅" : "取消订阅"}}</button>
                  </div>
                  <div class="sword">
                    <div class="saber" @click="backToA">西湖论剑安全特训营·网络攻防实战</div>
                    <button class="cribe" @click="subscribe2">{{ischange2 ? "订阅" : "取消订阅"}}</button>
                  </div>
                  <div class="sword">
                    <div class="saber" @click="backToA">奋进十年</div>
                    <button class="cribe" @click="subscribe3">{{ischange3 ? "订阅" : "取消订阅"}}</button>
                  </div>
                  <div class="sword">
                    <div class="saber" @click="backToA">西湖论剑安全特训营·江湖招募令</div>
                    <button class="cribe" @click="subscribe4">{{ischange4 ? "订阅" : "取消订阅"}}</button>
                  </div>
                </div>
              </el-tab-pane>
            </el-tabs>
          </div>
        </el-tab-pane>
        <el-tab-pane>
          <template #label>
            <span class="custom-tabs-label">
              <img :src="credit2" alt="" class="ic">
              <span class="sub">我的积分</span>
            </span>
          </template>
          <div class="cred">
            <el-tabs type="border-card" class="demo-tabs">
              <el-tab-pane>
                <template #label>
                  <span class="custom-tabs-label">
                    <span class="subcoin">积分规则</span>
                  </span>
                </template>
                <div class="rule">
                  <span class="pro">用户注册</span>
                  <span>+100积分</span>
                  <span>注册账号即送100积分</span>
                  <el-divider border-style="dashed" />
                  <span class="pro">订阅直播</span>
                  <span>+200积分</span>
                  <span>订阅即送200积分</span>
                  <el-divider border-style="dotted" />
                  <span class="pro">分享海报</span>
                  <span>+200积分</span>
                  <span>微信小程序参与分享即送200积分</span>
                  <el-divider border-style="double" />
                  <span class="pro">完善信息</span>
                  <span>+800积分</span>
                  <span>完善信息即送800积分</span>
                  <el-divider border-style="double" />
                  <span class="pro">观看直播</span>
                  <span>+500积分</span>
                  <span>观看直播即送500积分</span>
                  <el-divider border-style="double" />
                  <h1 class="rules">积分规则说明</h1>
                  <p>1.您所得积分可参与平台不定期开展的物品兑换活动，具体参见每次兑换活动说明；
                  <p>2. 用户所得积分仅可在活动期间内参与物品兑换活动，活动结束后将无法进行兑换，每个账号用户在活动期间仅能参与3次兑换，您不得通过直接或间接方式利用多个账号获取多次兑换机会；</p>
                  <p>3. 您获取积分后将有机会获取奖品。请以网站所展示的展品为准（奖品先到先得，全部兑换完为止）</p>
                  <p>4. 请您勿必知晓，您须按要求填写相关信息，如因用户原因导致无法配送或收货等后果由用户自行承担相关责任；同时，本活动奖品价值为市场参考价值，且您所收到奖品请以所发送的实物为准；</p>
                  <p>
                    5.如您在积分领取及活动过程中存在违规行为（包括但不限于使用多个账号、使用辅助程序等非人为操作方式、利用平台技术漏洞和平台规则漏洞等作弊方式或他不合理方式参与本活动），平台有权取消、冻结您的积分并取消您参与活动的资格，没收相关奖励，情节严重的，平台有权封禁账号并追究用户违规责任；
                  </p>
                  <p>6. 如出现不可抗力或情势变更的情况（包括但不限于重大灾害事件、活动受政府机关指令需要停止举办或调整的、活动遭受严重网络攻击或因系统故障需要暂停举办的），则平台可依相关法律法规的规定主张免责；
                  </p>
                  <p>7.平台可以根据运营情况对积分规则进行变动或调整，相关变动或调整将公布在活动页面上，公布后依法生效；</p>
                  <p>8. 平台在法律允许的最大范围内对活动拥有解释权。</p>
                  </p>
                </div>
              </el-tab-pane>
              <el-tab-pane>
                <template #label>
                  <span class="custom-tabs-label">
                    <span class="subcoin">积分抽奖</span>
                  </span>
                </template>
                <div class="exchange">
                  <div class="container">
                    <div v-for="(item, index) in DrawList" :key="index" class="prize-item"
                      :class="currentIndex === index ? 'active' : ''" @click="() => draw(index)">
                      <img :src="item.url" alt="" />
                      <p class="desc">{{ item.desc }}</p>
                    </div>
                  </div>
                </div>
              </el-tab-pane>
            </el-tabs>
          </div>
        </el-tab-pane>
        <el-tab-pane>
          <template #label>
            <span class="custom-tabs-label">
              <img :src="onlinepay" alt="" class="ic">
              <span class="sub">在线支付</span>
            </span>
          </template>
          <div class="onpay">
            <img src="https://so1.360tres.com/t0112072d7f451ae180.png" alt="" class="jks">
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
  <foot />
</template>
<script setup lang='tsx'>
import headNav from '../../components/headNav.vue';
import subNav from '../../components/subNav.vue';
import foot from '../../components/foot.vue'
import { reactive, ref, computed, onMounted } from 'vue'
const dialogTableVisible = ref(false)
import { FormProps} from 'element-plus'
import none from '../../../public/参与奖.png'
import topPrize from '../../../public/一等奖.png'
import secondPrize from '../../../public/二等奖.png'
import thirdPrize from '../../../public/金.png'
import fourthPrize from '../../../public/银.png'
import redEnvelope from '../../../public/铜.png'
import api from '../../api/api'
import { useRouter } from "vue-router"
import credit1 from '../../../public/credit.png'
import subscribe2png from '../../../public/subscribe2.png'
import credit2 from '../../../public/credit2.png'
import onlinepay from '../../../public/onpay.png'
//头像上传
const imageUrl = ref('')
const signin = ref()
const insign = ref(true)
const handleAvatarSuccess = (res, file)=> {
  imageUrl.value = URL.createObjectURL(file.raw);
}

const getInfo = () => {
  api.get('http://111.231.60.148:8999/service/user/userInfo/auth/userInfo/all').then((res) => {
    if (res.status = 200) {
      formLabelAlign.name = res.data.data.name
      formLabelAlign.age = res.data.data.age
      formLabelAlign.phone = res.data.data.phone
      formLabelAlign.sex = res.data.data.sex
      formLabelAlign.integral = res.data.data.integral
      imageUrl.value = res.data.data.avatar
      signin.value = res.data.data.isSignIn
      if (signin.value == 0) {
        insign.value = true
      } else if (signin.value == 1) {
        insign.value = false
      }
    }
  })
}
onMounted(() => {
  getInfo()
})
interface Prize {
    url: string
    desc: string
}
const pirzeList: Prize[] = [
    { url: redEnvelope, desc: '三等铜奖' },
    { url: topPrize, desc: '一等奖' },
    { url: thirdPrize, desc: '三等金奖' },
    { url: none, desc: '参与奖' },
    { url: secondPrize, desc: '二等奖' },
    { url: redEnvelope, desc: '三等铜奖' },
    { url: none, desc: '参与奖' },
    { url: fourthPrize, desc: '三等银奖' }
  ]
  const btnStart = { url: 'video.png', desc: '开始抽奖' }
  const DrawList = computed(() => {
    return [...pirzeList.slice(0, 4), btnStart, ...pirzeList.slice(4)]
  })
  const drawOrder = [0, 1, 2, 5, 8, 7, 6, 3] // 抽奖顺序
  let count = 0 // 抽奖次数
  let isDrawing = false // 是否正在抽奖
  const currentIndex = ref<number | null>(null) // 当前选中的奖品
  const circle = 32 // 一圈8个奖品，至少转4圈
const draw = (index: number) => {
    if (index === 4) {
      // 开始抽奖
      if (isDrawing) {
        return
      }
      isDrawing = true
 
      const position = 5 // 假设后台返回的中奖位置是5
 
      const timer = setInterval(() => {
        currentIndex.value = drawOrder[count % drawOrder.length]
        count++
        if (count > circle && currentIndex.value === drawOrder[position - 1]) {
          // 抽奖结束
          clearInterval(timer)
          // 停顿一会显示中奖
          setTimeout(() => {
            alert('恭喜你中奖了')
            isDrawing = false
            count = 0
            currentIndex.value = null
          }, 500)
        }
      }, 50)
    }
  }

const labelPosition = ref<FormProps['labelPosition']>('right')

const formLabelAlign = reactive({
  name: '',
  age:'',
  sex: '',
  phone: '',
  integral:''
})
const ischange = ref(true)
const ischange2 = ref(true)
const ischange3 = ref(true)
const ischange4 = ref(true)
const ischange5 = ref(true)
const ischange6 = ref(true)
const ischange7 = ref(true)
const ischange8 = ref(true)
const subscribe = () => {
  alert('行程已改变')
  ischange.value = !ischange.value
  api.get(`http://111.231.60.148:8999/service/active/active/auth/enroll/${1}`)
}
const subscribe2 = () => {
  alert('行程已改变')
  ischange2.value = !ischange2.value
  api.get(`http://111.231.60.148:8999/service/active/active/auth/enroll/${2}`)
}
const subscribe3 = () => {
  alert('行程已改变')
  ischange3.value = !ischange3.value
  api.get(`http://111.231.60.148:8999/service/active/active/auth/enroll/${3}`)
}
const subscribe4 = () => {
  alert('行程已改变')
  ischange4.value = !ischange4.value
  api.get(`http://111.231.60.148:8999/service/active/active/auth/enroll/${4}`)
}
const subscribe5 = () => {
  alert('行程已改变')
  ischange5.value = !ischange5.value
  api.get(`http://111.231.60.148:8999/service/active/active/auth/enroll/${5}`)
}
const subscribe6 = () => {
  alert('行程已改变')
  ischange6.value = !ischange6.value
  api.get(`http://111.231.60.148:8999/service/active/active/auth/enroll/${6}`)
}
const subscribe7 = () => {
  alert('行程已改变')
  ischange7.value = !ischange7.value
  api.get(`http://111.231.60.148:8999/service/active/active/auth/enroll/${7}`)
}
const subscribe8 = () => {
  alert('行程已改变')
  ischange8.value = !ischange8.value
  api.get(`http://111.231.60.148:8999/service/active/active/auth/enroll/${8}`)
}

const finish = async () => {
  await api.put('http://111.231.60.148:8999/service/user/userInfo/auth/update', {
      name: formLabelAlign.name,
      phone: formLabelAlign.phone,
      age: formLabelAlign.age,
      sex:formLabelAlign.sex
  }).then((res) => {
    if (res.status = 200) {
      alert('用户信息已修改,重新登录后生效')
    }
  })
}
//退出登录
const router = useRouter()
import store from '../../store'
let token = store.getters.getToken;
const quit = () => {
  store.commit('logout', token);
  location.reload
  router.push('login')
}

import { ElMessage, ElMessageBox } from 'element-plus'
const LogOut = () => {
  ElMessageBox.confirm(
    '是否退出登录？',
    'Warning',
    {
      confirmButtonText: '确认',
      cancelButtonText: '取消',
      type: 'warning',
    }
  )
    .then(() => {
      quit()
      ElMessage({
        type: 'success',
        message: '已退出登录',
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '退出登陆失败',
      })
    })
}

const backToA = () => {
  router.push('activity')
}
const backToB = () => {
  router.push('home')
}
//签到功能
const checknow = () => {
  if (signin.value == 0) {
    formLabelAlign.integral = 100 + formLabelAlign.integral
    alert('签到成功')
    api.put('http://11.231.60.148:8999/service/user/prize/auth/signIn').then((res) => {
      if (res.status = 200) {
        alert(res.data.message)
      }
    })
    insign.value == !insign.value
  } else if (signin.value == 1) {
      alert('您已签到,请勿重复点击')
  }
}
</script>
<style scoped lang='scss'>
.title{
    z-index: -1;
    margin-top: 80px;
    width: 100%;
    height: 500px;
    background: url(https://gd-hbimg.huaban.com/c249841ed6b5abad4b4d494cddc3c4c37f1e958e1a06f7-6fO4WP_fw1200webp);
    background-size: contain;
    h1{
        padding-top: 100px;
        padding-left: 250px;
        color: white;
        font-size: 42px;
    }
}
.person{
    width: 100%;
    height: 1100px;
    background-color: #f5f5f5;
    position: relative;
    .checkin{
      cursor: pointer;
      position: absolute;
      top: 50px;
      left: 250px;
      text-align: center;
      line-height: 30px;
      font-size: 15px;
      font-weight: lighter;
      font-family: simHei;
      height: 40px;
      width: 90px;
      color: white;
      border: 1px solid white;
      border-radius: 10px;
      background: linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%);
    }
    .inputer{
        position: absolute;
        width: 400px;
        height: 900px;
        background-color: #fff;
        top: -150px;
        left: 200px;
        border-radius: 20px;
        .avatar{
          width: 80px;
          height: 80px;
          border: 1px solid black;
          border-radius: 50%;
          margin-top: 30px;
        }
        h1{
            margin-top: 30px;
            margin-left: 100px;
        }
        .audio{
            text-align: center;
            line-height: 30px;
            height: 30px;
            width: 90px;
            margin-left: 100px;
            margin-top: 10px;
            color: white;
            border-radius: 10px;
            background: linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%);
        }
        h4{
            margin-left: 100px;
            margin-top: 50px;
            font-weight: normal;
        }
        img{
            margin-top: 20px;
            margin-left: 100px;
            height: 40px;
            width: 40px;
        }
        h2{
            margin-left: 160px;
            margin-top: -40px;
        }
        .same{
            display: block;
            margin-top: 50px;
            margin-left: 100px;
        }
        .change{
            height: 50px;
            width: 120px;
            margin-top: 60px;
            margin-left: 100px;
            background-color: #fff;
            border: 2px solid#455EB5;
            border-radius: 30px;
            color: #455EB5;
            font-size: 20px;
            text-align: center;
            line-height: 50px;
        }
        .change:hover{
            background: linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%);
            color: white;
            border: 2px solid white;
        }
    }
    .subnav{
        position: absolute;
        left: 650px;
        top: 50px;
        width: 900px;
        height: 100px;
        .ic{
            width: 20px;
            height: 20px;
        }
    }
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
    width: 200px;
    padding: 30px 20px;
    height: 80px;
}
::v-deep(.el-tabs__nav){
    left: 150px;
}
::v-deep(.el-tabs__nav-wrap){
    background-color: #fff;
}
::v-deep(.el-tabs--border-card) {
    border: 0px solid var(--el-border-color);
    margin-left: -15px;
}
::v-deep(.el-dialog__header){
  text-align: center;
}
::v-deep(.el-button){
  margin-left: 60%;
}
.subc{
    width: 900px;
    height: 600px;
    background-color: #fff;
}
.cred{
    width: 900px;
    height: 900px;
    background-color: #fff;
    .rule{
        .pro{
            margin-left: 30px;
            font-size: 20px;
        }
        span{
            font-weight: lighter;
            margin-right: 150px;
        }
    }
    .rules{
        margin-top: 70px;
        margin-bottom: 30px;
    }
    p{
        font-weight: lighter;
    }
}
.contain,.act,.detail{
    width: 100%;
    height: 600px;
}
.talk{
      position: relative;
      width: 80%;
      height: 60px;
      margin-top: 30px;
      margin-left: 10%;
      background-image: linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%);
      background-position: 0 5px;
      background-size: cover;
      border: 1px solid rgb(175, 175, 175);
      border-radius: 20px;
      background-size: contain;
      .saber{
        cursor: pointer;
        font-family: SimHei;
        font-size: 20px;
        color: #fff;
        position: absolute;
        left: 30px;
        line-height: 60px;
      }
      .cribe{
        position: absolute;
        color: black;
        font-weight: 500;
        font-size: 16px;
        top: 10px;
        left: 600px;
        width: 80px;
        height: 40px;
        background-color: #fff;
        border-radius: 15px;
        border-style: none;
      }
      .cribe:hover {
      box-shadow: rgba(255, 255, 255, 0.5) 0 1px 30px;
       transition-duration: .1s;
      }
}
.sword{
      position: relative;
      width: 80%;
      height: 60px;
      margin-top: 30px;
      margin-left: 10%;
      background: url(https://gd-hbimg.huaban.com/9876a09858d4f22bb3f2e382bf4ebfa49320b03128f4e-Xu3tqd_fw480webp);
      background-size: cover;
      background-repeat: no-repeat;
      border: 1px solid rgb(175, 175, 175);
      border-radius: 20px;
      .saber{
        cursor: pointer;
        font-family: SimHei;
        font-size: 18px;
        position: absolute;
        left: 30px;
        line-height: 60px;
      }
      .cribe{
        position: absolute;
        color: white;
        top: 10px;
        left: 600px;
        width: 80px;
        height: 40px;
        background-image: linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%);
        border-radius: 15px;
        border-style: none;
      }
      .cribe:hover {
      box-shadow: rgba(80, 63, 205, 0.5) 0 1px 30px;
       transition-duration: .1s;
      }
    }
.container {
    width: 620px;
    height: 600px;
    margin-left: 15%;
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-between;
    .prize-item {
      width: 200px;
      height: 200px;
      text-align: center;
      background-color: #fff;
      border:2px solid skyblue;
      border-radius: 10px;
      font-size: 24px;
      p{
        margin-top: 10px;
        font-weight: normal;
      }
      img {
        width: 100px;
        height: 100px;
        margin-top: 10px;
      }
    }
 
    .active {
      background-color: yellowgreen;
    }
  }

.submeet,.subcoin{
  font-size: 18px;
}
.sub{
  font-size: 22px;
}
.upload-demo{
  width: 100%;
  position: relative;
  .upload {
      position: absolute;
      left: -30px;
      top: 100px;
    }
}

.avatar-uploader{
  margin-top: 30px;
  margin-left: 100px;
}
.onpay{
  width: 100%;
  height: 500px;
  .jks{
    margin-top: 50px;
    margin-left: 30%;
    width: 40%;
    height:400px;
  }
}

.avatar-uploader {
  width: 80px;
  height: 80px;
  border: 1px dashed #d9d9d9;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  .avatar {
    position: absolute;
    left: -100px;
    top: -30px;
    width: 80px;
    height: 80px;
    display: block;
  }
  }
  .avatar-uploader:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  
</style>