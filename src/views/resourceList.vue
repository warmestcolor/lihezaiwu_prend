<style scoped>
    .index {
        width: 100%;
        height: 800px;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
    }
    .title {
        height: 42px;
        padding: 10px 12px 10px 24px;
        font-size: 14px;
        color: white;
        background-color: #5E32BD;
    }
</style>
<template>
    <Collapse v-model="value1" >
        <Panel style="font-size: 20px" name="1">
            资源列表
            <div slot="content">
            <div v-for="(item, index) in resourceList" :key="index" style="padding-top: 10px">
            <Card v-if="item.can_download" @click.native="goArticle(item.id)">
            <p slot="title">{{item.name}}</p>
            <p href="#" slot="extra">
            下载资源
            </p>
            <p>价格：{{item.price}} ¥ 已购买</p>
        </Card>
        <Card v-else @click.native="goArticle(item.id)">
            <p slot="title">{{item.name}}</p>
            <p href="#" slot="extra">
            购买资源
            </p>
            <p>价格：{{item.price}} ¥</p>
        </Card>
        </div>
            </div>
        </Panel>
    </Collapse>
</template>
<script>
    import util from '../libs/util'
    export default {
                data () {
            return {
                project: [1, 2, 3, 4],
                resourceList: [],
                value1: '1'
            }
        },

        methods: {
            goArticle(itemId) {
                this.$router.push({path: '/article'+'?id='+itemId});
            },
            handleStart() {
                    this.$Modal.info({
                    title: 'Bravo',
                    content: 'Now, enjoy iView.'
                });
            },

            handleReachBottom () {
                return new Promise(resolve => {
                    setTimeout(() => {
                        const last = this.list3[this.list3.length - 1];
                        for (let i = 1; i < 11; i++) {
                            this.jijin.push(last + i);
                        }
                        resolve();
                    }, 2000);
                });
            },
            goLink(itemId) {
                this.$router.push({path: '/article'+'?id='+itemId});
            }
        },
        created(){
            console.log(this.GLOBAL)
            var that = this
            this.getRequest('/api/projects/'+this.$route.query.id+'/resources')
                .then(function (response) {
                    console.log(response);
                    that.resourceList = response.data.data
                })
                .catch(function (error) {
                    console.log(error);
               });
        }  
    };
</script>