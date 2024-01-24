import React from 'react';
import dynamic from 'next/dynamic'

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })
import getChartColorsArray from '@common/ChartsDynamicColor';

const APIKeyReportChart = ({ dataColors }: any) => {
    const barchartColors = getChartColorsArray(dataColors)

    const series: any = [{
        name: 'API Key',
        data: [7, 11, 15, 20, 18, 23, 20]
    }]

    const options: any = {
        chart: {
            toolbar: {
                show: false,
            },
            height: 90,
            type: 'bar',
            sparkline: {
                enabled: true
            }
        },
        plotOptions: {
            bar: {
                columnWidth: '40%',
                distributed: true,
            }
        },
        dataLabels: {
            enabled: false
        },
        legend: {
            show: false
        },
        colors: barchartColors,
        grid: {
            show: false,
        },
        xaxis: {
            categories: ['Monday', 'Tuesday', 'W', 'T', 'F', 'S', 'S'],
            axisBorder: {
                show: false,
            },
            labels: {
                style: {
                    colors: barchartColors,
                    fontSize: '12px'
                }
            }
        }
    };
    return (
        <React.Fragment>
            <ReactApexChart series={series} options={options} type="bar" className="apex-charts" height={90} />
        </React.Fragment>
    );
}

export default APIKeyReportChart;