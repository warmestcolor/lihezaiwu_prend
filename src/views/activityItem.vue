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
            <p>开始时间 {{start_time}}</p>
            <p>结束时间 {{end_time}}</p>
        </Card>
        </div>
       <div style="padding: 10px;background:#eee">
        <Card title="选项" icon="ios-options" :padding="0">
            <CellGroup>
                <Cell title="我要报名" @click.native="checkIn()"/>
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
                start_time: null,
                end_time: null,
                image_url: null,
                is_real_people: false,
                is_right_people: false,
            }
        },
        methods: {
            checkIn() {
                var that = this
                console.log(that.id)
                console.log(that.uid)
                if(!that.is_real_people){
                    this.$Message.warning('您还未激活，请激活您的账户');
                    this.$router.push({path: '/regist'});
                    return false
                }
                this.postRequest('/api/activitie_checkin/'+ that.id, {})
                            .then(function (response) {
                            console.log(response);
                        })
                        .catch(function (error) {
                            console.log(error);
                        });
                this.$Modal.success({
                    title: '报名成功',
                    content: '随后我们将会与您取得联系，感谢您的关注'
                });
            }
        },
    created(){
        console.log(this.$route.query.id)
        var that = this
        this.id = this.$route.query.id
            this.getRequest('/api/activities/'+this.$route.query.id)
                .then(function (response) {
                    console.log(response);
                    that.name = response.data.data.name
                    that.describe = response.data.data.describle
                    that.start_time = response.data.data.start_time.slice(0,10)
                    that.end_time = response.data.data.end_time.slice(0,10)
                    that.image_url = response.data.data.image_url
                })
                .catch(function (error) {
                    console.log(error);
                });
            this.getRequest('/api/me')
                .then(function (response) {
                    console.log(response);
                    that.is_real_people = response.data.data.is_real_people
                    that.is_right_people = response.data.data.is_right_people
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
            
    }
</script>