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
        <div style="font-size: 28px; padding: 10px 24px 10px 24px">关于平台</div>
        <Tabs value="name1" span="24" style="width: 100%">
        <TabPane label="了解我们" name="name1" >
        <div style="padding: 10px 20px 10px 20px">
            <div style="text-align:center">
                <img src="./resource/vc.jpg" style="width: 75%">
            </div>
            <p>深圳力合载物创业投资有限公司成立于2016年8月，是由力合科创集团（力合创投）、集团高管与实力雄厚的社会合作方共同发起设立。力合载物依托集团资源和经验，秉承力合品牌和声誉，采用创新体制和激励机制，组建了一支专业、团结、高效，富于使命感和职业精神的精干团队。<br>公司立志为科技成果转化和创新创业提供全方位的支持，通过孵化器/加速器、创业投资基金、企业咨询和服务、产业投资基金、并购基金等工具和手段，致力成为“企业家成功发达的阶梯，上市公司的摇篮”。为国家创新创业和产业发展贡献力量，成为创业者、投资人和地方政府最信赖的专业服务商。<br>主营业务<br>科技企业VC/PE基金<br>科技孵化器和加速器<br>产业投资基金/其他类金<br>产业项目深度投资与整合<br>经营理念<br>稳行致远，诚信为本。<br>专注态度、专业技能、专家水平。<br>追求高成功、追求高回报。<br>倾注热情、无私奉献、厚德载物。</p>
        </div>
        </TabPane>
        <TabPane label="企业加速" name="name2" >
        <div style="padding: 10px 20px 10px 20px">
            <Collapse  v-model="value2">
                <Panel name="2-1">
                    创业融资服务
                    <p slot="content">1.融资辅导+专场直播路演
                                <br>2.联合投资
                                <br>3.商业计划书制作与优化、融资方案设计与融资协议法律服务
                    </p>
                </Panel>
                <Panel name="2-2">
                    创业企业咨询
                    <p slot="content">1.股权与期权激励方案
                                    <br>2.创业管理咨询（公司治理、创业风险、战略与路径、人力资源等）
                                    <br>3.资源对接（合作伙伴、人力资源、客户、技术）
                    </p>
                </Panel>
                <Panel name="2-3">
                    合作伙伴服务
                    <p slot="content">1.企业商务服务资质办理、项目与资金申报；专利、会计、工商、法律服务；品牌、市场、传播、会展服务等。
                                    <br>2.孵化器入驻与园区招商
                                    <br>3.地方政府招商引资、引智
                    </p>
                </Panel>
            </Collapse>
        </div>
        </TabPane>
        
        <TabPane label="创业投资" name="name3" >
        <div style="padding: 10px 20px 10px 20px">
        <p>力合科创集团以往和正在管理的基金超过20支，管理基金规模超过100亿元。在电子信息通讯、生物医药、新能源、新材料、先进装备制造及现代农业、现代服务业等领域，投资了200余家具备技术创新和商业模式创新的创业企业，其中已有40余家实现成功退出，其中22家在国内A股市场上市，投资项目的整体内部收益率（IRR）超过30%。
            <br>力合载物目前管理两只创业投资基金和2只地方政府产业基金，完成投资项目10个。
            <br>投资方向选择
            <br>1.国家政策扶持的战略新兴产业。节能环保、新兴信息产业、生物产业、新能源、新能源汽车、高端装备制造业和新材料。
            <br>2.资本市场欢迎的“三高六新”企业。即成长性高、科技含量高、附加值高以及新经济、新服务、新农业、新材料、新能源和新商业模式。
            <br>3.符合经济和社会周期的高成长产业。受益于中国城市化、人口特点、消费升级、社会进步、产业结构调整，以及周期性性底部复苏的产业。
            <br>投资主要策略
            <br>1.项目特点：高技术、创新性或较高壁垒必有其一。
            <br>2.投资价值：高成长、上市溢价、并购溢价必有其一。
        </p>
                <Collapse v-model="value3">
                    <Panel name="3-1">
                        基金管理
                        <p slot="content">
                            力合精选成长基金重点投向于新兴电子信息、智慧安防、新材料、新能源、无人机、VR、生物医疗、大健康、智能机器人等新兴科技领域。力合载物目前已经成立两只创业投资基金及两只地方政府基金。
                        </p>
                    </Panel>
                    <Panel name="3-2">
                        投资案例
                        <div slot="content">
                        <p>
                            力合科创已投资200多家企业，其中上市企业近30家。力合载物及团队已投高科技企业超60家。
                            <br>力合集团已投资孵化部分上市公司：
                        </p>
                        <div style="text-align:center">
                            <img src="./resource/753147.png" style="width: 100%">
                        </div>
                        <p>
                            <br>力合载物及团队已投部分项目：
                        </p>
                        <div style="text-align:center">
                            <img src="./resource/757014.png" style="width: 100%">
                        </div>
                        </div>
                    </Panel>
                </Collapse>
             </div>
        </TabPane>
        <TabPane label="联系我们" name="name4" >
        <div style="padding: 10px 20px 10px 20px">
        <Card>
            <p slot="title">联系地址</p>
            <p href="#" slot="extra">
            <Icon type="ios-home"></Icon>
            </p>
            <p>深圳市南山区高新技术产业园清华信息港综合楼504</p>
        </Card>
        </div>
        <div style="padding: 10px 20px 10px 20px">
         <Card>
            <p slot="title">电子邮箱</p>
            <p href="#" slot="extra">
            <Icon type="ios-mail"></Icon>
            </p>
            <p>tryago@163.com</p>
        </Card>
        </div>
        <div style="padding: 10px 20px 10px 20px">
        <Card>
            <p slot="title">联系电话</p>
            <p href="#" slot="extra">
            <Icon type="ios-call"></Icon>
            </p>
            <p>0755-86726401</p>
        </Card>
        </div>
        </TabPane>
        </Tabs>
         <!-- <Collapse v-model="value">
        <Panel name="1">
            了解我们
            <div slot="content">
                深圳力合载物创业投资有限公司成立于2016年8月，是由力合科创集团（力合创投）、集团高管与实力雄厚的社会合作方共同发起设立。力合载物依托集团资源和经验，秉承力合品牌和声誉，采用创新体制和激励机制，组建了一支专业、团结、高效，富于使命感和职业精神的精干团队。<br>公司立志为科技成果转化和创新创业提供全方位的支持，通过孵化器/加速器、创业投资基金、企业咨询和服务、产业投资基金、并购基金等工具和手段，致力成为“企业家成功发达的阶梯，上市公司的摇篮”。为国家创新创业和产业发展贡献力量，成为创业者、投资人和地方政府最信赖的专业服务商。<br>主营业务<br>科技企业VC/PE基金<br>科技孵化器和加速器<br>产业投资基金/其他类金<br>产业项目深度投资与整合<br>经营理念<br>稳行致远，诚信为本。<br>专注态度、专业技能、专家水平。<br>追求高成功、追求高回报。<br>倾注热情、无私奉献、厚德载物。
            </div>
        </Panel>
        <Panel name="2">
            企业加速
            <p slot="content">
                <Collapse accordion>
                    <Panel name="2-1">
                        创业融资服务
                        <p slot="content">1、融资辅导+专场直播路演
                                    <br>2、联合投资
                                    <br>3、商业计划书制作与优化、融资方案设计与融资协议法律服务
                        </p>
                    </Panel>
                    <Panel name="2-2">
                        创业企业咨询
                        <p slot="content">1、股权与期权激励方案
                                        <br>2、创业管理咨询（公司治理、创业风险、战略与路径、人力资源等）
                                        <br>3、资源对接（合作伙伴、人力资源、客户、技术）
                        </p>
                    </Panel>
                    <Panel name="2-3">
                        合作伙伴服务
                        <p slot="content">1、企业商务服务资质办理、项目与资金申报；专利、会计、工商、法律服务；品牌、市场、传播、会展服务等。
                                        <br>2、孵化器入驻与园区招商
                                        <br>3、地方政府招商引资、引智
                        </p>
                    </Panel>
                </Collapse>
            </p>
        </Panel>
        <Panel name="3">
            创业投资
            <p slot="content">
                力合科创集团以往和正在管理的基金超过20支，管理基金规模超过100亿元。在电子信息通讯、生物医药、新能源、新材料、先进装备制造及现代农业、现代服务业等领域，投资了200余家具备技术创新和商业模式创新的创业企业，其中已有40余家实现成功退出，其中22家在国内A股市场上市，投资项目的整体内部收益率（IRR）超过30%。<br>力合载物目前管理两只创业投资基金和2只地方政府产业基金，完成投资项目10个。
                <Collapse accordion>
                    <Panel name="3-1">
                        投资方向选择
                        <p slot="content">1、国家政策扶持的战略新兴产业。节能环保、新兴信息产业、生物产业、新能源、新能源汽车、高端装备制造业和新材料。
                                        <br>2、资本市场欢迎的“三高六新”企业。即成长性高、科技含量高、附加值高以及新经济、新服务、新农业、新材料、新能源和新商业模式。
                                        <br>3、符合经济和社会周期的高成长产业。受益于中国城市化、人口特点、消费升级、社会进步、产业结构调整，以及周期性性底部复苏的产业。
                        </p>
                    </Panel>
                    <Panel name="3-2">
                        投资主要策略
                        <p slot="content">1、项目特点：高技术、创新性或较高壁垒必有其一。
                                        <br>2、投资价值：高成长、上市溢价、并购溢价必有其一。
                        </p>
                    </Panel>
                </Collapse>
            </p>
        </Panel>
        <Panel name="4">
            联系我们
            <div slot="content">
                电子邮箱：tryago@163.com
                <br>联系地址：深圳市南山区高新技术产业园清华信息港综合楼504
                <br>联系电话：0755-86726401
            </div>
        </Panel>
    </Collapse> -->
    </div>
</template>
<script>
    import util from '../libs/util'
    export default {
        data () {
            return {
                value2: ['2-1', '2-2', '2-3'],
                value3: ['3-1', '3-2']

            }
        },
        methods: {
        },
        created(){
            }
    }
</script>