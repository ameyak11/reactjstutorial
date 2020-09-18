import React, { Component } from "react";
import { Media } from "react";

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: [
        {
          id: 0,
          name: "dish1",
        },
      ],
    };
  }

  render() {
    const menu = this.state.dishes.map((dish) => {
      return (
        <div key={dish.id} className="col-12 mt-5">
          <Media tag="li">
            <Media left middle>
              <Media heading>{dish.name}</Media>
            </Media>
          </Media>
        </div>
      );
    });
    return (
      <div className="container">
        <div className="row">
          <Media list>{menu}</Media>
        </div>
      </div>
    );
  }
}

export default Menu;
