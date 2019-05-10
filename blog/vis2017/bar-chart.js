let myChart = echarts.init(document.getElementById('acceptance'));

let option = {
    title: {
        text: 'VIS 2017 Acceptances/Submissions',
        bottom: 0,
        left: 'center'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer : {
            type : 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '15%',
        containLabel: true
    },
    legend: {
        data:['Accepted', 'Conference', 'Rejected']
    },
    xAxis: {
        type: 'value'
    },
    yAxis: {
        type: 'category',
        data: ["VAST","InfoVis","SciVis"],
        nameTextStyle: {
            fontSize: 14
        }
    },
    series: [{
        name: 'Accepted',
        type: 'bar',
        stack: 'Total',
        label: {
            normal: {
                show: true,
                position: 'insideRight'
            }
        },
        data: [37, 39, 23]
    },{
        name: 'Conference',
        type: 'bar',
        stack: 'Total',
        label: {
            normal: {
                show: true,
                position: 'insideRight'
            }
        },
        data: [15, 0, 0]
    }, {
        name: 'Rejected',
        type: 'bar',
        stack: 'Total',
        label: {
            normal: {
                show: true,
                position: 'insideRight'
            }
        },
        data: [121, 131, 97]
    }]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);