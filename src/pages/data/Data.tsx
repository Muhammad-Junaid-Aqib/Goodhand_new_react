import React from 'react'
import '../../css/responsive.css'
import '../../css/style.css'
import '../../css/swiper-bundle.min.css'

import video2 from '../../assets/desktop-video-new.mp4'
import img1 from "../../assets/sub-cat-new/1.jpg"
import img2 from "../../assets/sub-cat-new/2.jpg"
import img3 from "../../assets/sub-cat-new/3.jpg"
import img4 from "../../assets/sub-cat-new/4.jpg"
import img5 from "../../assets/sub-cat-new/5-6.png"
import img6 from '../../assets/g-reviews.jpg'

import img8 from "../../assets/service-gallery/3.jpg"
import img9 from "../../assets/service-gallery/1.jpg"

const Data = () => {
  return (
    <>
      <div className="dv_wrapper">
        <div className="dv_content_wrapper pt-2 dv_pt_sub_pg">
          {/* <div className="dv_header_discover mt-md-5 mt-lg-5">
            <video style={{
              width: '80%',
              height: '200px',
              borderRadius: '10px',
              margin: '0 0 20px 0'
            }} autoPlay muted loop  >
              <source src={video} />
            </video>
          </div> */}
          <div className="container">
            {/* <!-- <h3 className="dv_discover_heading mb-0 mb-md-5 mb-sm-3 mb-xxs-3 pt-4 text-center d-none d-md-block d-lg-block" data-toggle="modal" data-target="#otpaddingnew">
              Hair Salon for Women
              <p className="font-14 ff-regular mt-2 mb-0 pb-0">Best hair salon near me providing top-notch at-home hairdressers.</p>
            </h3> --> */}
            <div className="height-30"></div>
            <div className="row">
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-5 col-sm-12">
                <div className="card border-0 pb-0 rounded sticky-top sticky-offset z-index-0 mb-4">
                  <h4 className="dv_subscategory_heading font-30 mt-0 mb-5 text-capitalize">beauty therapy course </h4>
                  <div className="border-1 p-3 border-radius-10">
                    <h4 className="ff-bold font-16 mt-0 mb-3 text-center text-capitalize">book your course </h4>
                    <div className="row">
                      <div className="col-md-4 col-sm-4 col-xs-3 col-4 mb-3">
                        <a href="javascript:void(0);" className="text-dark scrollButton" data-target="scroll1">
                          <div className="card bg-light border-0 text-center font-12">
                            <img src={img1} className="d-block ml-auto mr-auto w-100 border-radius-5 dv_sub_categori_icon" />
                          </div>
                          <p className="font-12 d-block text-center mt-2 ff-semibold ff-sm-regular">Hair Treatment</p>
                        </a>
                      </div>
                      <div className="col-md-4 col-sm-4 col-xs-3 col-4 mb-3">
                        <a href="javascript:void(0);" className="text-dark scrollButton" data-target="scroll2">
                          <div className="card bg-light border-0 text-center font-12">
                            <img src={img2} className="d-block ml-auto mr-auto w-100 border-radius-5 dv_sub_categori_icon" />
                          </div>
                          <p className="font-12 d-block text-center mt-2 ff-semibold ff-sm-regular">Hair Color & Hightlighs</p>
                        </a>
                      </div>
                      <div className="col-md-4 col-sm-4 col-xs-3 col-4 mb-3">
                        <a href="#!" className="text-dark">
                          <div className="card bg-light border-0 text-center font-12">
                            <img src={img3} className="d-block ml-auto mr-auto w-100 border-radius-5 dv_sub_categori_icon" />
                          </div>
                          <p className="font-12 d-block text-center mt-2 ff-semibold ff-sm-regular">Hair Cut & blow Dry</p>
                        </a>
                      </div>
                      <div className="col-md-4 col-sm-4 col-xs-3 col-4 mb-3">
                        <a href="#!" className="text-dark">
                          <div className="card bg-light border-0 text-center font-12">
                            <img src={img4} className="d-block ml-auto mr-auto w-100 border-radius-5 dv_sub_categori_icon dv_sub_categori_icon" />
                          </div>
                          <p className="font-12 d-block text-center mt-2 ff-semibold ff-sm-regular">Hair Styling</p>
                        </a>
                      </div>
                      <div className="col-md-4 col-sm-4 col-xs-3 col-4 mb-3">
                        <a href="#!" className="text-dark">
                          <div className="card bg-light border-0 text-center font-12">
                            <img src={img5} className="d-block ml-auto mr-auto w-100 border-radius-5 dv_sub_categori_icon" />
                          </div>
                          <p className="font-12 d-block text-center mt-2 ff-semibold ff-sm-regular">Packages</p>
                        </a>
                      </div>
                      <div className="col-md-4 col-sm-4 col-xs-3 col-4 mb-3">
                        <a href="#!" className="text-dark">
                          <div className="card bg-light border-0 text-center font-12">
                            <img src={img5} className="d-block ml-auto mr-auto w-100 border-radius-5 dv_sub_categori_icon" />
                          </div>
                          <p className="font-12 d-block text-center mt-2 ff-semibold ff-sm-regular">Hair Cut & blow Dry</p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-7 col-sm-12">
                <video style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '10px'
                }} loop autoPlay muted className="d-none d-md-block d-lg-block">
                  <source src={video2} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                {/* <!-- <video style="width: 100%; height: auto; border-radius: 10px;" loop autoplay muted className="d-block d-md-none d-lg-none">
                  <source src="img/mia.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video> --> */}
                <div className="row mt-4">
                  <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-12 col-sm-12">
                    <div className="dv_lg_cate_page_container border-bottom mb-3" id="scroll1">
                      {/* <!-- <img src="img/sub-cat-new/service-header.jpg" alt="" title="" className="w-100 border-radius-5 mb-4" /> --> */}
                      <h4 className="dv_subscategory_heading font-26 mt-0 mb-2 text-capitalize">beauty therapy Course </h4>
                      <a href="javascript:void(0);" className="font-14 ff-seibold mb-3 d-block" style={{ color: "#6900FF" }} data-toggle="modal" data-target="#meetexprts">Meet our educators </a>
                      {/* <!--<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline></svg> --> */}
                      <img src={img8} alt="" title="" className="w-100 border-radius-5 mb-4 " />

                      <div className="dv_subscategory_per_service_wrapper border-left border-top pl-3 pt-3">
                        <div className="dv_service_gallery_slider">
                          <img src={img8} alt="" title="" />
                        </div>
                        {/* <!-- <div className="dv_service_tag green">Regular Polish </div> --> */}
                        <div className="dv_subscategory_per_service_name mt-0">
                          DHA Beauty Therapy Course
                        </div>
                        {/* <!--<div className="dv_subscategory_per_service_rating">
                          <div className="dv_star_fixed_for_all">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="feather feather-star"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                            </svg>
                          </div>
                          <span>4.7 </span> <strong>145</strong>
                        </div>--> */}
                        <ul className="dv_sub_service_rate_ul">
                          <li>AED 15000 <span className="text-decoration-line-through "> 20000</span></li>
                          <li className="fw-bold">-</li>
                          <li>1 Year</li>
                        </ul>
                        {/* <!--<div className="dv_cashback_amount"> <img src="img/cashback-aed.png"> <span>AED 36</span></div> --> */}
                        <ul className="dv_sub_service_descrition_ul">
                          <li>Become a professional beauty therapist by Getting skilled in a wide range of treatments, cosmetic techniques, and face and body care to become a holistic beauty expert. </li>
                        </ul>
                        <button type="button" className="btn btn-default dv_add_package">add</button>
                        <button type="button" className="btn btn-default dv_edit_package">view detail</button>
                      </div>
                      <div className="dv_subscategory_per_service_wrapper border-left border-top pl-3 pt-3">
                        <div className="dv_service_gallery_slider">
                          <img src={img8} alt="" title="" />
                        </div>
                        {/* <!-- <div className="dv_service_tag green">Regular Polish </div> --> */}
                        <div className="dv_subscategory_per_service_name mt-0">
                          DHA Beauty Therapy Course
                        </div>
                        {/* <!--<div className="dv_subscategory_per_service_rating">
                          <div className="dv_star_fixed_for_all">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="feather feather-star"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                            </svg>
                          </div>
                          <span>4.7 </span> <strong>145</strong>
                        </div>--> */}
                        <ul className="dv_sub_service_rate_ul">
                          <li>AED 15000 <span className="text-decoration-line-through "> 20000</span></li>
                          <li className="fw-bold">-</li>
                          <li>1 Year</li>
                        </ul>
                        {/* <!--<div className="dv_cashback_amount"> <img src="img/cashback-aed.png"> <span>AED 36</span></div> --> */}
                        <ul className="dv_sub_service_descrition_ul">
                          <li>Become a professional beauty therapist by Getting skilled in a wide range of treatments, cosmetic techniques, and face and body care to become a holistic beauty expert. </li>
                        </ul>
                        <button type="button" className="btn btn-default dv_add_package">add</button>
                        <button type="button" className="btn btn-default dv_edit_package">view detail</button>
                      </div>
                    </div>
                    <div className="dv_lg_cate_page_container border-bottom mb-3" id="scroll2">
                      {/* <!-- <img src="img/sub-cat-new/service-header.jpg" alt="" title="" className="w-100 border-radius-5 mb-4" /> --> */}
                      <h4 className="dv_subscategory_heading font-26 mt-0 mb-2 text-capitalize">beauty therapy Course </h4>
                      <a href="javascript:void(0);" className="font-14 ff-seibold mb-3 d-block" style={{ color: "#6900FF" }} data-toggle="modal" data-target="#meetexprts">Meet our educators 2 </a>
                      {/* <!--<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline></svg> --> */}
                      <img src="img/beauty-theraphy-img.jpg" alt="" title="" className="w-100 border-radius-5 mb-4 " />
                      <div className="dv_subscategory_per_service_wrapper border-left border-top pl-3 pt-3">
                        <div className="dv_service_gallery_slider">
                          <img src={img8} alt="" title="" />
                        </div>
                        {/* <!-- <div className="dv_service_tag green">Regular Polish </div> --> */}
                        <div className="dv_subscategory_per_service_name  mt-0">
                          DHA Beauty Therapy Course
                        </div>
                        {/* <!--<div className="dv_subscategory_per_service_rating">
                          <div className="dv_star_fixed_for_all">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="feather feather-star"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                            </svg>
                          </div>
                          <span>4.7 </span> <strong>145</strong>
                        </div>--> */}
                        <ul className="dv_sub_service_rate_ul">
                          <li>AED 15000 <span className="text-decoration-line-through "> 20000</span></li>
                          <li className="fw-bold">-</li>
                          <li>1 Year</li>
                        </ul>
                        {/* <!--<div className="dv_cashback_amount"> <img src="img/cashback-aed.png"> <span>AED 36</span></div> --> */}
                        <ul className="dv_sub_service_descrition_ul">
                          <li>Become a professional beauty therapist by Getting skilled in a wide range of treatments, cosmetic techniques, and face and body care to become a holistic beauty expert. </li>
                        </ul>
                        <button type="button" className="btn btn-default dv_add_package">add</button>
                        <button type="button" className="btn btn-default dv_edit_package">view detail</button>
                      </div>
                    </div>
                    <div className="dv_lg_cate_page_container border-bottom mb-3">
                      <video style={{
                        margin: '15px 0 0 0',
                        width: '100%',
                        height: 'auto',
                        borderRadius: '10px'
                      }} loop autoPlay muted className="d-none d-md-block d-lg-block">
                        <source src={video2} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      {/* <video style={{
                        width: '100%',
                        height: 'auto',
                        borderRadius: '10px'
                      }} loop autoPlay muted className="d-block d-md-none d-lg-none">
                        <source src={video1} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video> */}
                    </div>
                    <div className="dv_lg_cate_page_container border-bottom mb-3">
                      <div className="dv_subscategory_per_service_wrapper border-left border-top pl-3 pt-3 mt-4">
                        <div className="dv_service_gallery_slider">
                          <img src={img9} alt="" title="" />
                        </div>
                        {/* <!-- <div className="dv_service_tag green">Regular Polish </div> --> */}
                        <div className="dv_subscategory_per_service_name mt-0">
                          DHA Beauty Therapy Course
                        </div>
                        {/* <!--<div className="dv_subscategory_per_service_rating">
                          <div className="dv_star_fixed_for_all">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="feather feather-star"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                            </svg>
                          </div>
                          <span>4.7 </span> <strong>145</strong>
                        </div>--> */}
                        <ul className="dv_sub_service_rate_ul">
                          <li>AED 15000 <span className="text-decoration-line-through "> 20000</span></li>
                          <li className="fw-bold">-</li>
                          <li>1 Year</li>
                        </ul>
                        {/* <!--<div className="dv_cashback_amount"> <img src="img/cashback-aed.png"> <span>AED 36</span></div> --> */}
                        <ul className="dv_sub_service_descrition_ul">
                          <li>Become a professional beauty therapist by Getting skilled in a wide range of treatments, cosmetic techniques, and face and body care to become a holistic beauty expert. </li>
                        </ul>
                        <button type="button" className="btn btn-default dv_add_package">add</button>
                        <button type="button" className="btn btn-default dv_edit_package">view detail</button>
                      </div>
                      <div className="dv_subscategory_per_service_wrapper border-left border-top pl-3 pt-3">
                        <div className="dv_service_gallery_slider">
                          <img src={img3} alt="" title="" />
                        </div>
                        {/* <!-- <div className="dv_service_tag green">Regular Polish </div> --> */}
                        <div className="dv_subscategory_per_service_name mt-0">
                          DHA Beauty Therapy Course
                        </div>
                        {/* <!--<div className="dv_subscategory_per_service_rating">
                          <div className="dv_star_fixed_for_all">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="feather feather-star"
                            >
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                            </svg>
                          </div>
                          <span>4.7 </span> <strong>145</strong>
                        </div>--> */}
                        <ul className="dv_sub_service_rate_ul">
                          <li>AED 15000 <span className="text-decoration-line-through "> 20000</span></li>
                          <li className="fw-bold">-</li>
                          <li>1 Year</li>
                        </ul>
                        {/* <!--<div className="dv_cashback_amount"> <img src="img/cashback-aed.png"> <span>AED 36</span></div> --> */}
                        <ul className="dv_sub_service_descrition_ul">
                          <li>Become a professional beauty therapist by Getting skilled in a wide range of treatments, cosmetic techniques, and face and body care to become a holistic beauty expert. </li>
                        </ul>
                        <button type="button" className="btn btn-default dv_add_package">add</button>
                        <button type="button" className="btn btn-default dv_edit_package">view detail</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-5 col-xl-5 col-lg-5 hide-mobile">
                    <div className="sticky-top sticky-offset">

                      {/* <!-- empty cart start --> */}

                      {/* <!-- <div className="card border p-3 rounded mb-3">
                        <svg width="100" height="100" viewBox="0 0 128 96" fill="none" xmlns="http://www.w3.org/2000/svg" className="d-block ml-auto mr-auto text-center"><path fill-rule="evenodd" clip-rule="evenodd" d="M77.5 34a.5.5 0 01-.5.5h-2.5V30a.5.5 0 011 0v3.5H77a.5.5 0 01.5.5z" fill="#FFD47F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M79.5 34a.5.5 0 01-.5.5h-2.5V30a.5.5 0 011 0v3.5H79a.5.5 0 01.5.5z" fill="#FFD47F"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M73 69a1 1 0 011 1v1H61a1 1 0 00-1 1v7h-2v-7a3 3 0 013-3h12zm3 2h9a1 1 0 011 1v7h2v-7a3 3 0 00-3-3h-9.17c.11.313.17.65.17 1v1z" fill="#E2E2E2"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M60 60v10h-2V60h2z" fill="#E2E2E2"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M72 72a1 1 0 00-1-1H47a1 1 0 00-1 1v7h-2v-7a3 3 0 013-3h24a3 3 0 013 3v7h-2v-7z" fill="#E2E2E2"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M74 70v9h-2v-9h2z" fill="#E2E2E2"></path><path d="M50 79a5 5 0 11-10 0 5 5 0 0110 0zM64 79a5 5 0 11-10 0 5 5 0 0110 0zM78 79a5 5 0 11-10 0 5 5 0 0110 0zM92 79a5 5 0 11-10 0 5 5 0 0110 0z" fill="#757575"></path><path d="M48 79a3 3 0 11-6 0 3 3 0 016 0zM62 79a3 3 0 11-6 0 3 3 0 016 0zM76 79a3 3 0 11-6 0 3 3 0 016 0zM90 79a3 3 0 11-6 0 3 3 0 016 0z" fill="#EEE"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M74 60v10h-2V60h2z" fill="#E2E2E2"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M30.832 25.445l8 12-1.664 1.11-8-12 1.664-1.11zm16 0l8 12-1.664 1.11-8-12 1.664-1.11z" fill="#CBCBCB"></path><path d="M44 34h52l-5.694 30.369A2 2 0 0188.34 66H53.32a4 4 0 01-3.932-3.263L44 34z" fill="#CBCBCB"></path><path d="M34 34h48l-6 32H41.66a2 2 0 01-1.966-1.631L34 34z" fill="#E2E2E2"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M46 40h-2v7.059h2V40zm0 12.941h-2V60h2v-7.059zM50 40h2v7.059h-2V40zm2 12.941h-2V60h2v-7.059zM56 40h2v7.059h-2V40zm2 12.941h-2V60h2v-7.059zM62 40h2v7.059h-2V40zm2 12.941h-2V60h2v-7.059zM68 40h2v7.059h-2V40zm2 12.941h-2V60h2v-7.059z" fill="#fff"></path><path d="M24 24h28v4H24v-4z" fill="#97674E"></path><path d="M78 20h6v4a6 6 0 01-6 6V20zM78 15a3 3 0 116 0v5h-6v-5zM78 30V18L66 30h12z" fill="#997BED"></path><path d="M88 16l-4-1v2l4-1z" fill="#FFD47F"></path><path d="M81 15a1 1 0 112 0 1 1 0 01-2 0z" fill="#0F0F0F"></path><path d="M72 30h-6l12-12v6a6 6 0 01-6 6z" fill="#6E42E5"></path></svg>
                        <span className="text-muted font-12 d-block text-center">No items in your cart </span>
                      </div> --> */}

                      {/* <!-- empty cart end --> */}

                      {/* <!-- dv_cart_height_if_exceed --> */}
                      <div className="card border-radius-10 p-3 rounded mb-0 dv_cart_height_if_exceed">
                        <h4 className="ff-bold font-20">Cart </h4>
                        <div className="dv_all_services_cart_wrapper">
                          <div className="row border-bottom pb-2 pt-2 m-0">
                            <div className="col-md-6 pl-0 font-14 text-capitalize">
                              DHA Beauty Therapy Course
                            </div>
                            <div className="col-md-3">
                              <div className="dv_plus_minus_wrap top-0">
                                <div className="dv_btn_loading_wrap"><div className="dv_btn_loading"></div></div>
                                <div className="input-group">
                                  <span className="input-group-btn">
                                    <button type="button" className="btn btn-default btn-number" data-type="minus" data-field="quant[1]">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-minus"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                    </button>
                                  </span>
                                  <input type="text" name="quant[1]" className="form-control input-number" value="10" min="1" max="10" />
                                  <span className="input-group-btn">
                                    <button type="button" className="btn btn-default btn-number" data-type="plus" data-field="quant[1]">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                    </button>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-3 p-0">
                              <div className="dv_price_new_cut text-right font-12">
                                AED 15000 <span className="d-block">AED 159</span>
                              </div>
                            </div>
                          </div>

                          <div className="row border-bottom pb-2 pt-2 m-0">
                            <div className="col-md-6  pl-0 font-14 text-capitalize">
                              ITEC Beauty Therapy Course
                            </div>
                            <div className="col-md-3">
                              <div className="dv_plus_minus_wrap top-0">
                                <div className="dv_btn_loading_wrap"><div className="dv_btn_loading"></div></div>
                                <div className="input-group">
                                  <span className="input-group-btn">
                                    <button type="button" className="btn btn-default btn-number" data-type="minus" data-field="quant[1]">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-minus"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                    </button>
                                  </span>
                                  <input type="text" name="quant[1]" className="form-control input-number" value="10" min="1" max="10" />
                                  <span className="input-group-btn">
                                    <button type="button" className="btn btn-default btn-number" data-type="plus" data-field="quant[1]">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                    </button>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-3 p-0">
                              <div className="dv_price_new_cut text-right">
                                AED 15000 <span className="d-block">AED 159</span>
                              </div>
                            </div>
                          </div>
                          <div className="row border-bottom pb-2 pt-2  m-0">
                            <div className="col-md-6  pl-0 font-14 text-capitalize">
                              ITEC Beauty Therapy Course
                            </div>
                            <div className="col-md-3">
                              <div className="dv_plus_minus_wrap top-0">
                                <div className="dv_btn_loading_wrap"><div className="dv_btn_loading"></div></div>
                                <div className="input-group">
                                  <span className="input-group-btn">
                                    <button type="button" className="btn btn-default btn-number" data-type="minus" data-field="quant[1]">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-minus"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                    </button>
                                  </span>
                                  <input type="text" name="quant[1]" className="form-control input-number" value="10" min="1" max="10" />
                                  <span className="input-group-btn">
                                    <button type="button" className="btn btn-default btn-number" data-type="plus" data-field="quant[1]">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                    </button>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-3 p-0">
                              <div className="dv_price_new_cut text-right">
                                AED 15000 <span className="d-block">AED 159</span>
                              </div>
                            </div>
                          </div>
                          <div className="row border-bottom pb-2 pt-2 m-0">
                            <div className="col-md-6  pl-0 font-14 text-capitalize">
                              ITEC Beauty Therapy Course
                            </div>
                            <div className="col-md-3">
                              <div className="dv_plus_minus_wrap top-0">
                                <div className="dv_btn_loading_wrap"><div className="dv_btn_loading"></div></div>
                                <div className="input-group">
                                  <span className="input-group-btn">
                                    <button type="button" className="btn btn-default btn-number" data-type="minus" data-field="quant[1]">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-minus"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                    </button>
                                  </span>
                                  <input type="text" name="quant[1]" className="form-control input-number" value="10" min="1" max="10" />
                                  <span className="input-group-btn">
                                    <button type="button" className="btn btn-default btn-number" data-type="plus" data-field="quant[1]">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                    </button>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-3 p-0">
                              <div className="dv_price_new_cut text-right">
                                AED 15000 <span className="d-block">AED 159</span>
                              </div>
                            </div>
                          </div>
                          <div className="row border-bottom pb-2 pt-2 m-0">
                            <div className="col-md-6  pl-0 font-14 text-capitalize">
                              ITEC Beauty Therapy Course
                            </div>
                            <div className="col-md-3">
                              <div className="dv_plus_minus_wrap top-0">
                                <div className="dv_btn_loading_wrap"><div className="dv_btn_loading"></div></div>
                                <div className="input-group">
                                  <span className="input-group-btn">
                                    <button type="button" className="btn btn-default btn-number" data-type="minus" data-field="quant[1]">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-minus"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                    </button>
                                  </span>
                                  <input type="text" name="quant[1]" className="form-control input-number" value="10" min="1" max="10" />
                                  <span className="input-group-btn">
                                    <button type="button" className="btn btn-default btn-number" data-type="plus" data-field="quant[1]">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                    </button>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-3 p-0">
                              <div className="dv_price_new_cut text-right">
                                AED 15000 <span className="d-block">AED 159</span>
                              </div>
                            </div>
                          </div>
                          <div className="row border-bottom pb-2 pt-2 m-0">
                            <div className="col-md-6  pl-0 font-14 text-capitalize">
                              ITEC Beauty Therapy Course
                            </div>
                            <div className="col-md-3">
                              <div className="dv_plus_minus_wrap top-0">
                                <div className="dv_btn_loading_wrap"><div className="dv_btn_loading"></div></div>
                                <div className="input-group">
                                  <span className="input-group-btn">
                                    <button type="button" className="btn btn-default btn-number" data-type="minus" data-field="quant[1]">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-minus"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                    </button>
                                  </span>
                                  <input type="text" name="quant[1]" className="form-control input-number" value="10" min="1" max="10" />
                                  <span className="input-group-btn">
                                    <button type="button" className="btn btn-default btn-number" data-type="plus" data-field="quant[1]">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                    </button>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-3 p-0">
                              <div className="dv_price_new_cut text-right">
                                AED 15000 <span className="d-block">AED 159</span>
                              </div>
                            </div>
                          </div>
                          <div className="row border-bottom pb-2 pt-2 m-0">
                            <div className="col-md-6  pl-0 font-14 text-capitalize">
                              ITEC Beauty Therapy Course
                            </div>
                            <div className="col-md-3">
                              <div className="dv_plus_minus_wrap top-0">
                                <div className="dv_btn_loading_wrap"><div className="dv_btn_loading"></div></div>
                                <div className="input-group">
                                  <span className="input-group-btn">
                                    <button type="button" className="btn btn-default btn-number" data-type="minus" data-field="quant[1]">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-minus"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                    </button>
                                  </span>
                                  <input type="text" name="quant[1]" className="form-control input-number" value="10" min="1" max="10" />
                                  <span className="input-group-btn">
                                    <button type="button" className="btn btn-default btn-number" data-type="plus" data-field="quant[1]">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                    </button>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-3 p-0">
                              <div className="dv_price_new_cut text-right">
                                AED 15000 <span className="d-block">AED 159</span>
                              </div>
                            </div>
                          </div>
                          <div className="row border-bottom pb-2 pt-2 m-0">
                            <div className="col-md-6  pl-0 font-14 text-capitalize">
                              ITEC Beauty Therapy Course
                            </div>
                            <div className="col-md-3">
                              <div className="dv_plus_minus_wrap top-0">
                                <div className="dv_btn_loading_wrap"><div className="dv_btn_loading"></div></div>
                                <div className="input-group">
                                  <span className="input-group-btn">
                                    <button type="button" className="btn btn-default btn-number" data-type="minus" data-field="quant[1]">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-minus"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                    </button>
                                  </span>
                                  <input type="text" name="quant[1]" className="form-control input-number" value="10" min="1" max="10" />
                                  <span className="input-group-btn">
                                    <button type="button" className="btn btn-default btn-number" data-type="plus" data-field="quant[1]">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                    </button>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-3 p-0">
                              <div className="dv_price_new_cut text-right">
                                AED 15000 <span className="d-block">AED 159</span>
                              </div>
                            </div>
                          </div>
                          <div className="row border-bottom pb-2 pt-2 m-0">
                            <div className="col-md-6  pl-0 font-14 text-capitalize">
                              ITEC Beauty Therapy Course
                            </div>
                            <div className="col-md-3">
                              <div className="dv_plus_minus_wrap top-0">
                                <div className="dv_btn_loading_wrap"><div className="dv_btn_loading"></div></div>
                                <div className="input-group">
                                  <span className="input-group-btn">
                                    <button type="button" className="btn btn-default btn-number" data-type="minus" data-field="quant[1]">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-minus"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                    </button>
                                  </span>
                                  <input type="text" name="quant[1]" className="form-control input-number" value="10" min="1" max="10" />
                                  <span className="input-group-btn">
                                    <button type="button" className="btn btn-default btn-number" data-type="plus" data-field="quant[1]">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                    </button>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-3 p-0">
                              <div className="dv_price_new_cut text-right">
                                AED 15000 <span className="d-block">AED 159</span>
                              </div>
                            </div>
                          </div>
                          <div className="row border-bottom pb-2 pt-2 m-0">
                            <div className="col-md-6  pl-0 font-14 text-capitalize">
                              ITEC Beauty Therapy Course
                            </div>
                            <div className="col-md-3">
                              <div className="dv_plus_minus_wrap top-0">
                                <div className="dv_btn_loading_wrap"><div className="dv_btn_loading"></div></div>
                                <div className="input-group">
                                  <span className="input-group-btn">
                                    <button type="button" className="btn btn-default btn-number" data-type="minus" data-field="quant[1]">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-minus"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                    </button>
                                  </span>
                                  <input type="text" name="quant[1]" className="form-control input-number" value="10" min="1" max="10" />
                                  <span className="input-group-btn">
                                    <button type="button" className="btn btn-default btn-number" data-type="plus" data-field="quant[1]">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                    </button>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-3 p-0">
                              <div className="dv_price_new_cut text-right">
                                AED 15000 <span className="d-block">AED 159</span>
                              </div>
                            </div>
                          </div>
                          <div className="row border-bottom pb-2 pt-2 m-0">
                            <div className="col-md-6  pl-0 font-14 text-capitalize">
                              ITEC Beauty Therapy Course
                            </div>
                            <div className="col-md-3">
                              <div className="dv_plus_minus_wrap top-0">
                                <div className="dv_btn_loading_wrap"><div className="dv_btn_loading"></div></div>
                                <div className="input-group">
                                  <span className="input-group-btn">
                                    <button type="button" className="btn btn-default btn-number" data-type="minus" data-field="quant[1]">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-minus"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                    </button>
                                  </span>
                                  <input type="text" name="quant[1]" className="form-control input-number" value="10" min="1" max="10" />
                                  <span className="input-group-btn">
                                    <button type="button" className="btn btn-default btn-number" data-type="plus" data-field="quant[1]">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                    </button>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-3 p-0">
                              <div className="dv_price_new_cut text-right">
                                AED 15000 <span className="d-block">AED 159</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row border-bottom pb-2 pt-2 m-0 dv_cut_price_hide_heading">
                          <div className="col-md-6 pl-0 font-14 text-capitalize">
                            DHA Beauty Therapy Course
                          </div>
                          <div className="col-md-3">
                            <div className="dv_plus_minus_wrap top-0">
                              <div className="dv_btn_loading_wrap"><div className="dv_btn_loading"></div></div>
                              <div className="input-group">
                                <span className="input-group-btn">
                                  <button type="button" className="btn btn-default btn-number" data-type="minus" data-field="quant[1]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-minus"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                  </button>
                                </span>
                                <input type="text" name="quant[1]" className="form-control input-number" value="10" min="1" max="10" />
                                <span className="input-group-btn">
                                  <button type="button" className="btn btn-default btn-number" data-type="plus" data-field="quant[1]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                  </button>
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-3 p-0">
                            <div className="dv_cut_price_hide text-right">
                              <span className="fw-bold">AED 15000</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="p-3 dv_congratulation_cart border mb-0 border-top-0">
                        <span><strong>Congratulations!</strong> AED170 saved so far!</span>
                        <button type="button" className="btn btn-default dv_cart_contnue_btn_new">
                          <span className="font-12"><strong>AED 650</strong> <div>AED 250</div></span> View Cart
                        </button>
                      </div>


                      {/* <!-- Salon address start --> */}

                      <div className="card border p-3 mt-0 rounded">
                        <h4 className="ff-bold font-20">Mirrors Institute of Aesthetics </h4>
                        <div className="dv_star_new mb-3 pt-2 font-14">
                          <span>4.8</span>
                          <ul>
                            <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#FFA41B" stroke="#FFA41B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-star"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" /></svg></li>
                            <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#FFA41B" stroke="#FFA41B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-star"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" /></svg></li>
                            <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#FFA41B" stroke="#FFA41B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-star"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" /></svg></li>
                            <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#FFA41B" stroke="#FFA41B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-star"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" /></svg></li>
                            <li>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFA41B" className="bi bi-star-half" viewBox="0 0 16 16"> <path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z" /> </svg>
                            </li>
                            {/* <!-- <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#FFA41B" stroke="#FFA41B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-star"><path style="fill: linear-gradient(to left, #ff0000 50%, #0000ff 50%) !important;" stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" /></svg></li> --> */}
                          </ul>
                          <a href="#!">(3.1k)</a>
                        </div>
                        <div className="dv_salontiming_open_new">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-clock"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 7v5l3 3" /></svg> <span>open </span> until 08:00 PM
                        </div>
                        <div className="dv_salonaddress_location_new">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-map-pin"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" /></svg> Buhaleeba plaza, Dominos Pizza Building 3rd Floor - Al Muraqqabat - Dubai <a href="#!">Get directions </a>
                        </div>
                        <div className="row">
                          <div className="col-md-6 pr-0">
                            <a href="#!" className="font-12 d-block text-dark" style={{
                              color: '#6900FF',
                              fontFamily: 'OpenSauceOneBold'
                            }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-phone-call"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" /><path d="M15 7a2 2 0 0 1 2 2" /><path d="M15 3a6 6 0 0 1 6 6" /></svg> 04 204 9494 </a>
                          </div>
                          <div className="col-md-6 pr-0">
                            <a href="#!" className="font-12 d-block text-dark" style={{
                              color: '#6900FF',
                              fontFamily: 'OpenSauceOneBold'
                            }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#25D366" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" /><path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" /></svg> 056 403 2900 </a>
                          </div>
                        </div>
                      </div>

                      {/* <!-- Salon address end --> */}






                      {/* <!-- cart added start --> */}

                      {/* <!-- <div className="card border-0 rounded mb-3">
                        <h4 className="ff-bold font-18">Payment types </h4>
                        <img src="img/payment-types.jpg" className="w-100">
                      </div> --> */}

                      {/* <!-- empty added end --> */}

                    </div>
                  </div>


                </div>
              </div>
            </div>

            <hr className="mt-5 mb-5 w-100" />
            <div className="row">
              <div className="col-md-12 mb-4">
                <h2 className="font-24 ff-bold mb-3 text-capitalize">Frequently asked questions</h2>
                <div className="accordion" id="accordionExample">
                  <div className="card">
                    <div className="card-head" id="headingTwo">
                      <h2 className="mb-0 collapsed font-14 ff-bold p-4 dv_accodion_h2" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Can I bleach my hair?
                      </h2>
                    </div>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                      <div className="card-body font-13 ff-bold text-muted border-top">
                        Yes, but we recommend our clients that the hair not be bleached more than 2 times as it may cause hair damage.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-head" id="headingThree">
                      <h2 className="mb-0 collapsed font-14 ff-bold p-4 dv_accodion_h2" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        How often should I deep condition?
                      </h2>
                    </div>
                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                      <div className="card-body font-13 ff-bold text-muted border-top">
                        Deep condition at least once a month. Gently shampoo your hair, and apply the deep conditioner to scalp and whole hairs, leave it for 20 minutes and wash well.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-head" id="headingFour">
                      <h2 className="mb-0 collapsed font-14 ff-bold p-4 dv_accodion_h2" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        Why is deep conditioning important?
                      </h2>
                    </div>
                    <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                      <div className="card-body font-13 ff-bold text-muted border-top">
                        Deep conditioning provides more strength, moisturize hairs, it also restore natural oils and help to eliminate dry hairs.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-head" id="headingFour1">
                      <h2 className="mb-0 collapsed font-14 ff-bold p-4 dv_accodion_h2" data-toggle="collapse" data-target="#collapseFour1" aria-expanded="false" aria-controls="collapseFour1">
                        How do I determine the right hair care system for me?
                      </h2>
                    </div>
                    <div id="collapseFour1" className="collapse" aria-labelledby="headingFour1" data-parent="#accordionExample">
                      <div className="card-body font-13 ff-bold text-muted border-top">
                        See how your hair reacts to the product. Does your hair look shiny, feel smooth or hair fall? Or consult with your stylist.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-head" id="headingFour2">
                      <h2 className="mb-0 collapsed font-14 ff-bold p-4 dv_accodion_h2" data-toggle="collapse" data-target="#collapseFour2" aria-expanded="false" aria-controls="collapseFour2">
                        How often should I shampoo?
                      </h2>
                    </div>
                    <div id="collapseFour2" className="collapse" aria-labelledby="headingFour2" data-parent="#accordionExample">
                      <div className="card-body font-13 ff-bold text-muted border-top">
                        It is suggested that the hair should be shampooed once in a week, to help expel dead skin cells. Your hair may require shampooing relying upon your lifestyle like exercise, swimming, or other open air practice
                        because of sweat, dust, soil, and so on. Do not use hard water because it remove natural oils from hair which can cause hair dryness.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-head" id="headingFour4">
                      <h2 className="mb-0 collapsed font-14 ff-bold p-4 dv_accodion_h2" data-toggle="collapse" data-target="#collapseFour4" aria-expanded="false" aria-controls="collapseFour4">
                        Can shampooing with very hot water damage my hair?
                      </h2>
                    </div>
                    <div id="collapseFour4" className="collapse" aria-labelledby="headingFour4" data-parent="#accordionExample">
                      <div className="card-body font-13 ff-bold text-muted border-top">
                        Yes, because it can expel natural oils & irritate your scalp. Warm water is always best when shampooing, and you can use slightly cooler water for your last rinse.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-head" id="headingFour5">
                      <h2 className="mb-0 collapsed font-14 ff-bold p-4 dv_accodion_h2" data-toggle="collapse" data-target="#collapseFour5" aria-expanded="false" aria-controls="collapseFour5">
                        Can I condition my hair too much?
                      </h2>
                    </div>
                    <div id="collapseFour5" className="collapse" aria-labelledby="headingFour5" data-parent="#accordionExample">
                      <div className="card-body font-13 ff-bold text-muted border-top">
                        Yes, more conditioning can weight the hair down by covering the surface of the hair. This can obstruct appropriate proper styling & affect the capacity of the hair to "hold a twist". Choose quality, light-weight
                        products.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-head" id="headingFour7">
                      <h2 className="mb-0 collapsed font-14 ff-bold p-4 dv_accodion_h2" data-toggle="collapse" data-target="#collapseFour7" aria-expanded="false" aria-controls="collapseFour7">
                        It is bad to switch from relaxed hair to hair styles frequently?
                      </h2>
                    </div>
                    <div id="collapseFour7" className="collapse" aria-labelledby="headingFour7" data-parent="#accordionExample">
                      <div className="card-body font-13 ff-bold text-muted border-top">
                        Actually no, but you have to take care that your hair should not under “strain” or a tight weave for long periods of time.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- <div className="col-md-4 mb-4">
                  <h2 className="font-24 ff-bold mb-3 text-capitalize">Hair Salon For Women in Dubai</h2>
                  <p className="d-block text-muted font-12 mb-5">Urban Company is your one-stop destination for expert local services in Dubai. Get dozens of trusted professionals near you to take care of all your home and beauty needs</p>
                  <h2 className="font-24 ff-bold mb-3">You are here</h2>
                  <ul className="dv_bredcrumb_ul_links">
                    <li><a href="#!">Home</a> /</li>
                    <li><a href="#!">Dubai</a> /</li>
                    <li><a href="#!">Hair Salon For Women in Dubai</a></li>
                  </ul>
                </div> --> */}
            </div>
            <div className="row mt-5 mb-5">
              <div className="col-md-12 mb-4">
                <img src={img6} className="w-100" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 mb-4">
                <h2 className="font-20 ff-bold mb-3 text-capitalize">CIDESCO Beauty Therapy Course </h2>
                <p className="d-block text-muted font-14 mb-5">
                  The CIDESCO diploma is the world’s most prestigious qualification in the field of Aesthetics and Beauty Therapy, and is the only qualification that is truly international allowing successful candidates to work worldwide. Since 1946 the CIDESCO qualification has set standards that have been recognized and respected across five continents. Employers value the CIDESCO qualification because it proves that you have attained the very highest standard of expertise and professionalism in Aesthetics and beauty Therapy and we are proud to provide training and education in a wide range of beauty to produce graduates of the greatest.
                </p>
                <p className="d-block text-muted font-14 mb-3">
                  The CIDESCO Diploma is a mark of high achievement, fully opening up a world of career opportunities to graduates. If you are considering advancing your career in the beauty or spa industry we welcome you to take a look at our portfolio of Diplomas. Join us to enhance your expertise, gain industry-recognized qualifications, and unlock new career opportunities in the beauty industry with Mirrors Institute of Aesthetics.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 mb-4">
                <h2 className="font-18 ff-bold mb-2 pb-2 text-capitalize text-secondary">Course Benefits: </h2>
                <h2 className="font-20 ff-bold mb-2 text-capitalize">CIDESCO Beauty Therapy Diploma, MIA Certificate </h2>
                <p className="d-block text-muted font-14 mb-3"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-check"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l5 5l10 -10" /></svg> Qualifications are highly respected and recognized worldwide</p>
                <p className="d-block text-muted font-14 mb-3"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-check"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l5 5l10 -10" /></svg> Courses cover a wide range of topics, including skincare, makeup, body therapy, and salon management.</p>
                <p className="d-block text-muted font-14 mb-3"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-check"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l5 5l10 -10" /></svg> Maintain rigorous standards in terms of facilities, curriculum, and teaching quality.</p>
                <p className="d-block text-muted font-14 mb-3"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-check"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l5 5l10 -10" /></svg> Encourages lifelong learning and professional development</p>
                <p className="d-block text-muted font-14 mb-3"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-check"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l5 5l10 -10" /></svg> Hands-on training and practice help you start your career in the beauty industry.</p>
                <p className="d-block text-muted font-14 mb-3"> CIDESCO course provides you with a solid foundation in beauty therapy, equipping you with the expertise needed to thrive in the industry. Whether you're starting your career or looking to advance to higher levels, CIDESCO certification can be a valuable asset.</p>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12 mb-4">
                <h2 className="font-20 ff-bold mb-3 text-capitalize">Opportunities/your future career </h2>
                <p className="d-block text-muted font-14 mb-3">
                  CIDESCO Beauty Therapy Course offers a wide range of career opportunities, catering to individuals interested in skincare, cosmetics, and overall wellness. With our comprehensive training and qualifications, you can pursue a variety of fascinating career options in the beauty therapy industry. CIDESCO Diploma is the world’s prestigious qualification of Aesthetics and Beauty Therapy, which has set international standards since 1957. Some possible career paths include:
                </p>
              </div>
            </div>


            <div className="row">
              <div className="col-md-12 mb-4">
                <p className="d-block text-muted font-14 mb-3"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-check"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l5 5l10 -10" /></svg> Beauty Therapist/Esthetician </p>
                <p className="d-block text-muted font-14 mb-3"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-check"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l5 5l10 -10" /></svg> Cosmetic/Beauty Consultant </p>
                <p className="d-block text-muted font-14 mb-3"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-check"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l5 5l10 -10" /></svg> Beauty Educator/Trainer</p>
                <p className="d-block text-muted font-14 mb-3"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-check"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l5 5l10 -10" /></svg> Spa Manager</p>
                <p className="d-block text-muted font-14 mb-3"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-check"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l5 5l10 -10" /></svg> Wellness Coach</p>
                <p className="d-block text-muted font-14 mb-3"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-check"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l5 5l10 -10" /></svg> Salon/Spa Owner</p>
                <p className="d-block text-muted font-14 mb-3"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-check"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l5 5l10 -10" /></svg> Beauty Blogger/Influencer</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 mb-4">
                <h2 className="font-20 ff-bold mb-3 text-capitalize">Requirements to Enroll </h2>
                <p className="d-block text-muted font-14 mb-3">
                  Educational Background: High school diploma or equivalent is often required.
                </p>
                <p className="d-block text-muted font-14 mb-3">
                  Fees and Tuition: If you're interested, a deposit is necessary to reserve your spot. All fees are due in advance before starting all courses, and payment options with post-dated cheques are available.
                </p>
                <h2 className="font-20 ff-bold mb-3 pt-2 text-capitalize">Installment plan available with tabby </h2>
              </div>
            </div>


          </div>
        </div>
      </div>
    </>
  )
}

export default Data
