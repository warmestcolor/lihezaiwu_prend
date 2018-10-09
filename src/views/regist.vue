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
            <Input v-model="formValidate.realname" placeholder="请输入您的真实姓名"></Input>
        </FormItem>
        <FormItem label="身份证号" prop="idcard">
            <Input v-model="formValidate.idcard" placeholder="请输入您的身份证号"></Input>
        </FormItem>
        <FormItem label="手机号" prop="phone">
            <Input v-model="formValidate.phone" placeholder="请输入您的手机号"></Input>
        </FormItem>
        <FormItem label="电子邮箱" prop="mail">
            <Input v-model="formValidate.mail" placeholder="请输入您的电子邮箱"></Input>
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
    import {getCookie, setCookie, delCookie} from '../libs/cookie';
    import util from '../libs/util'
    export default {
        data () {
            return {
                formValidate: {
                    phone: '',
                    realname: '',
                    idcard: '',
                    mail: '',
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
                            phone: this.formValidate.phone,
                            idcard: this.formValidate.idcard,
                            mail: this.formValidate.mail,
                            realname: this.formValidate.realname
                        }
                        console.log('===========')
                        console.log(this.formValidate)
                        console.log(name)
                        console.log(valid)
                        console.log(data)
                        util.ajax.put('/api/wechat/user/'+getCookie("uid"), this.$qs.stringify(data))
                        .then(function (response) {
                            console.log(response);
                        })
                        .catch(function (error) {
                            console.log(error);
                        });
                        this.$Message.success('Success!');
                        this.$router.push({path: '/user'});
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            }
        }
    }
</script>
