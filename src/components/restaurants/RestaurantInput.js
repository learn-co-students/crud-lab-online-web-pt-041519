import React, { Component } from "react";

class RestaurantInput extends Component {
  state = {
    text: ""
  };

  handleChange = e => {
    this.setState({
      text: e.target.value
    });
  };

  handleSubmit = e => {
    const { addRestaurant } = this.props;
    e.preventDefault();
    addRestaurant(this.state.text);
    this.setState({
      text: ""
    });
  };

  render() {
    // console.log(this.props);

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.text}
          onChange={this.handleChange}
          placeholder="Add Restaurant"
        />
      </form>
    );
  }
}

export default RestaurantInput;
