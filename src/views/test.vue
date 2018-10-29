<style scoped>
     .index {
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        /* text-align: center; */
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
    <Row span="24" class="title">
        <Col span="24">合格投资人认证</Col>
    </Row>
    <Row span="24" class="title">
        <Col span="24">您的年龄</Col>
    </Row>
    <div style="padding-left: 20px">
    <RadioGroup v-model="score[0]" size=large vertical >
        <Radio label=3>A 18-30</Radio>
        <Radio label=5>B 31-50</Radio>
        <Radio label=2>C 51-65</Radio>
        <Radio label=1>D 高于65</Radio>
    </RadioGroup>
    </div>
    <Row span="24" class="title">
        <Col span="24">您的学历</Col>
    </Row>
    <div style="padding-left: 20px">
    <RadioGroup v-model="score[1]" size=large vertical>
        <Radio label=2>A 高中及以下</Radio>
        <Radio label=3>B 中专或大专</Radio>
        <Radio label=4>C 本科</Radio>
        <Radio label=5>D 硕士及以上</Radio>
    </RadioGroup>
    </div>
    <Row span="24" class="title">
        <Col span="24">您的职业</Col>
    </Row>
    <div style="padding-left: 20px">
    <RadioGroup v-model="score[2]" size=large vertical>
        <Radio label=1>A 无固定职业</Radio>
        <Radio label=3>B 专业技术人员</Radio>
        <Radio label=4>C 一般企事业单位员工</Radio>
        <Radio label=5>D 金融行业一般从业人员</Radio>
    </RadioGroup>
    </div>
    <Row span="24" class="title">
        <Col span="24">您的家庭可支配年收入为（折合人民币）</Col>
    </Row>
    <div style="padding-left: 20px">
    <RadioGroup v-model="score[3]" size=large vertical>
        <Radio label=1>A 50万元以下</Radio>
        <Radio label=2>B 50-100万元</Radio>
        <Radio label=3>C 100-500万元</Radio>
        <Radio label=4>D 500-1000万元</Radio>
        <Radio label=5>E 1000万元以上</Radio>
    </RadioGroup>
    </div>
    <Row span="24" class="title">
        <Col span="24">您可用于投资的资产数额（包括金融资产和不动产）</Col>
    </Row>
    <div style="padding-left: 20px">
    <RadioGroup v-model="score[4]" size=large vertical>
        <Radio label=0>A 不超过100万元人民币</Radio>
        <Radio label=2>B 100万-300万元（不含）人民币</Radio>
        <Radio label=4>C 300万-1000万元（不含）人民币</Radio>
        <Radio label=5>D 1000万元人民币以上</Radio>
    </RadioGroup>
    </div>
    <Row span="24" class="title">
        <Col span="24">您预计进行股权投资的资金占现有总资产的比例</Col>
    </Row>
    <div style="padding-left: 20px">
    <RadioGroup v-model="score[5]" size=large vertical>
        <Radio label=1>A 70%以上</Radio>
        <Radio label=2>B 50%-70%</Radio>
        <Radio label=3>C 30%－50%</Radio>
        <Radio label=4>D 10%－30%</Radio>
        <Radio label=5>E 10%以下</Radio>
    </RadioGroup>
    </div>
    <Row span="24" class="title" >
        <Col span="24">您的投资知识</Col>
    </Row>
    <div style="padding-left: 20px">
    <RadioGroup v-model="score[6]" size=large vertical>
        <Radio label=3>A 从事金融或财会等与投资相关的工作超过两年</Radio>
        <Radio label=4>B 已取得与金融投资相关专业学士以上学位</Radio>
        <Radio label=5>C 取得证券（基金）从业资格或相关财会证书等</Radio>
        <Radio label=0>D 我不符合以上任何一项描述</Radio>
    </RadioGroup>
    </div>
    <Row span="24" class="title" >
        <Col span="24">您的投资经验</Col>
    </Row>
    <div style="padding-left: 20px">
    <RadioGroup v-model="score[7]" size=large vertical>
        <Radio label=1>A 除银行储蓄外，基本无其他投资</Radio>
        <Radio label=2>B 我购买过理财产品，但还需要指导</Radio>
        <Radio label=4>C 我倾向于自己做出投资决策</Radio>
        <Radio label=5>D 我是一位非常有经验的投资者</Radio>
    </RadioGroup>
    </div>
    <Row span="24" class="title" >
        <Col span="24">您有多少年投资风险投资品的经验</Col>
    </Row>
    <div style="padding-left: 20px">
    <RadioGroup v-model="score[8]" size=large vertical>
        <Radio label=1>A 没有经验</Radio>
        <Radio label=2>B 少于2年</Radio>
        <Radio label=3>C 2至5年</Radio>
        <Radio label=5>D 5至10年</Radio>
        <Radio label=6>E 10年以上</Radio>
    </RadioGroup>
    </div>
    <Row span="24" class="title" >
        <Col span="24">您用于股权投资基金投资的资金的持续时间</Col>
    </Row>
    <div style="padding-left: 20px">
    <RadioGroup v-model="score[9]" size=large vertical>
        <Radio label=2>A 短期——0到1年</Radio>
        <Radio label=3>B 中期——1到3年</Radio>
        <Radio label=4>C 长期——3到5年</Radio>
        <Radio label=6>D 5年以上</Radio>
    </RadioGroup>
    </div>
    <Row span="24" class="title" >
        <Col span="24">您的投资目的</Col>
    </Row>
    <div style="padding-left: 20px">
    <RadioGroup v-model="score[10]" size=large vertical>
        <Radio label=3>A 资产保值</Radio>
        <Radio label=5>B 资产稳健增长</Radio>
        <Radio label=7>C 资产迅速增长</Radio>
        <Radio label=0>D 风险偏好</Radio>
    </RadioGroup>
    </div>
    <Row span="24" class="title" >
        <Col span="24">您的投资态度</Col>
    </Row>
    <div style="padding-left: 20px">
    <RadioGroup v-model="score[11]" size=large vertical>
        <Radio label=2>A 不希望本金损失，希望获得稳定回报</Radio>
        <Radio label=3>B 不希望本金损失，愿意承担一定幅度的收益波动</Radio>
        <Radio label=4>C 愿意为较高收益承担有限本金损失</Radio>
        <Radio label=6>D 愿意为高回报承担较大本金损失</Radio>
    </RadioGroup>
    </div>
    <Row span="24" class="title" >
        <Col span="24">您能承受的最大投资损失</Col>
    </Row>
    <div style="padding-left: 20px">
    <RadioGroup v-model="score[12]" size=large vertical>
        <Radio label=1>A 10%以内</Radio>
        <Radio label=2>B 10%-30%</Radio>
        <Radio label=3>C 30%-50%</Radio>
        <Radio label=6>D 超过50%</Radio>
    </RadioGroup>
    </div>
        <div style="padding: 10px 20px 10px 20px">
        <Button type="info" long>提交</Button>
        </div>
</div>
</template>
<script>
    import util,{ postRequest } from '../libs/util'
    export default {
        data () {
            return {
                name: null,
                url: null,
                id: null,
                status: null,
                is_real_people: false,
                is_right_people: false,
                score: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                ]

            }
        },
        methods: {
            handleSubmit () {
                var that = this
                var s = 0
                var t = ''
                var type = ""
                for(var i=0,len=that.score.length; i<len; i++){
                    console.log("这道题的得分是"+that.score[i]+ isNaN(that.score[i]))
                    s += parseInt(that.score[i])
                }
                if (s>=0 && s<=14)
                    {
                    type = "保守型"
                    t = "A"
                    }
                    else if (s>=15 && s<=28)
                    {
                    type = "稳健型"
                    t = "B"
                    }
                    else if (s>=29 && s<=42)
                    {
                    type = "平衡型"
                    t = "C"
                    }
                    else if (s>=43 && s<=56)
                    {
                    type = "成长型"
                    t = "D"
                    }
                    else if (s>=57 && s<=70)
                    {
                    type = "进取型"
                    t = "E"
                    }
                    else
                    {
                    type = "未知"
                    }
                    console.log(s)
                    console.log(t)
                    const data = {
                            score: s,
                        }
                    this.postRequest('/api/users/apply', this.$qs.stringify(data))
                            .then(function (response) {
                            console.log(response);
                            console.log(s)
                            that.$Modal.success({
                                title: '提交成功',
                                content: '您的风险识别能力和承担能力为：' + type
                            });
                        })
                        .catch(function (error) {
                            console.log(error);
                        });

            },
            handleReset (name) {
                this.$refs[name].resetFields();
            }
        },
        created(){
            console.log("vuex数据" + this.$store.state.uid)
            this.id = this.$store.state.uid
            var that = this
            this.getRequest('/api/me')
                .then(function (response) {
                    console.log(response);
                    that.is_real_people = response.data.data.is_real_people;
                if(!that.is_real_people){
                    that.$Message.warning('您还未激活，请激活您的账户');
                    that.$router.push({path: '/regist'});
                    return false}
                if(that.is_right_people){
                    that.$Modal.warning({
                    title: '提示',
                    content: '您已经完成了合格投资人认证，再次答题将覆盖您的答题记录，请确认是否继续'
                });
                }
                that.$Modal.warning({
                    title: '用户须知',
                    content: '力合载物谨遵基金业协会《私募投资基金募集行为管理办法》之规定，只向特定的合格投资者宣传推介相关私募投资基金产品'
                });
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
</script>