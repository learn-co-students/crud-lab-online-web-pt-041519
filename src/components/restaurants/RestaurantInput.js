import React, { Component } from 'react';

class RestaurantInput extends Component {
  state = {
    text: ''
  }

  handleOnChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

 handleOnSubmit = (e) => {
   e.preventDefault()
   console.log(this.state)
   this.props.addRest(this.state.text)
   this.setState({
     text: ''
   })
 }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input
            type='text'
            placeholder='Add Restaurant'
            value={this.state.text}
            onChange={(e) => this.handleOnChange(e)}
          >
          </input>
          <input type='submit' />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
