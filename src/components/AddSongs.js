import React, { Component } from "react";

class AddSongs extends Component {
  state = {
    title: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addSongs(this.state.title);
    this.setState({ title: "" });
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
          style={{ flex: "0", padding: "5px" }}
          placeholder="Add song here..."
          value={this.state.value}
          onChange={this.onChange}
        />
        <input type="submit" value="Submit" className="primary-button" />
      </form>
    );
  }
}

const formStyle = {
  display: "flex",
  marginTop: '10px',
  marginBottom: '10px',
  
};
export default AddSongs;
