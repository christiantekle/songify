import React, { Component, useState } from "react";
import AddSongs from "./components/AddSongs";
import Header from "./components/layout/Header";
import Songs from "./components/Songs";
import FavsList from "./components/FavsList";
import { Container, Button } from "@material-ui/core";

import nextId from "react-id-generator";
import "./App.css";

class App extends Component {
  state = {
    songs: [
      {
        id: nextId(),
        title: "Sweet Victory",
        status: true,
      },
      {
        id: nextId(),
        title: "One Sixteen ",
        status: true,
      },
    ],
    favs: [
      {
        id: 4,
        title: "The Good Life",
        status: true,
      },
    ],
  };

  //Add Song
  addSongs = (title) => {
    const newSong = {
      id: nextId(),
      title,
      status: true,
    };
    this.setState({ songs: [...this.state.songs, newSong] });
  };

  //Add to Favs
  addFavs = (title) => {
    const newFav = this.state.songs.find((song) => {
      return song.title === title;
    });
    this.setState({
      favs: [...this.state.favs, newFav],
    });
  };

  //Remove Song
  removeSong = (id) => {
    this.setState({
      songs: [...this.state.songs.filter((song) => song.id !== id)],
    });
  };

  //Clear History
  clearHistory = () => {
    this.setState({
      songs: [],
    });
  };

  //Play count
  
  render() {
    return (
      <div>
        <Header />

        <Container fixed>
          <div>
            <div className="col">
              <AddSongs addSongs={this.addSongs} />
            </div>
            <div className="col">
              <Songs
                addFavs={this.addFavs}
                removeSong={this.removeSong}
                songs={this.state.songs}
                playIcon={this.playIcon}
              />
              <Button variant="contained" color="default" style={btnClr} onClick={this.clearHistory}>
                Clear History
              </Button>
            </div>
          </div>
          <p></p>
          <div className="col">
            <h3>Favorites</h3>
            {this.state.favs.map((fav) => (
              <FavsList fav={fav} />
            ))}
          </div>
        </Container>
      </div>
    );
  }
}
const btnClr = {
  background: "#ccc",
  color: "#fff",
  border: "none",
  padding: "3px 7px",
  cursor: "pointer",
  float: "right",
  margin: "2px",
};
export default App;
