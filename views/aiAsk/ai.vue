<script setup>
import headNav from "../../components/headNav.vue"
import foot from "../../components/foot.vue"
import {
  ElButton,
  ElScrollbar,
  ElInput,
  ElMessageBox,
  ElMessage
} from 'element-plus'
import { Position } from '@element-plus/icons-vue'
import { ref, nextTick } from 'vue'
import api from '../../api/api.js'
import subNav from '../../components/subNav.vue';
const messages = ref([]) //总回复
const input = ref('')
const isGptShow = ref(false)
const answer = ref('')

const sendMessage = async () => {
  await api.get('http://111.231.60.148:8999/service/common/auth/chat', {
    params: {
      question: input.value,
    }
  }).then(res => {
    console.log(res.data)
    answer.value = res.data.data
  }, err => {
    console.log(err);
  })
  const newMessage = {
    id: Date.now(),
    text: input.value,
    textSystem: answer.value,
    timestamp: new Date()
  }
  isGptShow.value = true
  if (input.value.trim() !== '' && newMessage.textSystem !== '') {
    messages.value.push(newMessage)
    input.value = ''
    await nextTick() // 等待DOM更新完成  非常重要
    const messageElements = document.getElementsByClassName('message')
    const lastMessageElement = messageElements[messageElements.length - 1]
    lastMessageElement.scrollIntoView({ behavior: 'smooth', block: 'end' })
  }
}
 
const clearInput = () => {
  input.value = ''
}
 
const formatTimestamp = timestamp => {
  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  }
  return new Intl.DateTimeFormat('default', options).format(timestamp)
}
 
const copyMsg = (index) => {
  const text = messages.value[index].text
  const textarea = document.createElement('textarea')
  textarea.value = text
  document.body.appendChild(textarea)
  textarea.select()
  document.execCommand('copy')
  document.body.removeChild(textarea)
  ElMessage({
    type: 'success',
    message: '复制成功'
  })
}

const copyMsg2 = (index) => {
  const text = messages.value[index].textSystem
  const textarea = document.createElement('textarea')
  textarea.value = text
  document.body.appendChild(textarea)
  textarea.select()
  document.execCommand('copy')
  document.body.removeChild(textarea)
  ElMessage({
    type: 'success',
    message: '复制成功'
  })
}
 
const delateMsg = (index, type) => {
  ElMessageBox.confirm(`是否删除此数据吗?`, '警告', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  })
    .then(() => {
      // messages.value.splice(index, 1)
 
      if (type === 'system') {
        const message = messages.value[index]
        delete message.textSystem
        message.deleted = true // 标记消息为已删除
  
      } else if (type === 'self') {
        const message = messages.value[index]
        delete message.text
        message.deleted2 = true // 标记消息为已删除
      }
 
      ElMessage({
        type: 'success',
        message: '删除成功'
      })
    })
    .catch(() => {})
}
</script>

<template>
  <headNav />
  <subNav />
  <div class="total">
    <h1>AI问答</h1>
    <div class="chat animate__animated animate__fadeIn">
      <img src="https://tse4-mm.cn.bing.net/th/id/OIP-C.Vq0yHj38cFVaytBvlap7gwAAAA?rs=1&pid=ImgDetMain" alt="">
      <div class="pp1">
        <span>你好!我是西湖论剑智能问答小助手，可以向我提问哦</span>
      </div>
    </div>
    <div class="right animate__animated animate__fadeIn">
      <el-scrollbar height="500px">
        <!-- 所有的回复 -->
        <div class="allReply" v-for="(item, index) in messages" :key="item.id">
          <!-- 右侧自己的回复 -->
          <div class="chat2" v-if="!item.deleted2">
            <div class="chat-messages2">
              <div class="message">
                <textarea class="content">{{item.text}}</textarea>
                <div class="date">
                  {{ formatTimestamp(item.timestamp) }}
                </div>
                <button class="delate2" @click="delateMsg(index, 'self')">
                  <div class="text">删除</div>
                </button>
                <button class="copy2" @click="copyMsg(index)">
                  <div class="text">复制</div>
                </button>
              </div>
            </div>
          </div>

          <!-- 左侧系统的回复 -->
          <div class="chat1" v-if="!item.deleted">
            <img src="https://tse4-mm.cn.bing.net/th/id/OIP-C.Vq0yHj38cFVaytBvlap7gwAAAA?rs=1&pid=ImgDetMain" alt="" srcset="" class="chatgptLogo" v-if="isGptShow" />
            <div class="chat-messages">
              <div class="message">
                <textarea class="content" v-model="item.textSystem"></textarea>
                <div class="date">
                  {{ formatTimestamp(item.timestamp) }}
                </div>
                <div class="delate" @click="delateMsg(index, 'system')">
                  <div class="text">删除</div>
                </div>
                <div class="copy" @click="copyMsg2(index)">
                  <div class="text">复制</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-scrollbar>

      <div class="chat-input">
        <el-input v-model="input" @keydown.enter.prevent="sendMessage()" placeholder="试着输入点什么..." class="input"
          type="textarea" :rows="3" autosize :style="{ maxHeight: '90px', overflowY: 'auto' }">
        </el-input>

        <button class="clear" @click="clearInput">
          清空输入框
        </button>

        <el-button class="button" type="primary" @click="sendMessage()" :icon="Position">发送</el-button>
      </div>
    </div>
  </div>
  <foot />
