import React, { Component } from 'react';

class ReviewInput extends Component {
  state =  {
    text: '',
    restaurantId: this.props.restaurantId  
  }

  handleChange  = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addReview(this.state)
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
      <h5>Reviews</h5>
      <form onSubmit={(e) => this.handleSubmit(e)}>  
        <input type="text"  value={this.state.text} onChange={(e) => this.handleChange(e)} />
        <input type="submit" />
      </form>
    </div>
    );
  }
};

export default ReviewInput
