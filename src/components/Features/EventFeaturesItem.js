import React, { useEffect, useState } from "react";
import AnimateHeight from 'react-animate-height';

const EventFeaturesItem = (props) => {
  const [uList, setUList] = useState([]);
  const [ULnumberOfLines, setULNumberOfLines] = useState('200px');
  const [pnumberOfLines, setpNumberOfLines] = useState('200px');

  const makeUnorderedList = () => {
    if (props.ulist) {
      let splitted = props.ulist.split("|");
      setUList(splitted);
      console.log("splitted", splitted);
      console.log("uList", uList);
    }
  };

  useEffect(() => {
    makeUnorderedList();
  }, []);

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
         <AnimateHeight
         id='example-panel'
         duration={ 500 }
         height={ pnumberOfLines } // see props documentation below
       >
            <p
              style={{
                height: pnumberOfLines ? '200px' : '100%'
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
            </AnimateHeight>
        ) : (
          <AnimateHeight
          id='example-panel'
          duration={ 500 }
          height={ ULnumberOfLines } // see props documentation below
        >
            <ul
              style={{
                height: ULnumberOfLines ? '200px' : '100%'
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
        </AnimateHeight>
        )}
      </div>
    </div>
  );
};

export default EventFeaturesItem;
