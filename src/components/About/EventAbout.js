import React from "react";
import { getLocale } from "../../locales";

const EventAbout = () => {
  return (
    <section className="event_about_area">
      <div className="container">
        <div className="row align-items-center flex-row-reverse">
          <div className="col-lg-6">
            <div className="event_about_img">
              <img
                className="wow fadeInRight"
                data-wow-delay="0.2s"
                src={require("../../img/home-event/ebisTherapy.jpeg")}
                alt=""
              />
              <div className="about_bg"></div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="event_about_content">
              <h2 className="wow fadeInUp">{getLocale("complete_title")}</h2>
              <p className="wow fadeInUp" data-wow-delay="0.2s">
                {getLocale("hospital_description")}
              </p>
              <div className="row">
                <div className="col-6">
                  <div
                    className="event_about_item wow fadeInUp"
                    data-wow-delay="0.2s"
                  >
                    <img
                      src={require("../../img/home-event/marker.png")}
                      alt=""
                    />
                    <h6> {getLocale("address_")} </h6>
                    <p>{getLocale("address")}</p>
                  </div>
                </div>
                <div className="col-6">
                  <div
                    className="event_about_item wow fadeInUp"
                    data-wow-delay="0.4s"
                  >
                    <img
                      src={require("../../img/home-event/timer.png")}
                      alt=""
                    />
                    <h6> {getLocale("open_hours")} </h6>
                    <p>
                      9:30 - 17:30 <br /> {getLocale("open_hours_details")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventAbout;
