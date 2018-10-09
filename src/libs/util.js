import axios from 'axios';
import env from '../config/env';

let util = {

};
util.title = function(title) {
    title = title ? title + ' - Home' : 'iView project';
    window.document.title = title;
};

// const ajaxUrl = env === 'development' ?
//     'http://localhost:12001' :
//     env === 'production' ?
//     'https://www.url.com' :
//     'https://debug.url.com';

const ajaxUrl = "https://weixin.leaguervc.com"

util.ajax = axios.create({
    baseURL: ajaxUrl,
    timeout: 30000,
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
});

export default util;