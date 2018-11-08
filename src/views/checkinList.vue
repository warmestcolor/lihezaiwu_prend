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
            报名记录
            <div slot="content">    
            <div style="padding: 5px">
                <Card>
                <p style="font-size: 14px;"><Icon type="md-arrow-dropright" size=14 />这里是您已经报名的项目</p>
                </Card>
            </div>
            <div style="padding-top: 10px" v-for="(item, index) in itemlist" :key="index">
            <Card @click.native="goProject(item.project_id)">
            <p slot="title">报名项目：{{item.project.name}}</p>
            <p href="#" slot="extra">
            {{item.inserted_at.slice(0,10)}}
            </p>
            <p v-if="item.project.type=='high'">
            领投基金
            </p>
            <p v-if="item.project.type=='normal'">
            投资项目
            </p>
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
                itemlist: [{project: {name: "测试", type: "normal"}, inserted_at: "2018-11-08"}],
                value1: '1',
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
            this.getRequest('/api/me/checkin')
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