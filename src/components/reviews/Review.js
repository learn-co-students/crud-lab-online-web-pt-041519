import React, { Component } from 'react';

class Review extends Component {

  render() {
    //const { review } = this.props

    return (
      <div>
        <li>
          {console.log('single review')}
          {this.props.text}
        </li>
        <button onClick={() => this.props.delete(this.props.id)}> X </button>
      </div>
    );
  }

};

export default Review;
