import React, { Component } from "react";

const TableHeader = () => {
  return (
    <thead>
      <h1>Table made with simple components</h1>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
  );
};

const TableBody = () => {
  return (
    <tbody>
      <tr>
        <td>Charlie</td>
        <td>Janitor</td>
      </tr>
      <tr>
        <td>Mac</td>
        <td>Bouncer</td>
      </tr>
      <tr>
        <td>Dee</td>
        <td>Aspiring actress</td>
      </tr>
      <tr>
        <td>Dennis</td>
        <td>Bartender</td>
      </tr>
    </tbody>
  );
};

class Table extends Component {
  render() {
    return (
      <table>
        <thead>
          <h1>Table made on a single class component</h1>
          <tr>
            <th>Name</th>
            <th>Job</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Charlie</td>
            <td>Janitor</td>
          </tr>
          <tr>
            <td>Mac</td>
            <rd>Bouncer</rd>
          </tr>
          <tr>
            <td>Dee</td>
            <td>Aspiring actress</td>
          </tr>
          <tr>
            <td>Dennis</td>
            <td>Bartender</td>
          </tr>
        </tbody>
        <TableHeader />
        <TableBody />
      </table>
    );
  }
}

export default Table;
