import React, { Component, useEffect, useState } from "react";

const EventFeaturesItem = (props) => {
  useEffect(() => {
    makeUnorderedList();
  }, []);

  const [uList, setUList] = useState([]);

  const makeUnorderedList = () => {
    if (props.ulist) {
      let splitted = props.ulist.split("|");
      setUList(splitted);
      console.log("splitted", splitted);
      console.log("uList", uList);
    }
  };
  return (
    <div className="col-lg-4 col-sm-6">
      <div
        className={
          props.ptext
            ? "event_features_item text-center wow fadeInUp"
            : "event_features_item wow fadeInUp"
        }
      >
        <img src={require("../../img/home-event/" + props.image)} alt="" />
        <h5>{props.title}</h5>
        {props.ptext ? (
          <p>{props.ptext}</p>
        ) : (
          <div>
            <ul>
              {uList?.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
        )}
        <a href={props.url} className="e_features_btn">
          {props.btn} <i className="arrow_carrot-down"></i>
        </a>
      </div>
    </div>
  );
};

export default EventFeaturesItem;
