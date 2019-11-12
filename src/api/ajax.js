/*
    ajax请求函数模块封装
    返回值是promise对象（返回的数据是response.data）
*/
import axios from 'axios'
export default function ajax(url, data = {}, type = 'GET') {
    return new Promise(function (resolve, reject) {
        let promise;
        if (type === 'GET') {
            // 拼接参数
            let datastr = '';
            Object.keys(data).forEach(key => {
                datastr += key + '=' + data[key] + '&';
            })
            if (datastr !== '') {
                datastr = datastr.substring(0, datastr.lastIndexOf('&'));
                url = url + '?' + datastr;
            }
            // 发送get请求
            promise = axios.get(url);
        } else {
            promise = axios.post(url, data);
        }
        promise.then((response) => {
            // 请求成功调用resolve
            resolve(response.data);
        }).catch((error) => {
            //失败了调用reject()
            reject(error)
        })
    })
}