import React, { Component } from "react";

class Success extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
      
  }

  render() {
    return (
      <div>
        <h1>Order Complete</h1>
        <table>
          <thead>
            <tr>
              <th>Crust</th>
              <th>Flavor</th>
              <th>Size</th>
              <th>Table no.</th>
            </tr>
          </thead>
          <tbody>
            {this.state.pizza.map((piz) => (
              <tr key={piz.Timestamp}>
                <td>{piz.Crust}</td>
                <td>{piz.Flavor}</td>
                <td>{piz.Size}</td>
                <td>{piz.Table_No}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Success;
