import React, { Component } from "react";
import { Button } from "@material-ui/core";
class FavsList extends Component {
  render() {
    return (
     
        
        <div style={favsListStyle}>
          {this.props.fav.title}
          <Button
            onClick={this.props.removeFav.bind(this, this.props.fav.id)}
            variant="contained"
            color="secondary"
            style={{ float: "right" }}
          >
            Remove
          </Button>
        </div>
      
      
    );
  }
}

const favsListStyle = {
    background: '#dcdcdc',
    padding: '10px',
    display: 'inline-block',
    minWidth: '30%',
    margin: '5px 5px 0 0px'

};

export default FavsList;
