import React, { Component } from "react";
const ProjectConext = React.createContext();

class ProjectProvider extends Component {
  state = {};

  handleMenuClick = () => {
    console.log("this is handleMenuClick");
  };

  render() {
    return (
      <ProjectConext.Provider
        value={{
          ...this.state,
          handleMenuClick: this.handleMenuClick,
        }}
      >
        {this.props.children}
      </ProjectConext.Provider>
    );
  }
}

export function withRoomConsumer(Component) {
 return function ConsumerWrapper(props) {
   return (
     <ProjectConsumer>
       {(value) => <Component {...props} context={value} />}
     </ProjectConsumer>
   );
 };
}

const ProjectConsumer = ProjectConext.Consumer;

export { ProjectProvider, ProjectConext, ProjectConsumer };
