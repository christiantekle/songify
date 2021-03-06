import React, { Component } from "react";
import { Button, Card, IconButton } from "@material-ui/core";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import DeleteIcon from '@material-ui/icons/Delete';

class SongsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <Card style={songList}>
        <p>
          {this.props.song.title}
          
          <IconButton aria-label="play/pause">
            <PlayArrowIcon
              onClick={() => this.setState({ count: this.state.count + 1 })}
            />
          </IconButton>
          <h5>Play Count: {this.state.count}</h5>
          <Button
            variant="contained"
            color="secondary"
            style={{ float: "right", marginLeft: "5px" }}
            onClick={this.props.removeSong.bind(this, this.props.song.id)}
          > <DeleteIcon />
            Remove
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={this.props.addFavs.bind(this, this.props.song.title)}
            style={{ float: "right" }}
          >
            Favorite
          </Button>
        </p>
      </Card>
    );
  }
}

const songList = {
  background: "#f4f4f4",
  padding: "15px",
  borderBottom: "1px #ccc dotted",
  flex: "5",
  margin: "10px",
  display: "inline-block",
  minWidth: '31%'
};

export default SongsList;
