import React, { Component } from "react";
import { ProjectConsumer } from "../context";

export default class Hamburger extends Component {
  render() {
    return (
      // <ProjectConsumer>
      //   {(value) => {
      //    console.log(value);
          <div className="hamburger">
            <span className="first" />
            <span className="second" />
            <span className="third" />
            <span className="fourth" />
          </div>
      //   }}
      // </ProjectConsumer>
    );
  }
}
