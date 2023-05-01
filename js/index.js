// 柱状图表
(function(){
    var myChart = echarts.init(document.querySelector(".bar .chart"));
    var option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        xAxis: {
            type: 'category',
            data: ['湖南', '广东', '云南', '四川', '贵州', '新疆', '北京'],
            axisLabel: {
                color: "white",
                fontSize: '10px'
            },
            axisLine: {
                show: true
            }
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                color: "white",
            },
            splitLine: {
                lineStyle: {
                    color: "rgba(255,255,255,0.1)"
                }
            }
        },
        grid: {
            left: "0%",
            right: "0%",
            top: "10px",
            bottom: "4%",
            containLabel: true
        },
        series: [
            {
                data: [1500, 2000, 3000, 2800, 3500, 4000, 5000],
                type: 'bar',
                barWidth: "35%" ,
                showBackground: true,
                backgroundStyle: {
                    color: 'rgba(180, 180, 180, 0.2)'
                },
                itemStyle: {
                    borderRadius: 5
                }
            }
        ]
    };
    myChart.setOption(option);
    // 自适应配置
    window.addEventListener("resize", function(){
        myChart.resize();
    })
})();
// 河流图
(function(){
    var myChart = echarts.init(document.querySelector(".river .chart"));
    var option = {
        color: ['rgba(128, 255, 165, 0.6)',
            'rgba(0, 221, 255, 0.6)',
            'rgba(55, 162, 255, 0.6)',
            'rgba(255, 0, 135, 0.6)',
            'rgba(255, 191, 0, 0.6)'],

        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            top: "0%",
            textStyle: {
                color: "white"
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            top: '20%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: ['清明节', '劳动节', '端午节', '中秋节', '国庆节'],
                axisLabel: {
                    color: "white",
                    fontSize: '10px'
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLabel: {
                    color: "white",
                }
            }
        ],
        series: [
            {
                name: '北京',
                type: 'line',
                stack: 'Total',
                smooth: true,
                lineStyle: {
                    width: 0
                },
                showSymbol: false,
                areaStyle: {
                    opacity: 0.8,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: 'rgb(128, 255, 165)'
                        },
                        {
                            offset: 1,
                            color: 'rgb(1, 191, 236)'
                        }
                    ])
                },
                emphasis: {
                    focus: 'series'
                },
                data: [140, 232, 101, 264, 90]
            },
            {
                name: '福建',
                type: 'line',
                stack: 'Total',
                smooth: true,
                lineStyle: {
                    width: 0
                },
                showSymbol: false,
                areaStyle: {
                    opacity: 0.8,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: 'rgb(0, 221, 255)'
                        },
                        {
                            offset: 1,
                            color: 'rgb(77, 119, 255)'
                        }
                    ])
                },
                emphasis: {
                    focus: 'series'
                },
                data: [120, 282, 111, 234, 220]
            },
            {
                name: '上海',
                type: 'line',
                stack: 'Total',
                smooth: true,
                lineStyle: {
                    width: 0
                },
                showSymbol: false,
                areaStyle: {
                    opacity: 0.8,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: 'rgb(55, 162, 255)'
                        },
                        {
                            offset: 1,
                            color: 'rgb(116, 21, 219)'
                        }
                    ])
                },
                emphasis: {
                    focus: 'series'
                },
                data: [320, 132, 201, 334, 190]
            },
            {
                name: '四川',
                type: 'line',
                stack: 'Total',
                smooth: true,
                lineStyle: {
                    width: 0
                },
                showSymbol: false,
                areaStyle: {
                    opacity: 0.8,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: 'rgb(255, 0, 135)'
                        },
                        {
                            offset: 1,
                            color: 'rgb(135, 0, 157)'
                        }
                    ])
                },
                emphasis: {
                    focus: 'series'
                },
                data: [220, 402, 231, 134, 190]
            },
            {
                name: '西安',
                type: 'line',
                stack: 'Total',
                smooth: true,
                lineStyle: {
                    width: 0
                },
                showSymbol: false,
                label: {
                    show: true,
                    position: 'top'
                },
                areaStyle: {
                    opacity: 0.8,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: 'rgb(255, 191, 0)'
                        },
                        {
                            offset: 1,
                            color: 'rgb(224, 62, 76)'
                        }
                    ])
                },
                emphasis: {
                    focus: 'series'
                },
                data: [220, 302, 181, 234, 210]
            }
        ]
    };
    myChart.setOption(option);
    // 自适应配置
    window.addEventListener("resize", function () {
        myChart.resize();
    })
})();

