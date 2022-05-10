import React, { Component } from "react";
import Reveal from "react-reveal/Reveal";

class FooterErp extends Component {
  render() {
    let { fClass } = this.props;
    return (
      <footer className={`footer_area h_footer_dark ${fClass}`}>
        <div className="container">
          <div className="row">
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
                  <h3 style={{ color: "white", marginTop: "20px" }}>
                    +976 9450-0054 <br></br> +976 7607-7866
                  </h3>
                  <div className="f_social_icon">
                    <a
                      href="https://www.facebook.com/%D0%AD%D0%91%D0%98%D0%A1-%D0%A1%D1%8D%D1%80%D0%B3%D1%8D%D1%8D%D0%BD-%D0%B7%D0%B0%D1%81%D0%B0%D1%85-%D0%BA%D0%BB%D0%B8%D0%BD%D0%B8%D0%BA-%D0%AF%D0%BF%D0%BE%D0%BD-%D0%B1%D0%B0%D1%80%D0%B8%D0%B0-%D0%B7%D0%B0%D1%81%D0%B0%D0%BB-%D0%A3%D1%82%D0%B0%D1%81-9450-0054-8006-1415-104619461022471"
                      key={"1"}
                    >
                      <i className={"ti-facebook"}></i>
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </footer>
    );
  }
}
export default FooterErp;
