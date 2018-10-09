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
            <Col span="22">项目列表</Col>

        </Row>
        <Card dis-hover v-for="(item, index) in project" :key="index" style="padding: 4px 12px">
            标题 {{ item }}
        </Card>

    </Scroll>
</template>
<script>
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
            }
        },
        beforeCreate(){
            

        }
    }
</script>