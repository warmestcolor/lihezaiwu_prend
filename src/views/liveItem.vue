<style scoped>
    .index {
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        /*  */
    }

    .index h1 {
        height: 150px;
    }

    .index h1 img {
        height: 100%;
    }

    .index h2 {
        color: #666;
        margin-bottom: 200px;
    }

    .index h2 p {
        margin: 0 0 50px;
    }

    .line-border {
        border-top: 1px #999 solid;
        border-bottom: 1px #999 solid;
        height: 96px;
        /* padding: 24px; */
    }

    .line-btn {
        height: 100%;
        width: 100%;
        background-color: #5E32BD;
        border: none;
    }

    .line-item-top {
        font-size: 18px;
        text-align: left;
        padding: 18px;
        color: white;
    }
    .line-item-normal {
        font-size: 18px;
        text-align: left;
        padding: 18px;
        border-bottom: #999 solid 1px;
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
    <div class="index" style="background:#eee">
         <div style="background:#eee;padding: 10px 10px 10px 10px">
        <Card :bordered="false">
            <p slot="title" style="font-size: 20px">{{name}}</p>          
            <div style="text-align:center">
            <img :src="image_url" style="width:100%">
            </div>
            <p>{{describe}}</p>
        </Card>
        </div>
       <div style="padding: 10px;background:#eee">
        <Card title="选项" icon="ios-options" :padding="0">
            <CellGroup>
                <Cell title="进入直播" extra="光合直播间" @click.native="goLive(liveId)" />
            </CellGroup>
        </Card>
    </div>
    </div>
</template>
<script>
    import util from '../libs/util'
    export default {
        data () {
            return {
                name: null,
                id: null,
                type: null,
                describe: null,
                uid: null,      
                userStatus: null,
                touzi: false,   
                resourceId: null,     
                resourcePrice: null,
                openId: null,
                liveId: null,
                image_url: null,
            }
        },
        methods: {
            goLive(id){
                if(id != null&&id != undefined){
                window.location.href = "https://ghlive.cn/"+id
                // this.$router.push({path: '/item'+'?id='+itemId});    
                }
                this.$Message.warning('该项目暂无直播');
                    return false
            }
        },
    created(){
        console.log(this.$route.query.id)
        var that = this
        this.id = this.$route.query.id
            this.getRequest('/api/lives/'+this.$route.query.id)
                .then(function (response) {
                    console.log(response);
                    that.name = response.data.data.name
                    that.describe = response.data.data.describle
                    that.liveId = response.data.data.live_id
                    that.image_url = response.data.data.image_url
                })
                .catch(function (error) {
                    console.log(error);
                });
             this.getRequest('/api/wechat/user/'+ this.$store.state.uid)
                .then(function (response) {
                    console.log(response);
                    that.uid = response.data.data.uid
                    that.userStatus = response.data.data.memberStatus;
                    that.openId = response.data.data.userThirdInfos[0].openId
                    console.log('openid'+that.openId)
                    if(response.data.data.touzi != undefined){
                        that.touzi = response.data.data.touzi
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
            
    }
</script>