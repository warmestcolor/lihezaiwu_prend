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
        <div style="font-size: 28px; padding: 10px 24px 10px 24px">服务项目</div>
        <Tabs value="name1" span="24" style="width: 100%">
        <TabPane label="创业投资" name="name1" >
        <div style="padding: 10px 20px 10px 20px">
        <p style="text-indent:2em; font-size: 14px;">力合创投是中国最早的知名高科技特色的创业投资机构，股东背景为清华大学和深圳市政府，目前管理基金规模超过100亿元。在电子信息通讯、生物医药、新能源、新材料、先进装备制造及现代农业、现代服务业等领域，投资了200余家具备技术创新和商业模式创新的创业企业，其中已有40余家实现成功退出，其中22家在国内A股市场上市，投资项目的整体内部收益率（IRR）超过30%。</p>
        <p style="text-indent:2em; font-size: 14px; padding-top: 20px;">力合载物是力合创投旗下自主经营的独立品牌。致力于科技型、创新型VC投资；目前管理5支基金。</p>
        <p style="font-size: 14px; color: #00b2ff; padding-top: 20px;">投资方向选择</p>
        <p style="font-size: 14px;"><Icon type="md-arrow-dropright" size=14 />国家政策扶持的战略新兴产业。节能环保、新兴信息产业、生物产业、新能源、新能源汽车、高端装备制造业和新材料。</p>
        <p style="font-size: 14px;"><Icon type="md-arrow-dropright" size=14 />资本市场欢迎的“三高六新”企业。即成长性高、科技含量高、附加值高以及新经济、新服务、新农业、新材料、新能源和新商业模式。</p>
        <p style="font-size: 14px;"><Icon type="md-arrow-dropright" size=14 />符合经济和社会周期的高成长产业。受益于中国城市化、人口特点、消费升级、社会进步、产业结构调整，以及周期性性底部复苏的产业。</p>
        <p style="font-size: 14px; color: #00b2ff; padding-top: 20px;">投资主要策略</p>
        <p style="font-size: 14px;"><Icon type="md-arrow-dropright" size=14 />项目特点：高技术、创新性或较高壁垒必有其一。</p>
        <p style="font-size: 14px;"><Icon type="md-arrow-dropright" size=14 />投资价值：高成长、上市溢价、并购溢价必有其一。</p>
        <p style="font-size: 14px; padding-bottom: 30px;"><Icon type="md-arrow-dropright" size=14 />团队特点：核心2人以上、奉献和牺牲、学历与诚信。</p>
        <p style="font-size: 14px; color: #00b2ff; padding-top: 20px;">投资案例</p>
        <p style="font-size: 14px;"><Icon type="md-arrow-dropright" size=14 />力合载物及团队已投部分项目：</p>
                        <div style="text-align:center; padding-top: 10px;">
                            <img src="./resource/757014.png" style="width: 100%">
                        </div>
             </div>
        </TabPane>
        <TabPane label="孵化加速" name="name2" >
        <div style="padding: 10px 20px 10px 20px">
            <p style="text-indent:2em; font-size: 14px;">力合科创集团拥有深圳、珠海、佛山、顺德、东莞、无锡、长株潭、南京、惠州等多个高科技创新基地，构建起了辐射海内外的科技创新孵化体系及产业投资平台；吸引落户了1000多家各类高科技企业。力合星空孵化器是力合科创集团下属的早期企业孵化机构，已经形成全国性的网络布局。</p>
            <p style="text-indent:2em; font-size: 14px; padding-top: 20px;">载物之星加速器为力合载物旗下为企业提供成长加速服务的品牌。服务的内容加速器运营和招商、科技项目孵化、创业项目辅导、创业融资、创业服务等。</p>
            <div style="text-align:center; padding-top: 20px;">
                <img src="./resource/1541647404814.jpg" style="width: 75%">
            </div>
            <div style="text-align:center; padding-top: 10px;">
                <img src="./resource/1541648532651.jpg" style="width: 75%">
            </div>
            <div style="text-align:center; padding-top: 10px;">
                <img src="./resource/1541648561343.jpg" style="width: 75%">
            </div>
        </div>
        </TabPane>
        <TabPane label="产业招商" name="name3" >
        <div style="padding: 10px 20px 10px 20px">
            <p style="text-indent:2em; font-size: 14px;">力合载物与集团其他业务板块错位发展，在中心城市周边的中等城市设立产业基金，为当地政府提供产业培育和产业引进服务。目前已在广西梧州设立两只产业基金，配合政府为粤桂开发区引进了广西锂霸、广西兴合力等优质企业。力合载物也在韶关组建了产业发展投资基金。</p>
            <div style="text-align:center; padding-top: 20px;">
                <img src="./resource/1541648566197.jpg" style="width: 75%">
            </div>
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
            }
        },
        methods: {
        },
        created(){
            }
    }
</script>