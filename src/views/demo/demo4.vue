<style scoped lang="less">
</style>
<template>
    <div>
        <Row type="flex" justify="center" align="middle">
            <Col span="20">
            <Alert show-icon>
                Table demo4!
                <template slot="desc">用户列表DEMO,数据从RAP mock获取.</template>
            </Alert>
            <Button @click="msgTest">ajaxTest</Button>
            <div>
                <my-article v-for="item in artList" :key="item" :name="item" :art-list='item'></my-article>
            </div>
            </Col>
        </Row>
    </div>
</template>
<script>
    import myArticle from '../components/myArticle.vue'

    export default {
        components: {
            myArticle
        },
        methods: {
            msgTest(){
                let _this = this;
                /*this.$utils.ajax({
                 url:'/show'
                 });*/
                _this.$http.get("/show").then(function (response) {
                    console.log(response.data);
                    _this.$Message.success(response.data.name);
                }).catch(function (error) {
                    console.log('ERROR axios get!');
                    console.log(error);
                })
            }
        },
        created: function () {
            let _this = this;
            _this.$http.get('/getAllArticle').then(function (response) {
                _this.artList = response.data.list;
            }).catch(function (error) {
                console.log('ERROR axios get!');
                console.log(error);
            })
        },
        data () {
            return {
                artList: []
            }
        },
        computed: {}
    }
</script>
