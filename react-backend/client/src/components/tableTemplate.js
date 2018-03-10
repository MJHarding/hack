import React, { Component } from "react";
import "../App.css";
import Table from "react-bootstrap/lib/Table";


class table extends Component {

  render() {
    return (
        
<Table responsive>
    <div>
  <thead>
    <tr>
      <th>Entry</th>
      <th>Module Code</th>
      <th>Lecturer</th>
      <th>Stage In Process</th>
      <th>Documents</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
    </tr>
  </tbody>
  </div>
</Table>
    );
  }
}

export default table;
