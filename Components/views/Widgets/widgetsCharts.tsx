import React from 'react';
import dynamic from 'next/dynamic';
import { IncomeDetailsChartsSeriesData } from '@common/data';
import "../../Common/data/widgets"
import ECharts from 'echarts-for-react';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })
import getChartColorsArray from '@common/ChartsDynamicColor';

const IncomeBreakdownCharts = ({ dataColors }: any) => {
    const IncomeBreakdownChartColors = getChartColorsArray(dataColors)

    const series: any = [55, 49, 18, 34];

    const options: any = {
        chart: {
            height: 270,
            type: 'donut',
        },
        plotOptions: {
            radialBar: {
                dataLabels: {
                    dropShadow: {
                        enabled: false,
                    }
                },
            },
        },
        legend: {
            position: 'bottom',
            show: false
        },
        labels: ["Marketing", "Offline", "Direct Sales", "Others"],
        colors: IncomeBreakdownChartColors
    };

    return (
        <React.Fragment>
            <ReactApexChart series={series} options={options} type="donut" className="apex-charts" height={270} />
        </React.Fragment>
    );
}

const SessionsByCountriesCharts = ({ dataColors }: any) => {
    const SessionsByCountriesCharts = getChartColorsArray(dataColors)
    const series: any = [{
        data: [1010, 1800, 490, 1450, 1250, 845, 800, 420, 1085],
        name: 'Sessions',
    }]

    const options = {
        grid: {
            left: '4%',
            right: '4%',
            bottom: '4%',
            top: '4%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            splitLine: {
                show: false
            }
        },
        yAxis: {
            type: 'category',
            data: ['Canada', 'US', 'Greenland', 'Russia', 'Brazil', 'Sydney', 'Norway', 'China']
        },
        color: ["#438eff"],
        series: [
            {
                data: [120, 200, 150, 80, 70, 110, 130, 100],
                type: 'bar'
            }
        ]
    };

    return (
        <React.Fragment>
            <ECharts series={series} option={options} type="bar" height={436} />
        </React.Fragment>
    );
}

const AudiencesMetricsCharts = ({ dataColors }: any) => {
    const AudiencesMetricsChartsColors = getChartColorsArray(dataColors);
    const series: any = [{
        name: 'Avg Earning',
        data: [44, 55, 41, 67, 22, 43]
    }, {
        name: 'Total Customer',
        data: [13, 23, 20, 8, 13, 27]
    }, {
        name: 'Total Orders',
        data: [11, 17, 15, 15, 21, 14]
    }]

    const options: any = {
        chart: {
            type: 'bar',
            height: 350,
            stacked: true,
            toolbar: {
                show: false
            },
            zoom: {
                enabled: true
            },
            // toolbar: {
            //     show: false,
            // }
        },
        responsive: [{
            breakpoint: 480,
            options: {
                legend: {
                    position: 'bottom',
                    offsetX: -10,
                    offsetY: 0
                }
            }
        }],
        xaxis: {
            type: 'datetime',
            categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT',
                '01/05/2011 GMT', '01/06/2011 GMT'
            ],
        },
        legend: {
            position: 'right',
            offsetY: 40
        },
        fill: {
            opacity: 1
        },
        colors: AudiencesMetricsChartsColors,
    };

    return (
        <React.Fragment>
            <ReactApexChart series={series} options={options} type="bar" className="apex-charts" height={350} />
        </React.Fragment>
    );
}

const MyPortfolioCharts = ({ dataColors }: any) => {
    const MyPortfolioCharts = getChartColorsArray(dataColors);
    const series: any = [19405, 40552, 15824, 30635]
    const options: any = {
        labels: ["Bitcoin", "Ethereum", "Litecoin", "Dash"],
        chart: {
            type: "donut",
            height: 210,
        },

        plotOptions: {
            pie: {
                size: 100,
                offsetX: 0,
                offsetY: 0,
                donut: {
                    size: "70%",
                    labels: {
                        show: true,
                        name: {
                            show: true,
                            fontSize: '18px',
                            offsetY: -5,
                        },
                        value: {
                            show: true,
                            fontSize: '20px',
                            color: '#343a40',
                            fontWeight: 500,
                            offsetY: 5,
                            formatter: function (val: any) {
                                return "$" + val
                            }
                        },
                        total: {
                            show: true,
                            fontSize: '13px',
                            label: 'Total value',
                            color: '#06283D',
                            fontWeight: 500,
                            formatter: function (w: any) {
                                return "$" + w.globals.seriesTotals.reduce(function (a: any, b: any) {
                                    return a + b
                                }, 0)
                            }
                        }
                    }
                },
            },
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: false,
        },
        yaxis: {
            labels: {
                formatter: function (value: any) {
                    return "$" + value;
                }
            }
        },
        stroke: {
            lineCap: "round",
            width: 2
        },
        colors: MyPortfolioCharts,
    };
    return (
        <React.Fragment>
            <ReactApexChart series={series} options={options} type="donut" className="apex-charts" height={210} />
        </React.Fragment>
    );
}

