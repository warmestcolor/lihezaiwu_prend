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
    <div style="font-size: 28px; padding: 10px 24px 10px 24px">推荐记录</div>
        <Tabs value="name1" span="24" style="width: 100%">
        <TabPane label="项目推荐" name="name1" >
        <div style="padding: 10px 20px 10px 20px">
                <Card>
                <p style="font-size: 14px;"><Icon type="md-arrow-dropright" size=14 />项目推荐成功后，平台工作人员将会跟您联系，您将获取一定的的推荐奖励。</p>
                </Card>
        </div>
        <div style="padding: 10px 20px 10px 20px"  v-for="(item, index) in projectlist" :key="index">
            <Card @click.native="goProject(item.project_id)">
            <p slot="title">用户：{{item.dist_user.username}}</p>
            <p href="#" slot="extra">
            {{item.inserted_at.slice(0,10)}}
            </p>
            <p>浏览项目：{{item.project.name}}</p>
            </Card>
        </div>
        </TabPane>
        <TabPane label="活动推荐" name="name2" >
        <div style="padding: 10px 20px 10px 20px">
                <Card>
                <p style="font-size: 14px;"><Icon type="md-arrow-dropright" size=14 />这里是您推荐活动的浏览列表</p>
                </Card>
        </div>
        <div style="padding: 10px 20px 10px 20px"  v-for="(item, index) in activitylist" :key="index">
            <Card @click.native="goActivity(item.activity_id)">
            <p slot="title">用户：{{item.dist_user.username}}</p>
            <p href="#" slot="extra">
            {{item.inserted_at.slice(0,10)}}
            </p>
            <p>浏览活动：{{item.activity.name}}</p>
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
                itemlist: [11, 12, 13],
                projectlist: [],
                activitylist: [],
                value1: '1',
            }
        },
        methods: {
            goProject(itemId) {
                this.$router.push({path: '/project'+'?id='+itemId});
            },
            goActivity(itemId) {
                this.$router.push({path: '/activity'+'?id='+itemId});
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
            this.getRequest('/api/me/recommends/project')
                .then(function (response) {
                    console.log(response);
                    console.log(that.itemlist);
                    that.projectlist = response.data.data
                })
                .catch(function (error) {
                    console.log(error);
               });
            console.log(this.GLOBAL)
            var that = this
            this.getRequest('/api/me/recommends/activity')
                .then(function (response) {
                    console.log(response);
                    console.log(that.itemlist);
                    that.activitylist = response.data.data
                })
                .catch(function (error) {
                    console.log(error);
               });
        }  
    }
</script>