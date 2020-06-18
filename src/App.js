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
        completed: false,
      },
      {
        id: nextId(),
        title: "One Sixteen ",
        completed: false,
      },
    ],
  };

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <AddSongs />
          <Songs songs={this.state.songs} />
        </div>
      </div>
    );
  }
}

export default App;
