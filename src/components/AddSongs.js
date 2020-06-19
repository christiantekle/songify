import React, { Component } from "react";


class AddSongs extends Component {
  state = {
    title: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addSongs(this.state.title);
    this.setState({ title: '' });
  };
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
      };

  render() {
    return (
      <form onSubmit={this.onSubmit} style={formStyle}>
        <input
          type="text"
          name="title"
          style={{ flex: "0 0 40%", padding: "5px" }}
          placeholder="Add song here..."
          value={this.state.value}
          onChange={this.onChange}
        />
        <input type="submit" value="Add Song" style={btnStyle} />
      </form>
    );
  }
}

const formStyle = {
  display: "flex",
  marginTop: '10px',
  marginBottom: '10px',
  
};
const btnStyle = {
     display:'inline-block',
     padding:'0.5em 3em',
     border:'0.16em solid #FFFFFF',
     margin:'0 5px',
     boxSizing: 'border-box',
     textDecoration:'none',
     fontWeight:'500',
     color:'#000',
     textAlign:'center' 
}

export default AddSongs;
