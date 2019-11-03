import axios from 'axios';

import qs from 'qs';

// axios 配置
axios.defaults.timeout = 10000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

// axios.defaults.baseURL = 'https://www.wanandroid.com';
axios.defaults.baseURL = '/api';

// 拦截器的使用 https://juejin.im/post/5be3e9a4e51d450a456affa5


// 添加请求拦截器
axios.interceptors.request.use(function(config) {
    // 在发送请求之前做些什么
    if (config.method === 'post') {
        config.data = qs.stringify(config.data);
    }
    return config;
}, function(error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加返回拦截器
axios.interceptors.response.use(
    response => {
        if (response.status == 200) { //http请求成功
            if (response.data.errorCode === 0) { // 接口返回成功
                // console.log(response)
                // console.log("请求成功")
                // console.log(response.data)
                return Promise.resolve(response.data.data) // 返回解包后的数据
            } else {
                return Promise.reject(response.data.errorMsg)
            }
        } else {
            return Promise.reject("错误码：" + response.status)
        }
    },
    error => { // 请求失败
        switch (error.response.status) {
            case 401:
                // 处理未登录处理
                break;
            case 404:
                return Promise.reject("找不到接口")
                break;
        }
        return Promise.reject(error.response.statusText);
    }
);

// get方法 数据返回解包数据，并统一处理错误
export function get(url, param) {
    return new Promise((resolve, reject) => {
        axios
            .get(url, {
                params: param
            })
            .then(response => {
                // console.log(response);
                resolve(response);
            })
            .catch(error => {
                console.log(error)
                reject(error)
            });
    });
}

export function post(url, param) {
    return new Promise((resolve, reject) => {

        axios.post(url, param)
            .then(response => {
                resolve(response)
            })
            .catch(error => {
                reject(error);
            })
    });
}

export default {
    // 获取广告数据
    getBanners() {
        return get('/banner/json');
    },

    // 获取项目分类列表
    getProjectTree() {
        return get('/project/tree/json');
    },

    // 获取项目列表
    getProjectList(page, cid) {
        return get("/project/list/" + page + "/json?cid=" + cid);
        // let url = '/project/list/${page}/json?cid=${cid}'

        // return get('/project/list/${page}/json?cid=${cid}')
    },

    // 获取项目列表
    login(userName, password) {
        return post("/user/login", { 'username': userName, 'password': password })
    },
};