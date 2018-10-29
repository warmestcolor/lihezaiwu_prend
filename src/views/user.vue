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
    <div class="index">
        <Row type="flex" justify="center" align="top" style="height: 250px">
            <div style="width: 100%; text-align: center">
                <Avatar :src="url" style="width: 80px; height: 80px;border-radius: 40px; margin-top: 50px" vertical-align="middle" justify="center" align="middle" icon="ios-person" size=large />
            </div>
            <div style="font-size: 18px; text-align: center">{{name}}</div>
        </Row>
               <div style="padding: 10px">
        <Card title="选项" icon="ios-options" :padding="0">
            <CellGroup>
                <!-- <Cell title="Only show titles" />
                <Cell title="Display label content" label="label content" />
                <Cell title="Display right content" extra="details" /> -->
                <Cell title="激活/更新用户信息" extra="details" to="/regist" />
                <Cell title="合格投资人认证" extra="details" to="/test" />
                <Cell title="我的推荐" extra="details" to="/recommend" />
                <!-- <Cell title="Open link in new window" to="/components/button" target="_blank" />
                <Cell title="Disabled" disabled />
                <Cell title="Selected" selected />
                <Cell title="With Badge" to="/components/badge">
                    <Badge :count="10" slot="extra" />
                </Cell>
                <Cell title="With Switch">
                    <Switch v-model="switchValue" slot="extra" />
                </Cell> -->
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
                url: null,
                id: null,
                status: null,                
            }
        },
        methods: {
            handleStart() {
                this.$Modal.info({
                    title: 'Bravo',
                    content: 'Now, enjoy iView.'
                });
            },
            goRegist() {
                this.$router.push({path: '/regist'});
            },
            goTest() {
                this.$router.push({path: '/test'});
            }
        },
    created(){
            console.log("vuex数据" + this.$store.state.uid)
            this.id = this.$store.state.uid
            var that = this
            this.getRequest('/api/me')
                .then(function (response) {
                    console.log(response);
                    that.url = response.data.data.avatar;
                    that.name = response.data.data.username;
                    that.status = response.data.data.memberStatus;
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    };
</script>