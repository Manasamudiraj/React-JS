import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    // initial step of lifecycle
    super(props);
    this.state = {
      count1: 0,
      count2: 1,
      userInfo: { name: "dummy", location: "dummy", email: "14567@gmail.com" },
    };
    console.log("child constructor");
  }
  async componentDidMount() {
    // after render cycle, can have api calls here
    console.log("child did mount called");
    const data = await fetch("https://api.github.com/users/Manasamudiraj");
    const json = await data.json();
    this.setState({ userInfo: json });
  }
  componentDidUpdate() {
    // this is called only when state or any data changes or updates
    console.log("child update");
  }
  componentWillUnmount() {
    //this is called when component disppaears from page
    console.log("component will unmount");
  }
  render() {
    console.log("child render called");
    const { name, location, mail } = this.props;
    const { count1, count2, userInfo } = this.state;
    return (
      <div className="user-card">
        <h2>Name: {userInfo.name}</h2>
        <h3>Loaction: {userInfo.location || location}</h3>
        <h4>E-mail: {userInfo.email || mail}</h4>
        {/* <h4>{count1}</h4>
        <h4>{count2}</h4>
        <button
          onClick={() => {
            this.setState({
              count1: this.state.count1 + 1,
              count2: this.state.count2 + 1,
            });
          }}
        >
          {" "}
          Count increase
        </button> */}
      </div>
    );
  }
}

export default UserClass;
