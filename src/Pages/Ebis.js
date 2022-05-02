import React from "react";
import CustomNavbar from "../components/CustomNavbar";
import EventBanner from "../components/Banner/EventBanner";
import EventAbout from "../components/About/EventAbout";
import EventTeam from "../components/Team/EventTeam";
import EventFeatures from "../components/Features/EventFeatures";
import EventDetails from "../components/Features/EventDetails";
import ScheduleTab from "../components/scheduleTab";
import EventFact from "../components/EventFact";
import Eventgallery from "../components/Portfolios/Eventgallery";
import EventLocation from "../components/EventLocation";
import FooterErp from "../components/Footer/FooterErp";

const Ebis = () => {
  return (
    <div className="body_wrapper">
      <CustomNavbar
        mClass="menu_four hosting_menu"
        nClass="w_menu m-auto"
        slogo="sticky_logo"
        hbtnClass="event_btn"
      />
      <EventBanner />
      <EventAbout />
      <EventTeam />
      <EventFeatures />
      <EventDetails />
      <ScheduleTab />
      <EventFact />
      <Eventgallery />
      <EventLocation />
      <FooterErp fClass="event_footer_area" />
    </div>
  );
};
export default Ebis;