// 多线图 ---> 初始化
(function(){
var myChart = echarts.init(document.querySelector('.multiline .chart'));
myChart.resize({
    width: 336,
    height: 160
});
var option = {
    // backgroundColor: '#080b30',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        data: ['7天', '5天', '3天'],
        orient: 'horizontal',   // 水平
        //type: 'plain',          // 普通图例
        icon: "circle",
        top: 0,
        left: 120,
        // right: '5%',
        // bottom: '15%',
        //width:280,              // 宽度
        itemGap: 2,            // 间隔
        itemWidth: 10,          // 图形宽度。
        itemHeight: 10,         // 图形高度。
        borderWidth: 0,
        textStyle: {
            fontSize: '14px',
            color: '#4ca9ff',
        }
    },
    grid: {
        top: '5%',
        left: '15%',
        right: '5%',
        bottom: '15%',
        // containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#56a4cd',
                },
            },
            splitArea: {
                // show: false,
                color: '#f00',
                lineStyle: {
                    color: '#f00',
                },
            },
            axisLabel: {
                color: '#fff',
                fontSize: "10px"
            },
            splitLine: {
                show: false,
            },
            "axisTick": {       //y轴刻度线
                "show": true
            },
            boundaryGap: true,
            data: ['北京', '上海', '广东', '浙江', '四川', '湖南'],
        },
    ],

    yAxis: [
        {
            type: 'value',
            min: 0,
            // max: 140,
            splitNumber: 4,
            splitLine: {
                show: false,
                lineStyle: {
                    color: 'rgba(255,255,255,0.1)',
                },
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#56a4cd',
                },
            },
            axisLabel: {
                show: true,
                margin: 20,
                textStyle: {
                    color: 'white',
                    fontSize: "10px"
                },
            },
            axisTick: {
                show: true,
            },
        },
    ],
    series: [
        {
            name: '7天',
            type: 'line',
            smooth: true, //是否平滑
            showAllSymbol: true,
            // symbol: 'image://./static/images/guang-circle.png',
            symbol: 'circle',
            symbolSize: 10,
            lineStyle: {
                normal: {
                    color: '#00b3f4',
                    shadowColor: 'rgba(0, 0, 0, .3)',
                    shadowBlur: 0,
                    shadowOffsetY: 5,
                    shadowOffsetX: 5,
                },
            },
            itemStyle: {
                color: '#00b3f4',
                borderColor: '#fff',
                borderWidth: 3,
                shadowColor: 'rgba(0, 0, 0, .3)',
                shadowBlur: 0,
                shadowOffsetY: 2,
                shadowOffsetX: 2,
            },
            tooltip: {
                show: true,
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: 'rgba(0,179,244,0.3)',
                            },
                            {
                                offset: 1,
                                color: 'rgba(0,179,244,0)',
                            },
                        ],
                        false
                    ),
                    shadowColor: 'rgba(0,179,244, 0.9)',
                    shadowBlur: 20,
                },
            },
            data: [2300, 1900, 500, 1800, 2200, 2600],
        },
        {
            name: '5天',
            type: 'line',
            smooth: true, //是否平滑
            showAllSymbol: true,
            // symbol: 'image://./static/images/guang-circle.png',
            symbol: 'circle',
            symbolSize: 10,
            lineStyle: {
                normal: {
                    color: '#00ca95',
                    shadowColor: 'rgba(0, 0, 0, .3)',
                    shadowBlur: 0,
                    shadowOffsetY: 5,
                    shadowOffsetX: 5,
                },
            },

            itemStyle: {
                color: '#00ca95',
                borderColor: '#fff',
                borderWidth: 3,
                shadowColor: 'rgba(0, 0, 0, .3)',
                shadowBlur: 0,
                shadowOffsetY: 2,
                shadowOffsetX: 2,
            },
            tooltip: {
                show: true,
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: 'rgba(0,202,149,0.3)',
                            },
                            {
                                offset: 1,
                                color: 'rgba(0,202,149,0)',
                            },
                        ],
                        false
                    ),
                    shadowColor: 'rgba(0,202,149, 0.9)',
                    shadowBlur: 20,
                },
            },
            data: [1900, 2500, 1300, 1300, 4000, 2700],
        },
        {
            name: '3天',
            type: 'line',
            smooth: true, //是否平滑
            showAllSymbol: true,
            // symbol: 'image://./static/images/guang-circle.png',
            symbol: 'circle',
            symbolSize: 10,
            lineStyle: {
                normal: {
                    color: '#ffde32',
                    shadowColor: 'rgba(0, 0, 0, .3)',
                    shadowBlur: 0,
                    shadowOffsetY: 5,
                    shadowOffsetX: 5,
                },
            },

            itemStyle: {
                color: '#ffde32',
                borderColor: '#fff',
                borderWidth: 1,
                shadowColor: 'rgba(0, 0, 0, .3)',
                shadowBlur: 0,
                shadowOffsetY: 2,
                shadowOffsetX: 2,
            },
            tooltip: {
                show: true,
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: 'rgba(255,222,50,0.3)',
                            },
                            {
                                offset: 1,
                                color: 'rgba(255,222,50,0.3)',
                            },
                        ],
                        false
                    ),
                    shadowColor: 'rgba(255,222,50,0.3)',
                    shadowBlur: 20,
                },
            },
            data: [1500, 1100, 700, 2000, 1200, 1800],
        }
    ],
};
myChart.setOption(option);
window.addEventListener("resize", function () {
    myChart.resize();
})
})();
// 玫瑰图
(function(){
var myChart = echarts.init(document.querySelector(".rose .chart")); 
var option = {
    color: ['#37a2da', '#32c5e9', '#9fe6b8', '#ffdb5c', '#ff9f7f', '#fb7293', '#e7bcf3', '#8378ea'],
    tooltip: {
        trigger: 'item',
        formatter: "{b} : {c} ({d}%)"
    },
    calculable: true,
    series: [
        {
            // name: '增值电信业务统计表',
            type: 'pie',
            radius: [20, 70],
            roseType: 'area',
            data: [
                { value: 70, name: '广东' },
                { value: 110, name: '内蒙古' },
                { value: 95, name: '安徽' },
                { value: 50, name: '广西' },
                { value: 40, name: '海南' },
                { value: 80, name: '北京' },
                { value: 35, name: '江西' },
                { value: 55, name: '福建' }
            ],
        }
    ]
};
myChart.setOption(option);
window.addEventListener("resize", function () {
    myChart.resize();
});

})();

