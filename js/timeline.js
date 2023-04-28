// 时间轴
(function(){
var timeline = echarts.init(document.querySelector(".timeline"));
var option = {
timeline: {
    axisType: 'category',
    autoPlay: true,
    symbolSize: 10,
    // symbol: "image://"+symbol1,
    playInterval: 4000,
    left: '5%',
    right: '5%',
    bottom: '0%',
    label: {
        normal: {
            position: 'top',
            color: 'black',
            fontSize: 15,
        }
    },
    lineStyle: {
        color: "#0b4e86"
    },
    itemStyle: {
        normal: {
            color: '#f00',
            borderColor: "#00aeff",
            borderWidth: 2
        }

    },
    checkpointStyle: {
        // symbol: "image://"+symbol2,
        symbolSize: 16
    },
    controlStyle: {
        showPlayBtn: true
    },
    data: ['1','2','3','4','5','6','7','8','9','10','11','12'],
},
options: []

};
timeline.setOption(option);
window.addEventListener("resize", function () {
    myChart.resize();
});
// 监听timeline 实现动态加载数据
timeline.on("timelinechanged", function (timeLineIndex) {
    // console.log(timeLineIndex) 
    // console.log(timeLineIndex.currentIndex) 

    // 柱状图变化
    var barChart = echarts.init(document.querySelector(".bar .chart"));
    barChart.setOption({
        series: [{
            data: bardata[timeLineIndex.currentIndex]
        }]
    });
    var flymap = echarts.init(document.querySelector(".map .chart"));

    var planePath =
        "path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z";
    //var planePath = 'arrow';
    var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var dataItem = data[i];

            var fromCoord = geoCoordMap[dataItem[0].name];
            var toCoord = geoCoordMap[dataItem[1].name];
            if (fromCoord && toCoord) {
                res.push({
                    fromName: dataItem[0].name,
                    toName: dataItem[1].name,
                    coords: [fromCoord, toCoord],
                    value: dataItem[1].value
                });
            }
        }
        return res;
    };

    var color = ["#a6c84c", "#ffa022", "#46bee9"]; //航线的颜色
    var flyseries = [];
    var currentData = flydata[timeLineIndex.currentIndex];
    var Data0 = currentData[0][1];
    var Data1 = currentData[1][1];
    var Data2 = currentData[2][1];
    [
        [currentData[0][0], Data0],
        [currentData[1][0], Data1],
        [currentData[2][0], Data2]
    ].forEach(function (item, i) {
        flyseries.push(
            {
                name: item[0] + " Top3",
                type: "lines",
                zlevel: 1,
                effect: {
                    show: true,
                    period: 6,
                    trailLength: 0.7,
                    color: "red", //arrow箭头的颜色
                    symbolSize: 3
                },
                lineStyle: {
                    normal: {
                        color: color[i],
                        width: 0,
                        curveness: 0.2
                    }
                },
                data: convertData(item[1])
            },
            {
                name: item[0] + " Top3",
                type: "lines",
                zlevel: 2,
                symbol: ["none", "arrow"],
                symbolSize: 10,
                effect: {
                    show: true,
                    period: 6,
                    trailLength: 0,
                    symbol: planePath,
                    symbolSize: 15
                },
                lineStyle: {
                    normal: {
                        color: color[i],
                        width: 1,
                        opacity: 0.6,
                        curveness: 0.2
                    }
                },
                data: convertData(item[1])
            },
            {
                name: item[0] + " Top3",
                type: "effectScatter",
                coordinateSystem: "geo",
                zlevel: 2,
                rippleEffect: {
                    brushType: "stroke"
                },
                label: {
                    normal: {
                        show: true,
                        position: "right",
                        formatter: "{b}"
                    }
                },
                symbolSize: function (val) {
                    return val[2] / 8;
                },
                itemStyle: {
                    normal: {
                        color: color[i]
                    },
                    emphasis: {
                        areaColor: "#2B91B7"
                    }
                },
                data: item[1].map(function (dataItem) {
                    return {
                        name: dataItem[1].name,
                        value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                    };
                })
            }
        );
    });
    flymap.setOption({
        series: flyseries,
        legend: {
            orient: "vertical",
            top: "bottom",
            left: "right",
            data: [`${currentData[0][0]} Top3`, `${currentData[1][0]} Top3`,
                `${currentData[2][0]} Top3`],
            textStyle: {
                color: "#fff"
            },
            selectedMode: "multiple"
        },
    });
});

})()

