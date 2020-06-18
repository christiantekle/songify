import React, { Component } from "react";

class SongsList extends Component {
  render() {
    return(
    <div style={songList}>
        <p>{ this.props.song.title }</p>
    </div>
    )
  }
}

const songList = {
    background: '#f4f4f4',
    padding: '10px',
    borderBottom: '1px #ccc dotted',
    flex: '10'
}
export default SongsList;
