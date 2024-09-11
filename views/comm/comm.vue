<template>
    <headNav />
    <subNav />
    <div class="schedule">
        <h1 class="animate__animated animate__fadeInDown">发表评论</h1>
        <h4 class="animate__animated animate__fadeInDown">Post comments</h4>
    </div>
    <u-comment :config="config" @submit="submit" @like="like" class="animate__animated animate__fadeInUp ucom" >
    </u-comment>
    <foot />
</template>
<script setup>
import headNav from '../../components/headNav.vue';
import subNav from '../../components/subNav.vue';
import foot from '../../components/foot.vue'
import emoji from '../../emoji/emoji'
import { reactive } from 'vue'
import { UToast, createObjectURL } from 'undraw-ui'
const config = reactive({
    user: {
        id: 1,
        username: '西湖论剑',
        avatar: 'logo.png',
        // 评论id数组 建议:存储方式用户uid和评论id组成关系,根据用户uid来获取对应点赞评论id,然后加入到数组中返回
        likeIds: [1, 2, 3]
    },
    emoji: emoji,
    comments: [],
    total: 10
})

let temp_id = 100
// 提交评论事件
const submit = ({ content, parentId, files, finish, reply }) => {
    let str = '提交评论:' + content + ';\t父id: ' + parentId + ';\t图片:' + files + ';\t被回复评论:'
    console.log(str, reply)

    /**
     * 上传文件后端返回图片访问地址，格式以'||'为分割; 如:  '/static/img/program.gif||/static/img/normal.webp'
     */
    let contentImg = files.map(e => createObjectURL(e)).join('||')

    const comment = {
        id: String((temp_id += 1)),
        parentId: parentId,
        uid: config.user.id,
        address: '来自江苏',
        content: content,
        likes: 0,
        createTime: '1分钟前',
        contentImg: contentImg,
        user: {
            username: config.user.username,
            avatar: config.user.avatar,
            level: 6,
            homeLink: `/${(temp_id += 1)}`
        },
        reply: null
    }
    setTimeout(() => {
        finish(comment)
        UToast({ message: '评论成功!', type: 'info' })
    }, 200)
}
// 点赞按钮事件 将评论id返回后端判断是否点赞，然后在处理点赞状态
const like = (id, finish) => {
    console.log('点赞: ' + id)
    setTimeout(() => {
        finish()
    }, 200)
}

config.comments = [
    {
        id: '1',
        parentId: null,
        uid: '1',
        address: '来自上海',
        content:
            '[打call]',
        likes: 2,
        contentImg: '',
        createTime: '1分钟前',
        user: {
            username: '落🤍尘',
            avatar: 'https://static.juzicon.com/avatars/avatar-200602130320-HMR2.jpeg?x-oss-process=image/resize,w_100',
            level: 6,
            homeLink: '/1'
        }
    },
    {
        id: '2',
        parentId: null,
        uid: '2',
        address: '来自杭州',
        content:
            '[打call]',
        likes: 1,
        contentImg: '',
        createTime: '3分钟前',
        user: {
            username: '饮冰',
            avatar: 'https://gd-hbimg.huaban.com/7968f776596196a8061e9ee0ee51c0606d785fc42400b-9aWWPH_fw236',
            level: 6,
            homeLink: '/1'
        }
    },
    {
        id: '3',
        parentId: null,
        uid: '3',
        address: '来自南京',
        content:
            '西湖论剑加油！',
        likes: 5,
        contentImg: '',
        createTime: '6分钟前',
        user: {
            username: '柠姝',
            avatar: 'https://tse2-mm.cn.bing.net/th/id/OIP-C.40IJgYl46etacM1av1uhQAAAAA?w=164&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7',
            level: 5,
            homeLink: '/1'
        }
    }
]
</script>
<style scoped lang='scss'>
.ucom{
    margin-left: 10%;
    width: 80%;
}
.schedule {
    margin-top: 80px;
    height: 300px;
    background-image: url(https://gd-hbimg.huaban.com/7e98753ec9818fa6fa72cf279aea7611a81f81f7ea6fd-GByE2k_fw1200webp);
    background-size: contain;
    h1 {
        padding-top: 50px;
        text-align: center;
        line-height: 70px;
        color: rgb(255, 255, 255);
    }

    h4 {
        text-align: center;
        line-height: 20px;
       color: white;
    }
}
</style>