import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import CountUp from "react-countup";

import dynamic from 'next/dynamic'
import { useDispatch, useSelector } from 'react-redux';

import { getChartData as getChartApiData } from 'Components/slices/thunk';

import getChartColorsArray from '@common/ChartsDynamicColor';
import ECharts from 'echarts-for-react';
import { createSelector } from 'reselect';

const Revenue = ({ dataColors }: any) => {
    const revenueChartsColors = getChartColorsArray(dataColors)
    const series: any = [{
        name: "Orders", type: "line", data: [34, 65, 46, 68, 49, 61, 42, 44, 78, 52, 63, 67],   
        areaStyle: {
            opacity: 0.03,
        },
        lineStyle: {
            width: 2,
        },
        itemStyle: {
            borderWidth: 2,
        },
    }];

    const options = {
        grid: {
            left: '4%',
            right: '4%',
            bottom: '12%',
            top: '4%',
            containLabel: true
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },
        toolbox: {
            show: false
        },
        legend: {
            bottom: 10,
            data: ['Orders', 'Earnings', 'Refunds']
        },
        color: revenueChartsColors,
        xAxis: [
            {
                type: 'category',
                data: ["Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                ],
                axisPointer: {
                    type: 'shadow'
                },
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                },
            }
        ],
        yAxis: [
            {
                type: 'value',
                min: 0,
                max: 120,
                interval: 30,
                splitLine: {
                    show: false
                }
            }
        ],
        series: [
            {
                name: 'Orders',
                type: 'line',
                areaStyle: {
                    opacity: 0.5,
                },
                symbol: 'none',
                data: [34, 65, 46, 68, 49, 61, 42, 44, 78, 52, 63, 67],

            },
            {
                name: 'Earnings',
                type: 'bar',
                barWidth: '24%',
                data: [
                    89.25, 98.58, 68.74, 108.87, 77.54, 84.03, 51.24, 28.57, 92.57, 42.36,
                    88.51, 36.57,
                ],
            },
            {
                name: 'Refunds',
                type: 'line',
                symbol: 'none',
                lineStyle: {
                    type: 'dashed'
                },
                data: [8, 12, 7, 17, 21, 11, 5, 9, 7, 29, 12, 35],
            }
        ]
    };

    const dispatch: any = useDispatch();

    const [chartData, setchartData] = useState<any>([]);

    const [activeChart, setactiveChart] = useState<string>("yearly");

    const selectDashboardData = createSelector(
        (state: any) => state.Dashboard,
        (chartData) => chartData
    );
    // Inside your component
    const revenueChartData = useSelector(selectDashboardData);

    useEffect(() => {
        setchartData(revenueChartData);
    }, [revenueChartData]);

    const onChangeChartPeriod = (pType: any) => {
        dispatch(getChartApiData(pType));
        setactiveChart(pType)
    };

    useEffect(() => {
        dispatch(getChartApiData("yearly"));
        setactiveChart("yearly")
    }, [dispatch]);

    return (
        <React.Fragment>
            <Col xl={8}>
                <Card>
                    <Card.Header className="border-0 align-items-center d-flex">
                        <h4 className="card-title mb-0 flex-grow-1">Revenue</h4>
                        <div>
                            <Button size='sm' variant={activeChart === "all" ? 'secondary' : 'soft-secondary'} type="button" className="me-1" onClick={() => onChangeChartPeriod("all")}>
                                ALL
                            </Button>
                            <Button size='sm' variant={activeChart === "monthly" ? 'secondary' : 'soft-secondary'} type="button" className="me-1" onClick={() => onChangeChartPeriod("monthly")}>
                                1M
                            </Button>
                            <Button size='sm' variant={activeChart === "halfyearly" ? 'secondary' : 'soft-secondary'} type="button" className="me-1" onClick={() => onChangeChartPeriod("halfyearly")}>
                                6M
                            </Button>
                            <Button size='sm' variant={activeChart === "yearly" ? 'secondary' : 'soft-secondary'} type="button" onClick={() => onChangeChartPeriod("yearly")}>
                                1Y
                            </Button>
                        </div>
                    </Card.Header>

                    <Card.Header className="p-0 border-0 bg-light-subtle">
                        <Row className="g-0 text-center">
                            <Col xs={6} sm={3}>
                                <div className="p-3 border border-dashed border-start-0">
                                    <h5 className="mb-1">
                                        <CountUp start={0} end={7585} duration={3}/>
                                    </h5>
                                    <p className="text-muted mb-0">Orders</p>
                                </div>
                            </Col>

                            <Col xs={6} sm={3}>
                                <div className="p-3 border border-dashed border-start-0">
                                    <h5 className="mb-1">
                                        <CountUp start={0} end={2289} duration={3} decimals={2} prefix='$' suffix='k'/>
                                    </h5>
                                    <p className="text-muted mb-0">Earnings</p>
                                </div>
                            </Col>

                            <Col xs={6} sm={3}>
                                <div className="p-3 border border-dashed border-start-0">
                                    <h5 className="mb-1">
                                        <CountUp start={0} end={367} duration={3}/>
                                    </h5>
                                    <p className="text-muted mb-0">Refunds</p>
                                </div>
                            </Col>

                            <Col xs={6} sm={3}>
                                <div className="p-3 border border-dashed border-start-0 border-end-0">
                                    <h5 className="mb-1 text-success">
                                        <CountUp start={0} end={1892} duration={3} decimals={2} suffix='%'/>
                                        </h5>
                                    <p className="text-muted mb-0">Conversation Ratio</p>
                                </div>
                            </Col>
                        </Row>
                    </Card.Header>

                    <Card.Body className="p-0">
                        <div className="w-100">
                            <div id="revenue-chart" dir="ltr">
                                <ECharts option={options} series={series} />
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </React.Fragment>
    );
}

export default Revenue;

