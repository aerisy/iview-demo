/**
 * Created by Administrator on 2017-6-26.
 */

import axios from 'axios'
import qs from 'qs'
// import auth from './authenticate'
// import { Message, MessageBox, Notification } from 'element-ui'
export default {
    data: {},
    ajax: function (options) {
        // axios.defaults.withCredentials = true
        axios.defaults.baseURL = 'http://rapapi.org/mockjsdata/21170';
        axios.request({
            method: options.method || 'post',
            //http://rapapi.org/mockjsdata/21170/show
            //http://localhost:8081/hi/message
            url: `${options.url}`,
            headers: {
                'Content-Type': options.contentType || 'application/json'
            },
            params: options.params,
            data: options.data || {},
            // transformRequest: [function(data) {
            //     // 这里可以在发送请求之前对请求数据做处理，比如form-data格式化等，这里可以使用开头引入的Qs（这个模块在安装axios的时候就已经安装了，不需要另外安装）
            //     data = qs.stringify(data);
            //     return data;
            // }],
            timeout: options.timeout || 30 * 1000
        }).then(function (response) {
            console.log("data - " + response.data);
            console.log("status - " + response.status);
            console.log("statusText - " + response.statusText);
            console.log("headers - " + response.headers);
            console.log("config - " + response.config);
            let responseData = response.data;
            if (responseData.status !== 0) {
                /*if (responseData.status === 10001) {
                 // 登陆失效
                 let message = '登录已失效，请重新登录';
                 MessageBox.alert(message, '警告', {
                 confirmButtonText: '确定'
                 }).then(action => {
                 auth.logout();
                 location.href = '/login';
                 });
                 } else if (options.error) {
                 options.error(responseData);
                 } else {
                 Message.warning({
                 message: responseData.message
                 });
                 // alert(`警告: ${responseData.message}\n错误：${responseData.status}`);
                 }*/
                console.log("ajax finish!!!!");
                this.data = responseData;
                // options.data=responseData;
            } else {
                console.log('success:' + options.success);
                console.log('responseData:' + responseData);
                options.success && options.success(responseData);
            }
        }).catch(function (error) {
            console.log(error.response);
            console.log(error);
            options.error && options.error(error)
        });
    },
    regPassword: function (password) {
        // 密码规则与后端一致: 8-16位含半角、英文、数字、特殊符号（！，@，#，$，%，^，&,*,.,_）组成的密码
        return (/^(?![\d!@#$%^&*._]{8,16}$|[a-zA-Z!@#$%^&*._]{8,16}$)[a-zA-Z\d!@#$%^&*._]{8,16}$/.test(password));
    }
}