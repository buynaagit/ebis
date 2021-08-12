import React from "react";
import Reveal from "react-reveal";
import { getLocale } from "../../locales";

const AppBanner = () => {
  
  return (
    <section className="app_banner_area" id="home">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <Reveal bottom cascade>
              <div className="app_banner_contentmt mt_40">
                <h2
                  className="f_p f_700 f_size_50 w_color mb_20 wow fadeInLeft"
                  data-wow-delay="0.2s"
                >
                 { getLocale("AppBanner1") }
                  <br />
                </h2>
                <p
                  className="f_400 f_size_18 l_height30 w_color wow fadeInLeft"
                  data-wow-delay="0.3s"
                >
                  { getLocale("AppBanner2") }
                </p>
              </div>
            </Reveal>
          </div>
          <div className="col-lg-6 light-house" >
            {/* <center> */}

            <div className="app_img">
              {/* <img
                className="app_screen one wow fadeInDown"
                src={require("../../img/home7/light-tower.png")}
                alt=""
              /> 
               <img
                className="app_screen two wow fadeInDown"
                src={require("../../img/home7/03.png")}
                alt=""
              />
              <img
                className="app_screen three wow fadeInDown"
                src={require("../../img/home7/02.png")}
                alt=""
              /> */}
              <div className="light-house-back"/>
              <img
                className="light-house"
                src={require("../../img/home7/light-tower.png")}
                alt=""
              />
            </div>
            {/* </center> */}

          </div>
        </div>
      </div>
    </section>
  );
};

export default AppBanner;