// 气泡图 ---> 初始化
var symbols = {
    '私家车': 'path://M1136.047385 339.881769c-23.341731-196.733067-118.702365-340.157424-235.779091-339.881372L358.68492 1.288641C241.577522 1.564693 146.922354 145.357118 124.408779 342.243548c-82.2635 48.953223-124.683492 148.73069-124.40744 264.151103 0.184035 85.698813 24.016525 162.53329 69.902504 216.394105l0.460087 191.365389 212.805429-0.490759-0.276052-112.077117 697.338055-1.686985 0.276052 112.077117 212.805429-0.521432-0.460087-191.365389c45.640599-54.014177 69.135693-131.002016 68.920986-216.700829C1261.528361 488.183045 1218.586937 388.497596 1136.047385 339.881769zM358.930299 74.319734 900.513674 73.031491c75.392872-0.184035 141.491992 101.985882 166.490036 240.563992-11.53284-2.300433-23.648456-3.711366-36.193486-4.447505 0-0.306724 0.337397-0.920173 0.061345-0.889501-101.893865 0.24538-70.055866 0.153362-141.798717 0.337397s-46.560773 0.092017-118.119589 0.276052L247.282597 310.129497c-19.016916 0.030672-36.99097 2.085726-53.983505 5.551713C217.806376 176.919065 283.537427 74.473096 358.930299 74.319734zM218.297135 702.031337c-46.591445 0.092017-84.318553-42.788062-84.441243-95.974083-0.12269-53.094004 37.420384-96.250135 83.981157-96.372825 46.376738-0.092017 84.103846 42.880079 84.257209 95.974083C302.216947 658.93655 264.704546 701.908647 218.297135 702.031337zM875.270251 683.903921l-488.366682 0.582776c-76.12901 0.184035-77.785322-131.124706-0.306724-131.30874l488.366682-1.165553C946.184946 551.82837 946.49167 683.719887 875.270251 683.903921zM1043.938031 700.037628c-46.468755 0.12269-84.195864-42.757389-84.318553-95.94341-0.12269-53.094004 37.420384-96.280807 83.858467-96.372825 46.499428-0.12269 84.257209 42.849407 84.379898 95.974083C1127.888515 656.973514 1090.406786 699.976283 1043.938031 700.037628z',
    '大巴': 'path://M910.165333 312.888889l-0.483555-0.056889V682.666667c0 31.431111 0.540444 56.888889 0.540444 56.888889h-28.444444 28.444444v199.111111a28.444444 28.444444 0 0 1-28.444444 28.444444h-85.333334a28.444444 28.444444 0 0 1-28.444444-28.444444l-9.472-56.888889H265.472L256 938.666667a28.444444 28.444444 0 0 1-28.444444 28.444444H142.222222a28.444444 28.444444 0 0 1-28.444444-28.444444v-199.111111h28.444444-28.444444s-0.512-25.457778-0.512-56.888889V312.832C82.090667 312.519111 56.888889 287.715556 56.888889 257.052444V201.187556c0-30.634667 25.201778-27.932444 56.376889-27.904V113.777778a56.888889 56.888889 0 0 1 56.888889-56.888889h682.638222a56.888889 56.888889 0 0 1 56.888889 56.888889v56.945778L910.165333 170.666667C941.624889 170.666667 967.111111 167.68 967.111111 199.111111v56.888889a56.888889 56.888889 0 0 1-56.945778 56.888889zM227.555556 718.222222c0 11.776 10.183111 21.333333 22.755555 21.333334H341.333333c0-71.367111-55.694222-85.333333-68.266666-85.333334h-22.755556c-12.572444 0-22.755556 9.557333-22.755555 21.333334v42.666666zM796.444444 256V199.111111a28.444444 28.444444 0 0 0-28.444444-28.444444H256a28.444444 28.444444 0 0 0-28.444444 28.444444v227.555556a56.888889 56.888889 0 0 0 56.888888 56.888889h455.111112a56.888889 56.888889 0 0 0 56.888888-56.888889V256z m0 419.555556c0-11.776-10.183111-21.333333-22.755555-21.333334h-22.755556c-12.572444 0-68.266667 13.966222-68.266666 85.333334h91.022222c12.572444 0 22.755556-9.557333 22.755555-21.333334v-42.666666z',
    '动车': 'path://M425.6 125.328h156.8c21.952 0 39.2-17.008 39.2-38.656C621.6 65.008 604.352 48 582.4 48h-156.8c-21.952 0-39.2 17.008-39.2 38.672 0 21.648 17.248 38.656 39.2 38.656zM770.56 976H896l-117.6-122.96c45.472-16.24 78.4-58.768 78.4-109.04v-464c0-64.192-53.312-116-117.6-116H268.8c-65.072 0-117.6 52.592-117.6 116v464c0 50.272 32.928 93.568 78.4 109.04L112 976h125.44l111.328-116h310.464L770.56 976zM241.36 349.6c0-42.528 35.28-77.328 78.4-77.328h368.48c43.12 0 78.4 34.8 78.4 77.328v131.472c0 42.528-35.28 77.328-78.4 77.328h-368.48c-43.12 0-78.4-34.8-78.4-77.328V349.6z m90.16 425.328c-34.496 0-62.72-27.84-62.72-61.856 0-34.032 28.224-61.872 62.72-61.872 34.496 0 62.72 27.84 62.72 61.872 0 34.016-28.224 61.856-62.72 61.856z m282.24-61.856c0-34.032 28.224-61.872 62.72-61.872 34.496 0 62.72 27.84 62.72 61.872 0 34.016-28.224 61.856-62.72 61.856-34.496 0-62.72-27.84-62.72-61.856z',
    '飞机': 'path://M213.333333 588.16c15.914667-5.824 31.04-11.456 46.293334-16.746667 1.493333-0.533333 3.968 0.554667 5.589333 1.557334 17.024 10.538667 33.92 21.269333 50.986667 31.786666 1.6 1.002667 4.288 1.578667 5.973333 0.96 34.666667-12.416 69.248-25.045333 103.829333-37.632 0.576-0.213333 1.109333-0.576 2.112-1.130666l-133.12-205.141334c1.578667-0.682667 2.816-1.28 4.074667-1.749333 16.384-5.994667 32.832-11.861333 49.130667-18.048 3.498667-1.322667 5.76-0.704 8.576 1.536 70.272 55.850667 140.650667 111.573333 210.88 167.466667 3.626667 2.88 6.4 3.242667 10.688 1.664 55.893333-20.501333 111.850667-40.853333 167.808-61.141334 26.048-9.450667 51.797333 5.888 55.914666 33.130667 2.816 18.624-8.682667 37.077333-27.605333 44.010667-44.053333 16.085333-88.106667 32.106667-132.181333 48.149333L334.613333 688.853333c-22.144 8.085333-39.04 2.048-53.162666-16.938666-12.906667-17.344-27.2-33.664-40.874667-50.410667L213.333333 588.16z'
};
var colors = {
    '自然景点': 'green',
    '历史遗迹': 'orange',
    '主题公园': 'skyblue'
}
// [ 花费, 旅游时长, 出行方式, 地点类型]
var data = [
    ['12000', 109, '私家车', '历史遗迹'],
    ['2000', 27, '大巴', '主题公园'],
    ['7000', 98, '动车', '自然景点'],
    ['6000', 54, '私家车', '历史遗迹'],
    ['20000', 143, '飞机', '自然景点'],
    ['22000', 131, '飞机', '历史遗迹'],
    ['4000', 52, '大巴', '主题公园'],
];
(function () {
    var myChart = echarts.init(document.querySelector('.bubble .chart'));
    myChart.resize({
        width: 336,
        height: 200
    });
    var itemStyle = {
        normal: {
            opacity: 0.8,
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
    };
    var myseries = [];
    data.forEach((data) => (myseries.push({
        data: [data],
        type: 'scatter',
        symbolSize: data[1] * myChart.getWidth() / 720,
        symbol: symbols[data[2]],
        itemStyle: itemStyle,
        color: colors[data[3]],
    })
    ));
    console.log(myseries);
    var option = {
        
        tooltip: {
            // axis 和 item 的params不同
            trigger: 'item',
            formatter: function (params) {
                var res = '';
                var names = ['旅游花费','旅游时长', '出行方式', '地点类型']
                console.log('----->',params);
                var data = params.data;
                console.log(data);
                for (var i = 0; i < data.length; i++) {
                    if(i!=3){
                        res += (names[i] +'&emsp;'+data[i] + '<br/>');
                    }else{
                        res += (names[i] + '&emsp;' + `<span style="color: ${colors[data[i]]}">`+data[i]+'</span>' + '<br/>');
                    }
                    
                }
                console.log(res);
                return res;    
            }
        },
        // backgroundColor: '#404a59',
        color: [
            '#dd4444'
        ],

        grid: {
            top: "5%",
            left: "10%"
        },
        xAxis: {
            type: 'value',
            // name: '旅游时长',
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#eee'
                }
            },
            
        },
        yAxis: {
            type: 'value',
            // max: 150,
            // name: '花费',
            axisLine: {
                lineStyle: {
                    color: '#eee'
                }
            },
            splitLine: {
                show: false
            }
        },
        series: myseries
    };
    myChart.setOption(option);
})();



