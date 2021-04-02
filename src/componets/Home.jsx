import React, { Component } from "react";
import Navbar from "../pages/partials/Navbar";

export default class Home extends Component {
  constructor(props) {
      super(props)
      this.state = {}

      this.getUser = this.getUser.bind(this)
  }
  componentDidMount() {
    // console.log();
    // axios.get("username", config).then(
    //   (res) => {
    //     this.setState({
    //       username: res.data,
    //     });
    //   },
    //   (err) => {
    //     console.log("toldem ",err);
    //   }
    // );
    this.getUser();
  }

  getUser(){
    this.setState((state) => {
        const user = localStorage.getItem("user")
        console.log("STATE ", user);
        return JSON.parse(user)
      })
  }

  render() {
    return (
      <div>
        <Navbar />
        <div>
            { this.state.username}
        </div>
      </div>
    );
  }
}
