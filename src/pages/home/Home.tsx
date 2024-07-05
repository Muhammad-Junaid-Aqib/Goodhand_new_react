import React from 'react'
import '../../css/responsive.css'
import '../../css/style.css'
import '../../css/swiper-bundle.min.css'
import { useNavigate } from 'react-router-dom';



// Image
import { cards } from '../../data'
import { imgData } from '../../data'
import CarouselComponent from '../../components/carousel/CarouselComponent'
import CarouselComponen from '../../components/carousel/CarouselComponen'
import Right_Side_Img from '../../assets/right-side-img.png'
import img from '../../assets/ser-salo-custo.svg'

import img4 from '../../assets/home-img/hm-content-right.png'
import img5 from '../../assets/home-img/staff.jpg'

const Home = () => {
    console.log("cardsdata", cards)
    const navigate = useNavigate();

    return (
        <>
            <div className="dv_content_wrapper">
                <div className="dv_header_discover mt-md-5 mt-lg-5">
                    <div className="container">
                        {/* <!-- <h3 className="dv_discover_heading mb-5 mb-sm-3 mb-xs-3 mb--3 text-center">Best Salon & Home Services in Dubai </h3> --> */}
                        <h3 className="dv_discover_heading mb-0 mb-md-5 mb-sm-3 mb-xxs-3 text-center d-none d-md-block d-lg-block" data-toggle="modal" data-target="#otpaddingnew">Best Salon & Home Services in Dubai </h3>
                        <div className="row">
                            <div className="col-md-6 d-none d-md-block d-lg-block d-sm-block">
                                <img src={Right_Side_Img} className="w-100" />
                            </div>
                            {/* <!-- <div className="col-md-1 d-md-none"></div> --> */}
                            {/* <div className="col-md-6">
                                <div className="card border-0 pb-0 pt-4 pl-4 pr-4 rounded mb-4 p-sm-0 mt-sm-5 ml-5 my-sm-0">
                                    <div className="row">
                                        <div className="col-md-4 col-sm-4 col-xs-3 col-4 mb-3">
                                            <div className="card bg-light border-0 p-2 text-center font-12">
                                                <img src="assets/near-me/hair.png" className="d-block ml-auto mr-auto"/>
                                            </div>
                                            <p className="font-12 d-block text-center mt-2 ff-semibold ff-sm-regular">Hair Salon </p>
                                        </div>
                                        <div className="col-md-4 col-sm-4 col-xs-3 col-4 mb-3">
                                            <div className="card bg-light border-0 p-2 text-center font-12">
                                                <img src="img/near-me/nail.png" className="d-block ml-auto mr-auto"/>
                                            </div>
                                            <p className="font-12 d-block text-center mt-2 ff-semibold ff-sm-regular">Nail Salon </p>
                                        </div>
                                        <div className="col-md-4 col-sm-4 col-xs-3 col-4 mb-3">
                                            <div className="card bg-light border-0 p-2 text-center font-12">
                                                <img src="img/near-me/spmu.png" className="d-block ml-auto mr-auto"/>
                                            </div>
                                            <p className="font-12 d-block text-center mt-2 ff-semibold ff-sm-regular">SPMU </p>
                                        </div>
                                        <div className="col-md-4 col-sm-4 col-xs-3 col-4 mb-3">
                                            <div className="card bg-light border-0 p-2 text-center font-12">
                                                <img src="img/near-me/eyelash.png" className="d-block ml-auto mr-auto"/>
                                            </div>
                                            <p className="font-12 d-block text-center mt-2 ff-semibold ff-sm-regular">Eyelash Extensions </p>
                                        </div>
                                        <div className="col-md-4 col-sm-4 col-xs-3 col-4 mb-3">
                                            <div className="card bg-light border-0 p-2 text-center font-12">
                                                <img src="img/near-me/facial.png" className="d-block ml-auto mr-auto"/>
                                            </div>
                                            <p className="font-12 d-block text-center mt-2 ff-semibold ff-sm-regular">Facial Salon </p>
                                        </div>
                                        <div className="col-md-4 col-sm-4 col-xs-3 col-4 mb-3">
                                            <div className="card bg-light border-0 p-2 text-center font-12">
                                                <img src="img/near-me/makeup.png" className="d-block ml-auto mr-auto"/>
                                            </div>
                                            <p className="font-12 d-block text-center mt-2 ff-semibold ff-sm-regular">Makeup </p>
                                        </div>
                                        <div className="col-md-4 col-sm-4 col-xs-3 col-4 mb-3">
                                            <div className="card bg-light border-0 p-2 text-center font-12">
                                                <img src="img/near-me/hair-extension.png" className="d-block ml-auto mr-auto"/>
                                            </div>
                                            <p className="font-12 d-block text-center mt-2 ff-semibold ff-sm-regular">Hair extension salon </p>
                                        </div>
                                        <div className="col-md-4 col-sm-4 col-xs-3 col-4 mb-3">
                                            <div className="card bg-light border-0 p-2 text-center font-12">
                                                <img src="img/near-me/massage.png" className="d-block ml-auto mr-auto"/>
                                            </div>
                                            <p className="font-12 d-block text-center mt-2 ff-semibold ff-sm-regular">Massage & Spa salon </p>
                                        </div>
                                        <div className="col-md-4 col-sm-4 col-xs-3 col-4 mb-3">
                                            <div className="card bg-light border-0 p-2 text-center font-12">
                                                <img src="img/near-me/henna.png" className="d-block ml-auto mr-auto"/>
                                            </div>
                                            <p className="font-12 d-block text-center mt-2 ff-semibold ff-sm-regular">Henna </p>
                                        </div>
                                        <div className="col-md-4 col-sm-4 col-xs-3 col-4 mb-3">
                                            <div className="card bg-light border-0 p-2 text-center font-12">
                                                <img src="img/near-me/home-service.png" className="d-block ml-auto mr-auto"/>
                                            </div>
                                            <p className="font-12 d-block text-center mt-2 ff-semibold ff-sm-regular">Home Services </p>
                                        </div>
                                        <div className="col-md-4 col-sm-4 col-xs-3 col-4 mb-3">
                                            <div className="card bg-light border-0 p-2 text-center font-12">
                                                <img src="img/near-me/massage-men.png" className="d-block ml-auto mr-auto"/>
                                            </div>
                                            <p className="font-12 d-block text-center mt-2 ff-semibold ff-sm-regular">Massage For Men </p>
                                        </div>
                                        <div className="col-md-4 col-sm-4 col-xs-3 col-4 mb-3">
                                            <div className="card bg-light border-0 p-2 text-center font-12">
                                                <img src="img/near-me/men-salon.png" className="d-block ml-auto mr-auto"/>
                                            </div>
                                            <p className="font-12 d-block text-center mt-2 ff-semibold ff-sm-regular">Gents Salon </p>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            <div className="col-md-6">
                                <div className="card border-0 pb-0 pt-4 pl-4 pr-4 rounded mb-4 p-sm-0 mt-sm-5 ml-5 my-sm-0">
                                    <div className="row">
                                        {cards.map((item, index) => (
                                            <div key={index} className="col-md-4 col-sm-4 col-xs-3 col-4 mb-3 cursor-pointer"
                                                onClick={() => { navigate('/services') }}
                                            >
                                                <div
                                                    className="card bg-light border-0 p-2 text-center font-12"
                                                    style={{ alignItems: 'center' }}
                                                >
                                                    <img
                                                        src={item.img}
                                                        alt={item.title}
                                                        style={{ width: '50px', height: '50px' }}
                                                        className="d-block ml-auto mr-auto" />
                                                </div>
                                                <p className="font-12 d-block text-center mt-2 ff-semibold ff-sm-regular">{item.title}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="dv_normal_stats_img pt-4 pb-5">
                    <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
                        <img src={img} className="d-block ml-auto mr-auto w-sm-100" />
                    </div>
                </div>

                <div className="dv_most_booked_services pb-3 pb-md-5 pb-sm-5 pb-lg-5">
                    {/* <div className="container">
                        <h3 className="text-center ff-bold font-36 mt-3 mb-4">Most Booked Services </h3>
                        <div className="swiper offerslider">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide"><img src="" className="w-100 offer_img_slide"/></div>
                                <div className="swiper-slide"><img src="img/near-me/package-02.png" className="w-100 offer_img_slide"/></div>
                                <div className="swiper-slide"><img src="img/near-me/package-03.png" className="w-100 offer_img_slide"/></div>
                                <div className="swiper-slide"><img src="img/near-me/package-03.png" className="w-100 offer_img_slide"/></div>
                            </div> */}
                    {/* <!-- <div className="swiper-pagination dv_offer_pagination position-relative mt-3"></div> --> */}
                    {/* <div className="swiper-button-prev"></div>
                            <div className="swiper-button-next"></div>
                        </div>
                    </div> */}
                    <CarouselComponent />
                </div>

                <div className="dv_services_based_slider pb-4 pb-md-5 pb-sm-3 pb-lg-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 col-sm-12 col-xs-12 col-12">
                                <h4 className="font-28 d-block ff-bold text-capitalize">Best Ladies Hair Salon Dubai </h4>
                                <p className="font-13 ff-regular text-gray text-justify">#1 Hair Salon Dubai with 100% Satisfaction Guaranteed through Premium quality Products at Mirrors ladies hair salon. Mirrors Beauty Lounge is the #1 Hair salon Dubai. Our Hair salon Dubai specializes in all types of hair treatments. </p>
                                <a href="#!" className="btn btn-default dv_see_all_btn font-13 pt-2 pl-4 pr-4 pb-2 d-none d-md-block d-lg-block text-capitalize text-blue ff-bold border shadow" style={{ width: "fit-content" }}>see all</a>
                            </div>
                            <div className="col-md-7 col-sm-12 col-xs-12 col-12">
                                <div className="swiper services_based_slider">
                                    <CarouselComponen />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="dv_services_based_slider pb-4 pb-md-5 pb-sm-3 pb-lg-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 col-sm-12 col-xs-12 col-12">
                                <h4 className="font-28 d-block ff-bold text-capitalize">nail salon</h4>
                                <p className="font-14 ff-regular text-gray">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation. </p>
                                <a href="#!" className="btn btn-default dv_see_all_btn font-13 pt-2 pl-4 pr-4 pb-2 d-none d-md-block d-lg-block text-capitalize text-blue ff-bold border shadow" style={{ width: "fit-content" }}>see all</a>
                            </div>
                            <div className="col-md-7 col-sm-12 col-xs-12 col-12">
                                <div className="swiper services_based_slider">
                                    <CarouselComponen />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="dv_services_based_slider pb-4 pb-md-5 pb-sm-3 pb-lg-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 col-sm-12 col-xs-12 col-12">
                                <h4 className="font-28 d-block ff-bold text-capitalize">SPMU salon</h4>
                                <p className="font-14 ff-regular text-gray">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation. </p>
                                <a href="#!" className="btn btn-default dv_see_all_btn font-13 pt-2 pl-4 pr-4 pb-2 d-none d-md-block d-lg-block text-capitalize text-blue ff-bold border shadow" style={{ width: "fit-content" }}>see all</a>
                            </div>
                            <div className="col-md-7 col-sm-12 col-xs-12 col-12">
                                <CarouselComponen />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="dv_services_based_slider pb-4 pb-md-5 pb-sm-3 pb-lg-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 col-sm-12 col-xs-12 col-12">
                                <h4 className="font-28 d-block ff-bold text-capitalize">Eyelash salon</h4>
                                <p className="font-14 ff-regular text-gray">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation. </p>
                                <a href="#!" className="btn btn-default dv_see_all_btn font-13 pt-2 pl-4 pr-4 pb-2 d-none d-md-block d-lg-block text-capitalize text-blue ff-bold border shadow" style={{ width: "fit-content" }}>see all</a>
                            </div>
                            <div className="col-md-7 col-sm-12 col-xs-12 col-12">
                                <CarouselComponen />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="dv_services_based_slider pb-4 pb-md-5 pb-sm-3 pb-lg-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 col-sm-12 col-xs-12 col-12">
                                <h4 className="font-28 d-block ff-bold text-capitalize">Facial salon</h4>
                                <p className="font-14 ff-regular text-gray">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation. </p>
                                <a href="#!" className="btn btn-default dv_see_all_btn font-13 pt-2 pl-4 pr-4 pb-2 d-none d-md-block d-lg-block text-capitalize text-blue ff-bold border shadow" style={{ width: "fit-content" }}>see all</a>
                            </div>
                            <div className="col-md-7 col-sm-12 col-xs-12 col-12">
                                <CarouselComponen />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="dv_services_based_slider pb-4 pb-md-5 pb-sm-3 pb-lg-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 col-sm-12 col-xs-12 col-12">
                                <h4 className="font-28 d-block ff-bold text-capitalize">makeup & Henna </h4>
                                <p className="font-14 ff-regular text-gray">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation. </p>
                                <a href="#!" className="btn btn-default dv_see_all_btn font-13 pt-2 pl-4 pr-4 pb-2 d-none d-md-block d-lg-block text-capitalize text-blue ff-bold border shadow" style={{ width: "fit-content" }}>see all</a>
                            </div>
                            <div className="col-md-7 col-sm-12 col-xs-12 col-12">
                                <CarouselComponen />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="dv_services_based_slider pb-4 pb-md-5 pb-sm-3 pb-lg-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 col-sm-12 col-xs-12 col-12">
                                <h4 className="font-28 d-block ff-bold text-capitalize">Hair Extensions salon</h4>
                                <p className="font-14 ff-regular text-gray">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation. </p>
                                <a href="#!" className="btn btn-default dv_see_all_btn font-13 pt-2 pl-4 pr-4 pb-2 d-none d-md-block d-lg-block text-capitalize text-blue ff-bold border shadow" style={{ width: "fit-content" }}>see all</a>
                            </div>
                            <div className="col-md-7 col-sm-12 col-xs-12 col-12">
                                <CarouselComponen />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="dv_services_based_slider pb-4 pb-md-5 pb-sm-3 pb-lg-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 col-sm-12 col-xs-12 col-12">
                                <h4 className="font-28 d-block ff-bold text-capitalize">Massage & Spa salon </h4>
                                <p className="font-14 ff-regular text-gray">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation. </p>
                                <a href="#!" className="btn btn-default dv_see_all_btn font-13 pt-2 pl-4 pr-4 pb-2 d-none d-md-block d-lg-block text-capitalize text-blue ff-bold border shadow" style={{ width: "fit-content" }}>see all</a>
                            </div>
                            <div className="col-md-7 col-sm-12 col-xs-12 col-12">
                                <CarouselComponen />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="dv_services_based_slider pb-4 pb-md-5 pb-sm-3 pb-lg-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 col-sm-12 col-xs-12 col-12">
                                <h4 className="font-28 d-block ff-bold text-capitalize">Home Services </h4>
                                <p className="font-14 ff-regular text-gray">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation. </p>
                                <a href="#!" className="btn btn-default dv_see_all_btn font-13 pt-2 pl-4 pr-4 pb-2 d-none d-md-block d-lg-block text-capitalize text-blue ff-bold border shadow" style={{ width: "fit-content" }}>see all</a>
                            </div>
                            <div className="col-md-7 col-sm-12 col-xs-12 col-12">
                                {/* <div className="swiper services_based_slider">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide d-block dv_swiper_slide">
                                            <a href="#!">
                                                <div className="dv_service_tag_rg bg_red_tagline">new </div>
                                                <img src="img/offer/new/2.jpg" className="w-100 offer_img_slide" />
                                                <div className="dv_trending_wrapper">
                                                    <h4>trending haircut</h4>
                                                    <h5>AED 499 <span>(AED 500)</span> - 30 min</h5>
                                                    <p><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="#FFE72C" className="mr-1"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" /></svg>4.85 <span>(3.1k)</span></p>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="swiper-slide dv_swiper_slide">
                                            <div className="dv_service_tag_rg bg_green_tagline">20% off </div>
                                            <img src="img/offer/new/2.jpg" className="w-100 offer_img_slide" />
                                            <div className="dv_trending_wrapper">
                                                <h4>trending haircut</h4>
                                                <h5>AED 499 <span>(AED 500)</span> - 30 min</h5>
                                                <p><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="#FFE72C" className="mr-1"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" /></svg>4.85 <span>(3.1k)</span></p>
                                            </div>
                                        </div>
                                        <div className="swiper-slide d-block dv_swiper_slide">
                                            <a href="#!">
                                                <div className="dv_service_tag_rg bg_red_tagline">new </div>
                                                <img src="img/offer/new/2.jpg" className="w-100 offer_img_slide" />
                                                <div className="dv_trending_wrapper">
                                                    <h4>trending haircut</h4>
                                                    <h5>AED 499 <span>(AED 500)</span> - 30 min</h5>
                                                    <p><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="#FFE72C" className="mr-1"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" /></svg>4.85 <span>(3.1k)</span></p>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="swiper-slide dv_swiper_slide">
                                            <div className="dv_service_tag_rg bg_green_tagline">20% off </div>
                                            <img src="img/offer/new/2.jpg" className="w-100 offer_img_slide" />
                                            <div className="dv_trending_wrapper">
                                                <h4>trending haircut</h4>
                                                <h5>AED 499 <span>(AED 500)</span> - 30 min</h5>
                                                <p><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="#FFE72C" className="mr-1"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" /></svg>4.85 <span>(3.1k)</span></p>
                                            </div>
                                        </div>
                                        <div className="swiper-slide d-block dv_swiper_slide">
                                            <a href="#!">
                                                <div className="dv_service_tag_rg bg_red_tagline">new </div>
                                                <img src="img/offer/new/2.jpg" className="w-100 offer_img_slide" />
                                                <div className="dv_trending_wrapper">
                                                    <h4>trending haircut</h4>
                                                    <h5>AED 499 <span>(AED 500)</span> - 30 min</h5>
                                                    <p><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="#FFE72C" className="mr-1"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" /></svg>4.85 <span>(3.1k)</span></p>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="swiper-slide dv_swiper_slide">
                                            <div className="dv_service_tag_rg bg_green_tagline">20% off </div>
                                            <img src="img/offer/new/2.jpg" className="w-100 offer_img_slide" />
                                            <div className="dv_trending_wrapper">
                                                <h4>trending haircut</h4>
                                                <h5>AED 499 <span>(AED 500)</span> - 30 min</h5>
                                                <p><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="#FFE72C" className="mr-1"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" /></svg>4.85 <span>(3.1k)</span></p>
                                            </div>
                                        </div>
                                        <div className="swiper-slide d-block dv_swiper_slide">
                                            <a href="#!">
                                                <div className="dv_service_tag_rg bg_red_tagline">new </div>
                                                <img src="img/offer/new/2.jpg" className="w-100 offer_img_slide" />
                                                <div className="dv_trending_wrapper">
                                                    <h4>trending haircut</h4>
                                                    <h5>AED 499 <span>(AED 500)</span> - 30 min</h5>
                                                    <p><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="#FFE72C" className="mr-1"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" /></svg>4.85 <span>(3.1k)</span></p>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="swiper-slide dv_swiper_slide">
                                            <div className="dv_service_tag_rg bg_green_tagline">20% off </div>
                                            <img src="img/offer/new/2.jpg" className="w-100 offer_img_slide" />
                                            <div className="dv_trending_wrapper">
                                                <h4>trending haircut</h4>
                                                <h5>AED 499 <span>(AED 500)</span> - 30 min</h5>
                                                <p><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="#FFE72C" className="mr-1"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" /></svg>4.85 <span>(3.1k)</span></p>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="swiper-pagination dv_offer_pagination position-relative mt-3"></div>
                                    <div className="swiper-button-prev"></div>
                                    <div className="swiper-button-next"></div>
                                </div> */}
                                <CarouselComponen />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="dv_services_based_slider pb-4 pb-md-5 pb-sm-3 pb-lg-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 col-sm-12 col-xs-12 col-12">
                                <h4 className="font-28 d-block ff-bold text-capitalize">Salon for men </h4>
                                <p className="font-14 ff-regular text-gray">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation. </p>
                                <a href="#!" className="btn btn-default dv_see_all_btn font-13 pt-2 pl-4 pr-4 pb-2 d-none d-md-block d-lg-block text-capitalize text-blue ff-bold border shadow" style={{ width: "fit-content" }}>see all</a>
                            </div>
                            <div className="col-md-7 col-sm-12 col-xs-12 col-12">
                                <CarouselComponen />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="dv_services_based_slider pb-4 pb-md-5 pb-sm-3 pb-lg-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 col-sm-12 col-xs-12 col-12">
                                <h4 className="font-28 d-block ff-bold text-capitalize">Massage & spa for men</h4>
                                <p className="font-14 ff-regular text-gray">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation. </p>
                                <a href="#!" className="btn btn-default dv_see_all_btn font-13 pt-2 pl-4 pr-4 pb-2 d-none d-md-block d-lg-block text-capitalize text-blue ff-bold border shadow" style={{ width: "fit-content" }}>see all</a>
                            </div>
                            <div className="col-md-7 col-sm-12 col-xs-12 col-12">
                                <div className="swiper services_based_slider">
                                    <CarouselComponen />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="dv_video_wrapper ptb-80">
                    <div className="container">
                        {/* <!-- <img src="img/home-img/video.jpg" className="w-100"> --> */}
                        <video style={{ width: "100%", height: "auto" }} loop muted className="d-none d-md-block d-lg-block">
                            <source src="img/desktop-video-new.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <video style={{ width: "100%", height: "auto" }} loop muted className="d-block d-md-none d-lg-none">
                            <source src="img/desktop-video-new.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <p className="d-block font-14 ff-semibold text-white text-center pt-3 pb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                        <a href="#!" className="ml-auto mr-auto bg-danger text-white ff-bold pt-2 pb-2 text-center pl-3 pr-3 d-block border-radius-10" style={{ width: "fit-content" }}>Get 20% OFF</a>
                    </div>
                </div>

                <div className="dv_home_services_content pt-5 pb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h3 className="dv_discover_heading font-20">Why Mirror’s Beauty Services Salon at home in Dubai? </h3>
                                <p className="d-block font-14 text-muted text-left pt-3 pb-4">Mirrors Beauty Salon Services at Home in Dubai offers a unique blend of luxury and convenience, bringing the expertise of a high-end salon directly to your doorstep. With a commitment to excellence and customer satisfaction, our team of skilled professionals ensures that every client receives personalized attention and top-quality salon services at home tailored to their specific needs from hairstyling and makeup to skincare and grooming. </p>
                            </div>
                        </div>
                        {/* <div className="row">
                            <div className="col-md-4 text-center">
                                <img src={img1} style={{ height: "70px", margin: "0 auto 20px 0" }} />
                                <h4 className="ff-bold font-18">Time-saving Luxury </h4>
                                <p className="d-block font-14 text-dark text-center pt-3 pb-4">Mirrors Beauty Services Salon at Home in Dubai offers the luxury of professional beauty treatments without the hassle of travel, saving you time and effort in your busy schedule.</p>
                            </div>
                            <div className="col-md-4 text-center">
                                <img src={img2} style={{ height: "70px", margin: "0 auto 20px 0" }} />
                                <h4 className="ff-bold font-18">Expertise On Demand </h4>
                                <p className="d-block font-14 text-dark text-center pt-3 pb-4">Mirrors Beauty Services Salon at Home in Dubai offers the luxury of professional beauty treatments without the hassle of travel, saving you time and effort in your busy schedule.</p>
                            </div>
                            <div className="col-md-4 text-center">
                                <img src={img3} style={{ height: "70px", margin: "0 auto 20px 0" }} />
                                <h4 className="ff-bold font-18">Personalized Comfort </h4>
                                <p className="d-block font-14 text-dark text-center pt-3 pb-4">Mirrors Beauty Services Salon at Home in Dubai offers the luxury of professional beauty treatments without the hassle of travel, saving you time and effort in your busy schedule.</p>
                            </div>
                        </div> */}
                        <div className="row">
                            {imgData.map((item, index) => (
                                <div className="col-md-4 text-center" key={index}>
                                    <img src={item.img} alt={item.title} style={{ height: '70px', margin: '0 auto 20px 0' }} />
                                    <h4 className="ff-bold font-18">{item.title}</h4>
                                    <p className="d-block font-14 text-dark text-center pt-3 pb-4">{item.description}</p>
                                </div>
                            ))}
                        </div>
                        <div className="row">
                            <div className="col-md-7 text-left">

                                <p className="d-block font-14 text-dark text-left pt-1">Transform your home into your personal sanctuary of beauty and relaxation with our premium beauty salon home services in Dubai. Our team of skilled professionals brings the luxury of a salon experience directly to your doorstep, offering a wide range of services tailored to your individual needs. </p>

                                <p className="d-block font-14 text-dark text-left pt-1">The Services Are Delivered By Our Trained And Experienced Technicians And Therapists Using Reputed Brands, And Quality Checked Hygienic Products. Our beauty salon home service Dubai. Include Routine Waxing, Facial, Nails, Manicure, Pedicure, Hair-Spa, Hair Treatment, Makeup, Hairstyle, Makeup, Bridal Makeup Services Blow Dry, Massages, Threading, Brushing, Facial, Bleaching, Body Scrub, Hair Treatment, Keratin, Henna And Much More At Doorstep.</p>

                                <p className="d-block font-14 text-dark text-left pt-1">All our therapists are tested and recommended personally by us, avoid the schlep to the salon and book Dubai’s best beauty and home massage therapists to At your home, hotel or workplace, so you know you are in safe hands.</p>

                                <p className="d-block font-14 text-dark text-left pt-1">ans arrive equipped with top-of-the-line equipment and premium products, ready to pamper you from head to toe. Whether you're preparing for a special event, seeking regular maintenance, or simply craving some self-care time, our beauty salon home services in Dubai. cater to your schedule and preferences. Say goodbye to the hassle of traffic and parking, and hello to a personalized spa-like experience right in your own space, allowing you to unwind and recharge without any added stress.</p>

                                <p className="d-block font-14 text-dark text-left pt-1">At our home service salon Dubai, we prioritize not only the quality of our services but also your satisfaction and comfort. Our attentive staff ensures a seamless and enjoyable experience, listening to your preferences and delivering exceptional results that exceed your expectations. Embrace the convenience of our best beauty salon home services in Dubai. and elevate your self-care routine to new heights, enjoying the luxury of professional treatments Salon at home. Treat yourself to the ultimate indulgence and let us bring the salon experience to you, making every day feel like a spa day in the comfort of your own home.</p>

                            </div>
                            <div className="col-md-5 text-center">
                                <img src={img4} className="w-100" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="dv_meet_professionals ptb-80">
                    <div className="container">
                        <h3 className="dv_discover_heading mb-2 font-36 text-center">Meet our expert professional </h3>
                        <p className="d-block font-16 text-muted text-center pt-3 pb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco <span className="ff-bold text-dark">laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</span>.</p>
                        <div className="row justify-content-center align-items-center">
                            <div className="col-md-2 col-sm-4 col-xs-3 col-4 mb-4 d-none d-md-block d-sm-none d-lg-block">
                                <img src={img5} className="w-100 shadow border-radius-10" />
                                <h4 className="d-block font-18 ff-bold text-capitalize mt-3 text-center">zalikha </h4>
                                <p className="d-block font-14 ff-semibold text-center text-capitalize">hair specialist </p>
                            </div>
                            <div className="col-md-2 col-sm-4 col-xs-3 col-4 mb-4 d-none d-md-block d-sm-none d-lg-block">
                                <img src={img5} className="w-100 shadow border-radius-10" />
                                <h4 className="d-block font-18 ff-bold text-capitalize mt-3 text-center">zalikha </h4>
                                <p className="d-block font-14 ff-semibold text-center text-capitalize">hair specialist </p>
                            </div>
                            <div className="col-md-2 col-sm-4 col-xs-3 col-4 mb-4 d-none d-md-block d-sm-none d-lg-block">
                                <img src={img5} className="w-100 shadow border-radius-10" />
                                <h4 className="d-block font-18 ff-bold text-capitalize mt-3 text-center">zalikha </h4>
                                <p className="d-block font-14 ff-semibold text-center text-capitalize">hair specialist </p>
                            </div>
                            <div className="col-md-2 col-sm-4 col-xs-3 col-4 mb-4 d-none d-md-block d-sm-none d-lg-block">
                                <img src={img5} className="w-100 shadow border-radius-10" />
                                <h4 className="d-block font-18 ff-bold text-capitalize mt-3 text-center">zalikha </h4>
                                <p className="d-block font-14 ff-semibold text-center text-capitalize">hair specialist </p>
                            </div>
                            <div className="col-md-2 col-sm-4 col-xs-3 col-4 mb-4 d-none d-md-block d-sm-none d-lg-block">
                                <img src={img5} className="w-100 shadow border-radius-10" />
                                <h4 className="d-block font-18 ff-bold text-capitalize mt-3 text-center">zalikha </h4>
                                <p className="d-block font-14 ff-semibold text-center text-capitalize">hair specialist </p>
                            </div>
                        </div>
                        <div className="row justify-content-center align-items-center">
                            <div className="col-md-2 col-sm-4 col-xs-3 col-4 mb-4 d-none d-md-block d-sm-none d-lg-block">
                                <img src={img5} className="w-100 shadow border-radius-10" />
                                <h4 className="d-block font-18 ff-bold text-capitalize mt-3 text-center">zalikha </h4>
                                <p className="d-block font-14 ff-semibold text-center text-capitalize">hair specialist </p>
                            </div>
                            <div className="col-md-2 col-sm-4 col-xs-3 col-4 mb-4 d-none d-md-block d-sm-none d-lg-block">
                                <img src={img5} className="w-100 shadow border-radius-10" />
                                <h4 className="d-block font-18 ff-bold text-capitalize mt-3 text-center">zalikha </h4>
                                <p className="d-block font-14 ff-semibold text-center text-capitalize">hair specialist </p>
                            </div>
                            <div className="col-md-2 col-sm-4 col-xs-3 col-4 mb-4 d-none d-md-block d-sm-none d-lg-block">
                                <img src={img5} className="w-100 shadow border-radius-10" />
                                <h4 className="d-block font-18 ff-bold text-capitalize mt-3 text-center">zalikha </h4>
                                <p className="d-block font-14 ff-semibold text-center text-capitalize">hair specialist </p>
                            </div>
                            <div className="col-md-2 col-sm-4 col-xs-3 col-4 mb-4 d-none d-md-block d-sm-none d-lg-block">
                                <img src={img5} className="w-100 shadow border-radius-10" />
                                <h4 className="d-block font-18 ff-bold text-capitalize mt-3 text-center">zalikha </h4>
                                <p className="d-block font-14 ff-semibold text-center text-capitalize">hair specialist </p>
                            </div>
                        </div>
                        <div className="row justify-content-center align-items-center d-block d-md-none d-sm-block d-lg-none ml-2">

                            <div className="swiper teamslidernew">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide d-block bg-transparent">
                                        <img src="img/home-img/staff.jpg" className="w-100 shadow border-radius-10" />
                                        <h4 className="d-block font-18 ff-bold text-capitalize mt-3 text-center">zalikha </h4>
                                        <p className="d-block font-14 ff-semibold text-center text-capitalize">hair specialist </p>
                                    </div>
                                    <div className="swiper-slide d-block bg-transparent">
                                        <img src="img/home-img/staff.jpg" className="w-100 shadow border-radius-10" />
                                        <h4 className="d-block font-18 ff-bold text-capitalize mt-3 text-center">zalikha </h4>
                                        <p className="d-block font-14 ff-semibold text-center text-capitalize">hair specialist </p>
                                    </div>
                                    <div className="swiper-slide d-block bg-transparent">
                                        <img src="img/home-img/staff.jpg" className="w-100 shadow border-radius-10" />
                                        <h4 className="d-block font-18 ff-bold text-capitalize mt-3 text-center">zalikha </h4>
                                        <p className="d-block font-14 ff-semibold text-center text-capitalize">hair specialist </p>
                                    </div>
                                    <div className="swiper-slide d-block bg-transparent">
                                        <img src="img/home-img/staff.jpg" className="w-100 shadow border-radius-10" />
                                        <h4 className="d-block font-18 ff-bold text-capitalize mt-3 text-center">zalikha </h4>
                                        <p className="d-block font-14 ff-semibold text-center text-capitalize">hair specialist </p>
                                    </div>
                                    <div className="swiper-slide d-block bg-transparent">
                                        <img src="img/home-img/staff.jpg" className="w-100 shadow border-radius-10" />
                                        <h4 className="d-block font-18 ff-bold text-capitalize mt-3 text-center">zalikha </h4>
                                        <p className="d-block font-14 ff-semibold text-center text-capitalize">hair specialist </p>
                                    </div>
                                    <div className="swiper-slide d-block bg-transparent">
                                        <img src="img/home-img/staff.jpg" className="w-100 shadow border-radius-10" />
                                        <h4 className="d-block font-18 ff-bold text-capitalize mt-3 text-center">zalikha </h4>
                                        <p className="d-block font-14 ff-semibold text-center text-capitalize">hair specialist </p>
                                    </div>
                                    <div className="swiper-slide d-block bg-transparent">
                                        <img src="img/home-img/staff.jpg" className="w-100 shadow border-radius-10" />
                                        <h4 className="d-block font-18 ff-bold text-capitalize mt-3 text-center">zalikha </h4>
                                        <p className="d-block font-14 ff-semibold text-center text-capitalize">hair specialist </p>
                                    </div>
                                </div>
                                {/* <!-- <div className="swiper-pagination dv_offer_pagination position-relative mt-3"></div> --> */}
                                <div className="swiper-button-prev"></div>
                                <div className="swiper-button-next"></div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="dv_most_booked_services ptb-40">
                    <div className="container">
                        <h3 className="text-center ff-bold font-36 mt-3 mb-4">Thousands of smiles can't be wrong </h3>
                        <div className="swiper reviewslidernew">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide pb-4 pr-2">
                                    <img src="img/home-img/review-1.png" className="w-100" />
                                </div>
                                <div className="swiper-slide pb-4 pr-2">
                                    <img src="img/home-img/review-2.png" className="w-100" />
                                </div>
                                <div className="swiper-slide pb-4 pr-2">
                                    <img src="img/home-img/review-3.png" className="w-100" />
                                </div>
                                <div className="swiper-slide pb-4 pr-2">
                                    <img src="img/home-img/review-4.png" className="w-100" />
                                </div>

                            </div>
                            <div className="swiper-button-prev"></div>
                            <div className="swiper-button-next"></div>
                        </div>
                    </div>
                </div>

                <div className="dv_salon_map_style ptb-40">
                    <div className="container">
                        <div id="map" className="dv_salon_map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462561.6574537445!2d55.22748795!3d25.076022449999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1720007203663!5m2!1sen!2s"
                                width="100%"
                                height="450"
                                style={{ border: 0 }}
                                // allowFullScreen="" 
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">

                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home