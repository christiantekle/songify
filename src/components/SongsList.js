import React, { Component } from "react";

class SongsList extends Component {

  render() {
    return (
      <div style={songList}>
          
          <p>
            {this.props.song.title}

            <button
                onClick={this.props.removeSong.bind(this, this.props.song.id)}
                style={btn}
            >
                Remove
            </button>
            <button
                onClick={this.props.addFavs.bind(this, this.props.song.title)}
                style={btnFav}
            >
                Add to Favorite
            </button>
            </p>
         
                    
      </div>
    );
  }
}

const songList = {
  background: "#f4f4f4",
  padding: "10px",
  borderBottom: "1px #ccc dotted",
  flex: "5",
};
const btnFav = {
  background: "#ccc",
  color: "#000",
  border: "none",
  padding: "3px 7px",
  cursor: "pointer",
  float: "right",
};
const btn = {
  background: "#f00",
  color: "#fff",
  border: "none",
  padding: "3px 7px",
  cursor: "pointer",
  float: "right",
};
export default SongsList;
