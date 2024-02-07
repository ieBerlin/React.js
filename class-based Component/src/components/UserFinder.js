import { Fragment, Component } from "react";
import UsersContext from "../store/users-context.js";
import Users from "./Users.js";
import classes from "./UserFinder.module.css";
const DUMMY_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" },
];
class UserFinder extends Component {
  static contextType = UsersContext;
  searchChangeHandler = (event) => {
    this.setState({ searchTerm: event.target.value });
  };
  componentDidMount() {
    this.setState({
      filteredUsers: this.context.users,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: this.context.users.filter((user) =>
          user.name.includes(this.state.searchTerm)
        ),
      });
    }
  }

  constructor() {
    super();
    this.state = {
      filteredUsers: DUMMY_USERS,
      searchTerm: "",
    };
  }
  render() {
    console.log(this.state.searchTerm);
    return (
      <Fragment>
        <div className={classes.finder}>
          <input type="search" onChange={this.searchChangeHandler.bind(this)} />
        </div>
        <Users users={this.state.filteredUsers} />
      </Fragment>
    );
  }
}

export default UserFinder;
