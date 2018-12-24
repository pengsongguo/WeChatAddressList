$(function () {
    $('.towBtn li').on('click', function () {
        $(this).addClass('checked').siblings().removeClass('checked')
    })
    //同意条款
    $('.agreeCheck').on('click', function () {
        $(this).find('img').fadeToggle()
    })
    //模拟数据
    //城市选择页面渲染
    var data = [
        {
            initial: "A",
            cityList: [
                {
                    id: 1, cityName: "安阳市",
                    courtList: [
                        {id: 1001, courtName: "河南省安阳市中级人民法院"},
                        {id: 1002, courtName: "安阳市文峰区人民法院"},
                        {id: 1003, courtName: "安阳市北关区人民法院"},
                        {id: 1004, courtName: "林州市人民法院"},
                    ]
                },
                {
                    id: 2, cityName: "鞍山市",
                    courtList: [
                        {id: 2001, courtName: "辽宁省鞍山市中级人民法院"},
                        {id: 2002, courtName: "鞍山市铁东区人民法院"},
                        {id: 2003, courtName: "鞍山市铁西区人民法院"},
                        {id: 2004, courtName: "鞍山市立山区人民法院"},
                    ]
                },
                {
                    id: 3, cityName: "安康市",
                    courtList: [
                        {id: 3001, courtName: "陕西省安康市中级人民法院"},
                        {id: 3002, courtName: "安康市汉滨区人民法院"},
                        {id: 3003, courtName: "汉阴县人民法院"},
                        {id: 3004, courtName: "石泉县人民法院"},
                        {id: 3005, courtName: "宁陕县人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "阿勒泰地区",
                    courtList: [
                        {id: 4001, courtName: "新疆维吾尔自治区伊犁哈萨克自治州阿勒泰地区中级人民法院"},
                        {id: 4002, courtName: "阿勒泰市人民法院"},
                        {id: 4003, courtName: "布尔津县人民法院"},
                        {id: 4004, courtName: "富蕴县人民法院"},
                        {id: 4005, courtName: "福海县人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "阿勒泰地区",
                    courtList: [
                        {id: 4001, courtName: "新疆维吾尔自治区伊犁哈萨克自治州阿勒泰地区中级人民法院"},
                        {id: 4002, courtName: "阿勒泰市人民法院"},
                        {id: 4003, courtName: "布尔津县人民法院"},
                        {id: 4004, courtName: "富蕴县人民法院"},
                        {id: 4005, courtName: "福海县人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "阿勒泰地区",
                    courtList: [
                        {id: 4001, courtName: "新疆维吾尔自治区伊犁哈萨克自治州阿勒泰地区中级人民法院"},
                        {id: 4002, courtName: "阿勒泰市人民法院"},
                        {id: 4003, courtName: "布尔津县人民法院"},
                        {id: 4004, courtName: "富蕴县人民法院"},
                        {id: 4005, courtName: "福海县人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "阿勒泰地区",
                    courtList: [
                        {id: 4001, courtName: "新疆维吾尔自治区伊犁哈萨克自治州阿勒泰地区中级人民法院"},
                        {id: 4002, courtName: "阿勒泰市人民法院"},
                        {id: 4003, courtName: "布尔津县人民法院"},
                        {id: 4004, courtName: "富蕴县人民法院"},
                        {id: 4005, courtName: "福海县人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "阿勒泰地区",
                    courtList: [
                        {id: 4001, courtName: "新疆维吾尔自治区伊犁哈萨克自治州阿勒泰地区中级人民法院"},
                        {id: 4002, courtName: "阿勒泰市人民法院"},
                        {id: 4003, courtName: "布尔津县人民法院"},
                        {id: 4004, courtName: "富蕴县人民法院"},
                        {id: 4005, courtName: "福海县人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "阿勒泰地区",
                    courtList: [
                        {id: 4001, courtName: "新疆维吾尔自治区伊犁哈萨克自治州阿勒泰地区中级人民法院"},
                        {id: 4002, courtName: "阿勒泰市人民法院"},
                        {id: 4003, courtName: "布尔津县人民法院"},
                        {id: 4004, courtName: "富蕴县人民法院"},
                        {id: 4005, courtName: "福海县人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "阿勒泰地区",
                    courtList: [
                        {id: 4001, courtName: "新疆维吾尔自治区伊犁哈萨克自治州阿勒泰地区中级人民法院"},
                        {id: 4002, courtName: "阿勒泰市人民法院"},
                        {id: 4003, courtName: "布尔津县人民法院"},
                        {id: 4004, courtName: "富蕴县人民法院"},
                        {id: 4005, courtName: "福海县人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "阿勒泰地区",
                    courtList: [
                        {id: 4001, courtName: "新疆维吾尔自治区伊犁哈萨克自治州阿勒泰地区中级人民法院"},
                        {id: 4002, courtName: "阿勒泰市人民法院"},
                        {id: 4003, courtName: "布尔津县人民法院"},
                        {id: 4004, courtName: "富蕴县人民法院"},
                        {id: 4005, courtName: "福海县人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "阿勒泰地区",
                    courtList: [
                        {id: 4001, courtName: "新疆维吾尔自治区伊犁哈萨克自治州阿勒泰地区中级人民法院"},
                        {id: 4002, courtName: "阿勒泰市人民法院"},
                        {id: 4003, courtName: "布尔津县人民法院"},
                        {id: 4004, courtName: "富蕴县人民法院"},
                        {id: 4005, courtName: "福海县人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "阿勒泰地区",
                    courtList: [
                        {id: 4001, courtName: "新疆维吾尔自治区伊犁哈萨克自治州阿勒泰地区中级人民法院"},
                        {id: 4002, courtName: "阿勒泰市人民法院"},
                        {id: 4003, courtName: "布尔津县人民法院"},
                        {id: 4004, courtName: "富蕴县人民法院"},
                        {id: 4005, courtName: "福海县人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "阿勒泰地区",
                    courtList: [
                        {id: 4001, courtName: "新疆维吾尔自治区伊犁哈萨克自治州阿勒泰地区中级人民法院"},
                        {id: 4002, courtName: "阿勒泰市人民法院"},
                        {id: 4003, courtName: "布尔津县人民法院"},
                        {id: 4004, courtName: "富蕴县人民法院"},
                        {id: 4005, courtName: "福海县人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "阿勒泰地区",
                    courtList: [
                        {id: 4001, courtName: "新疆维吾尔自治区伊犁哈萨克自治州阿勒泰地区中级人民法院"},
                        {id: 4002, courtName: "阿勒泰市人民法院"},
                        {id: 4003, courtName: "布尔津县人民法院"},
                        {id: 4004, courtName: "富蕴县人民法院"},
                        {id: 4005, courtName: "福海县人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "阿勒泰地区",
                    courtList: [
                        {id: 4001, courtName: "新疆维吾尔自治区伊犁哈萨克自治州阿勒泰地区中级人民法院"},
                        {id: 4002, courtName: "阿勒泰市人民法院"},
                        {id: 4003, courtName: "布尔津县人民法院"},
                        {id: 4004, courtName: "富蕴县人民法院"},
                        {id: 4005, courtName: "福海县人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "阿勒泰地区",
                    courtList: [
                        {id: 4001, courtName: "新疆维吾尔自治区伊犁哈萨克自治州阿勒泰地区中级人民法院"},
                        {id: 4002, courtName: "阿勒泰市人民法院"},
                        {id: 4003, courtName: "布尔津县人民法院"},
                        {id: 4004, courtName: "富蕴县人民法院"},
                        {id: 4005, courtName: "福海县人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "阿勒泰地区",
                    courtList: [
                        {id: 4001, courtName: "新疆维吾尔自治区伊犁哈萨克自治州阿勒泰地区中级人民法院"},
                        {id: 4002, courtName: "阿勒泰市人民法院"},
                        {id: 4003, courtName: "布尔津县人民法院"},
                        {id: 4004, courtName: "富蕴县人民法院"},
                        {id: 4005, courtName: "福海县人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "阿勒泰地区",
                    courtList: [
                        {id: 4001, courtName: "新疆维吾尔自治区伊犁哈萨克自治州阿勒泰地区中级人民法院"},
                        {id: 4002, courtName: "阿勒泰市人民法院"},
                        {id: 4003, courtName: "布尔津县人民法院"},
                        {id: 4004, courtName: "富蕴县人民法院"},
                        {id: 4005, courtName: "福海县人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "阿勒泰地区",
                    courtList: [
                        {id: 4001, courtName: "新疆维吾尔自治区伊犁哈萨克自治州阿勒泰地区中级人民法院"},
                        {id: 4002, courtName: "阿勒泰市人民法院"},
                        {id: 4003, courtName: "布尔津县人民法院"},
                        {id: 4004, courtName: "富蕴县人民法院"},
                        {id: 4005, courtName: "福海县人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "阿勒泰地区",
                    courtList: [
                        {id: 4001, courtName: "新疆维吾尔自治区伊犁哈萨克自治州阿勒泰地区中级人民法院"},
                        {id: 4002, courtName: "阿勒泰市人民法院"},
                        {id: 4003, courtName: "布尔津县人民法院"},
                        {id: 4004, courtName: "富蕴县人民法院"},
                        {id: 4005, courtName: "福海县人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "阿勒泰地区",
                    courtList: [
                        {id: 4001, courtName: "新疆维吾尔自治区伊犁哈萨克自治州阿勒泰地区中级人民法院"},
                        {id: 4002, courtName: "阿勒泰市人民法院"},
                        {id: 4003, courtName: "布尔津县人民法院"},
                        {id: 4004, courtName: "富蕴县人民法院"},
                        {id: 4005, courtName: "福海县人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "阿勒泰地区",
                    courtList: [
                        {id: 4001, courtName: "新疆维吾尔自治区伊犁哈萨克自治州阿勒泰地区中级人民法院"},
                        {id: 4002, courtName: "阿勒泰市人民法院"},
                        {id: 4003, courtName: "布尔津县人民法院"},
                        {id: 4004, courtName: "富蕴县人民法院"},
                        {id: 4005, courtName: "福海县人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "阿勒泰地区",
                    courtList: [
                        {id: 4001, courtName: "新疆维吾尔自治区伊犁哈萨克自治州阿勒泰地区中级人民法院"},
                        {id: 4002, courtName: "阿勒泰市人民法院"},
                        {id: 4003, courtName: "布尔津县人民法院"},
                        {id: 4004, courtName: "富蕴县人民法院"},
                        {id: 4005, courtName: "福海县人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "阿勒泰地区",
                    courtList: [
                        {id: 4001, courtName: "新疆维吾尔自治区伊犁哈萨克自治州阿勒泰地区中级人民法院"},
                        {id: 4002, courtName: "阿勒泰市人民法院"},
                        {id: 4003, courtName: "布尔津县人民法院"},
                        {id: 4004, courtName: "富蕴县人民法院"},
                        {id: 4005, courtName: "福海县人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "阿勒泰地区",
                    courtList: [
                        {id: 4001, courtName: "新疆维吾尔自治区伊犁哈萨克自治州阿勒泰地区中级人民法院"},
                        {id: 4002, courtName: "阿勒泰市人民法院"},
                        {id: 4003, courtName: "布尔津县人民法院"},
                        {id: 4004, courtName: "富蕴县人民法院"},
                        {id: 4005, courtName: "福海县人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "阿勒泰地区",
                    courtList: [
                        {id: 4001, courtName: "新疆维吾尔自治区伊犁哈萨克自治州阿勒泰地区中级人民法院"},
                        {id: 4002, courtName: "阿勒泰市人民法院"},
                        {id: 4003, courtName: "布尔津县人民法院"},
                        {id: 4004, courtName: "富蕴县人民法院"},
                        {id: 4005, courtName: "福海县人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "阿勒泰地区",
                    courtList: [
                        {id: 4001, courtName: "新疆维吾尔自治区伊犁哈萨克自治州阿勒泰地区中级人民法院"},
                        {id: 4002, courtName: "阿勒泰市人民法院"},
                        {id: 4003, courtName: "布尔津县人民法院"},
                        {id: 4004, courtName: "富蕴县人民法院"},
                        {id: 4005, courtName: "福海县人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "阿勒泰地区",
                    courtList: [
                        {id: 4001, courtName: "新疆维吾尔自治区伊犁哈萨克自治州阿勒泰地区中级人民法院"},
                        {id: 4002, courtName: "阿勒泰市人民法院"},
                        {id: 4003, courtName: "布尔津县人民法院"},
                        {id: 4004, courtName: "富蕴县人民法院"},
                        {id: 4005, courtName: "福海县人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "阿勒泰地区",
                    courtList: [
                        {id: 4001, courtName: "新疆维吾尔自治区伊犁哈萨克自治州阿勒泰地区中级人民法院"},
                        {id: 4002, courtName: "阿勒泰市人民法院"},
                        {id: 4003, courtName: "布尔津县人民法院"},
                        {id: 4004, courtName: "富蕴县人民法院"},
                        {id: 4005, courtName: "福海县人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "阿勒泰地区",
                    courtList: [
                        {id: 4001, courtName: "新疆维吾尔自治区伊犁哈萨克自治州阿勒泰地区中级人民法院"},
                        {id: 4002, courtName: "阿勒泰市人民法院"},
                        {id: 4003, courtName: "布尔津县人民法院"},
                        {id: 4004, courtName: "富蕴县人民法院"},
                        {id: 4005, courtName: "福海县人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "阿勒泰地区",
                    courtList: [
                        {id: 4001, courtName: "新疆维吾尔自治区伊犁哈萨克自治州阿勒泰地区中级人民法院"},
                        {id: 4002, courtName: "阿勒泰市人民法院"},
                        {id: 4003, courtName: "布尔津县人民法院"},
                        {id: 4004, courtName: "富蕴县人民法院"},
                        {id: 4005, courtName: "福海县人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "阿勒泰地区",
                    courtList: [
                        {id: 4001, courtName: "新疆维吾尔自治区伊犁哈萨克自治州阿勒泰地区中级人民法院"},
                        {id: 4002, courtName: "阿勒泰市人民法院"},
                        {id: 4003, courtName: "布尔津县人民法院"},
                        {id: 4004, courtName: "富蕴县人民法院"},
                        {id: 4005, courtName: "福海县人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "阿勒泰地区",
                    courtList: [
                        {id: 4001, courtName: "新疆维吾尔自治区伊犁哈萨克自治州阿勒泰地区中级人民法院"},
                        {id: 4002, courtName: "阿勒泰市人民法院"},
                        {id: 4003, courtName: "布尔津县人民法院"},
                        {id: 4004, courtName: "富蕴县人民法院"},
                        {id: 4005, courtName: "福海县人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "阿勒泰地区",
                    courtList: [
                        {id: 4001, courtName: "新疆维吾尔自治区伊犁哈萨克自治州阿勒泰地区中级人民法院"},
                        {id: 4002, courtName: "阿勒泰市人民法院"},
                        {id: 4003, courtName: "布尔津县人民法院"},
                        {id: 4004, courtName: "富蕴县人民法院"},
                        {id: 4005, courtName: "福海县人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "阿勒泰地区",
                    courtList: [
                        {id: 4001, courtName: "新疆维吾尔自治区伊犁哈萨克自治州阿勒泰地区中级人民法院"},
                        {id: 4002, courtName: "阿勒泰市人民法院"},
                        {id: 4003, courtName: "布尔津县人民法院"},
                        {id: 4004, courtName: "富蕴县人民法院"},
                        {id: 4005, courtName: "福海县人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "阿勒泰地区",
                    courtList: [
                        {id: 4001, courtName: "新疆维吾尔自治区伊犁哈萨克自治州阿勒泰地区中级人民法院"},
                        {id: 4002, courtName: "阿勒泰市人民法院"},
                        {id: 4003, courtName: "布尔津县人民法院"},
                        {id: 4004, courtName: "富蕴县人民法院"},
                        {id: 4005, courtName: "福海县人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "阿勒泰地区",
                    courtList: [
                        {id: 4001, courtName: "新疆维吾尔自治区伊犁哈萨克自治州阿勒泰地区中级人民法院"},
                        {id: 4002, courtName: "阿勒泰市人民法院"},
                        {id: 4003, courtName: "布尔津县人民法院"},
                        {id: 4004, courtName: "富蕴县人民法院"},
                        {id: 4005, courtName: "福海县人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "阿勒泰地区",
                    courtList: [
                        {id: 4001, courtName: "新疆维吾尔自治区伊犁哈萨克自治州阿勒泰地区中级人民法院"},
                        {id: 4002, courtName: "阿勒泰市人民法院"},
                        {id: 4003, courtName: "布尔津县人民法院"},
                        {id: 4004, courtName: "富蕴县人民法院"},
                        {id: 4005, courtName: "福海县人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "阿勒泰地区",
                    courtList: [
                        {id: 4001, courtName: "新疆维吾尔自治区伊犁哈萨克自治州阿勒泰地区中级人民法院"},
                        {id: 4002, courtName: "阿勒泰市人民法院"},
                        {id: 4003, courtName: "布尔津县人民法院"},
                        {id: 4004, courtName: "富蕴县人民法院"},
                        {id: 4005, courtName: "福海县人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "阿勒泰地区",
                    courtList: [
                        {id: 4001, courtName: "新疆维吾尔自治区伊犁哈萨克自治州阿勒泰地区中级人民法院"},
                        {id: 4002, courtName: "阿勒泰市人民法院"},
                        {id: 4003, courtName: "布尔津县人民法院"},
                        {id: 4004, courtName: "富蕴县人民法院"},
                        {id: 4005, courtName: "福海县人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "阿勒泰地区",
                    courtList: [
                        {id: 4001, courtName: "新疆维吾尔自治区伊犁哈萨克自治州阿勒泰地区中级人民法院"},
                        {id: 4002, courtName: "阿勒泰市人民法院"},
                        {id: 4003, courtName: "布尔津县人民法院"},
                        {id: 4004, courtName: "富蕴县人民法院"},
                        {id: 4005, courtName: "福海县人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "阿勒泰地区",
                    courtList: [
                        {id: 4001, courtName: "新疆维吾尔自治区伊犁哈萨克自治州阿勒泰地区中级人民法院"},
                        {id: 4002, courtName: "阿勒泰市人民法院"},
                        {id: 4003, courtName: "布尔津县人民法院"},
                        {id: 4004, courtName: "富蕴县人民法院"},
                        {id: 4005, courtName: "福海县人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "阿勒泰地区",
                    courtList: [
                        {id: 4001, courtName: "新疆维吾尔自治区伊犁哈萨克自治州阿勒泰地区中级人民法院"},
                        {id: 4002, courtName: "阿勒泰市人民法院"},
                        {id: 4003, courtName: "布尔津县人民法院"},
                        {id: 4004, courtName: "富蕴县人民法院"},
                        {id: 4005, courtName: "福海县人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "阿勒泰地区",
                    courtList: [
                        {id: 4001, courtName: "新疆维吾尔自治区伊犁哈萨克自治州阿勒泰地区中级人民法院"},
                        {id: 4002, courtName: "阿勒泰市人民法院"},
                        {id: 4003, courtName: "布尔津县人民法院"},
                        {id: 4004, courtName: "富蕴县人民法院"},
                        {id: 4005, courtName: "福海县人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "阿勒泰地区",
                    courtList: [
                        {id: 4001, courtName: "新疆维吾尔自治区伊犁哈萨克自治州阿勒泰地区中级人民法院"},
                        {id: 4002, courtName: "阿勒泰市人民法院"},
                        {id: 4003, courtName: "布尔津县人民法院"},
                        {id: 4004, courtName: "富蕴县人民法院"},
                        {id: 4005, courtName: "福海县人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "阿勒泰地区",
                    courtList: [
                        {id: 4001, courtName: "新疆维吾尔自治区伊犁哈萨克自治州阿勒泰地区中级人民法院"},
                        {id: 4002, courtName: "阿勒泰市人民法院"},
                        {id: 4003, courtName: "布尔津县人民法院"},
                        {id: 4004, courtName: "富蕴县人民法院"},
                        {id: 4005, courtName: "福海县人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "阿勒泰地区",
                    courtList: [
                        {id: 4001, courtName: "新疆维吾尔自治区伊犁哈萨克自治州阿勒泰地区中级人民法院"},
                        {id: 4002, courtName: "阿勒泰市人民法院"},
                        {id: 4003, courtName: "布尔津县人民法院"},
                        {id: 4004, courtName: "富蕴县人民法院"},
                        {id: 4005, courtName: "福海县人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "阿勒泰地区",
                    courtList: [
                        {id: 4001, courtName: "新疆维吾尔自治区伊犁哈萨克自治州阿勒泰地区中级人民法院"},
                        {id: 4002, courtName: "阿勒泰市人民法院"},
                        {id: 4003, courtName: "布尔津县人民法院"},
                        {id: 4004, courtName: "富蕴县人民法院"},
                        {id: 4005, courtName: "福海县人民法院"},
                    ]
                }
            ]
        },
        {
            initial: "B",
            cityList: [
                {
                    id: 1, cityName: "保定市",
                    courtList: [
                        {id: 1001, courtName: "河北省保定市中级人民法院"},
                        {id: 1002, courtName: "保定市新市区人民法院"},
                        {id: 1003, courtName: "保定市北市区人民法院"},
                        {id: 1004, courtName: "保定市南市区人民法院"},
                    ]
                },
                {
                    id: 2, cityName: "蚌埠市",
                    courtList: [
                        {id: 2001, courtName: "蚌埠市龙子湖区人民法院"},
                        {id: 2002, courtName: "蚌埠市蚌山区人民法院"},
                        {id: 2003, courtName: "安徽省蚌埠市中级人民法院"},
                        {id: 2004, courtName: "安徽省高级人民法院"},
                    ]
                },
                {
                    id: 3, cityName: "北京市",
                    courtList: [
                        {id: 3001, courtName: "北京市朝阳区人民法院"},
                        {id: 3002, courtName: "北京市第一中级人民法院"},
                        {id: 3003, courtName: "北京市石景山区人民法院"},
                        {id: 3004, courtName: "北京市海淀区人民法院"},
                        {id: 3005, courtName: "北京市门头沟区人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "宝鸡市",
                    courtList: [
                        {id: 4001, courtName: "陕西省宝鸡市中级人民法院"},
                        {id: 4002, courtName: "宝鸡市渭滨区人民法院"},
                        {id: 4003, courtName: "凤翔县人民法院"},
                        {id: 4004, courtName: "宝鸡市金台区人民法院"},
                        {id: 4005, courtName: "眉县人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "宝鸡市",
                    courtList: [
                        {id: 4001, courtName: "陕西省宝鸡市中级人民法院"},
                        {id: 4002, courtName: "宝鸡市渭滨区人民法院"},
                        {id: 4003, courtName: "凤翔县人民法院"},
                        {id: 4004, courtName: "宝鸡市金台区人民法院"},
                        {id: 4005, courtName: "眉县人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "宝鸡市",
                    courtList: [
                        {id: 4001, courtName: "陕西省宝鸡市中级人民法院"},
                        {id: 4002, courtName: "宝鸡市渭滨区人民法院"},
                        {id: 4003, courtName: "凤翔县人民法院"},
                        {id: 4004, courtName: "宝鸡市金台区人民法院"},
                        {id: 4005, courtName: "眉县人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "宝鸡市",
                    courtList: [
                        {id: 4001, courtName: "陕西省宝鸡市中级人民法院"},
                        {id: 4002, courtName: "宝鸡市渭滨区人民法院"},
                        {id: 4003, courtName: "凤翔县人民法院"},
                        {id: 4004, courtName: "宝鸡市金台区人民法院"},
                        {id: 4005, courtName: "眉县人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "宝鸡市",
                    courtList: [
                        {id: 4001, courtName: "陕西省宝鸡市中级人民法院"},
                        {id: 4002, courtName: "宝鸡市渭滨区人民法院"},
                        {id: 4003, courtName: "凤翔县人民法院"},
                        {id: 4004, courtName: "宝鸡市金台区人民法院"},
                        {id: 4005, courtName: "眉县人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "宝鸡市",
                    courtList: [
                        {id: 4001, courtName: "陕西省宝鸡市中级人民法院"},
                        {id: 4002, courtName: "宝鸡市渭滨区人民法院"},
                        {id: 4003, courtName: "凤翔县人民法院"},
                        {id: 4004, courtName: "宝鸡市金台区人民法院"},
                        {id: 4005, courtName: "眉县人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "宝鸡市",
                    courtList: [
                        {id: 4001, courtName: "陕西省宝鸡市中级人民法院"},
                        {id: 4002, courtName: "宝鸡市渭滨区人民法院"},
                        {id: 4003, courtName: "凤翔县人民法院"},
                        {id: 4004, courtName: "宝鸡市金台区人民法院"},
                        {id: 4005, courtName: "眉县人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "宝鸡市",
                    courtList: [
                        {id: 4001, courtName: "陕西省宝鸡市中级人民法院"},
                        {id: 4002, courtName: "宝鸡市渭滨区人民法院"},
                        {id: 4003, courtName: "凤翔县人民法院"},
                        {id: 4004, courtName: "宝鸡市金台区人民法院"},
                        {id: 4005, courtName: "眉县人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "宝鸡市",
                    courtList: [
                        {id: 4001, courtName: "陕西省宝鸡市中级人民法院"},
                        {id: 4002, courtName: "宝鸡市渭滨区人民法院"},
                        {id: 4003, courtName: "凤翔县人民法院"},
                        {id: 4004, courtName: "宝鸡市金台区人民法院"},
                        {id: 4005, courtName: "眉县人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "宝鸡市",
                    courtList: [
                        {id: 4001, courtName: "陕西省宝鸡市中级人民法院"},
                        {id: 4002, courtName: "宝鸡市渭滨区人民法院"},
                        {id: 4003, courtName: "凤翔县人民法院"},
                        {id: 4004, courtName: "宝鸡市金台区人民法院"},
                        {id: 4005, courtName: "眉县人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "宝鸡市",
                    courtList: [
                        {id: 4001, courtName: "陕西省宝鸡市中级人民法院"},
                        {id: 4002, courtName: "宝鸡市渭滨区人民法院"},
                        {id: 4003, courtName: "凤翔县人民法院"},
                        {id: 4004, courtName: "宝鸡市金台区人民法院"},
                        {id: 4005, courtName: "眉县人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "宝鸡市",
                    courtList: [
                        {id: 4001, courtName: "陕西省宝鸡市中级人民法院"},
                        {id: 4002, courtName: "宝鸡市渭滨区人民法院"},
                        {id: 4003, courtName: "凤翔县人民法院"},
                        {id: 4004, courtName: "宝鸡市金台区人民法院"},
                        {id: 4005, courtName: "眉县人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "宝鸡市",
                    courtList: [
                        {id: 4001, courtName: "陕西省宝鸡市中级人民法院"},
                        {id: 4002, courtName: "宝鸡市渭滨区人民法院"},
                        {id: 4003, courtName: "凤翔县人民法院"},
                        {id: 4004, courtName: "宝鸡市金台区人民法院"},
                        {id: 4005, courtName: "眉县人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "宝鸡市",
                    courtList: [
                        {id: 4001, courtName: "陕西省宝鸡市中级人民法院"},
                        {id: 4002, courtName: "宝鸡市渭滨区人民法院"},
                        {id: 4003, courtName: "凤翔县人民法院"},
                        {id: 4004, courtName: "宝鸡市金台区人民法院"},
                        {id: 4005, courtName: "眉县人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "宝鸡市",
                    courtList: [
                        {id: 4001, courtName: "陕西省宝鸡市中级人民法院"},
                        {id: 4002, courtName: "宝鸡市渭滨区人民法院"},
                        {id: 4003, courtName: "凤翔县人民法院"},
                        {id: 4004, courtName: "宝鸡市金台区人民法院"},
                        {id: 4005, courtName: "眉县人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "宝鸡市",
                    courtList: [
                        {id: 4001, courtName: "陕西省宝鸡市中级人民法院"},
                        {id: 4002, courtName: "宝鸡市渭滨区人民法院"},
                        {id: 4003, courtName: "凤翔县人民法院"},
                        {id: 4004, courtName: "宝鸡市金台区人民法院"},
                        {id: 4005, courtName: "眉县人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "宝鸡市",
                    courtList: [
                        {id: 4001, courtName: "陕西省宝鸡市中级人民法院"},
                        {id: 4002, courtName: "宝鸡市渭滨区人民法院"},
                        {id: 4003, courtName: "凤翔县人民法院"},
                        {id: 4004, courtName: "宝鸡市金台区人民法院"},
                        {id: 4005, courtName: "眉县人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "宝鸡市",
                    courtList: [
                        {id: 4001, courtName: "陕西省宝鸡市中级人民法院"},
                        {id: 4002, courtName: "宝鸡市渭滨区人民法院"},
                        {id: 4003, courtName: "凤翔县人民法院"},
                        {id: 4004, courtName: "宝鸡市金台区人民法院"},
                        {id: 4005, courtName: "眉县人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "宝鸡市",
                    courtList: [
                        {id: 4001, courtName: "陕西省宝鸡市中级人民法院"},
                        {id: 4002, courtName: "宝鸡市渭滨区人民法院"},
                        {id: 4003, courtName: "凤翔县人民法院"},
                        {id: 4004, courtName: "宝鸡市金台区人民法院"},
                        {id: 4005, courtName: "眉县人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "宝鸡市",
                    courtList: [
                        {id: 4001, courtName: "陕西省宝鸡市中级人民法院"},
                        {id: 4002, courtName: "宝鸡市渭滨区人民法院"},
                        {id: 4003, courtName: "凤翔县人民法院"},
                        {id: 4004, courtName: "宝鸡市金台区人民法院"},
                        {id: 4005, courtName: "眉县人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "宝鸡市",
                    courtList: [
                        {id: 4001, courtName: "陕西省宝鸡市中级人民法院"},
                        {id: 4002, courtName: "宝鸡市渭滨区人民法院"},
                        {id: 4003, courtName: "凤翔县人民法院"},
                        {id: 4004, courtName: "宝鸡市金台区人民法院"},
                        {id: 4005, courtName: "眉县人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "宝鸡市",
                    courtList: [
                        {id: 4001, courtName: "陕西省宝鸡市中级人民法院"},
                        {id: 4002, courtName: "宝鸡市渭滨区人民法院"},
                        {id: 4003, courtName: "凤翔县人民法院"},
                        {id: 4004, courtName: "宝鸡市金台区人民法院"},
                        {id: 4005, courtName: "眉县人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "宝鸡市",
                    courtList: [
                        {id: 4001, courtName: "陕西省宝鸡市中级人民法院"},
                        {id: 4002, courtName: "宝鸡市渭滨区人民法院"},
                        {id: 4003, courtName: "凤翔县人民法院"},
                        {id: 4004, courtName: "宝鸡市金台区人民法院"},
                        {id: 4005, courtName: "眉县人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "宝鸡市",
                    courtList: [
                        {id: 4001, courtName: "陕西省宝鸡市中级人民法院"},
                        {id: 4002, courtName: "宝鸡市渭滨区人民法院"},
                        {id: 4003, courtName: "凤翔县人民法院"},
                        {id: 4004, courtName: "宝鸡市金台区人民法院"},
                        {id: 4005, courtName: "眉县人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "宝鸡市",
                    courtList: [
                        {id: 4001, courtName: "陕西省宝鸡市中级人民法院"},
                        {id: 4002, courtName: "宝鸡市渭滨区人民法院"},
                        {id: 4003, courtName: "凤翔县人民法院"},
                        {id: 4004, courtName: "宝鸡市金台区人民法院"},
                        {id: 4005, courtName: "眉县人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "宝鸡市",
                    courtList: [
                        {id: 4001, courtName: "陕西省宝鸡市中级人民法院"},
                        {id: 4002, courtName: "宝鸡市渭滨区人民法院"},
                        {id: 4003, courtName: "凤翔县人民法院"},
                        {id: 4004, courtName: "宝鸡市金台区人民法院"},
                        {id: 4005, courtName: "眉县人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "宝鸡市",
                    courtList: [
                        {id: 4001, courtName: "陕西省宝鸡市中级人民法院"},
                        {id: 4002, courtName: "宝鸡市渭滨区人民法院"},
                        {id: 4003, courtName: "凤翔县人民法院"},
                        {id: 4004, courtName: "宝鸡市金台区人民法院"},
                        {id: 4005, courtName: "眉县人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "宝鸡市",
                    courtList: [
                        {id: 4001, courtName: "陕西省宝鸡市中级人民法院"},
                        {id: 4002, courtName: "宝鸡市渭滨区人民法院"},
                        {id: 4003, courtName: "凤翔县人民法院"},
                        {id: 4004, courtName: "宝鸡市金台区人民法院"},
                        {id: 4005, courtName: "眉县人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "宝鸡市",
                    courtList: [
                        {id: 4001, courtName: "陕西省宝鸡市中级人民法院"},
                        {id: 4002, courtName: "宝鸡市渭滨区人民法院"},
                        {id: 4003, courtName: "凤翔县人民法院"},
                        {id: 4004, courtName: "宝鸡市金台区人民法院"},
                        {id: 4005, courtName: "眉县人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "宝鸡市",
                    courtList: [
                        {id: 4001, courtName: "陕西省宝鸡市中级人民法院"},
                        {id: 4002, courtName: "宝鸡市渭滨区人民法院"},
                        {id: 4003, courtName: "凤翔县人民法院"},
                        {id: 4004, courtName: "宝鸡市金台区人民法院"},
                        {id: 4005, courtName: "眉县人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "宝鸡市",
                    courtList: [
                        {id: 4001, courtName: "陕西省宝鸡市中级人民法院"},
                        {id: 4002, courtName: "宝鸡市渭滨区人民法院"},
                        {id: 4003, courtName: "凤翔县人民法院"},
                        {id: 4004, courtName: "宝鸡市金台区人民法院"},
                        {id: 4005, courtName: "眉县人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "宝鸡市",
                    courtList: [
                        {id: 4001, courtName: "陕西省宝鸡市中级人民法院"},
                        {id: 4002, courtName: "宝鸡市渭滨区人民法院"},
                        {id: 4003, courtName: "凤翔县人民法院"},
                        {id: 4004, courtName: "宝鸡市金台区人民法院"},
                        {id: 4005, courtName: "眉县人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "宝鸡市",
                    courtList: [
                        {id: 4001, courtName: "陕西省宝鸡市中级人民法院"},
                        {id: 4002, courtName: "宝鸡市渭滨区人民法院"},
                        {id: 4003, courtName: "凤翔县人民法院"},
                        {id: 4004, courtName: "宝鸡市金台区人民法院"},
                        {id: 4005, courtName: "眉县人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "宝鸡市",
                    courtList: [
                        {id: 4001, courtName: "陕西省宝鸡市中级人民法院"},
                        {id: 4002, courtName: "宝鸡市渭滨区人民法院"},
                        {id: 4003, courtName: "凤翔县人民法院"},
                        {id: 4004, courtName: "宝鸡市金台区人民法院"},
                        {id: 4005, courtName: "眉县人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "宝鸡市",
                    courtList: [
                        {id: 4001, courtName: "陕西省宝鸡市中级人民法院"},
                        {id: 4002, courtName: "宝鸡市渭滨区人民法院"},
                        {id: 4003, courtName: "凤翔县人民法院"},
                        {id: 4004, courtName: "宝鸡市金台区人民法院"},
                        {id: 4005, courtName: "眉县人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "宝鸡市",
                    courtList: [
                        {id: 4001, courtName: "陕西省宝鸡市中级人民法院"},
                        {id: 4002, courtName: "宝鸡市渭滨区人民法院"},
                        {id: 4003, courtName: "凤翔县人民法院"},
                        {id: 4004, courtName: "宝鸡市金台区人民法院"},
                        {id: 4005, courtName: "眉县人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "宝鸡市",
                    courtList: [
                        {id: 4001, courtName: "陕西省宝鸡市中级人民法院"},
                        {id: 4002, courtName: "宝鸡市渭滨区人民法院"},
                        {id: 4003, courtName: "凤翔县人民法院"},
                        {id: 4004, courtName: "宝鸡市金台区人民法院"},
                        {id: 4005, courtName: "眉县人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "宝鸡市",
                    courtList: [
                        {id: 4001, courtName: "陕西省宝鸡市中级人民法院"},
                        {id: 4002, courtName: "宝鸡市渭滨区人民法院"},
                        {id: 4003, courtName: "凤翔县人民法院"},
                        {id: 4004, courtName: "宝鸡市金台区人民法院"},
                        {id: 4005, courtName: "眉县人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "宝鸡市",
                    courtList: [
                        {id: 4001, courtName: "陕西省宝鸡市中级人民法院"},
                        {id: 4002, courtName: "宝鸡市渭滨区人民法院"},
                        {id: 4003, courtName: "凤翔县人民法院"},
                        {id: 4004, courtName: "宝鸡市金台区人民法院"},
                        {id: 4005, courtName: "眉县人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "宝鸡市",
                    courtList: [
                        {id: 4001, courtName: "陕西省宝鸡市中级人民法院"},
                        {id: 4002, courtName: "宝鸡市渭滨区人民法院"},
                        {id: 4003, courtName: "凤翔县人民法院"},
                        {id: 4004, courtName: "宝鸡市金台区人民法院"},
                        {id: 4005, courtName: "眉县人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "宝鸡市",
                    courtList: [
                        {id: 4001, courtName: "陕西省宝鸡市中级人民法院"},
                        {id: 4002, courtName: "宝鸡市渭滨区人民法院"},
                        {id: 4003, courtName: "凤翔县人民法院"},
                        {id: 4004, courtName: "宝鸡市金台区人民法院"},
                        {id: 4005, courtName: "眉县人民法院"},
                    ]
                }
            ]
        },
        {
            initial: "C",
            cityList: [
                {
                    id: 1, cityName: "昌都市",
                    courtList: [
                        {id: 1001, courtName: "西藏自治区昌都市中级人民法院"},
                        {id: 1002, courtName: "昌都市卡若区人民法院"},
                        {id: 1003, courtName: "江达县人民法院"},
                        {id: 1004, courtName: "贡觉县人民法院"},
                    ]
                },
                {
                    id: 2, cityName: "长沙市",
                    courtList: [
                        {id: 2001, courtName: "湖南省长沙市中级人民法院"},
                        {id: 2002, courtName: "长沙市芙蓉区人民法院"},
                        {id: 2003, courtName: "长沙市天心区人民法院"},
                        {id: 2004, courtName: "长沙市岳麓区人民法院"},
                    ]
                },
                {
                    id: 3, cityName: "常州市",
                    courtList: [
                        {id: 3001, courtName: "江苏省常州市中级人民法院"},
                        {id: 3002, courtName: "常州市天宁区人民法院"},
                        {id: 3003, courtName: "常州市钟楼区人民法院"},
                        {id: 3004, courtName: "常州市戚墅堰区人民法院"},
                        {id: 3005, courtName: "常州市新北区人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "长春市",
                    courtList: [
                        {id: 4001, courtName: "吉林省长春市中级人民法院"},
                        {id: 4002, courtName: "长春市南关区人民法院"},
                        {id: 4003, courtName: "长春市宽城区人民法院"},
                        {id: 4004, courtName: "长春市朝阳区人民法院"},
                        {id: 4005, courtName: "长春市绿园区人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "长春市",
                    courtList: [
                        {id: 4001, courtName: "吉林省长春市中级人民法院"},
                        {id: 4002, courtName: "长春市南关区人民法院"},
                        {id: 4003, courtName: "长春市宽城区人民法院"},
                        {id: 4004, courtName: "长春市朝阳区人民法院"},
                        {id: 4005, courtName: "长春市绿园区人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "长春市",
                    courtList: [
                        {id: 4001, courtName: "吉林省长春市中级人民法院"},
                        {id: 4002, courtName: "长春市南关区人民法院"},
                        {id: 4003, courtName: "长春市宽城区人民法院"},
                        {id: 4004, courtName: "长春市朝阳区人民法院"},
                        {id: 4005, courtName: "长春市绿园区人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "长春市",
                    courtList: [
                        {id: 4001, courtName: "吉林省长春市中级人民法院"},
                        {id: 4002, courtName: "长春市南关区人民法院"},
                        {id: 4003, courtName: "长春市宽城区人民法院"},
                        {id: 4004, courtName: "长春市朝阳区人民法院"},
                        {id: 4005, courtName: "长春市绿园区人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "长春市",
                    courtList: [
                        {id: 4001, courtName: "吉林省长春市中级人民法院"},
                        {id: 4002, courtName: "长春市南关区人民法院"},
                        {id: 4003, courtName: "长春市宽城区人民法院"},
                        {id: 4004, courtName: "长春市朝阳区人民法院"},
                        {id: 4005, courtName: "长春市绿园区人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "长春市",
                    courtList: [
                        {id: 4001, courtName: "吉林省长春市中级人民法院"},
                        {id: 4002, courtName: "长春市南关区人民法院"},
                        {id: 4003, courtName: "长春市宽城区人民法院"},
                        {id: 4004, courtName: "长春市朝阳区人民法院"},
                        {id: 4005, courtName: "长春市绿园区人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "长春市",
                    courtList: [
                        {id: 4001, courtName: "吉林省长春市中级人民法院"},
                        {id: 4002, courtName: "长春市南关区人民法院"},
                        {id: 4003, courtName: "长春市宽城区人民法院"},
                        {id: 4004, courtName: "长春市朝阳区人民法院"},
                        {id: 4005, courtName: "长春市绿园区人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "长春市",
                    courtList: [
                        {id: 4001, courtName: "吉林省长春市中级人民法院"},
                        {id: 4002, courtName: "长春市南关区人民法院"},
                        {id: 4003, courtName: "长春市宽城区人民法院"},
                        {id: 4004, courtName: "长春市朝阳区人民法院"},
                        {id: 4005, courtName: "长春市绿园区人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "长春市",
                    courtList: [
                        {id: 4001, courtName: "吉林省长春市中级人民法院"},
                        {id: 4002, courtName: "长春市南关区人民法院"},
                        {id: 4003, courtName: "长春市宽城区人民法院"},
                        {id: 4004, courtName: "长春市朝阳区人民法院"},
                        {id: 4005, courtName: "长春市绿园区人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "长春市",
                    courtList: [
                        {id: 4001, courtName: "吉林省长春市中级人民法院"},
                        {id: 4002, courtName: "长春市南关区人民法院"},
                        {id: 4003, courtName: "长春市宽城区人民法院"},
                        {id: 4004, courtName: "长春市朝阳区人民法院"},
                        {id: 4005, courtName: "长春市绿园区人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "长春市",
                    courtList: [
                        {id: 4001, courtName: "吉林省长春市中级人民法院"},
                        {id: 4002, courtName: "长春市南关区人民法院"},
                        {id: 4003, courtName: "长春市宽城区人民法院"},
                        {id: 4004, courtName: "长春市朝阳区人民法院"},
                        {id: 4005, courtName: "长春市绿园区人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "长春市",
                    courtList: [
                        {id: 4001, courtName: "吉林省长春市中级人民法院"},
                        {id: 4002, courtName: "长春市南关区人民法院"},
                        {id: 4003, courtName: "长春市宽城区人民法院"},
                        {id: 4004, courtName: "长春市朝阳区人民法院"},
                        {id: 4005, courtName: "长春市绿园区人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "长春市",
                    courtList: [
                        {id: 4001, courtName: "吉林省长春市中级人民法院"},
                        {id: 4002, courtName: "长春市南关区人民法院"},
                        {id: 4003, courtName: "长春市宽城区人民法院"},
                        {id: 4004, courtName: "长春市朝阳区人民法院"},
                        {id: 4005, courtName: "长春市绿园区人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "长春市",
                    courtList: [
                        {id: 4001, courtName: "吉林省长春市中级人民法院"},
                        {id: 4002, courtName: "长春市南关区人民法院"},
                        {id: 4003, courtName: "长春市宽城区人民法院"},
                        {id: 4004, courtName: "长春市朝阳区人民法院"},
                        {id: 4005, courtName: "长春市绿园区人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "长春市",
                    courtList: [
                        {id: 4001, courtName: "吉林省长春市中级人民法院"},
                        {id: 4002, courtName: "长春市南关区人民法院"},
                        {id: 4003, courtName: "长春市宽城区人民法院"},
                        {id: 4004, courtName: "长春市朝阳区人民法院"},
                        {id: 4005, courtName: "长春市绿园区人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "长春市",
                    courtList: [
                        {id: 4001, courtName: "吉林省长春市中级人民法院"},
                        {id: 4002, courtName: "长春市南关区人民法院"},
                        {id: 4003, courtName: "长春市宽城区人民法院"},
                        {id: 4004, courtName: "长春市朝阳区人民法院"},
                        {id: 4005, courtName: "长春市绿园区人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "长春市",
                    courtList: [
                        {id: 4001, courtName: "吉林省长春市中级人民法院"},
                        {id: 4002, courtName: "长春市南关区人民法院"},
                        {id: 4003, courtName: "长春市宽城区人民法院"},
                        {id: 4004, courtName: "长春市朝阳区人民法院"},
                        {id: 4005, courtName: "长春市绿园区人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "长春市",
                    courtList: [
                        {id: 4001, courtName: "吉林省长春市中级人民法院"},
                        {id: 4002, courtName: "长春市南关区人民法院"},
                        {id: 4003, courtName: "长春市宽城区人民法院"},
                        {id: 4004, courtName: "长春市朝阳区人民法院"},
                        {id: 4005, courtName: "长春市绿园区人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "长春市",
                    courtList: [
                        {id: 4001, courtName: "吉林省长春市中级人民法院"},
                        {id: 4002, courtName: "长春市南关区人民法院"},
                        {id: 4003, courtName: "长春市宽城区人民法院"},
                        {id: 4004, courtName: "长春市朝阳区人民法院"},
                        {id: 4005, courtName: "长春市绿园区人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "长春市",
                    courtList: [
                        {id: 4001, courtName: "吉林省长春市中级人民法院"},
                        {id: 4002, courtName: "长春市南关区人民法院"},
                        {id: 4003, courtName: "长春市宽城区人民法院"},
                        {id: 4004, courtName: "长春市朝阳区人民法院"},
                        {id: 4005, courtName: "长春市绿园区人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "长春市",
                    courtList: [
                        {id: 4001, courtName: "吉林省长春市中级人民法院"},
                        {id: 4002, courtName: "长春市南关区人民法院"},
                        {id: 4003, courtName: "长春市宽城区人民法院"},
                        {id: 4004, courtName: "长春市朝阳区人民法院"},
                        {id: 4005, courtName: "长春市绿园区人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "长春市",
                    courtList: [
                        {id: 4001, courtName: "吉林省长春市中级人民法院"},
                        {id: 4002, courtName: "长春市南关区人民法院"},
                        {id: 4003, courtName: "长春市宽城区人民法院"},
                        {id: 4004, courtName: "长春市朝阳区人民法院"},
                        {id: 4005, courtName: "长春市绿园区人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "长春市",
                    courtList: [
                        {id: 4001, courtName: "吉林省长春市中级人民法院"},
                        {id: 4002, courtName: "长春市南关区人民法院"},
                        {id: 4003, courtName: "长春市宽城区人民法院"},
                        {id: 4004, courtName: "长春市朝阳区人民法院"},
                        {id: 4005, courtName: "长春市绿园区人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "长春市",
                    courtList: [
                        {id: 4001, courtName: "吉林省长春市中级人民法院"},
                        {id: 4002, courtName: "长春市南关区人民法院"},
                        {id: 4003, courtName: "长春市宽城区人民法院"},
                        {id: 4004, courtName: "长春市朝阳区人民法院"},
                        {id: 4005, courtName: "长春市绿园区人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "长春市",
                    courtList: [
                        {id: 4001, courtName: "吉林省长春市中级人民法院"},
                        {id: 4002, courtName: "长春市南关区人民法院"},
                        {id: 4003, courtName: "长春市宽城区人民法院"},
                        {id: 4004, courtName: "长春市朝阳区人民法院"},
                        {id: 4005, courtName: "长春市绿园区人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "长春市",
                    courtList: [
                        {id: 4001, courtName: "吉林省长春市中级人民法院"},
                        {id: 4002, courtName: "长春市南关区人民法院"},
                        {id: 4003, courtName: "长春市宽城区人民法院"},
                        {id: 4004, courtName: "长春市朝阳区人民法院"},
                        {id: 4005, courtName: "长春市绿园区人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "长春市",
                    courtList: [
                        {id: 4001, courtName: "吉林省长春市中级人民法院"},
                        {id: 4002, courtName: "长春市南关区人民法院"},
                        {id: 4003, courtName: "长春市宽城区人民法院"},
                        {id: 4004, courtName: "长春市朝阳区人民法院"},
                        {id: 4005, courtName: "长春市绿园区人民法院"},
                    ]
                },
                {
                    id: 4, cityName: "长春市",
                    courtList: [
                        {id: 4001, courtName: "吉林省长春市中级人民法院"},
                        {id: 4002, courtName: "长春市南关区人民法院"},
                        {id: 4003, courtName: "长春市宽城区人民法院"},
                        {id: 4004, courtName: "长春市朝阳区人民法院"},
                        {id: 4005, courtName: "长春市绿园区人民法院"},
                    ]
                }
            ]
        }
    ]
    var listhtml = ''
    for (var i = 0; i < data.length; i++) {
        var o = data[i]
        listhtml += "<dt id=" + o.initial.toLocaleLowerCase() + ">" + o.initial
        for (var j = 0; j < o.cityList.length; j++) {
            var c = o.cityList[j];
            listhtml += "<dd>" + c.cityName + "</dd>"
        }
        listhtml += "</dt>"
    }
    $('#cityList').html(listhtml)

    $("#cityLayout").on('touchmove', function (e) {
        e.preventDefault()
    })
    $(".cityBox").on('touchmove', function (e) {
        e.stopPropagation()
        // return false
    })
    $("#cityLayout").delegate(".cityBox", "touchmove", function (e) {
        e.preventDefault()
    });
    //a-z检索点击锚点跳转

    $('.sliderBar>ul>li>a').on('touchstart', function (e) {
        //e.preventDefault()
        $(this).click()
        $('.tips').text($(this).text())
        $('.tips').show()
    })

    $('.sliderBar>ul').get(0).addEventListener('touchmove', function (e) {
        e.preventDefault()
        //坐标
        var y = e.touches[0].clientY
        var x = e.touches[0].clientX
        //根据当前纵向坐标控制内容的位置
        var MaxL = $('.sliderBar').position().left;
        //console.log(MaxL);
        var MaxR = $('.sliderBar').position().left + $('.sliderBar').width();
        //console.log(MaxR);
        var MaxT = $('.sliderBar').position().top + $('.sliderBar>span').height();
        //console.log(MaxT);
        var MaxB = $('.sliderBar').position().top + $('.sliderBar').height();
        //console.log(MaxB);
        if (x > MaxL && x < MaxR) {
            if (y > MaxT && y < MaxB) {
                var ele = document.elementFromPoint(x, y)
                ele.click()
                $('.tips').text($(ele).text())
                $('.tips').show()
            }
        }
    })
    $('.sliderBar>ul').get(0).addEventListener('touchend', function (e) {
        //e.preventDefault()
        $('.tips').hide()
    })


    //选择城市
    $('#selectCourt').on('click', function () {
        $('#layout').hide()
        $("#cityLayout").show()
        $(".sliderBar").show()
        $(".cityBox").show()
    })

    // 地图API功能
    navigator.geolocation.getCurrentPosition(function (position) {
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;
        var point = new BMap.Point(lon, lat);  // 创建坐标点
        // 根据坐标得到地址描述
        var myGeo = new BMap.Geocoder();
        myGeo.getLocation(point, function (result) {
            console.log(result);
            document.getElementById("city").innerHTML = result.addressComponents.city || "暂时无法获取当前位置";
        });
    });

    //列表选择城市
    $('#cityList>dd').on('click', function () {
        var selectCity = $(this).html()
        $('#choiceCourtLayout>header>.nowCity>span').html(selectCity)
        //展示结果法院
        var resultCourt = [];
        var courtContent = ''
        for (var i = 0; i < data.length; i++) {
            //首字母列表
            var l = data[i];
            //便利字母数据
            for (var j = 0; j < l.cityList.length; j++) {
                var cl = l.cityList[j];
                if (cl.cityName == selectCity) {
                    resultCourt = l.cityList[j].courtList
                }
            }
        }
        //渲染法院页面
        //console.log(resultCourt);
        for (var c = 0; c < resultCourt.length; c++) {
            console.log(resultCourt[c]);
            courtContent += "<li>" + resultCourt[c].courtName + "</li>"
        }
        $("#choiceCourtLayout>ul").html(courtContent)
        $('#cityLayout').hide()
        $('#choiceCourtLayout').show(function () {

            //切换城市
            $("#choiceCourtLayout>header>.back").on('click', function () {
                $('#cityLayout').show()
                $('#choiceCourtLayout').hide()
            })
            //选择法院
            $('#choiceCourtLayout>ul>li').on('click', function () {
                console.log(111);
                $('#layout').show()
                $("#choiceCourtLayout").hide()
                $('#selectCourt').val($(this).text())
            })
        })
    })
    //定位选择城市
    $('.selectCourt').on('click', function () {
        var selectCity = $('#city').html()
        //展示结果法院
        var resultCourt = [];
        var courtContent = ''
        for (var i = 0; i < data.length; i++) {
            //首字母列表
            var l = data[i];
            //便利字母数据
            for (var j = 0; j < l.cityList.length; j++) {
                var cl = l.cityList[j];
                if (cl.cityName == selectCity) {
                    resultCourt = l.cityList[j].courtList
                }
            }
        }
        //渲染法院页面
        for (var c = 0; c < resultCourt.length; c++) {
            courtContent += "<li>" + resultCourt[c].courtName + "</li>"
        }
        $("#choiceCourtLayout>ul").html(courtContent)
        $('#cityLayout').hide()
        $('#choiceCourtLayout').show(function () {
            //选择法院
            $('#choiceCourtLayout>ul>li').on('click', function () {
                $('#layout').show()
                $("#choiceCourtLayout").hide()
                $('#selectCourt').val($(this).text())
            })
        })
    })


    //弹出层
    $('.inquiry-btn').on('click', function (e) {
        e.preventDefault()
        return false
        $('#layer').stop().fadeIn(function () {
            setTimeout(function () {
                $('#layer').stop().fadeOut()
            }, 1111);
        })
    })

    $("#susongtiaokuan").on('click', function () {
        $("#susongtankuang").show()
    })
    $("#susongtankuang>.tiaokuanclose").on('click', function (e) {
        $("#susongtankuang").hide()
    })


})



