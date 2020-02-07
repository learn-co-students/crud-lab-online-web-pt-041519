import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    return (
      <ul>
        {this.props.review.map(res => ( 
            <Review key={res.id} text={res.text} id={res.id} delete={this.props.deleteReview}/>
          )
        )} 
      </ul>
    );
  }
};

export default Reviews;