import React, { Component } from "react";

class EventTeamItem extends Component {
  render() {
    let { image, name, post } = this.props;
    return (
      <div className="item">
        <div className="e_team_img">
          <img src={require("../../img/home-event/" + image)} alt="" />
          <ul className="list-unstyled"></ul>
        </div>
        <a href="/#">
          <h6>{name}</h6>
        </a>
        <p>{post}</p>
      </div>
    );
  }
}

export default EventTeamItem;
