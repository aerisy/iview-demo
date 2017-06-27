<style scoped lang="less">
    .index {
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        text-align: center;
    }

    .index h1 {
        height: 150px;
    }

    img {
        height: 100%;
    }

    .ivu-row-flex {
        height: 100%;
    }
    /**.layer{width:100%;height:100%;position:fixed;top:0;left:0;z-index:99;background:rgba(0,0,0,.5)}**/
</style>
<template>
    <div class="index">
        <Row type="flex" justify="center" align="middle">
            <Col span="4">
            <h1>
                <img src="../images/logo.png">
            </h1>
            <!--inline Form可以水平分布-->
            <Form ref="formInline" :model="formInline" :rules="ruleInline" >
                <Form-item prop="user">
                    <Input type="text" v-model="formInline.user" placeholder="Username">
                    <Icon type="ios-person-outline" slot="prepend"></Icon>
                    </Input>
                </Form-item>
                <Form-item prop="password">
                    <Input type="password" v-model="formInline.password" placeholder="Password">
                    <Icon type="ios-locked-outline" slot="prepend"></Icon>
                    </Input>
                </Form-item>
                <Form-item>
                    <Button type="primary" @click="handleSubmit('formInline')">登录</Button>
                </Form-item>
            </Form>
            </Col>
        </Row>
    </div>
</template>
<script>
    export default {
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
                this.$router.push({ name: 'demo1' });
            },
            //login
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('登陆成功!');
                        this.$router.push({ name: 'demo1' });
                    } else {
                        this.$Message.error('表单验证失败!');
                    }
                })
            }
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
                countMessage: "",
                list : [1,2,3,4,5,6,7,8,9,10],
                //login
                formInline: {
                    user: '',
                    password: ''
                },
                ruleInline: {
                    user: [
                        { required: true, message: '请填写用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请填写密码', trigger: 'blur' },
                        { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
                    ]
                }
            }
        }
    }
</script>
