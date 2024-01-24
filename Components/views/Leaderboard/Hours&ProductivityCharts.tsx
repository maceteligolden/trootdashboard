import React from 'react';
import dynamic from 'next/dynamic'
import { Card, Col, Dropdown } from 'react-bootstrap';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })
import getChartColorsArray from '@common/ChartsDynamicColor';

const HoursSpentChart = ({ dataColors }: any) => {
    const barchartColors = getChartColorsArray(dataColors);
    const series: any = [{
        data: [7, 11, 15, 20, 18, 23, 20, 23, 21, 19]
    }]

    const options: any = {
        chart: {
            toolbar: {
                show: false,
            },
            height: 170,
            type: 'bar',
        },
        plotOptions: {
            bar: {
                columnWidth: '70%',
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
            categories: ['M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W'],
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
            <ReactApexChart series={series} options={options} type="bar" className="apex-charts" height={170} />
        </React.Fragment>
    );
}

const ProductivityGrowthChart = ({ dataColors }: any) => {
    const ProductivityGrowthChartColors = getChartColorsArray(dataColors)

    const series: any = [44, 55, 67];

    const options: any = {
        chart: {
            height: 260,
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                offsetY: 0,
                startAngle: 0,
                endAngle: 270,
                dataLabels: {
                    name: {
                        show: false,
                    },
                    value: {
                        show: false,
                    }
                },

                hollow: {
                    margin: 4,
                    size: '14%',
                },
                track: {
                    strokeWidth: '60%',
                    opacity: 1,
                    margin: 16,
                },
            }
        },
        stroke: {
            lineCap: 'round'
        },
        colors: ProductivityGrowthChartColors,
        labels: ['Productive', 'Neutral', 'Unproductive'],
        legend: {
            show: true,
            floating: true,
            fontSize: '16px',
            position: 'left',
            offsetX: -24,
            offsetY: 15,
            labels: {
                useSeriesColors: true,
            },
            markers: {
                size: 0
            },
            formatter: function (seriesName: any, opts: any) {
                return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
            },
            itemMargin: {
                vertical: 5
            }
        },
        responsive: [{
            breakpoint: 480,
            options: {
                legend: {
                    show: false
                }
            }
        }]
    };
    return (
        <React.Fragment>
            <ReactApexChart series={series} options={options} type="radialBar" className="apex-charts" height={260} />
        </React.Fragment>
    );
}

const LeaderboardCharts = () => {
    return (
        <React.Fragment>
            <Col xl={4}>
                <div className="d-flex flex-column h-100">
                    <Card className="h-100">
                        <Card.Header className="align-items-center d-flex">
                            <h4 className="card-title mb-0 flex-grow-1">Hours Spent</h4>
                            <div className="flex-shrink-0">
                                <Dropdown className="card-header-dropdown">
                                    <Dropdown.Toggle as="a" className="text-reset dropdown-btn arrow-none">
                                        <span className="fw-semibold text-uppercase fs-12">Sort by:
                                        </span><span className="text-muted"> Today<i className="mdi mdi-chevron-down ms-1"></i></span>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="dropdown-menu-end">
                                        <Dropdown.Item href="#">Today</Dropdown.Item>
                                        <Dropdown.Item href="#">Yesterday</Dropdown.Item>
                                        <Dropdown.Item href="#">Last 7 Days</Dropdown.Item>
                                        <Dropdown.Item href="#">Last 30 Days</Dropdown.Item>
                                        <Dropdown.Item href="#">This Month</Dropdown.Item>
                                        <Dropdown.Item href="#">Last Month</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </Card.Header>

                        <Card.Body className="py-0">
                            <div id="hours_spent_chart" className="apex-chart">
                                <HoursSpentChart dataColors='["--tb-info-rgb, 0.4","--tb-info-rgb, 0.4","--tb-info-rgb, 0.4","--tb-info-rgb, 0.4","--tb-info","--tb-info","--tb-info","--tb-info","--tb-info", "--tb-info"]' />
                            </div>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header className="align-items-center d-flex">
                            <h4 className="card-title mb-0 flex-grow-1">Productivity Growth</h4>
                        </Card.Header>
                        <Card.Body className="py-0">
                            <div id="chart-radialBar" className="apex-charts">
                                <ProductivityGrowthChart dataColors='["--tb-primary", "--tb-danger", "--tb-warning"]' />
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </Col>
        </React.Fragment>
    );
}

export default LeaderboardCharts;