// 词云图初始化
var chinaword = [{
    "name": "上海外滩",
    "value": 150
},
{
    "name": "新疆天山天池",
    "value": 180
},
{
    "name": "广州文昌鸡",
    "value": 200
},
{
    "name": "黄山",
    "value": 120
},
{
    "name": "青岛",
    "value": 130
},
{
    "name": "张家界",
    "value": 140
},
{
    "name": "千岛湖",
    "value": 160
},
{
    "name": "藏族血肠",
    "value": 170
},
{
    "name": "陕西",
    "value": 190
},
{
    "name": "西湖",
    "value": 100
},
{
    "name": "苏州",
    "value": 110
},
{
    "name": "湖北神农架",
    "value": 120
},
{
    "name": "河南胡辣汤",
    "value": 90
},
{
    "name": "烤全羊",
    "value": 80
},
{
    "name": "新疆阿克库勒湖",
    "value": 70
},
{
    "name": "麻婆豆腐",
    "value": 60
},
{
    "name": "老北京炸酱面",
    "value": 50
},
{
    "name": "洛阳龙门石窟",
    "value": 40
},
{
    "name": "南京玄武湖",
    "value": 30
},
{
    "name": "上海东方明珠电视塔",
    "value": 20
},
{
    "name": "承德避暑山庄",
    "value": 10
},
{
    "name": "福建土楼",
    "value": 140
},
{
    "name": "张家界玻璃桥",
    "value": 150
},
{
    "name": "敦煌莫高窟",
    "value": 160
},
{
    "name": "黄鹤楼",
    "value": 170
},
{
    "name": "山海关长城",
    "value": 180
},
{
    "name": "泰山",
    "value": 190
},
{
    "name": "峨眉山",
    "value": 200
},
{
    "name": "南京夫子庙",
    "value": 210
}
];
(function () {
    console.log(chinaword);
    var data = {
        value: chinaword,
        // 中国地图
        image: 'data:image/png;base64,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'
    }
    var myChart = echarts.init(document.querySelector('.wordcloud'));
    //温馨提示：image 选取有严格要求不可过大；，否则firefox不兼容  iconfont上面的图标可以
    var maskImage = new Image();
    maskImage.src = data.image

    maskImage.onload = function () {
        myChart.setOption({
            // backgroundColor: '#fff',
            tooltip: {
                show: false
            },
            series: [{
                type: 'wordCloud',
                gridSize: 1,
                sizeRange: [1, 40],
                rotationRange: [-45, 0, 45, 90],
                maskImage: maskImage,
                textStyle: {

                    color: function () {
                        return 'rgb(' +
                            Math.round(Math.random() * 255) +
                            ', ' + Math.round(Math.random() * 255) +
                            ', ' + Math.round(Math.random() * 255) + ')'
                    }
                },
                left: 'center',
                top: 'center',
                // width: '96%',
                // height: '100%',
                right: null,
                bottom: null,
                width: "90%",
                height: "90%",
                // top: 20,
                data: data.value
            }]
        })
    };
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();

