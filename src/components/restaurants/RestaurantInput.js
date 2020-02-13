import React, { Component } from 'react';

class RestaurantInput extends Component {
  state =  {
    text: '',
  }

  handleChange  = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addRestaurant(this.state.text)
    this.setState({
      text: '',
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input type="text" onChange={(e) => this.handleChange(e)} value={this.state.text}/>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput
