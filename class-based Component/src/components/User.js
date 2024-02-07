import { Component } from "react";
import classes from "./User.module.css";
class User extends Component {
  componentWillUnmount() {
    console.log("Component unmounts from tree widget");
  }
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

export default User;
