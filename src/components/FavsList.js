import React, { Component } from "react";
import { Card, Button } from "@material-ui/core";
class FavsList extends Component {
  render() {
    return (
      <Card style={{maxWidth: '500px'}}>
          
        <div style={favsListStyle}>{this.props.fav.title}
        <Button onClick={this.props.removeFav.bind(this, this.props.fav.id)} variant="contained" color="secondary" style={{ float:'right' }}>
            Remove
        </Button></div>
        
      </Card>
    );
  }
}

const favsListStyle = {
  background: "#f5f5f5",
  padding: "10px",
  borderBottom: "1px #ccc dotted",
  flex: "5",
};



export default FavsList;
