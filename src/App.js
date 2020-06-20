import React, { Component } from "react";
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
      {
        id: nextId(),
        title: "Oceans (Where Feet May Fail)",
        status: true,
      }
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
    const favs = this.state.favs.map((fav) => fav.title);

    if (favs.includes(newFav.title)) {
      alert("Added");
    } else {
      this.setState({
        favs: [...this.state.favs, newFav],
      });
    }
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

  //Remove Fav
  removeFav = (id) => {
    this.setState({
      favs: [...this.state.favs.filter((fav) => fav.id !== id)],
    });
  };

  //ClearFavHistory
  clearFavHistory = () => {
    this.setState({
      favs: [],
    });
  };

  render() {
    return (
      <div>
        <Header />

        <Container fixed>
          <div className="col">
            <AddSongs addSongs={this.addSongs} />
          </div>
          <div>
            <h2>Songs List</h2>
            <div style={col2}>
              <Songs
                addFavs={this.addFavs}
                removeSong={this.removeSong}
                songs={this.state.songs}
              />
            </div>
            <Button
              color="secondary"
              style={{float: 'right'}}
              onClick={this.clearHistory}
            >
              Clear History
            </Button>
          </div>

          <p></p>
          <div style={favDiv}>
            <div>
            <h2>Favorites</h2>
            {this.state.favs.map((fav) => (
              <FavsList
                clearFavHistory={this.clearFavHistory}
                removeFav={this.removeFav}
                fav={fav}
              />
            ))}
            </div>
            </div>
            <Button onClick={this.clearFavHistory} style={{float: 'right', marginTop: '-1vw'}}color="secondary">
              Clear All Favorites
            </Button>
         
         
        </Container>
      </div>
    );
  }
}
const col2 = {
  background: "#373737",
  padding: "50px",
  display: "inline-block",
  width:'100%'
};
const favDiv = {
  background: "#d3d3d3",
  width: "100%",
  minHeight: "5vw",
  padding: "15px",
  margin: "25px 0px",
  display: "inline-block"
}
export default App;
