import React from "react";
import { getLocale } from "../locales";
import Map from "./Map";
const EventLocation = () => {
  return (
    <section className="event_location_area" id="contact">
      <Map />
      <div className="container">
        <div className="event_location">
          <div className="contact_info_item">
            <h6>{getLocale("address_")}</h6>
            <p>{getLocale("address")}</p>
          </div>
          <div className="contact_info_item">
            <h6>{getLocale("nav6")}</h6>
            <p>
              <a href="mailto:saasland@gmail.com">nenhee@gmail.com</a>
            </p>
            <p>
              <a href="tel:3024437488">(+976) 9450-0054</a>
            </p>
          </div>
          <div className="f_social_icon_two">
            <a href="https://www.facebook.com/%D0%AD%D0%91%D0%98%D0%A1-%D0%A1%D1%8D%D1%80%D0%B3%D1%8D%D1%8D%D0%BD-%D0%B7%D0%B0%D1%81%D0%B0%D1%85-%D0%BA%D0%BB%D0%B8%D0%BD%D0%B8%D0%BA-%D0%AF%D0%BF%D0%BE%D0%BD-%D0%B1%D0%B0%D1%80%D0%B8%D0%B0-%D0%B7%D0%B0%D1%81%D0%B0%D0%BB-%D0%A3%D1%82%D0%B0%D1%81-9450-0054-8006-1415-104619461022471">
              <i className="ti-facebook"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default EventLocation;
