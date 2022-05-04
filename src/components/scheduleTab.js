import React, { Component } from "react";
import { getLocale } from "../locales";

class ScheduleTab extends Component {
  render() {
    return (
      <section className="event_schedule_area sec_pad" id="tuhuurumj">
        <div className="container">
          <div className="hosting_title security_title text-center">
            <h2>
              <span style={{ textTransform: "initial" }}>
                {getLocale("orthopedic_c")}
              </span>
              {getLocale("nav5")}
            </h2>
          </div>
          <div className="event_schedule_inner">
            <div className="tab-content event_tab_content">
              <div
                className="tab-pane fade show active"
                id="one"
                role="tabpanel"
                aria-labelledby="one-tab"
              >
                <div className="media">
                  <div className="media-left">
                    <img
                      style={{ width: "300px", height: "300px" }}
                      src={require("../img/home-event/physic_ther.JPG")}
                      alt=""
                    />
                  </div>
                  <div className="media-body">
                    <h3 className="h_head">
                      {getLocale("tuhuurumjuud_title")}
                    </h3>
                    <span>
                      by <a>Japan</a>
                    </span>
                    <p>{getLocale("tuhuurumjuud_detail")}</p>
                  </div>
                </div>
                <div className="media">
                  <div className="media-left">
                    <img
                      style={{ width: "300px", height: "300px" }}
                      src={require("../img/home-event/laser_ther.jpg")}
                      alt=""
                    />
                  </div>
                  <div className="media-body">
                    <h3 className="h_head">{getLocale("sharlaga_title")}</h3>
                    <span>
                      by <a>Japan</a>
                    </span>
                    <p>{getLocale("sharlaga_detail")}</p>
                  </div>
                </div>
                <div className="media">
                  <div className="media-left">
                    <img
                      style={{ width: "300px", height: "300px" }}
                      src={require("../img/home-event/sandal.jpg")}
                      alt=""
                    />
                  </div>
                  <div className="media-body">
                    <h3 className="h_head">
                      {getLocale("massage_chair_title")}
                    </h3>
                    <span>
                      by <a>Japan</a>
                    </span>
                    <p>{getLocale("massage_chair_detail")}</p>
                  </div>
                </div>
                <div className="media">
                  <div className="media-left">
                    <img
                      style={{ width: "300px", height: "300px" }}
                      src={require("../img/home-event/massage_bed.jpg")}
                      alt=""
                    />
                  </div>
                  <div className="media-body">
                    <h3 className="h_head">{getLocale("massage_bed_title")}</h3>
                    <span>
                      by <a>Japan</a>
                    </span>
                    <p>{getLocale("massage_bed_detail")}</p>
                  </div>
                </div>
                <div className="media">
                  <div className="media-left">
                    <img
                      style={{ width: "300px", height: "300px" }}
                      src={require("../img/home-event/techtron.jpg")}
                      alt=""
                    />
                  </div>
                  <div className="media-body">
                    <h3 className="h_head">{getLocale("tens_title")}</h3>
                    <span>
                      by <a>Japan</a>
                    </span>
                    <p>{getLocale("tens_detail")}</p>
                  </div>
                </div>
                <div className="media">
                  <div className="media-left">
                    <img
                      style={{ width: "300px", height: "300px" }}
                      src={require("../img/home-event/denkyo.jpg")}
                      alt=""
                    />
                  </div>
                  <div className="media-body">
                    <h3 className="h_head">{getLocale("denkyo_title")}</h3>
                    <span>
                      by <a>Japan</a>
                    </span>
                    <p>{getLocale("denkyo_detail")}</p>
                  </div>
                </div>
                <div className="media">
                  <div className="media-left">
                    <img
                      style={{ width: "300px", height: "300px" }}
                      src={require("../img/home-event/onpar.jpg")}
                      alt=""
                    />
                  </div>
                  <div className="media-body">
                    <h3 className="h_head">{getLocale("onpar_title")}</h3>
                    <span>
                      by <a>Japan</a>
                    </span>
                    <p>{getLocale("onpar_detail")}</p>
                  </div>
                </div>
                <div className="media">
                  <div className="media-left">
                    <img
                      style={{ width: "300px", height: "300px" }}
                      src={require("../img/home-event/bulchin_ther.jpg")}
                      alt=""
                    />
                  </div>
                  <div className="media-body">
                    <h3 className="h_head">{getLocale("vital_title")}</h3>
                    <span>
                      by <a>Japan</a>
                    </span>
                    <p>{getLocale("vital_detail")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default ScheduleTab;
