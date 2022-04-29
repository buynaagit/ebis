import React from "react";
import { getLocale } from "../../locales";

const EventDetails = () => {
  return (
    <section className="event_promotion_area">
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
                  <a href="/#" className="promo_tag">
                    Workshop
                  </a>
                  <a href="/#" className="date">
                    24 - 06 - 2019
                  </a>
                </div>
                <h3>The Impact of Event Marketing</h3>
                <a href="/#" className="event_btn event_btn_two btn_hover">
                  Buy Tickets
                </a>
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
