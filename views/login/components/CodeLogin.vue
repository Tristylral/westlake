<template>
<div @keydown.enter.prevent>
	<el-form ref="loginForm" :model="loginFormData" :label-width="0" :rules="rules" status-icon autocomplete="off"
		class="formPanel" :class="[curTheme]" @submit.prevent>
		<el-form-item label="" prop="username" class="one" >
			<el-input prefix-icon="Avatar" :autocomplete="false" v-model="loginFormData.username"
				placeholder="请输入电话号码" />
		</el-form-item>
		<el-form-item label="" prop="code" class="one" >
			<el-input autocomplete="new-password" prefix-icon="Picture" v-model="loginFormData.code"
				placeholder="请输入验证码" @click="changeCode" />
		</el-form-item>
		<!-- 使用验证码组件 -->
		<div class="code" @click="refreshCode">
			<SIdentify :identifyCode="identifyCode"></SIdentify>
		</div>
		<el-form-item label="" prop="smscode" class="one more" >
			<el-input autocomplete="new-password" prefix-icon="Unlock" v-model="loginFormData.smscode"
				placeholder="请输入短信验证码" />
		</el-form-item>
		<div class="code">
			<el-button type="primary" @click="getSmsCode" class="smscode-btn" :disabled="isCodeIng">
				{{smsCodeBtnText}}
			</el-button>
		</div>
		<div class="check-line">
			<div>
				<button class="reg" @click="goreg">前往注册</button>
			</div>
			<div class="line-item"></div>
		</div>
		<el-form-item class="go">
			<el-button type="danger" @click="onSubmit">登录</el-button>
		</el-form-item>
	</el-form>
</div>
</template>

<script setup>
	import {
		ref,
		reactive,
		defineProps,
		onMounted,
		onUnmounted
	} from "vue";

	import {
		useStore
	} from "vuex";

	import {
		useRouter,
		useRoute
	} from 'vue-router'

	import api from "@/api/api.js";
	import utils from "@/utils/utils.js";
	import config from "@/store/config.js";
	import SIdentify from '@/components/Sidentify.vue'
	let identifyCode = ref('') //图形验证码
	let identifyCodes = ref('1234567890abcdefjhijklinopqrsduvwxyz') //验证码出现的数字和字母
	//组件挂载
	onMounted(() => {
	identifyCode.value = ''
	makeCode(identifyCodes.value, 4)
	})

	// 生成随机数
	const randomNum = (min, max) => {
	max = max + 1
	return Math.floor(Math.random() * (max - min) + min)
	}
	// 随机生成验证码字符串
	const makeCode = (o, l) => {
	for (let i = 0; i < l; i++) {
		identifyCode.value += o[randomNum(0, o.length)]
	}
	}
	// 更新验证码
	const refreshCode = () => {
	identifyCode.value = ''
	makeCode(identifyCodes.value, 4)
	}


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
		}
	})

	//标识是否正在获取短信验证码
	let isCodeIng = ref(false);
	//定时器
	let timer = null;
	//定时器的时间
	let curTime = ref(60);
	//获取验证码按钮的提示文字
	let smsCodeBtnText = ref("获取验证码");

	// 登录表单数据
	const loginFormData = reactive({
		username: '',
		smscode: '',
		code: '',
		rememberPassword: false,
		method:'1'
	});
	const loginForm = ref();
	//密码规则的验证
	const validatePhone = (rule, value, callback) => {
		if (!utils.check.checkPhone(value)) {
			callback("电话号码不合法")
		} else {
			callback()
		}
	}
	const rules = reactive({
		username: [{
				required: true,
				message: '请输入电话号码',
				trigger: 'blur'
			},
			{
				validator: validatePhone,
				trigger: 'blur'
			}
		],
		smscode: [{
			required: true,
			message: '请输入短信验证码',
			trigger: 'blur'
		}],
		code: [{
			required: true,
			message: '请输入验证码',
			trigger: 'blur'
		}],
	})

	//获取验证码
const getSmsCode = () => {
		if (!loginFormData.username) {
			utils.showError("电话号码不能为空！");
			return;
		}
		if (!loginFormData.code) {
			utils.showError("请先输入验证码");
			return;
		}

		isCodeIng.value = true;
		timer && clearInterval(timer);
		curTime.value = 60;
		timer = setInterval(() => {
			curTime.value--;
			smsCodeBtnText.value = curTime.value + "秒后重新获取";
			if (curTime.value <= 0) {
				isCodeIng.value = false;
				timer && clearInterval(timer);
				smsCodeBtnText.value = "获取验证码";
			}
		}, 1000);
		//TODO 请求后台获取短信验证码
		api.get(`http://111.231.60.148:8999/service/user/sms/sendCode/${loginFormData.username}`, {}).then((res) => {
		if (res.status == 200) {
			alert(res.data.message)
		} else {
			alert('请求错误')
		}
	})
	}

	//登录操作
	const onSubmit = () => {
		loginForm.value.validate((valid, fields) => {
			if (!valid) {
				if (fields) {
					for (let key in fields) {
						utils.showError(fields[key][0].message);
					}
				}
				return;
			}
			utils.saveData("rememberUserName", loginFormData.rememberUserName);
			utils.saveData("username", loginFormData.username);
			//TODO 调用登录接口进行登录
			utils.showLoadding();
			api.post("http://111.231.60.148:8999/service/user/userInfo/login", JSON.stringify({
				username: loginFormData.username,
				smscode: loginFormData.smscode,
				method: loginFormData.method
			})).then((res) => {
				utils.hideLoadding();
				if (!res || res.status != 200 || !res.data || res.data.code != 888) {
					if (res.data.code == 200 && res.data.message) {
						//1.将传递过来的token进行本次存储及vuex存储
						let token = res.data.data;
						//使用vuex
						store.commit('setToken', token);
						location.reload()
						alert('登陆成功，可以正常浏览页面啦')
					} else {
						utils.showError("登录失败！");
					}
					return;
				}
			}).catch(function(error) {
				utils.hideLoadding();
				utils.showError("登录失败！");
			});
		});
	}
	onUnmounted(() => {
		timer && clearInterval(timer);
	});

	let store = useStore();
	const router = useRouter()
	const goreg = () => {
		router.push('register')
	}
</script>

<style scoped="scoped" lang="scss">
	.formPanel{
	margin-top: 30px;
	width: 100%;
	height: 400px;
	.one{
		margin-left: 20%;
		width: 50%;
		height: 50px;
	}
	.code{
		width: 15%;
		height: 40px;
		margin-top: -62px;
		margin-left: 72%;
	}
	.more{
		margin-top: 22px;
	}
}
::v-deep(.el-input){
	height: 40px;
}
.check-line{
	margin-top: 20px;
	width: 100%;
	height: 100px;
}
.rese{
	margin-top: -65px;
}
.resetPassword{
	margin-left: 50%;
}
.go{
	margin-top: -90px;
	margin-left: 80%;
}
.reg {
	width: 80px;
	height: 35px;
	position: absolute;
	top: 340px;
	left: 60%;
	border: 0px;
	border-radius: 10px;
	color: white;
	background-image: linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%);
}
</style>
