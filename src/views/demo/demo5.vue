<template>
    <div>
        <Row type="flex" justify="center" align="middle">
            <Col span="18">
            <Input v-model="tag_text" size="small" style="width: 500px;" placeholder="请输入号码，多个用逗号分隔">
            <Select v-model="tag_type" slot="prepend" style="width: 80px">
                <Option v-for="type in tag_types" :key="type" :name="type" :value="type.value">{{ type.text }}</Option>
                <!--<Option value="qq">QQ</Option>-->
            </Select>
            <Button icon="ios-plus-empty" slot="append" type="dashed" size="small" @click="handleAdd">添加</Button>
            </Input>
            <!--<div v-for="(key,value) in tag_group">

                <p>{{ key }}</p>
                <p>111</p>
            </div>-->
            </Col>
        </Row>
        <Row type="flex" justify="center" align="middle">

            <template v-for="item in tag_group">
                <Col span="18">
                {{item.key}}
                <Tag v-for="ii in item.value" :key="item.key" :name="ii" closable @on-close="handleClose2">{{ ii }}
                </Tag>
                </Col>
            </template>
        </Row>
    </div>
</template>
<script>
    export default {
        created: function () {
            this.tag_types = [
                {text: 'QQ', value: 'QQ'},
                {text: '微信', value: 'WECHAT'},
                {text: '手机', value: 'TEL'}
            ];
            let group = [];
            const tagtps = this.tag_types;
            for (const i in this.tag_types) {
//                console.log(tagtps[i].value);
//                group.set(tagtps[i].value, ['11', '22']);
                group.push({
                    key: tagtps[i].value,
                    value: ['11', '22']
                });
            }
            this.tag_group = group;
            console.log("tag group");
            console.log(this.tag_group);
        },
        data () {
            return {
                count: [0, 1, 2],
                tag_content: ['Hello', '标签'],
                tag_group: [],
                tag_text: '',
                tag_type: 'QQ',
                tag_types: []
            }
        },
        methods: {
            handleAdd () {
                this.tag_text = this.tag_text.replace("，", ",");
                const text_arr = this.tag_text.split(",");
                const text_type = this.tag_type;
                console.log(text_arr);
                for (const i in text_arr) {
                    const text = text_arr[i];
                    console.log(text);
                    if (text.length > 0 && text_type.length > 0) {
                        const index = this.tag_content.indexOf(text_arr[i]);
                        console.log("type group");
                        console.log(this.tag_group.get(text_type));
                        this.tag_group.get(text_type).push(text_arr[i]);
                        console.log(this.tag_group.get(text_type));
                        if (index < 0) {
                            this.tag_content.push(text_arr[i]);
                        } else {
                            this.$Notice.warning({
                                title: text + " 已存在！",
                                desc: ''
                            });
//                            this.$Message.warning(text+" 已存在！");
                        }
                    }
                }
                console.log(text_type);
                if (text_type.length == 0) {

                } else {
                    this.tag_text = '';
                }
                /*if (this.count.length) {
                 this.count.push(this.count[this.count.length - 1] + 1);
                 } else {
                 this.count.push(0);
                 }*/
            },
            handleClose2 (event, name) {
                const index = this.tag_content.indexOf(name);
                this.tag_content.splice(index, 1);
                /*const index = this.count.indexOf(name);
                 this.count.splice(index, 1);*/
            }
        }
    }
</script>