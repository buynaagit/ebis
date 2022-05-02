import React from "react";
import Eventgalleryitem from "./Eventgalleryitem";

const Eventgallery = () => {
  return (
    <section className="event_gallery_area">
      <div className="row m0 portfolio_gallery event_gallery">
        <Eventgalleryitem
          image="galery1.jpg"
          title="Apple Mobile Mockup"
          bname="Branding"
          bname2="Fashion"
        />
        <Eventgalleryitem
          image="galery9.jpg"
          title="Apple Mobile Mockup"
          bname="Branding"
          bname2="Fashion"
        />
        <Eventgalleryitem
          image="galery3.jpg"
          title="Apple Mobile Mockup"
          bname="Branding"
          bname2="Fashion"
        />
        <Eventgalleryitem
          image="galery4.jpg"
          title="Apple Mobile Mockup"
          bname="Branding"
          bname2="Fashion"
        />
        <Eventgalleryitem
          image="galery5.jpg"
          title="Apple Mobile Mockup"
          bname="Branding"
          bname2="Fashion"
        />
        <Eventgalleryitem
          image="laser_ther.jpg"
          title="Apple Mobile Mockup"
          bname="Branding"
          bname2="Fashion"
        />
      </div>
    </section>
  );
};
export default Eventgallery;
