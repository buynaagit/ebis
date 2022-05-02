import React from "react";

const EventFact = () => {
  return (
    <section className="event_fact_area sec_pad">
      <div className="container">
        <div className="hosting_title security_title text-center">
          <h2>
            <span>Over 500</span> Happy and healthy clients
          </h2>
        </div>
        <div className="seo_fact_info">
          <div className="seo_fact_item wow fadeIn">
            <div className="text">
              <div className="counter one">40%</div>
              <p>Elders</p>
            </div>
          </div>
          <div className="seo_fact_item wow fadeIn" data-wow-delay="0.3s">
            <div className="text">
              <div className="counter two">30%</div>
              <p>Kids</p>
            </div>
          </div>
          <div className="seo_fact_item wow fadeIn" data-wow-delay="0.6s">
            <div className="text">
              <div className="counter three">30%</div>
              <p>Rehabilation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default EventFact;
