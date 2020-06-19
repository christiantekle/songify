import React, { Component } from 'react';
import SongsList from './SongsList';


class Songs extends Component {
  render() {
    return (
        this.props.songs.map((song) => (
        <SongsList key={song.id} song={song} addFavs={this.props.addFavs} removeSong={this.props.removeSong}/>)
    ));
  }
}


export default Songs;