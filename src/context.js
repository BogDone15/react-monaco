import React, { Component } from "react";
const ProjectConext = React.createContext();

class ProjectProvider extends Component {
  state = {
    menuOpen: false,
  };

  handleMenuClick = () => {
    this.setState(() => {
      return { menuOpen: !this.state.menuOpen };
    });
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

const ProjectConsumer = ProjectConext.Consumer;

export { ProjectProvider, ProjectConsumer };
