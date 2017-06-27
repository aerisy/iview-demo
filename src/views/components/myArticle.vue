<template>
    <Card style="margin:20px">
        <p slot="title">{{artList.name}}</p>
        <p>日期：{{artList.date}}</p>
        <p>用户：{{artList.user}}</p>
        <p>{{artList.content}}</p>
    </Card>
</template>
<script>
    export default {
        props: ['artList']
    }
</script>