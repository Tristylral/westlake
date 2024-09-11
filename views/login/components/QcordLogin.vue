<template>
	<div class="qcode" :class="[curTheme]">
		<img :src="mini" @click="getQcode" :class="{'end':curTime<=0}" />
		<div class="info">微信小程序</div>
		<div class="endInfo" @click="getQcode" v-if="curTime<=0">二维码已失效，点击重新加载</div>
	</div>
</template>

<script setup>
	import {
		ref,
		onMounted,
	onUnmounted,
	defineProps
	} from "vue";

	import {
		useStore
	} from "vuex";

	import {
		useRouter,
	} from 'vue-router'

	import api from "@/api/api.js";
	import config from "@/store/config.js";
	import mini from '../../../../public/miniWestLake.jpg'
	let curTheme = config.curTheme;

	//传递的参数
	const option = defineProps({
		lineHeight: {
			type: String,
			required: true
		},
		textColor: {
			type: String,
			default: '#222',
			required: false
		},
		bgColor: {
			type: String,
			default: '#00000055',
			required: false
		}
	})

	//定时器
	let timer = null;
	//定时器的时间
	let curTime = ref(60);

	let store = useStore();
	const router = useRouter()

	//二维码返回的标识，用于判断当前的二维码是否已经扫码并且登陆完成。
	let codetoken = "233213";

	//从后台获取二维码图片
	const getQcode = () => {

		curTime.value = 60;
		timer && clearInterval(timer);
		timer = setInterval(() => {
			curTime.value--;

			//加载接口判断当前是否已经登录成功
			checkLogin();

			if (curTime.value <= 0) {
				timer && clearInterval(timer);
			}
		}, 3000);
	}

	//通过接口判断当前的二维码是否已经扫码并完成了登录
	const checkLogin = () => {
		api.post("#", JSON.stringify({
			codetoken: codetoken
		})).then((res) => {
			if (!res || res.status != 200 || !res.data || res.data.code != 888) {
				return;
			}
			//1.将传递过来的token进行本次存储及vuex存储
			let token = res.data.token;
			//使用vuex
			store.commit('setToken', token);

			//2.将当前登录的用户信息进行本地及vuex存储
			let userinfo = res.data.data;
			store.commit('setUserInfo', userinfo);

			//转到主页
			router.push({
				path: "/home"
			});
		}).catch(function(error) {});
	}

	onMounted(() => {
		getQcode();
	});
	onUnmounted(() => {
		timer && clearInterval(timer);
	});
</script>

<style scoped="scoped" lang="scss">
	.qcode{
		width: 100%;
		height: 400px;
		img{
			width: 220px;
			height: 200px;
			margin-top: 20px;
			margin-left: 34%;
		}
		.info{
			margin-top: 20px;
			text-align: center;
			font-size: 18px;
			font-family: simHei;
		}
	}
</style>
