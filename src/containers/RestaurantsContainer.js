import React, { Component } from "react";
import RestaurantInput from "../components/restaurants/RestaurantInput";
import Restaurants from "../components/restaurants/Restaurants";
import { connect } from "react-redux";

class RestaurantsContainer extends Component {
  render() {
    // console.log(this.props);
    const { restaurants, addRestaurant, remove } = this.props;
    // console.log(restaurants);
    return (
      <div>
        <h2>YUM</h2>
        <RestaurantInput addRestaurant={addRestaurant} />
        <Restaurants restaurants={restaurants} remove={remove} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    restaurants: state.restaurants
  };
};

const mapDispatchToProps = dispatch => ({
  addRestaurant: text =>
    dispatch({
      type: "ADD_RESTAURANT",
      payload: text
    }),
  remove: id =>
    dispatch({
      type: "DELETE_RESTAURANT",
      payload: id
    })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantsContainer);
