import { Button } from "bootstrap";
import React, { Component, useEffect, useState } from "react";
import AnimateHeight from "react-animate-height";

const EventFeaturesItem = (props) => {
  useEffect(() => {
    makeUnorderedList();
  }, []);

  const [uList, setUList] = useState([]);
  const [ULnumberOfLines, setULNumberOfLines] = useState(true);
  const [pnumberOfLines, setpNumberOfLines] = useState(true);

  const makeUnorderedList = () => {
    if (props.ulist) {
      let splitted = props.ulist.split("|");
      setUList(splitted);
      console.log("splitted", splitted);
      console.log("uList", uList);
    }
  };

  const toggleHeight = (type) => {
    if (type === 1) {
      setpNumberOfLines(!pnumberOfLines);
    } else {
      setULNumberOfLines(!ULnumberOfLines);
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
          <>
            <p
              style={{
                WebkitLineClamp: pnumberOfLines ? 5 : null,
              }}
            >
              {props.ptext}
            </p>
            <button
              onClick={() => {
                toggleHeight(1);
              }}
              style={{ backgroundColor: "white", borderWidth: 0 }}
              className="e_features_btn"
            >
              {pnumberOfLines ? "Дэлгэрэнгүй" : "Хураангуй"}
              <i
                className={
                  pnumberOfLines ? "arrow_carrot-down" : "arrow_carrot-up"
                }
              ></i>
            </button>
          </>
        ) : (
          <div>
            <ul
              style={{
                WebkitLineClamp: ULnumberOfLines ? 5 : null,
              }}
            >
              {uList?.map((item, index) => (
                <li key={`${index}=-`}>{item}</li>
              ))}
            </ul>
            <button
              onClick={() => {
                toggleHeight(2);
              }}
              style={{ backgroundColor: "white", borderWidth: 0 }}
              className="e_features_btn"
            >
              {ULnumberOfLines ? "Дэлгэрэнгүй" : "Хураангуй"}
              <i
                className={
                  ULnumberOfLines ? "arrow_carrot-down" : "arrow_carrot-up"
                }
              ></i>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventFeaturesItem;
