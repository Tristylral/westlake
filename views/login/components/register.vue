<template>
    <headNav />
    <div class="tot">
        <h1 class="regis animate__animated animate__fadeInDown">注册页面</h1>
        <el-form ref="loginForm" :model="loginFormData" :label-width="0" :rules="rules" status-icon autocomplete="off"
            class="formPanel animate__animated animate__fadeInDown" :class="[curTheme]">
            <el-form-item label="" prop="username" class="one" >
                <el-input prefix-icon="Avatar" :autocomplete="false" v-model="loginFormData.username"
                    placeholder="请输入用户名" />
            </el-form-item>
            <el-form-item label="" prop="password" class="one" >
                <el-input type="password" prefix-icon="Unlock" :autocomplete="false" v-model="loginFormData.password"
                    placeholder="请输入密码" />
            </el-form-item>
            <el-form-item label="" prop="phone" class="one" >
                <el-input prefix-icon="Avatar" :autocomplete="false" v-model="loginFormData.phone"
                    placeholder="请输入电话号码" />
            </el-form-item>
            <el-form-item label="" prop="smscode" class="one" >
                <el-input autocomplete="new-password" prefix-icon="Unlock" v-model="loginFormData.smscode"
                    placeholder="请输入短信验证码" />
            </el-form-item>
            <div class="code">
                <el-button type="primary" @click="getSmsCode" class="smscode-btn" :disabled="isCodeIng">
                    {{ smsCodeBtnText }}
                </el-button>
            </div>
            <div class="check-line">
                <div>
                    <el-form-item label="">
                        <el-checkbox v-model="loginFormData.rememberUserName" label="记住用户名" size="large" class="remn" />
                    </el-form-item>
                </div>
                <div class="line-item"></div>
            </div>
            <el-form-item class="go">
                <el-button type="danger" @click="onSubmit">注册</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script setup>
import headNav from "../../../components/headNav.vue";
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

let store = useStore();
const router = useRouter()

// 登录表单数据
const loginFormData = reactive({
    username: '',
    smscode: '',
    phone: '',
    password:'',
    rememberUserName: false,
    rememberPassword: false,
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
        message: '请输入用户名',
        trigger: 'blur'
    },
    ],
    phone: [{
        required: true,
        message: '请输入电话号码',
        trigger: 'blur'
    },
    {
        validator: validatePhone,
        trigger: 'blur'
    }
    ],
    password: [{
        required: true,
        message: '请输入密码',
        trigger: 'blur'
    },
    ],
    smscode: [{
        required: true,
        message: '请输入短信验证码',
        trigger: 'blur'
    }],
})

//获取验证码
const getSmsCode = () => {
    if (!loginFormData.phone) {
        utils.showError("电话号码不能为空！");
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
    api.get(`http://111.231.60.148:8999/service/user/sms/sendCode/${loginFormData.phone}`).then((res) => {
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
        utils.saveData("phone", loginFormData.phone);
        utils.saveData("password", loginFormData.password);
        //TODO 用户注册
        utils.showLoadding();
        api.post("http://111.231.60.148:8999/service/user/userInfo/register", JSON.stringify({
            username: loginFormData.username,
            captcha: loginFormData.smscode,
            phone: loginFormData.phone,
            password:loginFormData.password
        })).then((res) => {
            utils.hideLoadding();
            if (!res || res.status != 200 || !res.data || res.data.code != 888) {
                if ( res.data.code == 200 && res.status == 200) {
                    utils.showSuccess('注册成功');
                    router.push("login");
                } else {
                    alert(res.data.message)
                }
                return;
            }
        }).catch(function (error) {
            utils.hideLoadding();
            utils.showError("注册失败！");
        });
    });
}

onMounted(() => {
    loginFormData.rememberUserName = utils.getData("rememberUserName") === 'true' ? true : false;
    if (loginFormData.rememberUserName) {
        loginFormData.username = utils.getData("username");
    } else {
        loginFormData.username = "";
    }

});
onUnmounted(() => {
    timer && clearInterval(timer);
});
</script>

<style scoped="scoped" lang="scss">
.tot{
    position: relative;
    width: 100%;
    height: 1000px;
    background-image: linear-gradient(45deg, #673ab7, #03a9f4, #9c27b0);
    .regis{
        padding-top: 150px;
        text-align: center;
        font-size: 36px;
        color: white;
    }
}
.formPanel {
    position: absolute;
    top: 250px;
    margin-left: 20%;
    width: 60%;
    height: 400px;
    background: white;
    .one {
        margin-top: 30px;
        margin-left: 20%;
        width: 50%;
        height: 50px;
    }

    .code {
        width: 15%;
        height: 40px;
        margin-top: -62px;
        margin-left: 72%;
    }

    .more {
        margin-top: 22px;
    }
}

::v-deep(.el-input) {
    height: 40px;
}

.check-line {
    margin-top: 30px;
    width: 100%;
    height: 100px;
}

.remn {
    margin-left: 20%;
}

.remp {
    margin-top: -72px;
    margin-left: 35%;
}

.rese {
    margin-top: -65px;
}

.resetPassword {
    margin-left: 50%;
}

.go {
    margin-top: -90px;
    margin-left: 64%;
}
</style>
