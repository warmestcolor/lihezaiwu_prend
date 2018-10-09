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
    path: '/author',
    component: (resolve) => require(['./views/author.vue'], resolve)
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
    path: '/item',
    meta: {
        title: '项目详情'
    },
    component: (resolve) => require(['./views/item.vue'], resolve)
},{
    path: '/regist',
    meta: {
        title: '用户激活'
    },
    component: (resolve) => require(['./views/regist.vue'], resolve)
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
}
];
export default routers;