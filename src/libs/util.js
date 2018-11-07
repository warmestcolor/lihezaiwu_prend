import axios from 'axios';
import env from '../config/env';

let util = {

};
util.title = function(title) {
    // title = title ? title + ' - Home' : 'iView project';
    window.document.title = title;
};

const ajaxUrl = env === 'development' ?
    'http://10.21.113.59:4000' :
    env === 'production' ?
    'https://www.url.com' :
    'https://debug.url.com';

// util.ajax = axios.create({
//     baseURL: ajaxUrl,
//     timeout: 30000,
//     headers: {'Content-Type': 'application/x-www-form-urlencoded'}
// });

axios.interceptors.request.use(config=> {
    return config;
  }, err=> {
    Message.error({message: '请求超时!'});
    return Promise.resolve(err);
  })
  axios.interceptors.response.use(data=> {
    if (data.status && data.status == 200 && data.data.status == 'error') {
    //   Message.error({message: data.data.msg});
      return;
    }
    return data;
  }, err=> {
    if (err.response.status == 504||err.response.status == 404) {
    //   Message.error({message: '服务器被吃了⊙﹏⊙∥'});
        console.log("错了")
    } else if (err.response.status == 403) {
    //   Message.error({message: '权限不足,请联系管理员!'});
        console.log(403)
    } else if (err.response.status == 401) {
    //   Message.error({message: '未知错误!'});
      console.log("未登录"+err.response.status)
      console.log("当前地址"+ window.location.href)
      window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx3f179d9e380457a5&redirect_uri=https%3A%2F%2Fweixin.leaguervc.com%2Fapi%2Fwechat%2Fuser%2FuserInfo&response_type=code&scope=snsapi_userinfo#wechat_redirect"
    } else{
      console.log("未知错误"+err.response.status)
      // this.$Message.error(err.response.data.message)
    }
    return Promise.resolve(err);
  })
  
  // let base = 'http://10.21.113.59:4000';
  let base = 'https://weixin.leaguervc.com';
  
  export const postRequest = (url, params) => {
    return axios({
      method: 'post',
      url: `${base}${url}`,
      data: params,
      transformRequest: [function (data) {
        let ret = ''
        for (let it in data) {
          ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
        }
        return ret
      }],
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
  }
  export const uploadFileRequest = (url, params) => {
    return axios({
      method: 'post',
      url: `${base}${url}`,
      data: params,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  }
  export const putRequest = (url, params) => {
    return axios({
      method: 'put',
      url: `${base}${url}`,
      data: params,
      transformRequest: [function (data) {
        let ret = ''
        for (let it in data) {
          ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
        }
        return ret
      }],
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
  }
  export const deleteRequest = (url) => {
    return axios({
      method: 'delete',
      url: `${base}${url}`
    });
  }
  export const getRequest = (url) => {
    return axios({
      method: 'get',
      url: `${base}${url}`
    });
  }

export default util;