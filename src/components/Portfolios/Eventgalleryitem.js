import React, { Component } from "react";

class Eventgalleryitem extends Component {
  render() {
    let { image } = this.props;
    return (
      <div className="col-lg-2 col-sm-4 portfolio_item br ux p0">
        <div className="portfolio_img">
          <img src={require("../../img/home-event/" + image)} alt="" />
        </div>
      </div>
    );
  }
}
export default Eventgalleryitem;
