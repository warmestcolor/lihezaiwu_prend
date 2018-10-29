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
        <div style="font-size: 28px; padding: 10px 24px 10px 24px">联系我们</div>
         <Card>
            <p slot="title">联系地址</p>
            <p href="#" slot="extra">
            <Icon type="ios-home"></Icon>
            </p>
            <p>深圳市南山区高新技术产业园清华信息港综合楼504</p>
        </Card>
         <Card>
            <p slot="title">电子邮箱</p>
            <p href="#" slot="extra">
            <Icon type="ios-mail"></Icon>
            </p>
            <p>tryago@163.com</p>
        </Card>
         <Card>
            <p slot="title">联系电话</p>
            <p href="#" slot="extra">
            <Icon type="ios-call"></Icon>
            </p>
            <p>0755-86726401</p>
        </Card>
    </div>
</template>
<script>
    import util from '../libs/util'
    export default {
        data () {
            return {
                value: ['2', '3']
            }
        },
        methods: {
        },
        created(){
            }
    }
</script>