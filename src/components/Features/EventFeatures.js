import React from "react";
import { getLocale } from "../../locales";
import EventFeaturesItem from "./EventFeaturesItem";

const EventFeatures = () => {
  return (
    <section className="event_features_area">
      <div className="container">
        <div className="hosting_title security_title text-center">
          <h2 className="wow fadeInUp" data-wow-delay="0.2s">
            {getLocale("rehab_service")}
          </h2>
        </div>
        <div className="row event_features_inner">
          <EventFeaturesItem
            url=""
            image="leader.png"
            title={getLocale("zorilgo")}
            ptext={getLocale("mokuteki_details")}
            btn={getLocale("seemore")}
          />
          <EventFeaturesItem
            url=""
            image="meetup.png"
            title={getLocale("zorilt")}
            ulist={getLocale("mokuhyo_details")}
            btn={getLocale("seemore")}
          />
          <EventFeaturesItem
            url=""
            image="chat.png"
            title={getLocale("clinic_detail")}
            ulist={getLocale("service_details")}
            btn={getLocale("seemore")}
          />
        </div>
      </div>
    </section>
  );
};
export default EventFeatures;
