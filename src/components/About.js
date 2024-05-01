import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor");
  }
  componentDidMount() {
    console.log("Parent did mount called");
  }
  componentDidUpdate(){
    // this is called only when state or any data changes or updates
    console.log("parent update")
  }
  render() {
    console.log("Parent render called");
    return (
      <div>
        <h1>This is About us page</h1>
        <UserClass
          name={"Manasa"}
          location={"Hyderabad"}
          mail={"pmanasa@gmail.com"}
        />
      </div>
    );
  }
}

export default About;
