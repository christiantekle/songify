import React, { Component } from 'react';
import SongsList from './SongsList';


class Songs extends Component {
  render() {
    return this.props.songs.map((song) => (
        <SongsList key={song.id} song={song}/>
    ));
  }
}


export default Songs;