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
    <Row span="24" class="title">
        <Col span="22">用户激活</Col>
    </Row>
    <div style="width: 75%; margin-top: 15%; margin-left: 10%">
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
        <!-- <FormItem label="Password" prop="passwd">
            <Input type="password" v-model="formValidate.passwd"></Input>
        </FormItem>
        <FormItem label="Confirm" prop="passwdCheck">
            <Input type="password" v-model="formValidate.passwdCheck"></Input>
        </FormItem> -->
        <FormItem label="真实姓名" prop="realname">
            <Input v-model="formValidate.realname" size="large" placeholder="请输入您的真实姓名"></Input>
        </FormItem>
        <FormItem label="手机号" prop="phone">
            <Input v-model="formValidate.phone" size="large" placeholder="请输入您的手机号"></Input>
        </FormItem>
        <!-- <FormItem label="身份证号" prop="idcard">
            <Input v-model="formValidate.idcard" size="large" placeholder="请输入您的身份证号"></Input>
        </FormItem>
        <FormItem label="电子邮箱" prop="mail">
            <Input v-model="formValidate.mail" size="large" placeholder="请输入您的电子邮箱"></Input>
        </FormItem> -->
        <FormItem label="工作单位" prop="company">
            <Input v-model="formValidate.company" size="large" placeholder="请输入您的工作单位（个人请直接填写）"></Input>
        </FormItem>
        <FormItem label="职务" prop="job">
            <Input v-model="formValidate.job" size="large" placeholder="请输入您的职务（个人请直接填写）"></Input>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
            <Button @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
        </FormItem>
    </Form>
    </div>
</div>
</template>
<script>
    import util from '../libs/util'
    export default {
        data () {
            return {
                formValidate: {
                    phone: '',
                    realname: '',
                    idcard: '',
                    mail: '',
                    company: '',
                    job: '',
                    is_real_people: false,
                    is_right_people: false,
                    // passwd: '',
                    // passwdCheck: ''
                },
                ruleValidate: {
                    realname: [
                        { required: true, message: '真实姓名不能为空', trigger: 'blur' },
                        { required: true, type: 'string', trigger: 'change'}
                    ],
                    idcard: [
                        { required: true, message: '身份证号不能为空', trigger: 'blur' },
                        { required: true, type: 'string', min: 18, max: 18, message: '错误的格式', trigger: 'change'}
                    ],
                    company: [
                         { required: true, message: '工作单位不能为空', trigger: 'blur' },
                        { required: true, type: 'string', trigger: 'change'}
                    ],
                    job: [
                         { required: true, message: '职务不能为空', trigger: 'blur' },
                        { required: true, type: 'string', trigger: 'change'}
                    ],
                    phone: [
                        { required: true, message: '手机号码不能为空', trigger: 'blur' },
                        { required: true, type: 'string', min: 11, max: 11, message: '错误的格式', trigger: 'change'}
                    ],
                    mail: [
                        { required: true, message: '邮箱不能为空', trigger: 'blur' },
                        { type: 'email', message: '错误的邮箱格式', trigger: 'blur' }
                    ],
                    // passwd: [
                    //     { required: true, message: '密码不能为空', trigger: 'change' }
                    // ],
                    // passwdCheck: [
                    //     { required: true, message: '请检查您的密码', trigger: 'change' }
                    // ]
                }
            }
        },
        methods: {
            handleSubmit (name) {
                var that = this
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        // function trnsfer(obj) {obj.toString()}
                        const data = {
                            telephone: this.formValidate.phone,
                            // id_card: this.formValidate.idcard,
                            // email: this.formValidate.mail,
                            real_name: this.formValidate.realname,
                            job: this.formValidate.job,
                            company: this.formValidate.company
                        }
                        console.log('===========')
                        console.log(this.formValidate)
                        console.log(name)
                        console.log(valid)
                        console.log(data)
                        // this.$qs.stringify(data)
                        this.postRequest('/api/users/active', data)
                        .then(function (response) {
                            console.log(response);
                            that.$Modal.success({
                            title: '提交成功',
                            content: '您已认证成功，后台人员将对您的信息进行审核，若有虚假信息，管理人员有权取消您的认证资格。'
                });
                            that.$router.go(-1)
                        })
                        .catch(function (error) {
                            console.log(error);
                            that.$Message.error('提交失败!'+ error);
                        });
                    } else {
                        this.$Message.error('信息无效');
                    }
                })
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
                    if(that.is_real_people){
                        that.$Modal.warning({
                        title: '提示',
                        content: '您已经完成激活，再次提交将覆盖您的信息，请确认是否继续'
                        })
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
</script>
