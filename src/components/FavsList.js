import React, { Component } from "react";
import { Grid, Paper, CardContent } from '@material-ui/core'
class FavsList extends Component {
  render() {
    return <CardContent>
    
        { this.props.fav.title }
    
    </CardContent>;
  }
}

const favsList = {
  background: "rgba(205, 242, 214, 0.34)",
  padding: "10px",
  borderBottom: "1px #ccc dotted",
  flex: "5",
}

export default FavsList;
