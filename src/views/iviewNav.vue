<style scoped>
    .layout-logo {
        width: 130px;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 10px;
    }

    .demo-badge {
        width: 5px;
        top: -10px;
        display: inline-block;
    }

    .footer-info {
        margin: 30px;
    }

    .content-blank {
        margin-top: 20px;
    }

</style>
<template>
    <div>
        <Row type="flex" justify="center" align="middle">
            <Col span="24">
            <Menu mode="horizontal" :theme="theme1" active-name="1">
                <div class="layout-logo"></div>
                <Menu-item name="1">
                    <router-link :to="{ name:'demo1'}">
                        <Icon type="ios-paper"></Icon>
                        Demo1
                    </router-link>
                </Menu-item>
                <Menu-item name="2">
                    <router-link :to="{ name:'demo2'}">
                        <Icon type="ios-people"></Icon>
                        Demo2
                    </router-link>
                </Menu-item>
                <Submenu name="3">
                    <template slot="title">
                        <Icon type="stats-bars"></Icon>
                        统计分析
                    </template>
                    <Menu-group title="DEMOS">
                        <router-link :to="{ name:'demo3'}">
                            <Menu-item name="3-1">demo3</Menu-item>
                        </router-link>
                        <router-link :to="{ name:'demo4'}">
                            <Menu-item name="3-2">demo4</Menu-item>
                        </router-link>
                        <router-link :to="{ name:'demo5'}">
                            <Menu-item name="3-3">demo5</Menu-item>
                        </router-link>
                    </Menu-group>
                    <Menu-group title="留存">
                        <Menu-item name="3-4">用户留存</Menu-item>
                        <Menu-item name="3-5">流失用户</Menu-item>
                    </Menu-group>
                </Submenu>
                <Menu-item name="4">
                    <Icon type="settings"></Icon>
                    综合设置
                </Menu-item>
                <Submenu name="5">
                    <template slot="title">
                        <Icon type="stats-bars"></Icon>
                        切换主题
                    </template>
                    <Menu-group title="颜色">
                        <!--<Radio-group v-model="theme1">-->
                        <Menu-item name="dark"><a @click="theme1='dark'">黑色</a></Menu-item>
                        <Menu-item name="light" @click="theme1='light'"><a @click="theme1='light'">白色</a></Menu-item>
                        <Menu-item name="primary" @click="theme1='primary'"><a @click="theme1='primary'">蓝色</a>
                        </Menu-item>
                        <!--<Menu-item name="light" ><Radio label="light">L   I   G   H   T</Radio></Menu-item>
                        <Menu-item name="dark" ><Radio label="dark">D   A   R   K</Radio></Menu-item>
                        <Menu-item name="primary" ><Radio label="primary">P R I M A R Y</Radio></Menu-item>-->
                        <!--</Radio-group>-->
                    </Menu-group>
                </Submenu>
                <Menu-item name="6">
                    未读消息
                    <Badge count="3" class="demo-badge" overflow-count="99">
                    </Badge>
                </Menu-item>
            </Menu>
            <!--<br>
            <p>切换主题</p>
            <Radio-group v-model="theme1">
                <Radio label="light"></Radio>
                <Radio label="dark"></Radio>
                <Radio label="primary"></Radio>
            </Radio-group>-->
            </Col>
        </Row>
        <div class="content-blank">
        </div>
        <router-view></router-view>
        <Row type="flex" justify="center" align="middle">
            <Col span="8">
            <div class="footer-info">
                <Alert type="success" show-icon>
                    测试、学习用Iview项目
                    <span slot="desc">成功的提示描述文案成功的提示描述文案成功的提示描述文案成功的提示描述文案成功的提示描述文案</span>
                </Alert>
            </div>
            </Col>
        </Row>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                theme1: 'dark'
            }
        }
    }
</script>