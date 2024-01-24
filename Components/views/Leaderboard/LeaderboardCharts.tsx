import React from 'react';
import dynamic from 'next/dynamic'

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })
import getChartColorsArray from '@common/ChartsDynamicColor';

const WidgetsCharts = ({ dataColors }: any) => {
    const WidgetsChartsColors = getChartColorsArray(dataColors)
    const series: any = [{
        data: [7, 22, 11, 21, 17, 25]
    }];

    const options: any = {
        chart: {
            type: 'line',
            width: 48,
            height: 34,
            sparkline: {
                enabled: true
            }
        },
        colors: WidgetsChartsColors,
        stroke: {
            width: 2.2,
        },
        tooltip: {
            fixed: {
                enabled: false
            },
            x: {
                show: false
            },
            marker: {
                show: false
            }
        }
    };;

    return (
        <React.Fragment>
            <ReactApexChart series={series} options={options} type="line" className="apex-charts" height={34} />
        </React.Fragment>
    );
}

const EmployeesWidgetsCharts = (props: any) => {
    const EmployeesWidgetsChartsColors = getChartColorsArray(props.dataColors)
    const series: any = [{
        data: props.data
    }];

    const options: any = {

        chart: {
            type: 'line',
            width: 80,
            height: 40,
            sparkline: {
                enabled: true
            }
        },
        colors: EmployeesWidgetsChartsColors,
        stroke: {
            curve: 'smooth',
            width: 2.2,
        },
        tooltip: {
            fixed: {
                enabled: false
            },
            x: {
                show: false
            },
            marker: {
                show: false
            }
        }
    };

    return (
        <React.Fragment>
            <ReactApexChart series={series} options={options} type="line" className="apex-charts" height={40} />
        </React.Fragment>
    );
}

const EmployeesTableCharts = (props: any) => {
    const series: any = [{
        data: props.data
    }];

    const options: any = {
        chart: {
            type: 'line',
            width: 80,
            height: 30,
            sparkline: {
                enabled: true
            }
        },
        colors: ["#438eff"],
        stroke: {
            curve: 'smooth',
            width: 2.2,
        },
        tooltip: {
            fixed: {
                enabled: false
            },
            x: {
                show: false
            },
            marker: {
                show: false
            }
        }
    };

    return (
        <React.Fragment>
            <ReactApexChart series={series} options={options} type="line" className="apex-charts" width={80} height={30} />
        </React.Fragment>
    );
}

export { WidgetsCharts, EmployeesWidgetsCharts, EmployeesTableCharts }