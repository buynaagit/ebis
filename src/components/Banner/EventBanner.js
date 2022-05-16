import React from "react";
import { getLocale } from "../../locales";
import YoutubeEmbed from "../YoutubeEmbed";




const EventBanner = () => {
  return (
    <section className="event_banner_area" id="hospitalBanner">
   
      <div
        className="parallax-effect"
        style={{
          objectFit: "contain",
          backgroundImage:
            "url(" + require("../../img/home-event/ebisBg2.JPG") + ")",
        }}
      ></div>
      <div className="container">
        <div className="event_banner_content">
          <div className="round wow zoomIn" data-wow-delay="0.2s"></div>
          <div className="event_about_item wow fadeInUp" data-wow-delay="0.2s">
            <img
              style={{ width: 100, height: 100 }}
              src={require("../../img/home-event/mongol.png")}
              alt=""
            />
            <img
              style={{
                width: 100,
                height: 100,
                marginLeft: 20,
                borderRadius: 20,
              }}
              src={require("../../img/home-event/japan.png")}
              alt=""
            />
          </div>
          <h2
            style={{ textTransform: "uppercase" }}
            className="wow fadeInUp"
            data-wow-delay="0.8s"
          >
            <span> {getLocale("title")} </span>
            <br />
            {getLocale("orthopedic_c")}
          </h2>
          <a
            className="event_btn btn_hover wow fadeInLeft"
            data-wow-delay="0.9s"
            href="https://www.facebook.com/%D0%AD%D0%91%D0%98%D0%A1-%D0%A1%D1%8D%D1%80%D0%B3%D1%8D%D1%8D%D0%BD-%D0%B7%D0%B0%D1%81%D0%B0%D1%85-%D0%BA%D0%BB%D0%B8%D0%BD%D0%B8%D0%BA-%D0%AF%D0%BF%D0%BE%D0%BD-%D0%B1%D0%B0%D1%80%D0%B8%D0%B0-%D0%B7%D0%B0%D1%81%D0%B0%D0%BB-%D0%A3%D1%82%D0%B0%D1%81-9450-0054-8006-1415-104619461022471/"
          >
            Facebook
          </a>
          <a
            className="event_btn event_btn_two btn_hover wow fadeInRight"
            data-wow-delay="0.9s"
            href="https://www.facebook.com/104619461022471/videos/1050756605264980/"
            // style={{ color: "black" }}
          >
            <i className="arrow_triangle-right_alt2"></i>
            {getLocale("intro_vid")}
          </a>
        </div>
        <h1>Youtube Embed</h1>
      <YoutubeEmbed embedId="rokGy0huYEA" />
      </div>
    </section>
  );
};


export default EventBanner;
