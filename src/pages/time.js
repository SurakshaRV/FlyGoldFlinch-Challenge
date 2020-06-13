import logo from './logo.svg';
import React from "react";
import {Link} from "react-router-dom";
const Product = () => {
  return (
    <div>
    <div align='right'><button><Link to="/data" >Go to page 3</Link></button></div>
      <button><Link to="/" >Go back to page 1</Link></button>
      <center><h3>Welcome to Time !!!!!!</h3></center>
      <hr/>
      <Clock ></Clock>
      <img src={logo} alt="Logo" />
    </div>
  );
}

export class Clock extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     time: new Date().toLocaleString()
   };
 }
 componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick() {
    this.setState({
      time: new Date().toLocaleString()
    });
  }
 render() {
   return (
     <p className="App-clock">
       The time is {this.state.time}.
     </p>
   );
 }
}
export default Product;
