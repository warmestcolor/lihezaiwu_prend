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
            领投基金
            <div slot="content">
            <div style="padding-top: 10px" v-for="(item, index) in highList" :key="index">
        <Card @click.native="goProject(item.id)">
            <p slot="title">{{item.name}}</p>
            <p slot="extra">
            领投基金
            </p>
            <div style="text-align:center">
            <img :src= "item.image_url" style="width: 100%">
            </div>
            <p>{{item.describe}}</p>
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
                highList: [],
                value1: '1'
            }
        },
        methods: {
            goProject(itemId) {
                this.$router.push({path: '/project'+'?id='+itemId});
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
                this.$router.push({path: '/item'+'?id='+itemId});
            }
        },
        created(){
            console.log(this.GLOBAL)
            var that = this
            this.getRequest('/api/projects_high')
                .then(function (response) {
                    console.log(response);
                    that.highList = response.data.data
                })
                .catch(function (error) {
                    console.log(error);
               });
        }  
    }
</script>