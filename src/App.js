import React, { Component } from "react";
import AddSongs from "./components/AddSongs";
import Header from "./components/layout/Header";
import Songs from "./components/Songs";
import nextId from 'react-id-generator'

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
  };
  addSongs = (title) => {
    const newSong = {
      id: nextId(),
      title,
      status: true
    }
    this.setState({ songs: [...this.state.songs, newSong] });
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <AddSongs addSongs={this.addSongs}/>
          <Songs songs={this.state.songs} />
        </div>
      </div>
    );
  }
}

export default App;
