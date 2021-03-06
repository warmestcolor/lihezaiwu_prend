const routers = [{
    path: '/',
    meta: {
        title: '首页'
    },
    component: (resolve) => require(['./views/index.vue'], resolve)
},{
    path: '/zhibo',
    meta: {
        title: '直播'
    },
    component: (resolve) => require(['./views/zhibo.vue'], resolve)
},{
    path: '/touzi',
    meta: {
        title: '投资'
    },
    component: (resolve) => require(['./views/touzi.vue'], resolve)
},{
    path: '/user',
    meta: {
        title: '用户'
    },
    component: (resolve) => require(['./views/user.vue'], resolve)
},{
    path: '/news',
    meta: {
        title: '新闻'
    },
    component: (resolve) => require(['./views/newslist.vue'], resolve)
},{
    path: '/normal',
    meta: {
        title: '投资项目'
    },
    component: (resolve) => require(['./views/normalItemlist.vue'], resolve)
},{
    path: '/high',
    meta: {
        title: '领投基金'
    },
    component: (resolve) => require(['./views/highItemlist.vue'], resolve)
},{
    path: '/activitylist',
    meta: {
        title: '线下活动'
    },
    component: (resolve) => require(['./views/activityList.vue'], resolve)
},{
    path: '/recommend',
    meta: {
        title: '项目推荐'
    },
    component: (resolve) => require(['./views/recommendList.vue'], resolve)
},{
    path: '/checkin',
    meta: {
        title: '项目报名'
    },
    component: (resolve) => require(['./views/checkinList.vue'], resolve)
},{
    path: '/resource',
    meta: {
        title: '项目资源'
    },
    component: (resolve) => require(['./views/resourceList.vue'], resolve)
},{
    path: '/project',
    meta: {
        title: '项目详情'
    },
    component: (resolve) => require(['./views/projectItem.vue'], resolve)
},{
    path: '/live',
    meta: {
        title: '直播详情'
    },
    component: (resolve) => require(['./views/liveItem.vue'], resolve)
},{
    path: '/activity',
    meta: {
        title: '活动详情'
    },
    component: (resolve) => require(['./views/activityItem.vue'], resolve)
},{
    path: '/regist',
    meta: {
        title: '用户激活'
    },
    component: (resolve) => require(['./views/regist.vue'], resolve)
},{
    path: '/update',
    meta: {
        title: '用户更新'
    },
    component: (resolve) => require(['./views/update.vue'], resolve)
},{
    path: '/test',
    meta: {
        title: '合格投资人测试'
    },
    component: (resolve) => require(['./views/test.vue'], resolve)
},{
    path: '/article',
    meta: {
        title: '文章'
    },
    component: (resolve) => require(['./views/article.vue'], resolve)
},{
    path: '/about',
    meta: {
        title: '关于力合'
    },
    component: (resolve) => require(['./views/about.vue'], resolve)
},{
    path: '/service',
    meta: {
        title: '服务项目'
    },
    component: (resolve) => require(['./views/service.vue'], resolve)
},{
    path: '/contact',
    meta: {
        title: '联系我们'
    },
    component: (resolve) => require(['./views/contact.vue'], resolve)
}
];
export default routers;