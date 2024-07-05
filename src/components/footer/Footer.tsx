import React from 'react'
import '../../css/swiper-bundle.min.css'
import '../../css/style.css'
import '../../css/responsive.css'
import fb from '../../assets/social-link/fb.png'
import insta from '../../assets/social-link/insta.png'
import twitter from '../../assets/social-link/twitter.png'
import tiktok from '../../assets/social-link/tiktok.png'
import youtube from '../../assets/social-link/youtube.png'
import share from '../../assets/social-link/share.png'
import appstore from '../../assets/appstore.svg'
import playstore from '../../assets/playstore.svg'


const Footer = () => {
    return (
        <>
            <div className="dv_footer_home">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2 col-sm-6 col-xs-6 col-6">
                            <h3 className="dv_social_links_h3">Useful Links </h3>
                            <ul className="dv_footer_home_links">
                                <li><a href="/about">About Us</a></li>
                                <li><a href="/services">Prices</a></li>
                                <li><a href="#!">Team</a></li>
                                <li><a href="#!">Gallery</a></li>
                                <li><a href="#!">Contact Us</a></li>
                                <li><a href="#!">Safety First</a></li>
                                <li><a href="#!">Blog</a></li>
                                <li><a href="#!">Privacy Policy</a></li>
                                <li><a href="#!">Terms & Conditions</a></li>
                                <li><a href="#!">Near me</a></li>
                            </ul>
                        </div>
                        <div className="col-md-2 col-sm-6 col-xs-6 col-6">
                            <h3 className="dv_social_links_h3">Salon Category </h3>
                            <ul className="dv_footer_home_links">
                                <li><a href="#!">Hair Services</a></li>
                                <li><a href="#!">Nail Services</a></li>
                                <li><a href="#!">Spa & Massage</a></li>
                                <li><a href="#!">Facial</a></li>
                                <li><a href="#!">Permanent Makeup</a></li>
                                <li><a href="#!">Wax & Threading</a></li>
                                <li><a href="#!">Eyelash & Extensions</a></li>
                                <li><a href="#!">Makeup & Henna</a></li>
                                <li><a href="#!">Hair extensions</a></li>
                            </ul>
                        </div>
                        <div className="col-md-2 col-sm-6 col-xs-6 col-6 mb-4">
                            <h3 className="dv_social_links_h3">Packages </h3>
                            <ul className="dv_footer_home_links">
                                <li><a href="#!">Hair</a></li>
                                <li><a href="#!">Keratin</a></li>
                                <li><a href="#!">SPMU</a></li>
                                <li><a href="#!">Hair Extension </a></li>
                            </ul>
                        </div>
                        <div className="col-md-2 col-sm-6 col-xs-6 col-6 mb-4">
                            <h3 className="dv_social_links_h3">Salon Locations </h3>
                            <ul className="dv_footer_home_links">
                                <li><a href="#!">Al Muraqqabat</a></li>
                                <li><a href="#!">Marina</a></li>
                                <li><a href="#!">Al Rigga</a></li>
                                <li><a href="#!">Al Bustan</a></li>
                                <li><a href="#!">IBN Battuta Mall</a></li>
                                <li><a href="#!">Home Service</a></li>
                            </ul>
                        </div>
                        <div className="col-md-2 col-sm-6 col-xs-6 col-6">
                            <h3 className="dv_social_links_h3">Social Links </h3>
                            <ul className="dv_home_social_links mb-5">
                                <li><a href="#!"><img src={fb}/></a></li>
                                <li><a href="#!"><img src={insta}/></a></li>
                                <li><a href="#!"><img src={twitter}/></a></li>
                                <li><a href="#!"><img src={tiktok}/></a></li>
                                <li><a href="#!"><img src={youtube}/></a></li>
                                <li><a href="#!"><img src={share}/></a></li>
                            </ul>
                            <h3 className="dv_social_links_h3">download app</h3>
                            <a href="#!"><img src={appstore} className="appstoresvg" /></a>
                            <a href="#!"><img src={playstore} className="playstoresvg" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dv_footer_home_rights">
                <div className="container text-center">
                    © 2018-2023 Mirrors All rights reserved.
                </div>
            </div>
        </>
    )
}

export default Footer