import React, { Component } from "react";

class FavsList extends Component {
  render() {
    return <div style={favsList}>
        { this.props.fav.title }

    </div>;
  }
}

const favsList = {
  background: "rgba(205, 242, 214, 0.34)",
  padding: "10px",
  borderBottom: "1px #ccc dotted",
  flex: "5",
}

export default FavsList;
