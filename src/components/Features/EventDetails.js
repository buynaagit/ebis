import React from "react";
import { getLocale } from "../../locales";

const EventDetails = () => {
  return (
    <section className="event_promotion_area" id="team">
      <div className="container">
        <div className="hosting_title security_title text-center">
          <h2 className="wow fadeInUp" data-wow-delay="0.2s">
            <span style={{ textTransform: "uppercase" }}>
              {getLocale("title")}
            </span>
            {getLocale("specialists")}
          </h2>
        </div>
        <div className="event_promotion_inner">
          <div className="event_img">
            <img src={require("../../img/home-event/ebisteam.jpeg")} alt="" />
          </div>
          <div className="row event_promotion_info align-items-center">
            <div className="col-md-6">
              <div className="e_promo_text wow fadeInDown">
                <div className="d-flex">
                  <p className="promo_tag">Rehabilitation</p>
                  <p className="date">est 2019</p>
                </div>
                <h3> {getLocale("standart")} </h3>
                <p className="event_btn event_btn_two btn_hover">
                  +976 9450-0054
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <p>{getLocale("specialists_details")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default EventDetails;
