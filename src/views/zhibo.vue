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
    <Collapse v-model="value1" >
        <Panel style="font-size: 20px" name="1">
            直播路演
            <div slot="content">
            <div style="padding-top: 10px" v-for="(item, index) in liveList" :key="index">
        <Card @click.native="goLive(item.id)">
            <p slot="title">{{item.name}}</p>
            <div style="text-align:center">
            <img :src= "item.image_url" style="width: 50%">
            </div>
            <!-- <p>{{item.describle}}</p> -->
            <div v-html="item.describle"></div>
        </Card>
        </div>
        </div>
        </Panel>
    </Collapse>
</template>
</template>
<script>
    import util from '../libs/util'
    export default {
        data () {
            return {
                current: [1, 2, 3, 4, 5, 6, 7],
                history: [11, 12, 13],
                liveList: [],
                value1: '1'
            }
        },
        methods: {
            goLive(itemId) {
                this.$router.push({path: '/live'+'?id='+itemId});
            },
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
            console.log(this.$router)
            var that = this
            this.getRequest('/api/lives')
                .then(function (response) {
                    console.log(response);
                    that.liveList = response.data.data
                })
                .catch(function (error) {
                    console.log(error);
               });
        }
    }
</script>