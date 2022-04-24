import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "antd";
import Sticky from "react-stickynode";
import { getLocale } from "../locales";

class CustomNavbar extends Component {
  changeLanguage() {
    let locale = localStorage.getItem("language");
    if (locale === "jp") {
      localStorage.setItem("language", "mn");
    } else {
      localStorage.setItem("language", "jp");
    }
  }
  render() {
    var { mClass, nClass, cClass, slogo, hbtnClass } = this.props;
    return (
      <Sticky top={0} innerZ={9999} activeClass="navbar_fixed">
        <header className="header_area">
          <nav className={`navbar navbar-expand-lg menu_one ${mClass}`}>
            <div className={`container ${cClass}`}>
              {localStorage.getItem("language") == "mn" ? (
                <Link className={`navbar-brand ${slogo}`} to="/Ebis">
                  <img
                    style={{ width: "80%", height: "80%" }}
                    src={require("../img/ebislogotrnsprnt.png")}
                    alt=""
                  />

                  <img
                    style={{ width: "80%", height: "80%" }}
                    src={require("../img/ebislogotrnsprnt.png")}
                    alt=""
                  />
                </Link>
              ) : (
                <Link className={`navbar-brand ${slogo}`} to="/Ebis">
                  <img
                    style={{ width: "40%", height: "40%" }}
                    src={require("../img/ebislogotrnsprnt.png")}
                    alt=""
                  />

                  <img
                    style={{ width: "40%", height: "40%" }}
                    src={require("../img/ebislogotrnsprnt.png")}
                    alt=""
                  />
                </Link>
              )}
              <button
                className="navbar-toggler collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="menu_toggle">
                  <span className="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                  <span className="hamburger-cross">
                    <span></span>
                    <span></span>
                  </span>
                </span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className={`navbar-nav menu ml-auto ${nClass}`}>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={500}
                      to="Ebis"
                      style={{ marginTop: "10px" }}
                    >
                      {getLocale("nav1")}
                    </Link>
                  </li>

                  <li className=" nav-item">
                    <Link
                      className="nav-link"
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={500}
                      to="Ebis"
                      style={{ marginTop: "10px" }}
                    >
                      {getLocale("nav2")}
                    </Link>
                  </li>
                  <li className="dropdown submenu nav-item">
                    <Link
                      className="nav-link"
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={500}
                      to="Ebis"
                      style={{ marginTop: "10px" }}
                    >
                      {getLocale("nav3")}
                    </Link>
                  </li>

                  <li className="nav-item dropdown submenu">
                    <Link
                      className="nav-link"
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={500}
                      to="Ebis"
                      style={{ marginTop: "10px" }}
                    >
                      {getLocale("nav5")}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      style={{ marginTop: "10px" }}
                      title="Pricing"
                      className="nav-link"
                      to="/Contact"
                    >
                      {getLocale("nav6")}
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <div className="nav-link">
                      {localStorage.getItem("language") == "mn" ? (
                        <Button
                          style={{
                            background: "none",
                            border: "none",
                            boxShadow: "none",
                          }}
                          onClick={this.changeLanguage}
                          href="./Ebis"
                        >
                          <img
                            style={{
                              width: "30px",
                              height: "30px",
                              marginRight: "10px",
                            }}
                            src={require("../img/home-event/mongol.png")}
                            alt=""
                          />
                          монгол
                        </Button>
                      ) : (
                        <Button
                          style={{
                            background: "none",
                            border: "none",
                            boxShadow: "none",
                          }}
                          onClick={this.changeLanguage}
                          href="./Ebis"
                        >
                          <img
                            style={{
                              width: "30px",
                              height: "30px",
                              marginRight: "10px",
                            }}
                            src={require("../img/home-event/japan.png")}
                            alt=""
                          />
                          日本
                        </Button>
                      )}
                    </div>
                  </li>
                </ul>
                {/* <a className={`btn_get btn_hover ${hbtnClass}`} href="#get-app">
                  Get Started
                </a> */}
              </div>
            </div>
          </nav>
        </header>
      </Sticky>
    );
  }
}

export default CustomNavbar;
