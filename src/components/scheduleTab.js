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
                    <h3 className="h_head">The future of the UI/UX</h3>
                    <span>
                      by <a href="/#">Hanson Deck</a>
                    </span>
                    <p>
                      Lost the plot lurgy on your bike mate Oxford hanky panky
                      blow off haggle golly gosh do one, is tosser car boot
                      knees.
                    </p>
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
                    <h3 className="h_head">The future of the UI/UX</h3>
                    <span>
                      by <a href="/#">Hanson Deck</a>
                    </span>
                    <p>
                      Lost the plot lurgy on your bike mate Oxford hanky panky
                      blow off haggle golly gosh do one, is tosser car boot
                      knees.
                    </p>
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
                    <h3 className="h_head">The future of the UI/UX</h3>
                    <span>
                      by <a href="/#">Hanson Deck</a>
                    </span>
                    <p>
                      Lost the plot lurgy on your bike mate Oxford hanky panky
                      blow off haggle golly gosh do one, is tosser car boot
                      knees.
                    </p>
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
                    <h3 className="h_head">The future of the UI/UX</h3>
                    <span>
                      by <a href="/#">Hanson Deck</a>
                    </span>
                    <p>
                      Lost the plot lurgy on your bike mate Oxford hanky panky
                      blow off haggle golly gosh do one, is tosser car boot
                      knees.
                    </p>
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
                    <h3 className="h_head">The future of the UI/UX</h3>
                    <span>
                      by <a href="/#">Hanson Deck</a>
                    </span>
                    <p>
                      Lost the plot lurgy on your bike mate Oxford hanky panky
                      blow off haggle golly gosh do one, is tosser car boot
                      knees.
                    </p>
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
                    <h3 className="h_head">The future of the UI/UX</h3>
                    <span>
                      by <a href="/#">Hanson Deck</a>
                    </span>
                    <p>
                      Lost the plot lurgy on your bike mate Oxford hanky panky
                      blow off haggle golly gosh do one, is tosser car boot
                      knees.
                    </p>
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
                    <h3 className="h_head">The future of the UI/UX</h3>
                    <span>
                      by <a href="/#">Hanson Deck</a>
                    </span>
                    <p>
                      Lost the plot lurgy on your bike mate Oxford hanky panky
                      blow off haggle golly gosh do one, is tosser car boot
                      knees.
                    </p>
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