var bardata = [
    [10, 20, 150, 80, 90, 10, 130],
    [30, 70, 120, 60, 60, 10, 30],
    [10, 70, 110, 70, 70, 19, 10],
    [40, 60, 130, 80, 40, 16, 130],
    [80, 90, 140, 90, 60, 13, 130],
    [20, 120, 110, 40, 50, 15, 130],
    [50, 70, 170, 60, 70, 20, 130],
    [30, 80, 130, 50, 80, 16, 130],
    [70, 30, 150, 60, 90, 18, 130],
    [110, 60, 140, 90, 40, 30, 130],
    [50, 90, 120, 40, 60, 42, 130],
    [30, 70, 100, 90, 50, 15, 130],
];
var flydata = [
    // 1
    [
        ['福建', [
            [{ name: "福建" }, { name: "上海", value: 100 }],
            [{ name: "福建" }, { name: "广西", value: 100 }],
            [{ name: "福建" }, { name: "广东", value: 100 }],
            [{ name: "福建" }, { name: "云南", value: 100 }],
            [{ name: "福建" }, { name: "贵州", value: 100 }]
        ]], 
        ['湖南', [
            [{ name: "湖南" }, { name: "浙江", value: 100 }],
            [{ name: "湖南" }, { name: "湖北", value: 100 }],
            [{ name: "湖南" }, { name: "安徽", value: 100 }],
            [{ name: "湖南" }, { name: "黑龙江", value: 100 }],
            [{ name: "湖南" }, { name: "江苏", value: 100 }]
        ]], 
        ['西藏', [
            [{ name: "西藏" }, { name: "广西", value: 100 }],
            [{ name: "西藏" }, { name: "广东", value: 100 }],
            [{ name: "西藏" }, { name: "福建", value: 100 }],
            [{ name: "西藏" }, { name: "江西", value: 100 }],
            [{ name: "西藏" }, { name: "宁夏", value: 100 }]
        ]]
    ],
    // 2
    [
        ['内蒙古', [
            [{ name: "内蒙古" }, { name: "上海", value: 100 }],
            [{ name: "内蒙古" }, { name: "广西", value: 100 }],
            [{ name: "内蒙古" }, { name: "广东", value: 100 }],
            [{ name: "内蒙古" }, { name: "云南", value: 100 }],
            [{ name: "内蒙古" }, { name: "贵州", value: 100 }]
        ]],
        ['湖南', [
            [{ name: "湖南" }, { name: "浙江", value: 100 }],
            [{ name: "湖南" }, { name: "湖北", value: 100 }],
            [{ name: "湖南" }, { name: "安徽", value: 100 }],
            [{ name: "湖南" }, { name: "黑龙江", value: 100 }],
            [{ name: "湖南" }, { name: "江苏", value: 100 }]
        ]],
        ['西藏', [
            [{ name: "西藏" }, { name: "广西", value: 100 }],
            [{ name: "西藏" }, { name: "广东", value: 100 }],
            [{ name: "西藏" }, { name: "福建", value: 100 }],
            [{ name: "西藏" }, { name: "江西", value: 100 }],
            [{ name: "西藏" }, { name: "宁夏", value: 100 }]
        ]]
    ],
    // 3
    [
        ['黑龙江', [
            [{ name: "黑龙江" }, { name: "上海", value: 100 }],
            [{ name: "黑龙江" }, { name: "广西", value: 100 }],
            [{ name: "黑龙江" }, { name: "广东", value: 100 }],
            [{ name: "黑龙江" }, { name: "云南", value: 100 }],
            [{ name: "黑龙江" }, { name: "贵州", value: 100 }]
        ]],
        ['湖南', [
            [{ name: "湖南" }, { name: "浙江", value: 100 }],
            [{ name: "湖南" }, { name: "湖北", value: 100 }],
            [{ name: "湖南" }, { name: "安徽", value: 100 }],
            [{ name: "湖南" }, { name: "黑龙江", value: 100 }],
            [{ name: "湖南" }, { name: "江苏", value: 100 }]
        ]],
        ['西藏', [
            [{ name: "西藏" }, { name: "广西", value: 100 }],
            [{ name: "西藏" }, { name: "广东", value: 100 }],
            [{ name: "西藏" }, { name: "福建", value: 100 }],
            [{ name: "西藏" }, { name: "江西", value: 100 }],
            [{ name: "西藏" }, { name: "宁夏", value: 100 }]
        ]]
    ],
    // 4
    [
        ['福建', [
            [{ name: "福建" }, { name: "上海", value: 100 }],
            [{ name: "福建" }, { name: "广西", value: 100 }],
            [{ name: "福建" }, { name: "广东", value: 100 }],
            [{ name: "福建" }, { name: "云南", value: 100 }],
            [{ name: "福建" }, { name: "贵州", value: 100 }]
        ]],
        ['湖南', [
            [{ name: "湖南" }, { name: "浙江", value: 100 }],
            [{ name: "湖南" }, { name: "湖北", value: 100 }],
            [{ name: "湖南" }, { name: "安徽", value: 100 }],
            [{ name: "湖南" }, { name: "黑龙江", value: 100 }],
            [{ name: "湖南" }, { name: "江苏", value: 100 }]
        ]],
        ['西藏', [
            [{ name: "西藏" }, { name: "广西", value: 100 }],
            [{ name: "西藏" }, { name: "广东", value: 100 }],
            [{ name: "西藏" }, { name: "福建", value: 100 }],
            [{ name: "西藏" }, { name: "江西", value: 100 }],
            [{ name: "西藏" }, { name: "宁夏", value: 100 }]
        ]]
    ],
    // 5
    [
        ['福建', [
            [{ name: "福建" }, { name: "上海", value: 100 }],
            [{ name: "福建" }, { name: "广西", value: 100 }],
            [{ name: "福建" }, { name: "广东", value: 100 }],
            [{ name: "福建" }, { name: "云南", value: 100 }],
            [{ name: "福建" }, { name: "贵州", value: 100 }]
        ]],
        ['湖南', [
            [{ name: "湖南" }, { name: "浙江", value: 100 }],
            [{ name: "湖南" }, { name: "湖北", value: 100 }],
            [{ name: "湖南" }, { name: "安徽", value: 100 }],
            [{ name: "湖南" }, { name: "黑龙江", value: 100 }],
            [{ name: "湖南" }, { name: "江苏", value: 100 }]
        ]],
        ['西藏', [
            [{ name: "西藏" }, { name: "广西", value: 100 }],
            [{ name: "西藏" }, { name: "广东", value: 100 }],
            [{ name: "西藏" }, { name: "福建", value: 100 }],
            [{ name: "西藏" }, { name: "江西", value: 100 }],
            [{ name: "西藏" }, { name: "宁夏", value: 100 }]
        ]]
    ],
    // 6
    [
        ['福建', [
            [{ name: "福建" }, { name: "上海", value: 100 }],
            [{ name: "福建" }, { name: "广西", value: 100 }],
            [{ name: "福建" }, { name: "广东", value: 100 }],
            [{ name: "福建" }, { name: "云南", value: 100 }],
            [{ name: "福建" }, { name: "贵州", value: 100 }]
        ]],
        ['湖南', [
            [{ name: "湖南" }, { name: "浙江", value: 100 }],
            [{ name: "湖南" }, { name: "湖北", value: 100 }],
            [{ name: "湖南" }, { name: "安徽", value: 100 }],
            [{ name: "湖南" }, { name: "黑龙江", value: 100 }],
            [{ name: "湖南" }, { name: "江苏", value: 100 }]
        ]],
        ['西藏', [
            [{ name: "西藏" }, { name: "广西", value: 100 }],
            [{ name: "西藏" }, { name: "广东", value: 100 }],
            [{ name: "西藏" }, { name: "福建", value: 100 }],
            [{ name: "西藏" }, { name: "江西", value: 100 }],
            [{ name: "西藏" }, { name: "宁夏", value: 100 }]
        ]]
    ],
    // 7
    [
        ['福建', [
            [{ name: "福建" }, { name: "上海", value: 100 }],
            [{ name: "福建" }, { name: "广西", value: 100 }],
            [{ name: "福建" }, { name: "广东", value: 100 }],
            [{ name: "福建" }, { name: "云南", value: 100 }],
            [{ name: "福建" }, { name: "贵州", value: 100 }]
        ]],
        ['湖南', [
            [{ name: "湖南" }, { name: "浙江", value: 100 }],
            [{ name: "湖南" }, { name: "湖北", value: 100 }],
            [{ name: "湖南" }, { name: "安徽", value: 100 }],
            [{ name: "湖南" }, { name: "黑龙江", value: 100 }],
            [{ name: "湖南" }, { name: "江苏", value: 100 }]
        ]],
        ['西藏', [
            [{ name: "西藏" }, { name: "广西", value: 100 }],
            [{ name: "西藏" }, { name: "广东", value: 100 }],
            [{ name: "西藏" }, { name: "福建", value: 100 }],
            [{ name: "西藏" }, { name: "江西", value: 100 }],
            [{ name: "西藏" }, { name: "宁夏", value: 100 }]
        ]]
    ],
    // 8
    [
        ['福建', [
            [{ name: "福建" }, { name: "上海", value: 100 }],
            [{ name: "福建" }, { name: "广西", value: 100 }],
            [{ name: "福建" }, { name: "广东", value: 100 }],
            [{ name: "福建" }, { name: "云南", value: 100 }],
            [{ name: "福建" }, { name: "贵州", value: 100 }]
        ]],
        ['湖南', [
            [{ name: "湖南" }, { name: "浙江", value: 100 }],
            [{ name: "湖南" }, { name: "湖北", value: 100 }],
            [{ name: "湖南" }, { name: "安徽", value: 100 }],
            [{ name: "湖南" }, { name: "黑龙江", value: 100 }],
            [{ name: "湖南" }, { name: "江苏", value: 100 }]
        ]],
        ['西藏', [
            [{ name: "西藏" }, { name: "广西", value: 100 }],
            [{ name: "西藏" }, { name: "广东", value: 100 }],
            [{ name: "西藏" }, { name: "福建", value: 100 }],
            [{ name: "西藏" }, { name: "江西", value: 100 }],
            [{ name: "西藏" }, { name: "宁夏", value: 100 }]
        ]]
    ],
    // 9
    [
        ['福建', [
            [{ name: "福建" }, { name: "上海", value: 100 }],
            [{ name: "福建" }, { name: "广西", value: 100 }],
            [{ name: "福建" }, { name: "广东", value: 100 }],
            [{ name: "福建" }, { name: "云南", value: 100 }],
            [{ name: "福建" }, { name: "贵州", value: 100 }]
        ]],
        ['湖南', [
            [{ name: "湖南" }, { name: "浙江", value: 100 }],
            [{ name: "湖南" }, { name: "湖北", value: 100 }],
            [{ name: "湖南" }, { name: "安徽", value: 100 }],
            [{ name: "湖南" }, { name: "黑龙江", value: 100 }],
            [{ name: "湖南" }, { name: "江苏", value: 100 }]
        ]],
        ['西藏', [
            [{ name: "西藏" }, { name: "广西", value: 100 }],
            [{ name: "西藏" }, { name: "广东", value: 100 }],
            [{ name: "西藏" }, { name: "福建", value: 100 }],
            [{ name: "西藏" }, { name: "江西", value: 100 }],
            [{ name: "西藏" }, { name: "宁夏", value: 100 }]
        ]]
    ],
    // 10
    [
        ['福建', [
            [{ name: "福建" }, { name: "上海", value: 100 }],
            [{ name: "福建" }, { name: "广西", value: 100 }],
            [{ name: "福建" }, { name: "广东", value: 100 }],
            [{ name: "福建" }, { name: "云南", value: 100 }],
            [{ name: "福建" }, { name: "贵州", value: 100 }]
        ]],
        ['湖南', [
            [{ name: "湖南" }, { name: "浙江", value: 100 }],
            [{ name: "湖南" }, { name: "湖北", value: 100 }],
            [{ name: "湖南" }, { name: "安徽", value: 100 }],
            [{ name: "湖南" }, { name: "黑龙江", value: 100 }],
            [{ name: "湖南" }, { name: "江苏", value: 100 }]
        ]],
        ['西藏', [
            [{ name: "西藏" }, { name: "广西", value: 100 }],
            [{ name: "西藏" }, { name: "广东", value: 100 }],
            [{ name: "西藏" }, { name: "福建", value: 100 }],
            [{ name: "西藏" }, { name: "江西", value: 100 }],
            [{ name: "西藏" }, { name: "宁夏", value: 100 }]
        ]]
    ],
    // 11 
    [
        ['福建', [
            [{ name: "福建" }, { name: "上海", value: 100 }],
            [{ name: "福建" }, { name: "广西", value: 100 }],
            [{ name: "福建" }, { name: "广东", value: 100 }],
            [{ name: "福建" }, { name: "云南", value: 100 }],
            [{ name: "福建" }, { name: "贵州", value: 100 }]
        ]],
        ['湖南', [
            [{ name: "湖南" }, { name: "浙江", value: 100 }],
            [{ name: "湖南" }, { name: "湖北", value: 100 }],
            [{ name: "湖南" }, { name: "安徽", value: 100 }],
            [{ name: "湖南" }, { name: "黑龙江", value: 100 }],
            [{ name: "湖南" }, { name: "江苏", value: 100 }]
        ]],
        ['西藏', [
            [{ name: "西藏" }, { name: "广西", value: 100 }],
            [{ name: "西藏" }, { name: "广东", value: 100 }],
            [{ name: "西藏" }, { name: "福建", value: 100 }],
            [{ name: "西藏" }, { name: "江西", value: 100 }],
            [{ name: "西藏" }, { name: "宁夏", value: 100 }]
        ]]
    ],
    // 12
    [
        ['福建', [
            [{ name: "福建" }, { name: "上海", value: 100 }],
            [{ name: "福建" }, { name: "广西", value: 100 }],
            [{ name: "福建" }, { name: "广东", value: 100 }],
            [{ name: "福建" }, { name: "云南", value: 100 }],
            [{ name: "福建" }, { name: "贵州", value: 100 }]
        ]],
        ['湖南', [
            [{ name: "湖南" }, { name: "浙江", value: 100 }],
            [{ name: "湖南" }, { name: "湖北", value: 100 }],
            [{ name: "湖南" }, { name: "安徽", value: 100 }],
            [{ name: "湖南" }, { name: "黑龙江", value: 100 }],
            [{ name: "湖南" }, { name: "江苏", value: 100 }]
        ]],
        ['西藏', [
            [{ name: "西藏" }, { name: "广西", value: 100 }],
            [{ name: "西藏" }, { name: "广东", value: 100 }],
            [{ name: "西藏" }, { name: "福建", value: 100 }],
            [{ name: "西藏" }, { name: "江西", value: 100 }],
            [{ name: "西藏" }, { name: "宁夏", value: 100 }]
        ]]
    ]
];
var geoCoordMap = {
    '黑龙江': [127.9688, 45.368],
    '内蒙古': [110.3467, 41.4899],
    "吉林": [125.8154, 44.2584],
    '北京': [116.4551, 40.2539],
    "辽宁": [123.1238, 42.1216],
    "河北": [114.4995, 38.1006],
    "天津": [117.4219, 39.4189],
    "山西": [112.3352, 37.9413],
    "陕西": [109.1162, 34.2004],
    "甘肃": [103.5901, 36.3043],
    "宁夏": [106.3586, 38.1775],
    "青海": [101.4038, 36.8207],
    "新疆": [87.9236, 43.5883],
    "西藏": [91.11, 29.97],
    "四川": [103.9526, 30.7617],
    "重庆": [108.384366, 30.439702],
    "山东": [117.1582, 36.8701],
    "河南": [113.4668, 34.6234],
    "江苏": [118.8062, 31.9208],
    "安徽": [117.29, 32.0581],
    "湖北": [114.3896, 30.6628],
    "浙江": [119.5313, 29.8773],
    "福建": [119.4543, 25.9222],
    "江西": [116.0046, 28.6633],
    "湖南": [113.0823, 28.2568],
    "贵州": [106.6992, 26.7682],
    "云南": [102.9199, 25.4663],
    "广东": [113.12244, 23.009505],
    "广西": [108.479, 23.1152],
    "海南": [110.3893, 19.8516],
    '上海': [121.4648, 31.2891]

};