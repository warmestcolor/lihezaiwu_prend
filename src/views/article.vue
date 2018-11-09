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
    .detail {
        font-size: 20px;
        padding: 10px 24px 10px 24px;
        width: 100%;
        word-break: break-all;
    }
    .detail > .media-wrap.image-wrap > .img{
        width: 100%;
    }
</style>
<template>
    <div class="index">
        <div style="font-size: 28px; padding: 10px 24px 10px 24px">{{title}}</div>
        <div style="font-size: 20px; padding: 10px 24px 10px 24px">{{createTime}}</div>
        <div class="detail" v-html="details"></div> 
    </div>
</template>
<script>
    import util from '../libs/util'
    export default {
        data () {
            return {
                title: null,
                id: null,
                details: null,
                createTime: null,
                htmlvalue: '<p><b>把编辑器的初始内容放在这textarea即可</b></p><p><b>asdasdasdasda</b></p><p><b>asdasdasd</b></p>' 
            }
        },
        methods: {
        },
        created(){
            console.log(this.$route.query.id)
            var that = this
            this.id = this.$route.query.id
            this.getRequest('/api/articles/' + that.id)
                .then(function (response) {
                    console.log(response);
                    that.id = response.data.data.id
                    that.title = response.data.data.title
                    that.details = response.data.data.detail
                    that.createTime = response.data.data.inserted_at.slice(0,10)
                })
                .catch(function (error) {
                    console.log(error);
                });
            }
    }
</script>