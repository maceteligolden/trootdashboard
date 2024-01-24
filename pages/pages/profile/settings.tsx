import React, { ReactElement } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Button, Card, Col, Container, Form, Nav, Row, Tab } from 'react-bootstrap';

import avatar2 from "@assets/images/users/avatar-2.jpg"
import profileImg from "@assets/images/profile-bg.jpg"
import Link from 'next/link';
import Layout from '@common/Layout';

const Settings = () => {
    return (
        <React.Fragment>
            <Head>
                <title>Profile Settings | Hybrix - Admin & Dashboard Template</title>
            </Head>
            <div className="page-content">
                <Container fluid={true}>
                    <Tab.Container defaultActiveKey="personalDetails">
                        <Row>
                            <Col xxl={12}>
                                <Card className="overflow-hidden profile-setting-img">
                                    <div className="profile-user rounded profile-basic" style={{ backgroundImage: `url(${profileImg.src})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                                        <div className="bg-overlay bg-primary"></div>
                                        <div className="p-0 ms-auto rounded-circle profile-photo-edit">
                                            <input id="profile-foreground-img-file-input" type="file" className="profile-foreground-img-file-input d-none" />
                                            <label htmlFor="profile-foreground-img-file-input" className="btn btn-light">
                                                <i className="ri-image-edit-line align-bottom me-1"></i> Change Cover
                                            </label>
                                        </div>
                                    </div>

                                    <Card.Body>
                                        <div className="position-relative mb-3">
                                            <div className="mt-n5">
                                                <Image src={avatar2} alt="" className="avatar-lg rounded-circle p-1 bg-card-custom mt-n4" />
                                            </div>
                                        </div>
                                        <Row className="justify-content-between gy-4">
                                            <Col xl={3} lg={5}>
                                                <div className="border border-dashed p-3 rounded-3">
                                                    <div className="d-flex align-items-center mb-4 pb-1">
                                                        <div className="flex-grow-1">
                                                            <h5 className="card-title mb-0">Complete Your Profile</h5>
                                                        </div>
                                                        <div className="flex-shrink-0">
                                                            <Link scroll={false} href="#" className="badge bg-light text-secondary"><i className="ri-edit-box-line align-bottom me-1"></i> Edit</Link>
                                                        </div>
                                                    </div>
                                                    <div className="progress animated-progress custom-progress progress-label">
                                                        <div className="progress-bar bg-primary" role="progressbar" style={{ width: "30%" }}>
                                                            <div className="label">30%</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="border border-dashed p-3 rounded-3 mt-4">
                                                    <div className="d-flex align-items-center mb-3 pb-1">
                                                        <div className="flex-grow-1">
                                                            <h5 className="card-title mb-0">Skills</h5>
                                                        </div>
                                                        <div className="flex-shrink-0">
                                                            <Link scroll={false} href="#" className="badge bg-light text-secondary"><i className="ri-edit-box-line align-bottom me-1"></i> Edit</Link>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex flex-wrap gap-2 fs-15">
                                                        <Link scroll={false} href="#" className="badge text-info bg-info-subtle">Photoshop</Link>
                                                        <Link scroll={false} href="#" className="badge text-info bg-info-subtle">illustrator</Link>
                                                        <Link scroll={false} href="#" className="badge text-info bg-info-subtle">HTML</Link>
                                                        <Link scroll={false} href="#" className="badge text-info bg-info-subtle">CSS</Link>
                                                        <Link scroll={false} href="#" className="badge text-info bg-info-subtle">Javascript</Link>
                                                        <Link scroll={false} href="#" className="badge text-info bg-info-subtle">Php</Link>
                                                        <Link scroll={false} href="#" className="badge text-info bg-info-subtle">Python</Link>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xl={3} lg={5}>
                                                <div>
                                                    <div className="d-flex align-items-center mb-4">
                                                        <div className="flex-grow-1">
                                                            <h5 className="card-title mb-0">Portfolio</h5>
                                                        </div>
                                                        <div className="flex-shrink-0">
                                                            <Link scroll={false} href="#" className="badge bg-light text-primary fs-12"><i className="ri-add-fill align-bottom me-1"></i> Add</Link>
                                                        </div>
                                                    </div>
                                                    <div className="mb-3 d-flex">
                                                        <div className="avatar-xs d-block flex-shrink-0 me-3">
                                                            <span className="avatar-title rounded-circle fs-16 bg-dark text-white">
                                                                <i className="ri-github-fill"></i>
                                                            </span>
                                                        </div>
                                                        <input type="email" className="form-control" id="gitUsername" placeholder="Username" defaultValue="@edwarddiana" />
                                                    </div>
                                                    <div className="mb-3 d-flex">
                                                        <div className="avatar-xs d-block flex-shrink-0 me-3">
                                                            <span className="avatar-title rounded-circle fs-16 bg-primary">
                                                                <i className="ri-global-fill"></i>
                                                            </span>
                                                        </div>
                                                        <input type="text" className="form-control" id="websiteInput" placeholder="www.example.com" defaultValue="www.themesbrand.com" />
                                                    </div>
                                                    <div className="mb-3 d-flex">
                                                        <div className="avatar-xs d-block flex-shrink-0 me-3">
                                                            <span className="avatar-title rounded-circle fs-16 bg-success">
                                                                <i className="ri-dribbble-fill"></i>
                                                            </span>
                                                        </div>
                                                        <input type="text" className="form-control" id="dribbleName" placeholder="Username" defaultValue="@edward_diana" />
                                                    </div>
                                                    <div className="d-flex">
                                                        <div className="avatar-xs d-block flex-shrink-0 me-3">
                                                            <span className="avatar-title rounded-circle fs-16 bg-danger">
                                                                <i className="ri-pinterest-fill"></i>
                                                            </span>
                                                        </div>
                                                        <input type="text" className="form-control" id="pinterestName" placeholder="Username" defaultValue="Edward Diana" />
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>

                                        <Row className="align-items-center mt-3 gy-3">
                                            <Col md className="order-1">
                                                <Nav as="ul" variant="pills" className="animation-nav gap-2 gap-lg-3 flex-grow-1">
                                                    <Nav.Item as="li">
                                                        <Nav.Link className="fs-14" eventKey="personalDetails"><i className="ri-airplay-fill d-inline-block d-md-none"></i> <span className="d-none d-md-inline-block">Personal Details</span></Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item as="li">
                                                        <Nav.Link className="fs-14" eventKey="changePassword"><i className="ri-list-unordered d-inline-block d-md-none"></i> <span className="d-none d-md-inline-block">Changes Password</span></Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item as="li">
                                                        <Nav.Link className="fs-14" eventKey="experience"> <i className="ri-price-tag-line d-inline-block d-md-none"></i> <span className="d-none d-md-inline-block">Experience</span> </Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item as="li">
                                                        <Nav.Link className="fs-14" eventKey="privacy"><i className="ri-folder-4-line d-inline-block d-md-none"></i> <span className="d-none d-md-inline-block">Privacy Policy</span></Nav.Link>
                                                    </Nav.Item>
                                                </Nav>
                                            </Col>
                                            <Col md={{ span: "auto", order: 2 }}>
                                                <div className="flex-shrink-0">
                                                    <Link href="/pages/profile/settings" className="btn btn-secondary"><i className="ri-edit-box-line align-bottom"></i> Edit Profile</Link>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>

                        <Row>

                            <Col xxl={12}>
                                <Card>
                                    <Card.Body className="p-4">
                                        <Tab.Content>
                                            <Tab.Pane eventKey="personalDetails" title="personalDetails">
                                                <form action="#">
                                                    <Row>
                                                        <Col lg={6}>
                                                            <div className="mb-3">
                                                                <label htmlFor="firstnameInput" className="form-label">First Name</label>
                                                                <input type="text" className="form-control" id="firstnameInput" placeholder="Enter your firstname" defaultValue="Edward" />
                                                            </div>
                                                        </Col>

                                                        <Col lg={6}>
                                                            <div className="mb-3">
                                                                <label htmlFor="lastnameInput" className="form-label">Last Name</label>
                                                                <input type="text" className="form-control" id="lastnameInput" placeholder="Enter your lastname" defaultValue="Diana" />
                                                            </div>
                                                        </Col>

                                                        <Col lg={6}>
                                                            <div className="mb-3">
                                                                <label htmlFor="phonenumberInput" className="form-label">Phone Number</label>
                                                                <input type="text" className="form-control" id="phonenumberInput" placeholder="Enter your phone number" defaultValue="+(254) 25462 32145" />
                                                            </div>
                                                        </Col>

                                                        <Col lg={6}>
                                                            <div className="mb-3">
                                                                <label htmlFor="emailInput" className="form-label">Email Address</label>
                                                                <input type="email" className="form-control" id="emailInput" placeholder="Enter your email" defaultValue="edwarddiana@hybrix.com" />
                                                            </div>
                                                        </Col>

                                                        <Col lg={12}>
                                                            <div className="mb-3">
                                                                <label htmlFor="JoiningdatInput" className="form-label">Joining Date</label>
                                                                <input type="text" className="form-control" data-provider="flatpickr" id="JoiningdatInput" data-date-format="d M, Y" data-deafult-date="24 Nov, 2021" placeholder="Select date" />
                                                            </div>
                                                        </Col>

                                                        <Col lg={12}>
                                                            <div className="mb-3">
                                                                <Form.Label htmlFor="skillsInput" >Skills</Form.Label>
                                                                <Form.Select  >
                                                                    <option >Javascript</option>
                                                                    <option value="illustrator">Illustrator</option>
                                                                    <option value="photoshop">Photoshop</option>
                                                                    <option value="css">CSS</option>
                                                                    <option value="html">HTML</option>
                                                                    <option value="python">Python</option>
                                                                    <option value="php">PHP</option>
                                                                </Form.Select>
                                                            </div>
                                                        </Col>

                                                        <Col lg={6}>
                                                            <div className="mb-3">
                                                                <label htmlFor="designationInput" className="form-label">Designation</label>
                                                                <input type="text" className="form-control" id="designationInput" placeholder="Designation" defaultValue="Lead Designer / Developer" />
                                                            </div>
                                                        </Col>

                                                        <Col lg={6}>
                                                            <div className="mb-3">
                                                                <label htmlFor="websiteInput1" className="form-label">Website</label>
                                                                <input type="text" className="form-control" id="websiteInput1" placeholder="www.example.com" defaultValue="www.themesbrand.com" />
                                                            </div>
                                                        </Col>

                                                        <Col lg={4}>
                                                            <div className="mb-3">
                                                                <label htmlFor="cityInput" className="form-label">City</label>
                                                                <input type="text" className="form-control" id="cityInput" placeholder="City" defaultValue="Phoenix" />
                                                            </div>
                                                        </Col>

                                                        <Col lg={4}>
                                                            <div className="mb-3">
                                                                <label htmlFor="countryInput" className="form-label">Country</label>
                                                                <input type="text" className="form-control" id="countryInput" placeholder="Country" defaultValue="USA" />
                                                            </div>
                                                        </Col>

                                                        <Col lg={4}>
                                                            <div className="mb-3">
                                                                <label htmlFor="zipcodeInput" className="form-label">Zip Code</label>
                                                                <input type="text" className="form-control" minLength={5} maxLength={6} id="zipcodeInput" placeholder="Enter zipcode" defaultValue="00012" />
                                                            </div>
                                                        </Col>

                                                        <Col lg={12}>
                                                            <div className="mb-3 pb-2">
                                                                <label htmlFor="exampleFormControlTextarea" className="form-label">Description</label>
                                                                <textarea className="form-control" id="exampleFormControlTextarea" placeholder="Enter your description" rows={3} defaultValue="Hi I'm Edward Diana,It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is European languages are members of the same family." />
                                                            </div>
                                                        </Col>

                                                        <Col lg={12}>
                                                            <div className="hstack gap-2 justify-content-end">
                                                                <Button variant='primary' type="submit">Updates</Button>
                                                                <Button variant='soft-success' type="button">Cancel</Button>
                                                            </div>
                                                        </Col>

                                                    </Row>

                                                </form>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="changePassword" title="changePassword">
                                                <form action="#">
                                                    <Row className="g-2 justify-content-lg-between align-items-center">
                                                        <Col lg={4}>
                                                            <div>
                                                                <label htmlFor="oldpasswordInput" className="form-label">Old Password*</label>
                                                                <div className="position-relative">
                                                                    <input type="password" className="form-control" id="oldpasswordInput" placeholder="Enter current password" />
                                                                    <button className="btn btn-link position-absolute top-0 end-0 text-decoration-none text-muted password-addon" type="button" id="password-addon"><i className="ri-eye-fill align-middle"></i></button>

                                                                </div>
                                                            </div>
                                                        </Col>

                                                        <Col lg={4}>
                                                            <div className="auth-pass-inputgroup">
                                                                <label htmlFor="password-input" className="form-label">New Password*</label>
                                                                <div className="position-relative">
                                                                    <input type="password" className="form-control password-input" id="password-input" placeholder="Enter new password" aria-describedby="passwordInput" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required />
                                                                    <button className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted password-addon" type="button" id="password-addon"><i className="ri-eye-fill align-middle"></i></button>
                                                                </div>

                                                            </div>
                                                        </Col>

                                                        <Col lg={4}>
                                                            <div className="auth-pass-inputgroup">
                                                                <label htmlFor="confirm-password-input" className="form-label">Confirm Password*</label>
                                                                <div className="position-relative">
                                                                    <input type="password" className="form-control password-input" id="confirm-password-input" placeholder="Confirm password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required />
                                                                    <button className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted password-addon" type="button" id="confirm-password-input"><i className="ri-eye-fill align-middle"></i></button>
                                                                </div>

                                                            </div>
                                                        </Col>
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <Link scroll={false} href="#" className="link-primary text-decoration-underline">Forgot Password ?</Link>
                                                            <div className="">

                                                                <Button variant='success' type="submit">Change Password</Button>
                                                            </div>
                                                        </div>



                                                        <Col lg={12}>
                                                            <Card className="bg-light passwd-bg" id="password-contain">
                                                                <Card.Body>
                                                                    <div className="mb-4">
                                                                        <h5 className="fs-13">Password must contain:</h5>
                                                                    </div>
                                                                    <div className="">
                                                                        <p id="pass-length" className="invalid fs-12 mb-2">Minimum <b>8 characters</b></p>
                                                                        <p id="pass-lower" className="invalid fs-12 mb-2">At <b>lowercase</b> letter (a-z)</p>
                                                                        <p id="pass-upper" className="invalid fs-12 mb-2">At least <b>uppercase</b> letter (A-Z)</p>
                                                                        <p id="pass-number" className="invalid fs-12 mb-0">A least <b>number</b> (0-9)</p>

                                                                    </div>
                                                                </Card.Body>
                                                            </Card>

                                                        </Col>
                                                    </Row>

                                                </form>
                                                <div className="mt-4 mb-4 pb-3 border-bottom d-flex justify-content-between align-items-center">
                                                    <h5 className="card-title">Login History</h5>
                                                    <div className="">
                                                        <Link scroll={false} href="#" className="btn btn-secondary">All Logout</Link>
                                                    </div>
                                                </div>

                                                <Row>
                                                    <Col lg={12}>
                                                        <div className="table-responsive">
                                                            <table className="table table-borderless align-middle mb-0">
                                                                <thead className="table-light">
                                                                    <tr>
                                                                        <th scope="col">Mobile</th>
                                                                        <th scope="col">IP Address</th>
                                                                        <th scope="col">Date</th>
                                                                        <th scope="col">Address</th>
                                                                        <th scope="col"><i className="ri-logout-box-r-line"></i></th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td><i className="ri-smartphone-line me-2"></i>iPhone 12 Pro</td>
                                                                        <td>192.44.234.160</td>
                                                                        <td>12/12/2022</td>
                                                                        <td>Los Angeles, United States</td>
                                                                        <td><Link scroll={false} href="#">Logout</Link></td>

                                                                    </tr>

                                                                    <tr>
                                                                        <td><i className="ri-tablet-line me-2"></i>Apple iPad Pro</td>
                                                                        <td>192.44.234.162</td>
                                                                        <td>9/01/2022</td>
                                                                        <td>Phoenix, United States</td>
                                                                        <td><Link scroll={false} href="#">Logout</Link></td>
                                                                    </tr>

                                                                    <tr>
                                                                        <td><i className="ri-smartphone-line me-2"></i>Galaxy S21 Ultra 5G</td>
                                                                        <td>192.45.234.160</td>
                                                                        <td>25/02/2022</td>
                                                                        <td>Washington, United States</td>
                                                                        <td><Link scroll={false} href="#">Logout</Link></td>
                                                                    </tr>

                                                                    <tr>
                                                                        <td><i className="ri-macbook-line me-2"></i>Dell Inspiron 14</td>
                                                                        <td>192.40.234.160</td>
                                                                        <td>16/09/2022</td>
                                                                        <td>Phoenix, United States</td>
                                                                        <td><Link scroll={false} href="#">Logout</Link></td>
                                                                    </tr>

                                                                    <tr>
                                                                        <td><i className="ri-smartphone-line me-2"></i>iPhone 12 Pro</td>
                                                                        <td>192.44.236.160</td>
                                                                        <td>22/01/2022</td>
                                                                        <td>Conneticut, United States</td>
                                                                        <td><Link scroll={false} href="#">Logout</Link></td>

                                                                    </tr>

                                                                    <tr>
                                                                        <td><i className="ri-tablet-line me-2"></i>Apple iPad Pro</td>
                                                                        <td>190.44.234.160</td>
                                                                        <td>19/06/2022</td>
                                                                        <td>Los Angeles, United States</td>
                                                                        <td><Link scroll={false} href="#">Logout</Link></td>

                                                                    </tr>

                                                                    <tr>
                                                                        <td><i className="ri-smartphone-line me-2"></i>Galaxy S21 Ultra 5G</td>
                                                                        <td>194.44.235.160</td>
                                                                        <td>30/08/2022</td>
                                                                        <td>Conneticut, United States</td>
                                                                        <td><Link scroll={false} href="#">Logout</Link></td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="experience" title="experience">
                                                <form>
                                                    <div id="newlink">
                                                        <div id="1">
                                                            <Row>
                                                                <Col lg={12}>
                                                                    <div className="mb-3">
                                                                        <label htmlFor="jobTitle" className="form-label">Job Title</label>
                                                                        <input type="text" className="form-control" id="jobTitle" placeholder="Job title" defaultValue="Lead Designer / Developer" />
                                                                    </div>
                                                                </Col>

                                                                <Col lg={6}>
                                                                    <div className="mb-3">
                                                                        <label htmlFor="companyName" className="form-label">Company Name</label>
                                                                        <input type="text" className="form-control" id="companyName" placeholder="Company name" defaultValue="Themesbrand" />
                                                                    </div>
                                                                </Col>

                                                                <Col lg={6}>
                                                                    <div className="mb-3">
                                                                        <label htmlFor="experienceYear" className="form-label">Experience Years</label>
                                                                        <Row>
                                                                            <Col lg={5}>
                                                                                <Form.Select className="form-control" data-choices name="experienceYear" id="experienceYear" defaultValue={'Choice 17'}>
                                                                                    <option value="">Select years</option>
                                                                                    <option value="Choice 1">2001</option>
                                                                                    <option value="Choice 2">2002</option>
                                                                                    <option value="Choice 3">2003</option>
                                                                                    <option value="Choice 4">2004</option>
                                                                                    <option value="Choice 5">2005</option>
                                                                                    <option value="Choice 6">2006</option>
                                                                                    <option value="Choice 7">2007</option>
                                                                                    <option value="Choice 8">2008</option>
                                                                                    <option value="Choice 9">2009</option>
                                                                                    <option value="Choice 10">2010</option>
                                                                                    <option value="Choice 11">2011</option>
                                                                                    <option value="Choice 12">2012</option>
                                                                                    <option value="Choice 13">2013</option>
                                                                                    <option value="Choice 14">2014</option>
                                                                                    <option value="Choice 15">2015</option>
                                                                                    <option value="Choice 16">2016</option>
                                                                                    <option value="Choice 17">2017</option>
                                                                                    <option value="Choice 18">2018</option>
                                                                                    <option value="Choice 19">2019</option>
                                                                                    <option value="Choice 20">2020</option>
                                                                                    <option value="Choice 21">2021</option>
                                                                                    <option value="Choice 22">2022</option>
                                                                                </Form.Select>
                                                                            </Col>

                                                                            <div className="col-auto align-self-center">
                                                                                to
                                                                            </div>

                                                                            <Col lg={5}>
                                                                                <Form.Select className="form-control" data-choices name="choices-single-default2" defaultValue={'Choice 20'}>
                                                                                    <option value="">Select years</option>
                                                                                    <option value="Choice 1">2001</option>
                                                                                    <option value="Choice 2">2002</option>
                                                                                    <option value="Choice 3">2003</option>
                                                                                    <option value="Choice 4">2004</option>
                                                                                    <option value="Choice 5">2005</option>
                                                                                    <option value="Choice 6">2006</option>
                                                                                    <option value="Choice 7">2007</option>
                                                                                    <option value="Choice 8">2008</option>
                                                                                    <option value="Choice 9">2009</option>
                                                                                    <option value="Choice 10">2010</option>
                                                                                    <option value="Choice 11">2011</option>
                                                                                    <option value="Choice 12">2012</option>
                                                                                    <option value="Choice 13">2013</option>
                                                                                    <option value="Choice 14">2014</option>
                                                                                    <option value="Choice 15">2015</option>
                                                                                    <option value="Choice 16">2016</option>
                                                                                    <option value="Choice 17">2017</option>
                                                                                    <option value="Choice 18">2018</option>
                                                                                    <option value="Choice 19">2019</option>
                                                                                    <option value="Choice 20">2020</option>
                                                                                    <option value="Choice 21">2021</option>
                                                                                    <option value="Choice 22">2022</option>
                                                                                </Form.Select>
                                                                            </Col>

                                                                        </Row>

                                                                    </div>
                                                                </Col>

                                                                <Col lg={12}>
                                                                    <div className="mb-3">
                                                                        <label htmlFor="jobDescription" className="form-label">Job Description</label>
                                                                        <textarea className="form-control" id="jobDescription" rows={3} placeholder="Enter description" defaultValue="You always want to make sure that your fonts work well together and try to limit the number of fonts you use to three or less. Experiment and play around with the fonts that you already have in the software you're working with reputable font websites." />
                                                                    </div>
                                                                </Col>

                                                                <div className="hstack gap-2 justify-content-end">
                                                                    <Link scroll={false} className="btn btn-success" href="#">Delete</Link>
                                                                </div>
                                                            </Row>

                                                        </div>
                                                    </div>
                                                    <div id="newForm" style={{ display: "none" }}>

                                                    </div>
                                                    <Col lg={12}>
                                                        <div className="hstack gap-2">
                                                            <Button variant='success' type="submit">Update</Button>
                                                            <Link scroll={false} href="#" className="btn btn-primary">Add New</Link>
                                                        </div>
                                                    </Col>

                                                </form>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="privacy" title="privacy">
                                                <div className="mb-4 pb-2">
                                                    <h5 className="card-title text-decoration-underline mb-3">Security:</h5>
                                                    <div className="d-flex flex-column flex-sm-row mb-4 mb-sm-0">
                                                        <div className="flex-grow-1">
                                                            <h6 className="fs-14 mb-1">Two-factor Authentication</h6>
                                                            <p className="text-muted">Two-factor authentication is an enhanced security meansur. Once enabled, you'll be required to give two types of identification when you log into Google Authentication and SMS are Supported.</p>
                                                        </div>
                                                        <div className="flex-shrink-0 ms-sm-3">
                                                            <Link scroll={false} href="#" className="btn btn-sm btn-primary">Enable Two-facor Authentication</Link>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex flex-column flex-sm-row mb-4 mb-sm-0 mt-2">
                                                        <div className="flex-grow-1">
                                                            <h6 className="fs-14 mb-1">Secondary Verification</h6>
                                                            <p className="text-muted">The first factor is a password and the second commonly includes a text with a code sent to your smartphone, or biometrics using your fingerprint, face, or retina.</p>
                                                        </div>
                                                        <div className="flex-shrink-0 ms-sm-3">
                                                            <Link scroll={false} href="#" className="btn btn-sm btn-primary">Set up secondary method</Link>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex flex-column flex-sm-row mb-4 mb-sm-0 mt-2">
                                                        <div className="flex-grow-1">
                                                            <h6 className="fs-14 mb-1">Backup Codes</h6>
                                                            <p className="text-muted mb-sm-0">A backup code is automatically generated for you when you turn on two-factor authentication through your iOS or Android Twitter app. You can also generate a backup code on twitter.com.</p>
                                                        </div>
                                                        <div className="flex-shrink-0 ms-sm-3">
                                                            <Link scroll={false} href="#" className="btn btn-sm btn-primary">Generate backup codes</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mb-3">
                                                    <h5 className="card-title text-decoration-underline mb-3">Application Notifications:</h5>
                                                    <ul className="list-unstyled mb-0">
                                                        <li className="d-flex">
                                                            <div className="flex-grow-1">
                                                                <label htmlFor="directMessage" className="form-check-label fs-14">Direct messages</label>
                                                                <p className="text-muted">Messages from people you follow</p>
                                                            </div>
                                                            <div className="flex-shrink-0">
                                                                <div className="form-check form-switch">
                                                                    <input className="form-check-input" type="checkbox" role="switch" id="directMessage" defaultChecked />
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="d-flex mt-2">
                                                            <div className="flex-grow-1">
                                                                <label className="form-check-label fs-14" htmlFor="desktopNotification">
                                                                    Show desktop notifications
                                                                </label>
                                                                <p className="text-muted">Choose the option you want as your default setting. Block a site: Next to "Not allowed to send notifications," click Add.</p>
                                                            </div>
                                                            <div className="flex-shrink-0">
                                                                <div className="form-check form-switch">
                                                                    <input className="form-check-input" type="checkbox" role="switch" id="desktopNotification" defaultChecked />
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="d-flex mt-2">
                                                            <div className="flex-grow-1">
                                                                <label className="form-check-label fs-14" htmlFor="emailNotification">
                                                                    Show email notifications
                                                                </label>
                                                                <p className="text-muted"> Under Settings, choose Notifications. Under Select an account, choose the account to enable notifications for. </p>
                                                            </div>
                                                            <div className="flex-shrink-0">
                                                                <div className="form-check form-switch">
                                                                    <input className="form-check-input" type="checkbox" role="switch" id="emailNotification" />
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="d-flex mt-2">
                                                            <div className="flex-grow-1">
                                                                <label className="form-check-label fs-14" htmlFor="chatNotification">
                                                                    Show chat notifications
                                                                </label>
                                                                <p className="text-muted">To prevent duplicate mobile notifications from the Gmail and Chat apps, in settings, turn off Chat notifications.</p>
                                                            </div>
                                                            <div className="flex-shrink-0">
                                                                <div className="form-check form-switch">
                                                                    <input className="form-check-input" type="checkbox" role="switch" id="chatNotification" />
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="d-flex mt-2">
                                                            <div className="flex-grow-1">
                                                                <label className="form-check-label fs-14" htmlFor="purchaesNotification">
                                                                    Show purchase notifications
                                                                </label>
                                                                <p className="text-muted">Get real-time purchase alerts to protect yourself from fraudulent charges.</p>
                                                            </div>
                                                            <div className="flex-shrink-0">
                                                                <div className="form-check form-switch">
                                                                    <input className="form-check-input" type="checkbox" role="switch" id="purchaesNotification" />
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h5 className="card-title text-decoration-underline mb-3">Delete This Account:</h5>
                                                    <p className="text-muted">Go to the Data & Privacy section of your profile Account. Scroll to "Your data & privacy options." Delete your Profile Account. Follow the instructions to delete your account :</p>
                                                    <div>
                                                        <input type="password" className="form-control" id="passwordInput" placeholder="Enter your password" defaultValue="make@321654987" style={{ maxWidth: "265px" }} />
                                                    </div>
                                                    <div className="hstack gap-2 mt-3">
                                                        <Link scroll={false} href="#" className="btn btn-soft-danger">Close & Delete This Account</Link>
                                                        <Link scroll={false} href="#" className="btn btn-light">Cancel</Link>
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Card.Body>
                                </Card>
                            </Col>

                        </Row>
                    </Tab.Container>
                </Container>
            </div>
        </React.Fragment >
    );
}

Settings.getLayout = (page: ReactElement) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
};

export default Settings;