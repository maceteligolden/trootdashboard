import React, { useMemo } from 'react';
import { Card, Col, Dropdown } from 'react-bootstrap';

//TableContainer
import TableContainer from "@common/TableContainer";
import { recentOrders } from "@common/data";
import Link from 'next/link';
import Image from 'next/image';

// const CustomToggle = React.forwardRef(
//   (onClick: any, ref: React.Ref<HTMLAnchorElement>) => (
//     <Link
//       href="#"
//       ref={ref}
//       className="text-reset dropdown-btn"
//     >
//       <span className="fw-semibold text-uppercase fs-12">Sort by:</span>
//       <span className="text-muted">Today<i className="mdi mdi-chevron-down ms-1"></i></span>
//     </Link>
//   )
// );

const RecentOrders = () => {

  const columns = useMemo(
    () => [
      {
        Header: "Purchase ID",
        disableFilters: true,
        filterable: true,
        accessor: (cellProps: any) => {
          return <Link href="#!" className="fw-medium link-primary">{cellProps.purchaseID}</Link>;
        },
      },
      {
        Header: "Customer Name",
        accessor: "customerName",
        disableFilters: true,
        filterable: true,
      },
      {
        Header: "Product Name",
        disableFilters: true,
        filterable: true,
        accessor: (cellProps: any) => {
          return (
            <>
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0 me-2">
                  <Image src={cellProps.productImage.src} width="32" height={32} alt="" className="avatar-xs rounded-circle" />
                </div>
                <div className="flex-grow-1">{cellProps.productName}</div>
              </div>
            </>
          );
        },
      },
      {
        Header: "Amount",
        accessor: "amount",
        disableFilters: true,
        filterable: true,
      },
      {
        Header: "Order Date",
        accessor: "orderDate",
        disableFilters: true,
        filterable: true,
      },
      {
        Header: "Vendor",
        accessor: "vendor",
        disableFilters: true,
        filterable: true,
      },
      {
        Header: "Status",
        disableFilters: true,
        filterable: true,
        accessor: (cellProps: any) => {
          switch (cellProps.status) {
            case "Paid":
              return (<span className="badge text-success bg-success-subtle"> {cellProps.status}</span>)
            case "Unpaid":
              return (<span className="badge text-danger  bg-danger-subtle"> {cellProps.status}</span>)
            case "Pending":
              return (<span className="badge text-warning bg-warning-subtle"> {cellProps.status}</span>)
            default:
              return (<span className="badge text-success bg-success-subtle"> {cellProps.status}</span>)
          }
        },


      },
    ],
    []
  );

  return (
    <React.Fragment>
      <Col xl={12}>
        <Card>
          <Card.Header className="align-items-center d-flex mb-n2">
            <h4 className="card-title mb-0 flex-grow-1">Recent Orders</h4>
            <div className="flex-shrink-0">
              <Dropdown className="card-header-dropdown">
                <Dropdown.Toggle variant='link-dark' className="text-reset dropdown-btn arrow-none p-0">
                {/* as={CustomToggle} */}
                  <span className="fw-semibold text-uppercase fs-12">Sort by:</span>
                  <span className="text-muted"> Today<i className="mdi mdi-chevron-down ms-1"></i></span>
                </Dropdown.Toggle>
                <Dropdown.Menu align="end" >
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

          {/* <Card.Body> */}
            <TableContainer
              columns={(columns || [])}
              data={(recentOrders || [])}
              isGlobalFilter={false}
              iscustomPageSize={false}
              isBordered={false}
              customPageSize={6}
              tableClass="table-centered align-middle table-nowrap mb-0"
              theadClass="table-light"
            />
          {/* </Card.Body> */}
        </Card>
      </Col>

    </React.Fragment>
  );
}

export default RecentOrders;