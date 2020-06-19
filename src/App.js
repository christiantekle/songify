import React, { Component } from "react";
import AddSongs from "./components/AddSongs";
import Header from "./components/layout/Header";
import Songs from "./components/Songs";
import FavsList from "./components/FavsList"

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
        title: 'The Good Life',
        status: true
      }
    ]
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
    const newFav = this.state.songs.find((song) => { return song.title === title})
   this.setState({
     favs: [...this.state.favs, newFav]
   });
  } 

  //Remove Song
  removeSong = (id) => {
    this.setState({
      songs: [...this.state.songs.filter((song) => song.id !== id)],
    });
  };

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div>
            <div className="col">
              <AddSongs addSongs={this.addSongs} />
            </div>
            <div className="col">
              <Songs addFavs={this.addFavs} removeSong={this.removeSong} songs={this.state.songs} />
            </div>
          </div>
          <p></p>
          <div className="col">
            <h3>Favorites</h3>
            {this.state.favs.map((fav) => (
              <FavsList fav={fav}/>
            ))}
          
          </div>
        
        </div>
      </div>
    );
  }
}

export default App;
