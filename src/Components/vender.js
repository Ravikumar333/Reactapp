import React from 'react'
import './vendor.css';
import { Link } from 'react-router-dom'
import Image from './download.png'
import Image1 from './link4.png'
import Image2 from './climacell.png'
import Image3 from './netafim.png'


export default class vender extends React.Component {
  render() {
    return (<div style={{ backgroundColor: 'gray' }}>
      <br />
      <h1 className="m-4" style={{ backgroundColor: 'black', color: 'white', textAlign: "left" }}>Configauration add new vender</h1>

      <div className="card-group">
        <div className="card m-3">
          <div className="card-body">
            <div className="card-title" style={{ borderBottom: "2px solid black" }}>    <h1> vender overview</h1>
              <div class="vendor">
                <button class="dropbtn">Add Device</button>
                <div class="vendor-content">
                  <a href="add1">BOSCH</a>
                  <a href="add">LINK 4</a>
                  <a href="add2">CLIMACELL</a>
                  <a href="add3">NETAFIM</a>
                </div>
              </div>

            </div>
            <tr><td><img src={Image} width="50%" /></td><td> <h2>0</h2></td></tr>
            <tr> <td> <img src={Image1} width="50%" /></td> <td> <h2>0</h2></td></tr>
            <tr><td><img src={Image2} width="50%" /></td><td> <h2>0</h2></td></tr>
            <tr> <td> <img src={Image3} width="50%" /></td> <td> <h2>0</h2></td></tr>
          </div>
        </div>



        <div className="card m-3">
          <div className="card-body">
            <div className="card-title" style={{ borderBottom: "2px solid black" }}>    <h1> Monitoring</h1>
            </div>
            <tr> <td>vendors offline</td><td><h2 style={{ backgroundColor: "red" }}>0</h2></td></tr>

            <tr> <td>gatewaysoffline </td><td> <h2 style={{ backgroundColor: "red" }}>0</h2></td></tr>
            <tr><td>sensers offline </td> <td> <h2 style={{ backgroundColor: "red" }}>0</h2></td></tr>

          </div>
        </div>
      </div>
      <div className="card m-3">
        <div className="card-body">
          <div className="card-title" style={{ borderBottom: "2px solid black" }}>    <h1>list of devices</h1>
          </div>
          <li style={{ display: "flex", listStyle: "none" }}><ol>vender</ol><ol> gatewayname</ol><ol>sensor type</ol><ol>sensor name</ol><ol>search</ol></li><br />
          <li style={{ display: "flex", listStyle: "none" }}><ol class="btn btn-secondary dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
            all
  </ol>&nbsp;&nbsp;&nbsp;<ol class="btn btn-secondary dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
              all
  </ol>&nbsp;&nbsp;&nbsp;&nbsp;<ol class="btn btn-secondary dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
              all
  </ol>&nbsp;&nbsp;&nbsp;&nbsp;<ol class="btn btn-secondary dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
              all
  </ol>&nbsp;&nbsp;&nbsp;<ol>
              <input placeholder="type" />
            </ol></li> <br />

          <li style={{ display: "flex", listStyle: "none" }}><ol>vender</ol><ol> gatewayname</ol><ol>sensor type</ol><ol>sensor name</ol><ol>measurement</ol> <ol>lastdate</ol></li>
        </div>

      </div>

    </div>)
  }
}