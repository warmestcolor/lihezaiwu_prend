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
    <div class="index">
    <div style="font-size: 28px; padding: 10px 24px 10px 24px">报名记录</div>
        <Tabs value="name1" span="24" style="width: 100%">
        <TabPane label="活动报名" name="name1" >
        <div style="padding: 10px 20px 10px 20px">
                <Card>
                <p style="font-size: 14px;"><Icon type="md-arrow-dropright" size=14 />这里是您已经报名的活动</p>
                </Card>
        </div>
        <div style="padding: 10px 20px 10px 20px"  v-for="(item, index) in activityList" :key="index">
            <Card @click.native="goProject(item.activity_id)">
            <p slot="title">报名活动：{{item.activity.name}}</p>
            <p href="#" slot="extra">
            {{item.inserted_at.slice(0,10)}}
            </p>
            <p>
            线下活动
            </p>
            </Card>
        </div>
        </TabPane>
        <TabPane label="投资意向" name="name2" >
        <div style="padding: 10px 20px 10px 20px">
                <Card>
                <p style="font-size: 14px;"><Icon type="md-arrow-dropright" size=14 />这里是您有投资意向的项目</p>
                </Card>
        </div>
        <div style="padding: 10px 20px 10px 20px"  v-for="(item, index) in projectlist" :key="index">
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
        </TabPane>
        </Tabs>
    </div>
</template>
<script>
    import util from '../libs/util'
    export default {
        data () {
            return {
                itemlist: [{project: {name: "测试", type: "normal"}, inserted_at: "2018-11-08"}],
                projectlist: [],
                activitylist: [],
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
            this.postRequest('/api/me/checkin/activity', null)
                .then(function (response) {
                    console.log(response);
                    console.log(that.itemlist);
                    that.activitylist = response.data.data
                })
                .catch(function (error) {
                    console.log(error);
               });
            console.log(this.GLOBAL)
            var that = this
            this.postRequest('/api/me/checkin/project', null)
                .then(function (response) {
                    console.log(response);
                    that.projectlist = response.data.data
                })
                .catch(function (error) {
                    console.log(error);
               });
        }  
    }
</script>