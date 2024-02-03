import React from 'react';
import Link from 'next/link';
import { Row } from 'react-bootstrap';
import { IBreadCrumb, IBreadcrumbProps } from './interfaces';

const Breadcrumb = ({items, pageName}: IBreadcrumbProps) => {
    return (
        <React.Fragment>
            <Row>
                <div className="col-12 mt-5">
                    <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                        <h4 className="mb-sm-0">{pageName}</h4>

                        <div className="page-title-right">
                            <ol className="breadcrumb m-0">
                                {items.map((item: IBreadCrumb) => {
                                    return (
                                        <>
                                            {item.isLink ? 
                                            <li className="breadcrumb-item"><Link href={item.link ? item.link : ""}>{item.label}</Link></li>
                                            :
                                            <li className="breadcrumb-item active">{item.label}</li>
                                            }
                                        </>
                                    )
                                })}
                            </ol>
                        </div>

                    </div>
                </div>
            </Row>
        </React.Fragment>
    );
}

export default Breadcrumb;