import React, { Component } from 'react';
// import Reviews from './Reviews';

class ReviewInput extends Component {

  state = {
    text: ''
  }


  handleOnChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.addReview(this.props.restaurantId, this.state.text)
    this.setState({
      text: ''
    })
  }


  render() {
    return (
      <div>
        Review Input
        <form onSubmit={this.handleOnSubmit}>
          <input
            type="text"
            value={this.state.text}
            onChange={this.handleOnChange}
          />

          <input type="submit" value="Add Review" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
