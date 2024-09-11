<template>
	<div class="login-page" :class="[curTheme]">
		<div class="login-header">
			<headNav/>
		</div>
		<div class="login-panel">
			<div class="inner">
				<div class="logo-panel">
					<div class="logo">
						<div class="title animate__animated animate__fadeInDown">{{systemName}}</div>
						<!-- <el-image :src="logoImage" class="logo-img animate__animated animate__fadeInUp"></el-image> -->
					</div>
				</div>
				<div class="flex-item login-form animate__animated animate__fadeInDown">
					<div class="login-text">
						<!-- <div>用户登录</div> -->
						<div class="tabs">
							<div class="tab-item q" @click="checkTab('1')" :class="{'tab-item-active':tabCurIndex==1}">
								密码登录
							</div>
							<div class="tab-item w" @click="checkTab('2')" :class="{'tab-item-active':tabCurIndex==2}">
								手机登录
							</div>
							<div class="tab-item e" @click="checkTab('3')" :class="{'tab-item-active':tabCurIndex==3}">
								扫码登录
							</div>
						</div>
					</div>
					<div class="form">
						<PasswordLogin :lineHeight="lineHeight" v-if="tabCurIndex==1"></PasswordLogin>
						<CodeLogin :lineHeight="lineHeight" v-else-if="tabCurIndex==2"></CodeLogin>
						<QcordLogin :lineHeight="lineHeight" bgColor="#fff" v-else></QcordLogin>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import headNav from "../../../components/headNav.vue";
	import {
		ref,
		onMounted
	} from "vue";
	import {
		useDark,
		useToggle
	} from '@vueuse/core'

	import config from "@/store/config.js";

	let curTheme = config.curTheme;
	let systemName = config.systemName;
	import PasswordLogin from "../components/PasswordLogin.vue";
	import CodeLogin from "../components/CodeLogin.vue";
	import QcordLogin from "../components/QcordLogin.vue";

	const lineHeight = config.login.lineHeight; //输入行高
	const bgColor = config.login.bgColor; //背景色

	const tabCurIndex = ref(1);
	const checkTab = (index) => {
		tabCurIndex.value = index;
}
	import {
		useRouter
} from 'vue-router'
const router = useRouter()
import store from '../../../store'
let token = store.getters.getToken;
	//将主题色重置为白色主题
	const isDark = useDark()
	const toggleDark = useToggle(isDark)
	onMounted(()=>{
		if(isDark.value){
			toggleDark();
		}
		if (token) {
			alert('您已登录')
			router.push('home')
		}
	})
</script>

<style scoped="scoped" lang="scss">
	.login-header{
		margin-bottom: 80px;
	}
	.login-page {
		background: v-bind(bgColor);
		width: 100%;
		height: 850px;
	}

	.login-panel{
		width: 100%;
		height: 200px;
		.logo{
			width: 100%;
			height: 200px;
			.title{
				letter-spacing: 7px;
				font-weight: bold;
				padding-top: 60px;
				color: white;
				font-family: Noto Sans SC;
				text-align: center;
				font-size: 56px;
			}
			.logo-img{
				margin-top: 10px;
				margin-left: 39%;
			}
		}
	}
	.login-form{
		border-radius: 30px;
		margin-left: 30%;
		background-color: #fff;
		width: 40%;
		height: 400px;
		.login-text{
			width: 100%;
			height: 100px;
			position: relative;
			.tab-item{
				float: left;
				width: 20%;
				height: 60px;
				margin-top: 20px;
				margin-left: 5%;
				background-image: linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%);
				border-radius: 8px;
				border-style: none;
				box-sizing: border-box;
				color: #FFFFFF;
				cursor: pointer;
				flex-shrink: 0;
				font-family: "Inter UI","SF Pro Display",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif;
				font-size: 15px;
				font-weight: 500;
				padding: 0 1.6rem;
				text-align: center;
				text-shadow: rgba(0, 0, 0, 0.25) 0 3px 8px;
				transition: all .5s;
				user-select: none;
				-webkit-user-select: none;
				touch-action: manipulation;
				line-height: 60px;
			}
			.tab-item:hover {
				box-shadow: rgba(80, 63, 205, 0.5) 0 1px 30px;
				transition-duration: .1s;
      		}
			.q{
				margin-left: 15%;
			}
		}
	}
	
</style>
