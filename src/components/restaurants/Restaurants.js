import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {

 
  render() {
    return(
      <ul>
        
        {this.props.restaurants.restaurants.map(res => (
            <Restaurant key={res.id} text={res.text} id={res.id} delete={this.props.delete}/>
          )
        )} 
      </ul>
    );
  }
};

export default Restaurants;