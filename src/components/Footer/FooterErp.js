import React, { Component } from "react";
import Reveal from "react-reveal/Reveal";
import { Link } from "react-router-dom";

class FooterErp extends Component {
  render() {
    let FooterData = this.props.FooterData;
    let { fClass } = this.props;
    return (
      <footer className={`footer_area h_footer_dark ${fClass}`}>
        <div className="container">
          <div className="row">
            {FooterData.CompanyWidget.map((widget) => {
              return (
                <Reveal effect="fadeInLeft" duration={500} key={1}>
                  <div className="col-lg-4 col-sm-6">
                    <div
                      className="f_widget dark_widget company_widget"
                      data-wow-delay="0.2s"
                    >
                      <a href="/Ebis" className="f-logo">
                        <img
                          style={{ width: "80%", height: "80%" }}
                          src={require("../../img/ebislogotrnsprnt.png")}
                          alt=""
                        />
                      </a>
                      <p>
                        © 2022 Orkhon Toyama LLC <br /> all rights reserved.
                      </p>
                      <div className="f_social_icon">
                        {FooterData.socialIcon.map((item) => {
                          return (
                            <a
                              href="https://www.facebook.com/%D0%AD%D0%91%D0%98%D0%A1-%D0%A1%D1%8D%D1%80%D0%B3%D1%8D%D1%8D%D0%BD-%D0%B7%D0%B0%D1%81%D0%B0%D1%85-%D0%BA%D0%BB%D0%B8%D0%BD%D0%B8%D0%BA-%D0%AF%D0%BF%D0%BE%D0%BD-%D0%B1%D0%B0%D1%80%D0%B8%D0%B0-%D0%B7%D0%B0%D1%81%D0%B0%D0%BB-%D0%A3%D1%82%D0%B0%D1%81-9450-0054-8006-1415-104619461022471"
                              key={item.id}
                            >
                              <i className={item.icon}></i>
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
            {FooterData.AboutWidget.map((widget) => {
              return (
                <Reveal effect="fadeInLeft" duration={500} key={widget.id}>
                  <div className="col-lg-3 col-sm-6">
                    <div className="f_widget dark_widget about-widget pl_70">
                      <h3 className="f-title f_500 t_color f_size_18 mb_40">
                        {widget.title}
                      </h3>
                      <ul className="list-unstyled f_list">
                        {widget.menuItems.map((item) => {
                          return (
                            <li key={item.id}>
                              <Link to="/">{item.text}</Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              );
            })}
            {FooterData.termsCondition.map((widget) => {
              return (
                <Reveal effect="fadeInLeft" duration={500} key={widget.id}>
                  <div className="col-lg-2 col-sm-6">
                    <div className="f_widget dark_widget about-widget">
                      <h3 className="f-title f_500 t_color f_size_18 mb_40">
                        {widget.title}
                      </h3>
                      <ul className="list-unstyled f_list">
                        {widget.menuItems.map((item) => {
                          return (
                            <li key={item.id}>
                              <Link to="/">{item.text}</Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </footer>
    );
  }
}
export default FooterErp;
