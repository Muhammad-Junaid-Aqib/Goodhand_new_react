import logo from '../../assets/mirrors-home-logo-black-svg.svg'
import '../../css/swiper-bundle.min.css'
import '../../css/style.css'
import '../../css/responsive.css'
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <header className="text-left border-bottom border-b pb-2 pt-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 hide-mobile cursor-pointer" 
            onClick={() => {
              navigate('/')
            }}
            >
              <img
                src={logo}
                className="mt-3 mb-3 w-70"
              />
            </div>
            <div className="col-md-3 col-sm-12 col-xs-12 col-12">
              <div className="position-relative dv_search_services_cat_new d-none d-sm-none d-md-block d-lg-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-map-pin"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                  <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                </svg>
                <input
                  type="text"
                  className="form-control dv_search_inut_new bg-transparent"
                  name=""
                  placeholder="Home, 101,Sheikh Khalifa Bin Zayed St - Bur Dubai - Dubai - United Arab Emirates"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-chevron-down"
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  {" "}
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />{" "}
                  <path d="M6 9l6 6l6 -6" />{" "}
                </svg>
              </div>
              <div className="position-relative dv_search_services_cat_new d-block d-sm-display d-md-none d-lg-none">
                <strong className="ff-bold">Home </strong>
                <p className="d-block ff-regular font-12 text-muted d-inline-block text-truncate w-80">
                  101,Sheikh Khalifa Bin Zayed St - Bur Dubai - Dubai - United
                  Arab Emirates
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#000000"
                    style={{ position: "absolute", right: "17%" }}
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M6 9l6 6l6 -6" />
                  </svg>
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 col-xs-12 col-12">
              <div className="position-relative dv_search_services_cat_new d-none d-sm-none d-md-block d-lg-block">
                <input
                  type="text"
                  className="form-control dv_search_inut_new"
                  name=""
                  placeholder="search for 'mani-pedi'"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-search"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                  <path d="M21 21l-6 -6" />
                </svg>
                <div className="dv_loading_search d-none"></div>
                <ul className="dv_search_showing_services_ul dv_search_desktop_drp d-none">
                  {/* <li>
                  <div className="dv_no_result text-center">
                    <img style={{width: "70px", margin: "30px 0"}}   src="img/empty-search.svg"/>
                    <h5>no result found </h5>
                    <p>Please check the spelling or try a different service </p>
                  </div>
                </li>  */}

                  <li>
                    <a href="#!">
                      <div className="dv_service_img_wrap_search">
                        <img src="img/nail.webp" />
                        <div className="dv_service_img_txt_search">
                          <h4>chin &amp; jawlin </h4>
                          <div className="dv_subscategory_per_service_rating">
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
                            <span className="d-block">4.7 </span>{" "}
                            <strong>145</strong>{" "}
                            <i className="dv_search_service_price">AED 999</i>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <div className="dv_service_img_wrap_search">
                        <img src="img/nail.webp" />
                        <div className="dv_service_img_txt_search">
                          <h4>chin &amp; jawlin </h4>
                          <div className="dv_subscategory_per_service_rating">
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
                            <span className="d-block">4.7 </span>{" "}
                            <strong>145</strong>{" "}
                            <i className="dv_search_service_price">AED 999</i>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <div className="dv_service_img_wrap_search">
                        <img src="img/nail.webp" />
                        <div className="dv_service_img_txt_search">
                          <h4>chin &amp; jawlin </h4>
                          <div className="dv_subscategory_per_service_rating">
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
                            <span className="d-block">4.7 </span>{" "}
                            <strong>145</strong>{" "}
                            <i className="dv_search_service_price">AED 999</i>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <div className="dv_service_img_wrap_search">
                        <img src="img/nail.webp" />
                        <div className="dv_service_img_txt_search">
                          <h4>chin &amp; jawlin </h4>
                          <div className="dv_subscategory_per_service_rating">
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
                            <span className="d-block">4.7 </span>{" "}
                            <strong>145</strong>{" "}
                            <i className="dv_search_service_price">AED 999</i>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <div className="dv_service_img_wrap_search">
                        <img src="img/nail.webp" />
                        <div className="dv_service_img_txt_search">
                          <h4>chin &amp; jawlin </h4>
                          <div className="dv_subscategory_per_service_rating">
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
                            <span className="d-block">4.7 </span>{" "}
                            <strong>145</strong>{" "}
                            <i className="dv_search_service_price">AED 999</i>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <div className="dv_service_img_wrap_search">
                        <img src="img/nail.webp" />
                        <div className="dv_service_img_txt_search">
                          <h4>chin &amp; jawlin </h4>
                          <div className="dv_subscategory_per_service_rating">
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
                            <span className="d-block">4.7 </span>{" "}
                            <strong>145</strong>{" "}
                            <i className="dv_search_service_price">AED 999</i>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <div className="dv_service_img_wrap_search">
                        <img src="img/nail.webp" />
                        <div className="dv_service_img_txt_search">
                          <h4>Salon Delight - Take any 3 services </h4>
                          <div className="dv_subscategory_per_service_rating">
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
                            <span className="d-block">4.7 </span>{" "}
                            <strong>145</strong>{" "}
                            <i className="dv_search_service_price">AED 999</i>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <div className="dv_service_img_wrap_search">
                        <img src="img/nail.webp" />
                        <div className="dv_service_img_txt_search">
                          <h4>chin &amp; jawlin </h4>
                          <div className="dv_subscategory_per_service_rating">
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
                            <span className="d-block">4.7 </span>{" "}
                            <strong>145</strong>{" "}
                            <i className="dv_search_service_price">AED 999</i>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <div className="dv_service_img_wrap_search">
                        <img src="img/nail.webp" />
                        <div className="dv_service_img_txt_search">
                          <h4>chin &amp; jawlin </h4>
                          <div className="dv_subscategory_per_service_rating">
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
                            <span className="d-block">4.7 </span>{" "}
                            <strong>145</strong>{" "}
                            <i className="dv_search_service_price">AED 999</i>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="position-relative dv_search_services_cat_new d-block d-sm-display d-md-none d-lg-none">
                <input
                  type="text"
                  className="form-control dv_search_inut_new"
                  name=""
                  placeholder="search for 'mani-pedi'"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-search"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                  <path d="M21 21l-6 -6" />
                </svg>
              </div>
            </div>
            <div className="col-md-2 col-sm-12 col-xs-12 col-12 d-sm-none d-xs-none d-none d-md-block">
              <button
                type="button"
                className="btn btn-dafault dv_login_new outline-none shadow-none"
                data-toggle="modal"
                data-target="#dvotpmodal"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
