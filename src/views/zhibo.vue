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
        padding: 10px 24px;
        font-size: 14px;
        color: white;
        background-color: #5E32BD;
    }
</style>
<template>
    <Scroll :on-reach-bottom="handleReachBottom" height="670px">
        <Row span="24">
            <div class="title">直播列表</div>
        </Row>
        <Card dis-hover @click.native="goLink(item.liveId)" v-for="(item, index) in itemlist" :key="index" style="padding: 4px 12px">
            {{ item.liveName}}
        </Card>
    </Scroll>
</template>
<script>
    import util from '../libs/util'
    export default {
        data () {
            return {
                current: [1, 2, 3, 4, 5, 6, 7],
                history: [11, 12, 13],
                itemlist: []
            }
        },
        methods: {
            handleReachBottom () {
                return new Promise(resolve => {
                    setTimeout(() => {
                        const last = this.list3[this.list3.length - 1];
                        for (let i = 1; i < 11; i++) {
                            this.current.push(last + i);
                        }
                        resolve();
                    }, 2000);
                });
            },
            goLink(id) {
                window.location.href = "https://ghlive.cn/"+id
                // this.$router.push({path: '/item'+'?id='+itemId});
            }
        },
        created(){
            console.log(this.GLOBAL)
            var that = this
            util.ajax.get('/api/live/list')
                .then(function (response) {
                    console.log(response);
                    console.log(that.itemlist);
                    that.itemlist = response.data.data
                })
                .catch(function (error) {
                    console.log(error);
               });
        }
    }
</script>