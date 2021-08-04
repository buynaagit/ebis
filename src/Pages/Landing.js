import React from "react";
import OnepageMenu from "../components/OnepageMenu";
import AppBanner from "../components/Banner/AppBanner";
import AppFeaturesTwo from "../components/Features/AppFeaturesTwo";
import AppFeatures from "../components/Features/AppFeatures";
import AppTestimonial from "../components/Testimonial/AppTestimonial";
import AppWork from "../components/Service/AppWork";
import ScreenshowCase from "../components/ScreenshowCase";
import AppGetstarted from "../components/AppGetstarted";
import AppTeam from "../components/Team/AppTeam";
import FooterTwo from "../components/Footer/FooterTwo";
import ServiceData from "../components/Service/ServiceData";
import FooterData from "../components/Footer/FooterData";
import Map from "../components/Map";

const Landing = () => {
  return (
    <div className="body_wrapper">
      <OnepageMenu
        slogo="sticky_logo"
        mClass="menu_four"
        nClass="w_menu"
        hbtnClass="btn_get_radious menu_custfive"
      />
      <ul
        class="socialsidelinks animated fadeInLeft d-none d-md-block"
        style={{ width: 30, height: 100 }}
      >
        <li>
          <a
            href="https://apps.apple.com/us/app/hippocards/id1474192233"
            target="_blank"
          ></a>
        </li>
      </ul>
      <AppBanner />
      <AppFeaturesTwo />
      {/* <AppFeatures /> */}
      <AppWork ServiceData={ServiceData} />
      <AppTestimonial />
      <ScreenshowCase />
      <AppGetstarted />
      <AppTeam />
      <Map />
      <FooterTwo FooterData={FooterData} />
    </div>
  );
};
export default Landing;
