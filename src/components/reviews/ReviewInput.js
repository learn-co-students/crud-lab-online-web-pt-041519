import React, { Component } from "react";
import Reviews from "./Reviews";

class ReviewInput extends Component {
  state = {
    text: ""
  };

  handleChange = e => {
    this.setState({
      text: e.target.value
    });
  };

  handleSubmit = e => {
    const { addReview, restaurantId } = this.props;
    const { text } = this.state;
    e.preventDefault();
    addReview({ text, restaurantId });
    this.setState({
      text: ""
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.text}
            onChange={this.handleChange}
            placeholder="Leave a review"
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default ReviewInput;
