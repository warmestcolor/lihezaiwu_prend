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
            推荐记录
            <div slot="content">
            <div style="padding-top: 10px" v-for="(item, index) in itemlist" :key="index">
        <Card>
            <p slot="title">用户：{{item.dist_user.username}}</p>
            <p href="#" slot="extra">
            {{item.inserted_at.slice(0,10)}}
            </p>
            <p>浏览项目：{{item.project.name}}</p>
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
                itemlist: [11, 12, 13],
                value1: '1',
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
            this.getRequest('/api/me/recommends')
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