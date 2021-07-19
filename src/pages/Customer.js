import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "../styles/Customer.scss";
import axios from "axios";

class Customer extends Component {
  constructor() {
    super();
    this.state = {
      token: "",
      crust: "",
      flavor: "",
      size: "",
      table_no: 0,
      order_no: 0,
    };
  }

  componentDidMount() {
    const headers_auth = {
      password: "test",
      username: "test",
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    axios
      .post("https://order-pizza-api.herokuapp.com/api/auth", headers_auth)
      .then((response) => {
        console.log(response);
        this.setState({
          token: response.data.access_token,
        });
      })
      .catch((error) => {
        console.log("error with auth");
      });
  }

  uploadOrder = (e) => {
    e.preventDefault();

    const axios = require("axios");

    const headers_order = {
      headers: {
        Authorization: "Bearer " + this.state.token,
        "Content-Type": "application/json",
      },
    };

    axios
      .post(
        "https://order-pizza-api.herokuapp.com/api/orders",
        {
          Crust: this.state.crust,
          Flavor: this.state.flavor,
          Size: this.state.size,
          Table_No: parseInt(this.state.table_no)
        },
        headers_order
      )
      .then((response) => {
        console.log(response);
        this.setState({
          order_no: response.data.Order_ID,
        });
        alert(
          "Order number " +
            this.state.order_no +
            " is confirmed. \n Crust: " +
            this.state.crust +
            "\n Flavor: " +
            this.state.flavor +
            "\n Size: " +
            this.state.size +
            "\n Table Number: " +
            this.state.table_no +
            "\n Thank you!"
        );
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  changeCrust = (e) => {
    this.setState({
      crust: e.target.value,
    });
  };

  changeFlavor = (e) => {
    this.setState({
      flavor: e.target.value,
    });
  };

  changeSize = (e) => {
    this.setState({
      size: e.target.value,
    });
  };

  changeTable = (e) => {
    this.setState({
      table_no: e.target.value,
    });
  };

  render() {
    return (
      <div id="Form">
        <h1>Submit pizza order form</h1>
        <form className="form-class">
          <div className="group field">
            <input
              className="text"
              type="input"
              placeholder="crust"
              name="crust"
              id="crust"
              value={this.state.crust}
              onChange={this.changeCrust}
              required
            />
            <label for="crust" className="label">
              Crust
            </label>
          </div>
          <div className="group field">
            <input
              className="text"
              type="input"
              placeholder="flavor"
              name="flavor"
              id="flavor"
              value={this.state.flavor}
              onChange={this.changeFlavor}
              required
            />
            <label for="flavor" className="label">
              Flavor
            </label>
          </div>
          <div className="group field">
            <input
              className="text"
              type="input"
              placeholder="size"
              name="size"
              id="size"
              value={this.state.size}
              onChange={this.changeSize}
              required
            />
            <label for="size" className="label">
              Size
            </label>
          </div>
          <div className="group field">
            <input
              className="text"
              type="number"
              placeholder="table"
              name="table"
              id="table"
              value={this.state.table_no}
              onChange={this.changeTable}
              required
            />
            <label for="table" className="label">
              Table No.
            </label>
          </div>
          <button className="submit" onClick={this.uploadOrder}>
            Submit!
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(Customer);
