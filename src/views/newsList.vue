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
            文章列表
            <div slot="content">
            <div v-for="(item, index) in articleList" :key="index" style="padding-top: 10px">
            <Card @click.native="goArticle(item.id)">
            <p slot="title">{{item.title}}</p>
            <p href="#" slot="extra">
            <!-- <Icon type="ios-loop-strong"></Icon> -->
            {{item.inserted_at.slice(0,10)}}
            </p>
            <p>新闻</p>
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
                articleList: [],
                value1: '1'
            }
        },

        methods: {
            goArticle(itemId) {
                window.location.href = "https://weixin.leaguervc.com/article?id=" + itemId
                // this.$router.push({path: '/article'+'?id='+itemId});
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
            this.getRequest('/api/articles')
                .then(function (response) {
                    console.log(response);
                    console.log(that.articleList);
                    that.articleList = response.data.data
                })
                .catch(function (error) {
                    console.log(error);
               });
        }  
    };
</script>