import React from "react";
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import {Link} from "react-router-dom";
const Products = () => {
  const [count, setCount] = useState(0)

  const incrementCount = increment => {
    setCount(count + increment)
  }
  const decrementCount = decrement => {
    setCount(count - decrement)
  }
  return (
    <div>
    <div align='right'><center><button><Link to="/time" >Go to page 2</Link></button></center></div>
      <center><h3>Welcome to Home</h3></center>
      <hr/><div align='center'>
      <Button increment={1} onClickFunction={incrementCount} />&nbsp;&nbsp;
      <span>{count}</span>&nbsp;&nbsp;
      <Button2 decrement={1} onClickFunction={decrementCount} />
      </div>
      <img src={logo} alt="Logo" />
    </div>
  );
};
export default Products;

const { useState } = React

const Button = ({ increment, onClickFunction }) => {
  const handleClick = () => {
    onClickFunction(increment)
  }
  return <button onClick={handleClick}>+{increment}</button>
}
const Button2 = ({ decrement, onClickFunction }) => {
  const handleClick = () => {
    onClickFunction(decrement)
  }
  return <button onClick={handleClick}>-{decrement}</button>
}
