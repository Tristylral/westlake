<template>
    <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
    <el-menu-item>
      <img
        class="logo"
        :src="logopng"
        alt="西湖论剑"
      />
    </el-menu-item>
    <div class="nav"/>
    <el-menu-item class="item" @click="home">首页</el-menu-item>
    <el-menu-item class="item" @click="agenda">大会议程</el-menu-item>
    <el-menu-item class="item" @click="about">关于大会</el-menu-item>
    <el-menu-item class="item" @click="celebrity">大咖云集</el-menu-item>
    <el-menu-item class="item" @click="activity">精彩活动</el-menu-item>
    <el-menu-item class="item" @click="exhibitor">展商风采</el-menu-item>
    <el-menu-item class="item" @click="result">成果发布</el-menu-item>
    <el-menu-item class="item" @click="news">媒体中心</el-menu-item>
    <el-menu-item class="item" @click="navigator">参会指南</el-menu-item>
    <el-menu-item class="item" @click="live">大会直播</el-menu-item>
    <el-menu-item class="item" @click="ai">AI问答</el-menu-item>
    <el-menu-item class="item" @click="comm">大会评论</el-menu-item>
    <div class="center">
      <el-button class="avatar" @click="center">个人中心</el-button>
    </div>
    <div class="login">
      <el-button class="log" @click="login">登录</el-button>
    </div>
  </el-menu>
</template>
<script setup lang='ts'>
const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

import { ref } from "vue";
import { useRouter } from "vue-router"
import logopng from '../../public/logo.png'
let router = useRouter()
//路由跳转
const ai = () => {
  router.push('ai')
}
const comm = () => {
  router.push('comm')
}
const home = () => {
  router.push('home')
}
const login = () => {
  router.push('login')
}
const center = () => {
  router.push('center')
}
const agenda = () => {
  router.push('agenda')
}
const about = () => {
  router.push('about')
}
const celebrity = () => {
  router.push('celebrity')
}
const activity = () => {
  router.push('activity')
}
const exhibitor = () => {
  router.push('exhibitor')
}
const result = () => {
  router.push('result')
}
const news = () => {
  router.push('news')
}
const navigator = () => {
  router.push('navigator')
}
const live = () => {
  router.push('live')
}

</script>
<style scoped lang='scss'>
.ml-2{
  background-color:  #455EB5;
}
.el-menu-demo{
  height: 80px;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 500;
}
.logo{
  width: 200px;
  margin: 20px 0 20px 0;
}
.nav{
  margin-left: 20px;
  padding: 0;
}
.login{
  width: 4%;
  margin-left: 20px;
  margin-top: 25px;
}
.center{
  width: 5%;
  margin-top: 25px;
}
.item{
  width: 5.8%;
  font-weight: lighter;
  font-size: 15px;
}
.log,.avatar{
  color: white;
  background-image: linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%);
}
</style>