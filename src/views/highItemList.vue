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
            <Col span="22"> 领投基金</Col>

        </Row>
        <Card @click.native="goLink(item.itemId)" dis-hover v-for="(item, index) in itemlist" :key="index" style="padding: 4px 12px">
            {{ item.itemName }}
        </Card>

    </Scroll>
</template>
<script>
    import util from '../libs/util'
    export default {
        data () {
            return {
                itemlist: [11, 12, 13]
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
            console.log(this.GLOBAL)
            var that = this
            util.ajax.get('/api/item/high')
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