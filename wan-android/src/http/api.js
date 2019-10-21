import axios from 'axios';

// axios 配置
axios.defaults.timeout = 10000;
axios.defaults.headers.post['Content-Type'] =
    'application/x-www-form-urlencoded;charset=UTF-8';
// axios.defaults.baseURL = 'https://www.wanandroid.com';

//返回状态判断
axios.interceptors.response.use(
    res => {
        if (!res.data.success) {
            // _.toast(res.data.msg);
            return Promise.reject(res);
        }
        return res;
    },
    error => {
        _.toast('网络异常', 'fail');
        return Promise.reject(error);
    }
);

// // 添加请求拦截器
// axios.interceptors.request.use(function (config) {
//   // 在发送请求之前做些什么
//   return config;
// }, function (error) {
//   // 对请求错误做些什么
//   return Promise.reject(error);
// });

axios.interceptors.response.use(
    response => {
        if (response.errorCode != 0) {
            console.log('请求失败');
            console.log(response);
            return Promise.reject(res);
        }
        return response;
    },
    error => {
        // 对响应错误做点什么
        return Promise.reject(error);
    }
);

export function get(url, param) {
    return new Promise((resolve, reject) => {
        axios
            .get(url, {
                params: param
            })
            .then(
                response => {
                    resolve(response.data);
                },
                err => {
                    reject(err);
                }
            )
            .catch(error => {
                reject(error);
            });
    });
}

export default {
    getBanners() {
        return get('http://www.wanandroid.com/banner/json');
    }
};