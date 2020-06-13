/*eslint-env jquery*/
import React from "react";
import {Link} from "react-router-dom";
import logo from './logo.svg';
import { observer } from "mobx-react";
import { observable, computed, action, decorate } from "mobx";

const Product3 = () => {
  return (
    <div>
    <button><Link to="/time" >Go back to page 2</Link></button>
    <div align='right'><button><Link to="/currency" >Go to page 4</Link></button></div>
      <center><h3>Welcome to Data !!!!!!</h3></center>
      <hr/>
      <UserList ></UserList>
    </div>
  );
}

class UserList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {names: [],
      isLoading: false};
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch('https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole')
    .then(response => response.json())
          .then(data => this.setState({ names: data, isLoading: false }));  }

  render() {
    const persons = this.state.names.map(item => ({
        ...item,
        fullName: `${item.first} ${item.last}` || "",
      }));
      if (this.state.isLoading) {
            return <p>Loading ...</p>;
          }
    return (
      <div id="layout-content" className="layout-content-wrapper">
        {persons.map((q) => <div>{q.fullName}</div>)}
      </div>
    );
  }
}
decorate(UserList,{
  state:observable
});
export default Product3;
