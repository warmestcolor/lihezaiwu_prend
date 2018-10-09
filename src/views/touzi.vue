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
            <Col span="22">投资项目</Col>
            <a href="/normal" span="2">
                <Col span="2">更多</Col>
            </a>
        </Row>
        <Card @click.native='goLink(item.itemId)' dis-hover v-for="(item, index) in project" :key="index" style="padding: 4px 12px">
            {{item.itemName}}
        </Card>
        <Row span="24" class="title">
            <Col span="22">领投基金</Col>
            <a href="/high" span="2">
                <Col span="2">更多</Col>
            </a>
        </Row>
        <Card @click.native='goLink(item.itemId)' dis-hover v-for="(item, index) in jijin" :keye="index" style="padding: 4px 12px">
            {{item.itemName}}
        </Card>
    </Scroll>
</template>
<script>
    import util from '../libs/util'
    export default {
        data () {
            return {
                project: [1, 2, 3, 4],
                jijin: [11, 12, 13]
            }
        },
        methods: {
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
                this.$router.push({path: '/item'+'?id='+itemId});
            }
        },
        created(){
            var that = this
            util.ajax.get('/api/item/normal')
                .then(function (response) {
                    console.log(response);
                    that.project = response.data.data
                })
                .catch(function (error) {
                    console.log(error);
                });
            util.ajax.get('/api/item/high')
                .then(function (response) {
                    console.log(response);
                    that.jijin = response.data.data
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
</script>