</template>
 
<style lang="scss" scoped>
.total{
  width: 100%;
  height: 900px;
  margin-top:80px;
  background-image: linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%);
  background-size: cover;
  position: relative;
  h1{
    position: absolute;
    top: 70px;
    left: 80%;
    color: white;
    font-size: 40px;
  }
}
.chat{
  width: 100%;
  height: 100px;
  position: relative;
  img{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    position: absolute;
    top: 50px;
    left: 10%;
  }
  .pp1{
    position: absolute;
    top: 70px;
    left: 18%;
    font-size: 20px;
    span{
			background-color: #fff;
			padding: 5px 8px;
			display: inline-block;
			border-radius: 4px;
			margin:10px 0 10px 10px;
			position: relative;
			
		}
		span::after{
			content: '';
			border: 8px solid #ffffff00;
			border-right: 8px solid #fff;
			position: absolute;
			top: 6px;
			left: -16px;
		}
  }
}
  .right{
    width: 80%;
    position: absolute;
    top: 180px;
    left: 10%;
    height: 520px;
    background: rgba(255, 255, 255, 0.8);
    .allReply{
      width: 1200px;
      height: 250px;
      .chat2{
        margin-left: 80%;
        .message{
          margin-top: 150px;
          position: relative;
          width: 300px;
          height: 50px;
          .content{
            font-size: 16px;
            width: 300px;
            height: 40px;
            line-height: 40px;
            border-radius: 15px 0 0 15px;
            padding-left: 10px;
          }
          
          .date{
            width: 200px;
            height: 30px;
            font-size: 14px;
            margin-top: 10px;
            font-weight: lighter;
          }
          .delate2,.copy2{
            cursor: pointer;
            border: 0px;
            border-radius: 10px;
            width: 60px;
            height: 30px;
            color: white;
            background-image: linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%);
          }
          .copy2{
            margin-left: 20px;
          }
        }
      }
      .chat1{
        margin-top: 50px;
        position: relative;
        img{
          position: absolute;
          top: 45px;
          left: 65px;
          width: 50px;
          height: 50px;
          border-radius: 50%;
        }
        .message{
          display: inline-block;
          margin-left: 10%;
          margin-top: 50px;
          position: relative;
          .content{
            font-size: 16px;
            width: 400px;
            line-height: 40px;
            height: 120px;
            border: 1px solid black;
            border-radius: 15px 0 0 15px;
            padding-left: 10px;
          }
          .date{
            width: 200px;
            height: 30px;
            font-size: 14px;
            margin-top: 10px;
            font-weight: lighter;
          }
          .delate,.copy{
            cursor: pointer;
            font-size: 14px;
            text-align: center;
            line-height: 30px;
            border: 0px;
            border-radius: 10px;
            width: 60px;
            height: 30px;
            color: white;
            background-image: linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%);
          }
          .copy{
            margin-left: 80px;
            margin-top: -30px;
          }
        }
      }
    }
  }

.clear{
    margin-top: 10px;
            font-size: 18px;
            text-align: center;
            line-height: 40px;
            border: 0px;
            border-radius: 15px;
            width: 100px;
            height: 40px;
            color: white;
            cursor: pointer;
            background-image: linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%);
}
.button{
  margin-left: 50px;
}
</style>