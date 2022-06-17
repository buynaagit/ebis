import React, { Component } from "react";
import EventTeamItem from "./EventTeamItem";
import Slider from "react-slick";
import { getLocale } from "../../locales";

class EventTeam extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 3,
      slidesToScroll: 1,
    };
    return (
      <section className="event_team_area sec_pad">
        <div className="container">
          <div className="hosting_title security_title text-center">
            <h2 className="wow fadeInUp" data-wow-delay="0.2s">
              {getLocale("management")}
            </h2>
          </div>
          <Slider
            ref={(c) => (this.slider = c)}
            className="event_team_slider"
            {...settings}
          >
            <EventTeamItem
              image="enhjargal2.jpg"
              name={getLocale("enhjargal")}
              post="HEAD OF CLINIC Phd"
            />
            <EventTeamItem
              image="zorigo.jpg"
              name={getLocale("ganzorig")}
              post="FOUNDER"
            />
            <EventTeamItem
              image="sakai.jpg"
              name={getLocale("sakai")}
              post="CO-FOUNDER"
            />
          </Slider>
        </div>
      </section>
    );
  }
}

export default EventTeam;
