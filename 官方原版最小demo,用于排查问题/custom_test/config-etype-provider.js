var configElementTypeProvider = (function () {
    return function (options) {

        var addElementTypes = function (context) {
            context.addPrintElementTypes(
                "testModule",
                [
                    new hiprint.PrintElementTypeGroup("常规", [
                        {
                            tid: 'configModule.name', title: '姓名', field: 'name', data: '古力娜扎', type: 'text',
                            "options": {

                                "height": 42,
                                "width": 107,
                                "fontSize": 19,
                                "fontWeight": "700",
                                "textAlign": "center",
                                "lineHeight": 39,
                                "hideTitle": true
                            }
                        },
                        {
                            tid: 'configModule.mySite', title: '个人网页', field: 'mySite', data: 'http://www.hinnn.com', type: 'text', "options": {

                                "height": 50,
                                "width": 50,
                                "fontSize": 19,
                                "fontWeight": "700",
                                "textAlign": "center",
                                "lineHeight": 39,
                                "hideTitle": true,
                                "textType": "qrcode"
                            }
                        },
                        { tid: 'configModule.gender', title: '性别', field: 'gender', data: '男', type: 'text' },
                        { tid: 'configModule.like', title: '爱好', field: 'like', data: '读书写字', type: 'text' },
                        { tid: 'configModule.email', title: '邮箱', field: 'email', data: 'hinnn.com@gmail.com', type: 'text' },
                        { tid: 'configModule.address', title: '地址', field: 'address', data: '北京朝阳区', type: 'text' },
                        { tid: 'configModule.phone', title: '电话', field: 'phone', data: '18888888888', type: 'text' },
                        { tid: 'configModule.target', title: '目标', field: 'target', data: '数据产品经理', type: 'text' },



                        { tid: 'configModule.image', title: '图片', data: '/Content/assets/hi.png', type: 'image' },
                        //{ tid: 'testModule.longText', title: '长文', data: '155123456789', type: 'longText' },
                        {
                            tid: 'configModule.workExperience', field: 'workExperience', title: '工作经历',
                            type: 'table',
                            columns: [

                                [{ title: '职位', align: 'center', field: 'position', width: 100 },
                                { title: '公司', align: 'center', field: 'company', width: 100 },
                                { title: '地点', align: 'center', field: 'address', width: 100 },
                                { title: '时间', align: 'center', field: 'date', width: 100 },
                                { title: '主要工作', align: 'center', field: 'work', width: 200 }
                                ]
                            ]
                        },
                        {
                            tid: 'configModule.html', title: 'html',
                            formatter: function (data, options) {
                                return $('<div style="height:50pt;width:50pt;background:red;border-radius: 50%;"></div>');
                            },
                            type: 'html'
                        },
                        { tid: 'configModule.customText', title: '自定义文本', customText: '自定义文本', custom: true, type: 'text' }
                    ]),
                    new hiprint.PrintElementTypeGroup("专业", [
                        { tid: 'configModule.professional', title: '专业', field: 'professional', data: '信息管理与信息系统', type: 'text' },
                        { tid: 'configModule.university', title: '大学', field: 'university', data: '北京邮电大学', type: 'text' },
                        { tid: 'configModule.universityAddress', title: '地点', field: 'universityAddress', data: '北京', type: 'text' },
                        { tid: 'configModule.universityDate', title: '时间', field: 'universityDate', data: '2008', type: 'text' },
                        { tid: 'configModule.tech', title: '技能', field: 'tech', data: 'MYSQL,HIVE(数据仓库工具),SPSS(统计产品已服务解决方案),数据挖掘，跨部门沟通能力，业务理解能力，数据解读分析。', type: 'longText' }
                    ]),
                    new hiprint.PrintElementTypeGroup("辅助", [
                        {
                            tid: 'configModule.hline',
                            title: '横线',
                            type: 'hline'
                        },
                        {
                            tid: 'configModule.vline',
                            title: '竖线',
                            type: 'vline'
                        },
                        {
                            tid: 'configModule.rect',
                            title: '矩形',
                            type: 'rect'
                        },
                        {
                            tid: 'testModule.oval',
                            title: '椭圆',
                            type: 'oval'
                        }
                    ])
                ]
            );
        };

        return {
            addElementTypes: addElementTypes
        };

    };
})();