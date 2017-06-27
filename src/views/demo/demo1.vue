<style scoped lang="less">
</style>
<template>
    <div>
        <Row type="flex" justify="center" align="middle">
            <Col span="18">
            <h2>
                <p>Demo1</p>
                <p>欢迎使用iview!</p>
                <p>这里是Demo1!</p>
                <p>Filter demo!</p>
            </h2>
            </Col>
        </Row>
        <Row type="flex" justify="center" align="middle">
            <Col span="18">
            <p v-for='tel in telephone'>{{tel | newtel}}</p>
            </Col>
        </Row>
        <Row type="flex" justify="center" align="middle">
            <Col span="18">
            <h2>
                <p>Filter + vbind demo!</p>
            </h2>
            <a v-for='(url,index) in urlList' :href='url.url | getquery(url.name,url.age)'>{{url.url}}<br></a>
            </Col>
        </Row>
        <
    </div>
</template>
<script>
    export default {
        data () {
            return {
                telephone: [
                    10000000000,
                    10000000001,
                    10000000002,
                    10000000003,
                    10000000004,
                    10000000005,
                    10000000006,
                    10000000007,
                    10000000008,
                    10000000009,
                    10000000000,
                ],
                urlList: [
                    {url: 'http://www.baidu.com', name: 'ziksang', age: 20},
                    {url: 'http://www.google.com', name: 'ziksang2', age: 30}
                ]
            }
        },
        filters: {
            newtel (value) {
                if (!value) return ''
                value = value.toString().substr(7, 4)
                value = '*'.repeat(7) + value
                let endMember = value.substr(-1, 1)
                if (endMember % 2) {
                    value = value + '中奖'
                } else {
                    value = value + '谢谢参与'
                }
                return value
            },
            getquery (value, name, age) {
                if (!value) return ""
                return `${value}?name=${name}&age=${age}`
            }
        }
    }
</script>
