import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { BestSellingProductsData } from '@common/data';

const BestSellingProducts = () => {
    return (
        <React.Fragment>
            <Col xl={8}>
                <div className="d-flex pt-2 pb-4 mb-n5">
                    <h5 className="card-title fs-16 mb-0">Best Selling Products</h5>
                </div>
                <Swiper modules={[Navigation, Autoplay]}
                    slidesPerView={3}
                    spaceBetween={10}
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 24,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 24,
                        },
                    }}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    className="mySwiper selling-product pt-5">

                    <div className="swiper-wrapper pt-2">
                        {BestSellingProductsData.map((item: any, key: number) => (
                            <SwiperSlide style={{ maxWidth: "280px" }} key={key}>
                                <Card>
                                    <Card.Body>
                                        <div className={item.className}>
                                            <Image src={item.img} alt="" style={{ maxHeight: "215px", maxWidth: "100%" }} className="mx-auto d-block" />
                                        </div>
                                        <div className="pt-3">
                                            <span className="float-end">{item.rating} <i className="ri-star-half-fill text-warning align-bottom"></i></span>
                                            <h5 className="text-dark mb-3">{item.price}</h5>
                                            <Link href="#!" className="stretched-link">
                                                <h6 className="fs-15 lh-base text-truncate mb-0">{item.productName}</h6>
                                            </Link>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </SwiperSlide>
                        ))}
                    </div>
                    <div className="swiper-button-next"></div>
                    <div className="swiper-button-prev"></div>
                </Swiper>
            </Col>
        </React.Fragment>
    );
}

export default BestSellingProducts;