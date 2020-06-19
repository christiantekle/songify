import React, { Component } from "react";

class FavsList extends Component {
  render() {
    return <div style={favsList}>
        { this.props.fav.title }

    </div>;
  }
}

const favsList = {
  background: "#f4f4f4",
  padding: "10px",
  borderBottom: "1px #ccc dotted",
  flex: "5",
}

export default FavsList;
