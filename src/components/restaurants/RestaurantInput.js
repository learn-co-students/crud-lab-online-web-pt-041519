import React, { Component } from 'react';

class RestaurantInput extends Component {
  state = {
    text: ''
  }

  // Update state on input change
  handleOnChange(event) {
    this.setState({
      text: event.target.value,
    });
  }

  // Send text to addRestaurant on submit
  handleOnSubmit(event) {
    event.preventDefault();
    this.props.addRestaurant(this.state.text);
    this.setState({
      text: '',
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input
            type="text"
            value={this.state.text}
            onChange={(event) => this.handleOnChange(event)} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
