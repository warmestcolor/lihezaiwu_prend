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
            投资项目
            <div slot="content">
        <div style="padding-top: 10px" v-for="(item, index) in normalList" :key="index">
        <Card @click.native="goProject(item.id)">
            <p slot="title">{{item.name}}</p>
            <p slot="extra">
            投资项目
            </p>
            <div style="text-align:center">
            <img :src= "item.image_url" style="width: 100%">
            </div>
            <p>{{item.describe}}</p>
        </Card>
        </div>
        <div style="padding-top: 10px">
        <Button to="/normal" type="info" long>更多项目</Button>
        </div>
        </div>
        </Panel>
         <Panel style="font-size: 20px" name="2">
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
        <div style="padding-top: 10px">
        <Button to="/high" type="info" long>更多基金</Button>
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
                normalList: [1, 2, 3, 4],
                highList: [11, 12, 13],
                value1: ['1', '2']
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
            var that = this
            this.getRequest('/api/projects_normal?page=0&size=1')
                .then(function (response) {
                    console.log(response);
                    that.normalList = response.data.data
                })
                .catch(function (error) {
                    console.log(error);
               });
            this.getRequest('/api/projects_high?page=0&size=1')
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