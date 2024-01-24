import React, { useState } from 'react';
import Head from 'next/head';
import { Alert, Button, Card, Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import Image from 'next/image';
import authEffect2 from "@assets/images/effect-pattern/auth-effect-2.png";
import authEffect from "@assets/images/effect-pattern/auth-effect.png";
import NonAuthLayout from '@common/Layout/NonAuthLayout';
import useLogin from 'hook/useLogin';
import ILogin from 'lib/services/interface/auth.interface';
import useAuthentication from 'hook/useAuthentication';

const Login = () => {
  
    const [passwordtype, setPasswordtype] = useState<boolean>(true);
    const [formData, setFormData] = useState<ILogin>({
        email: "",
        password: ""
    });

    const { validation, loading, error, isError } = useLogin();

    const router = useRouter();

    useEffect(() => {
        // Check if the user is authenticated
        if (!user) {
        router.push('/login');
        }
    }, [user]);

    if (!user) {
        // You can also display a loading spinner or a message while checking authentication
        return <p>Loading...</p>;
    }

    return (
        <React.Fragment>
            <Head>
                <title>Login | Trootfindr</title>
            </Head>
            <section className="auth-page-wrapper py-5 position-relative d-flex align-items-center justify-content-center min-vh-100 bg-light">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <Card.Body>
                                    <Row className="g-0">
                                        <Col lg={5} className={'lg:hidden flex'}>
                                            <Card className="auth-card bg-primary h-100 border-0 shadow-none p-sm-3 overflow-hidden mb-0">
                                                <Card.Body className="p-4 d-flex justify-content-between flex-column">
                                                    <div className="auth-image mb-3">
                                                        {/** TODO: add trootfindr logo here */}
                                                        {/* <Image src={logoLightFull} alt="" height="26" /> */}
                                                        <Image src={authEffect2} alt="" className="auth-effect-2" priority />
                                                        <Image src={authEffect} alt="" className="auth-effect" />
                                                        <Image src={authEffect} alt="" className="auth-effect-3" />
                                                    </div>

                                                    <div>
                                                        <h3 className="text-white"></h3>
                                                        <p className="text-white-75 fs-15"></p>
                                                    </div>
                                                    <div className="text-center text-white-75">
                                                        <p className="mb-0">©
                                                            {new Date().getFullYear()}{" "}
                                                            Trootfindr
                                                        </p>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>

                                        <Col lg={7}>
                                            <Card className="mb-0 border-0 shadow-none">
                                                <Card.Body className="px-0 p-sm-5 m-lg-4">
                                                    <div className="text-center mt-2">
                                                        <h5 className="text-primary fs-20">Welcome Back !</h5>
                                                        <p className="text-muted">Sign in to continue your great work.</p>
                                                    </div>
                                                    {isError && isError ? (<Alert variant="danger"> invalid email/password provided </Alert>) : null}
                                                    <div className="p-2 mt-5">
                                                        <Form
                                                            onSubmit={(e) => {
                                                                e.preventDefault();
                                                                validation.handleSubmit();
                                                                return false;
                                                            }}
                                                        >

                                                            <div className="mb-3">
                                                                <Form.Label htmlFor="email" className="form-label">Email</Form.Label>
                                                                <Form.Control className="form-control" id="email" placeholder="Enter email"
                                                                    name="email"
                                                                    type="email"
                                                                    onChange={validation.handleChange}
                                                                    onBlur={validation.handleBlur}
                                                                    value={validation.values.email || ""}
                                                                    isInvalid={
                                                                        validation.touched.email && validation.errors.email ? true : false
                                                                    }

                                                                />
                                                                {validation.touched.email && validation.errors.email ? (
                                                                    <Form.Control.Feedback type="invalid">{validation.errors.email}</Form.Control.Feedback>
                                                                ) : null}
                                                            </div>

                                                            <div className="mb-3">
                                                              
                                                                <Form.Label className="form-label" htmlFor="password-input">Password</Form.Label>
                                                                <div className="position-relative auth-pass-inputgroup mb-3">
                                                                    <Form.Control type={passwordtype ? "password" : "text"} className="form-control pe-5 password-input" placeholder="Enter password" id="password-input"
                                                                        name="password"
                                                                        value={validation.values.password || ""}
                                                                        onChange={validation.handleChange}
                                                                        onBlur={validation.handleBlur}
                                                                        isInvalid={
                                                                            validation.touched.password && validation.errors.password ? true : false
                                                                        }
                                                                    />
                                                                    {validation.touched.password && validation.errors.password ? (
                                                                        <Form.Control.Feedback type="invalid">{validation.errors.password}</Form.Control.Feedback>
                                                                    ) : null}
                                                                    <Button variant='link' className="position-absolute end-0 top-0 text-decoration-none text-muted password-addon" type="button" id="password-addon" onClick={() => setPasswordtype(!passwordtype)}><i className="ri-eye-fill align-middle"></i></Button>
                                                                </div>
                                                            </div>

                                                            <div className="mt-4">
                                                                <Button variant="primary" className="w-100" type="submit" disabled={loading}>
                                                                    {loading ? <Spinner animation="border" size="sm" className="me-2"></Spinner> : null}
                                                                    Sign In
                                                                </Button>
                                                            </div>
                                                        </Form>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>

                                    </Row>

                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>

                </Container>
            </section>
        </React.Fragment>
    );
}

Login.getLayout = function getLayout(page: any) {
    return (
      <NonAuthLayout>
        {page}
      </NonAuthLayout>
    )
};

export const getServerSideProps = async (context) => {
    const { req } = context;
  
    // Check if the user is authenticated
    const user = req.session.user || null;
  
    return {
      props: { user },
    };
};

export default Login;