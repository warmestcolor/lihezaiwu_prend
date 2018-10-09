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
    <Scroll :on-reach-bottom="handleReachBottom" height="670px">
        <Row span="24" class="title">
            <Col span="22">新闻列表</Col>

        </Row>
        <Card dis-hover @click.native="goLink(item.articleId)" v-for="(item, index) in articleList" :key="index" style="padding: 4px 12px">
            {{ item. articleTitle}}
        </Card>

    </Scroll>
</template>
<script>
    import util from '../libs/util'
    export default {
                data () {
            return {
                project: [1, 2, 3, 4],
                articleList: []
            }
        },

        methods: {
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
            util.ajax.get('/api/article/page?page=0&size=10')
                .then(function (response) {
                    console.log(response);
                    console.log(that.articleList);
                    that.articleList = response.data.data.content
                })
                .catch(function (error) {
                    console.log(error);
               });
        }  
    };
</script>