const TopReferralsPagesCharts = ({ dataColors }: any) => {
    const chartHeatMapColors = getChartColorsArray(dataColors)
    const generateData = (count: any, yrange: any) => {
        var i = 0;
        var series = [];
        while (i < count) {
            var x = 'w' + (i + 1).toString();
            var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

            series.push({
                x: x,
                y: y
            });
            i++;
        }
        return series;
    }
    const series: any = [{
        name: 'Jan',
        data: generateData(20, {
            min: -30,
            max: 55
        })
    },
    {
        name: 'Feb',
        data: generateData(20, {
            min: -30,
            max: 55
        })
    },
    {
        name: 'Mar',
        data: generateData(20, {
            min: -30,
            max: 55
        })
    },
    {
        name: 'Apr',
        data: generateData(20, {
            min: -30,
            max: 55
        })
    },
    {
        name: 'May',
        data: generateData(20, {
            min: -30,
            max: 55
        })
    },
    {
        name: 'Jun',
        data: generateData(20, {
            min: -30,
            max: 55
        })
    },
    {
        name: 'Jul',
        data: generateData(20, {
            min: -30,
            max: 55
        })
    },
    {
        name: 'Aug',
        data: generateData(20, {
            min: -30,
            max: 55
        })
    },
    {
        name: 'Sep',
        data: generateData(20, {
            min: -30,
            max: 55
        })
    }
    ]
    const options: any = {
        chart: {
            height: 310,
            type: 'heatmap',
            toolbar: {
                show: false
            }
        },
        legend: {
            show: false,
        },
        plotOptions: {
            heatmap: {
                shadeIntensity: 0.5,
                radius: 0,
                useFillColorAsStroke: true,
                colorScale: {
                    ranges: [{
                        from: -30,
                        to: 5,
                        name: 'Youtube',
                        color: chartHeatMapColors[0]
                    },
                    {
                        from: 6,
                        to: 20,
                        name: 'Meta',
                        color: chartHeatMapColors[1]
                    },
                    {
                        from: 21,
                        to: 45,
                        name: 'Google',
                        color: chartHeatMapColors[2]
                    },
                    {
                        from: 46,
                        to: 55,
                        name: 'Medium',
                        color: chartHeatMapColors[3]
                    },
                    {
                        from: 36,
                        to: 40,
                        name: 'Other',
                        color: chartHeatMapColors[4]
                    }
                    ]
                }
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: 1
        },
        title: {
            style: {
                fontWeight: 500,
            },
        },
    };
    return (
        <React.Fragment>
            <ReactApexChart series={series} options={options} type="heatmap" className="apex-charts" height={310} />
        </React.Fragment>
    );
}

const IncomeDetailsCharts = ({ dataColors }: any= []) => {
    const IncomeDetailsColors = getChartColorsArray(dataColors)
    const series: any = [{
        name: "Total Income",
        data: [
            8107.85,
            8128.0,
            8122.9,
            8165.5,
            8340.7,
            8423.7,
            8423.5,
            8514.3,
            8481.85,
            8487.7,
            8506.9,
            8626.2,
            8668.95,
            8602.3,
            8607.55,
            8512.9,
            8496.25,
            8600.65,
            8881.1,
            9340.85,
        ]
    }];

    const options: any = {
        chart: {
            type: 'area',
            height: 325,
            offsetX: 0,
            zoom: {
                enabled: false
            },
            sparkline: {
                enabled: true
            },
            toolbar: {
                show: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        labels: [
            "13 Nov 2017",
            "14 Nov 2017",
            "15 Nov 2017",
            "16 Nov 2017",
            "17 Nov 2017",
            "20 Nov 2017",
            "21 Nov 2017",
            "22 Nov 2017",
            "23 Nov 2017",
            "24 Nov 2017",
            "27 Nov 2017",
            "28 Nov 2017",
            "29 Nov 2017",
            "30 Nov 2017",
            "01 Dec 2017",
            "04 Dec 2017",
            "05 Dec 2017",
            "06 Dec 2017",
            "07 Dec 2017",
            "08 Dec 2017",
        ],
        legend: {
            horizontalAlign: 'left'
        },
        colors: IncomeDetailsColors
    };
    return (
        <React.Fragment>
            <ReactApexChart series={series} options={options} type="area" className="apex-charts" height={325} />
        </React.Fragment>
    );
}

export { IncomeBreakdownCharts, SessionsByCountriesCharts, AudiencesMetricsCharts, MyPortfolioCharts, TopReferralsPagesCharts, IncomeDetailsCharts };