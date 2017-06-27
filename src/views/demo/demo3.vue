<style scoped lang="less">

</style>
<template>
    <div class="index">
        <Row type="flex" justify="center" align="middle">
            <Col span="20">
            <h1>
                <img src="../../images/logo.png">
            </h1>
            <h2>
                <p>Welcome to your iView app!</p>
                <p>欢迎使用iview!</p>
                <p>双向绑定:{{message}}</p>
                <p v-text="'双向绑定 ' + message"></p>
                <p>{{`双向绑定 ${message}`}}</p>
                <p v-text="`双向绑定 ${message}`"></p>
                <p v-once>单次赋值 {{message}}</p>
                <p v-html='html'></p>
                <Button @click="gotoNav">登录</Button>
                <Button type="ghost" @click="message='MESSAGE'">双向绑定</Button>
                <Button type="ghost" @click="handleStart">Start iView</Button>
                <p :id='id'>id(ID属性为2)</p>
                <a :href='href'>百度</a>
                <img :src="src" alt="图片">
                <Button :disabled='disabled1' @click="disabled1='true'">单击禁用</Button>
            </h2>
            </Col>
        </Row>
        <Row>
            <Col>
            <div id="method1">
                <p>{{ count < 0 ? '' : '+'}} {{count+1}}</p>
                <Button @click='count ++'>增加</Button>
                <Button @click='count --'>减少</Button>
            </div>
            <div id="method2">
                <h3>{{ countMessage.split('').reverse().join('') }}</h3>
                <Input type="text" v-model="countMessage"/>
            </div>
            </Col>
        </Row>
        <Row>
            <Col>
            <div>
                <my-button @click.native="buttonClick"></my-button>
            </div>
            <div>
                <ul>
                    <li v-for="item in list">
                        <h1>{{item}}</h1>
                    </li>
                </ul>
                <div @touchmove.prevent class="layer"></div>
            </div>
            </Col>

        </Row>
    </div>
</template>
<script>
    import myButton from '../components/myButton.vue'
    export default {
        components: {
            myButton
        },
        methods: {
            handleStart () {
                this.$Modal.info({
                    title: 'Bravo',
                    content: 'Now, enjoy the convenience of iView.'
                });
            },
            buttonClick () {
                alert("原生点击");
            },
            gotoNav(){
                this.$router.push({name: 'demo1'});
            },
        },
        data(){
            return {
                message: "Message",
                html: "<span style='color : red;'>显示红色的字你就解析成功了</span>",
                id: 2,
                href: 'http://www.baidu.com',
                src: 'https://cn.vuejs.org/images/logo.png',
                disabled1: false,
                count: 0,
                countMessage: "1",
                list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            }
        }
    }
</script>
