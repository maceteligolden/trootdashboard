import React from 'react';
import { Card, Col, Dropdown } from 'react-bootstrap';

import ECharts from 'echarts-for-react';

import getChartColorsArray from '@common/ChartsDynamicColor';

const SalesByCategory = ({ dataColors }: any) => {

    const SalesByCategoryChartsColors = getChartColorsArray(dataColors);
    const series: any = [44, 55, 67, 83];

    const options = {
        polar: {
            radius: [30, '80%']
        },
        angleAxis: {
            max: 120,
            startAngle: 75,
            axisTick: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: "rgba(154, 159, 171, .7)"
                },
            },
        },
        radiusAxis: {
            type: 'category',
            data: ['Fashion', 'Electronics', 'Groceries', 'Others'],
            axisLabel: {
                show: false
            },
        },
        tooltip: {},
        series: {
            type: 'bar',
            data: [{
                value: 44,
                itemStyle: {
                  color: SalesByCategoryChartsColors[0]
                }
              },{
                value: 55,
                itemStyle: {    
                  color: SalesByCategoryChartsColors[1]
                }
              },{
                value: 67,
                itemStyle: {
                  color: SalesByCategoryChartsColors[2]
                }
              },{
                value: 83,
                itemStyle: {
                  color: SalesByCategoryChartsColors[3]
                }
              }],
            coordinateSystem: 'polar',
            label: {
                show: true,
                position: 'middle',
                formatter: '{c}',
                color: '#fff',
            }
        },
        color: SalesByCategoryChartsColors
    };

    return (
        <React.Fragment>
            <Col xl={4}>
                <Card className="card-height-100">
                    <Card.Header className="align-items-center d-flex">
                        <h4 className="card-title mb-0 flex-grow-1">Sales by Category</h4>
                        <div className="flex-shrink-0">
                            <Dropdown className="card-header-dropdown" drop="start">
                                <Dropdown.Toggle as="a" className="text-reset dropdown-btn arrow-none">
                                    <span className="text-muted">Report<i className="mdi mdi-chevron-down ms-1"></i></span>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-menu-end">
                                    <Dropdown.Item href="#">Download Report</Dropdown.Item>
                                    <Dropdown.Item href="#">Export</Dropdown.Item>
                                    <Dropdown.Item href="#">Import</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </Card.Header>

                    <Card.Body>
                        <div id="multiple_radialbar" dir="ltr">
                            <ECharts series={series} option={options}  height={328.7} />
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </React.Fragment>
    );
}

export default SalesByCategory;