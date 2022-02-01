import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class MenuItem extends Component {
  render() {
    const name = this.props.children.toLowerCase().split(' ', 1).join('');

    return (
      <li>
        <Link to={name}>{this.props.children}
        <svg
          width="18"
          height="12"
          viewBox="0 0 18 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 6L8 0.226497L8 11.7735L18 6ZM4.37114e-08 7L9 7L9 5L-4.37114e-08 5L4.37114e-08 7Z"
            fill="#2E4F4D"
          />
        </svg>
        </Link>
      </li>
    );
  }
}

// class MenuItem extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       hover: false,
//     };
//   }

//   handleHover() {
//     this.setState({ hover: !this.state.hover });
//   }

//   render() {
//     const styles = {
//       container: {
//         opacity: 0,
//         animation: "1s appear forwards",
//         animationDelay: this.props.delay,
//       },
//       menuItem: {
//         fontFamily: `'Open Sans', sans-serif`,
//         fontSize: "1.2rem",
//         padding: "1rem 0",
//         margin: "0 5%",
//         cursor: "pointer",
//         color: this.state.hover ? "gray" : "#fafafa",
//         transition: "color 0.2s ease-in-out",
//         animation: "0.5s slideIn forwards",
//         animationDelay: this.props.delay,
//       },
//       line: {
//         width: "90%",
//         height: "1px",
//         background: "gray",
//         margin: "0 auto",
//         animation: "0.5s shrink forwards",
//         animationDelay: this.props.delay,
//       },
//     };
//     return (
//       <div style={styles.container}>
//         <div
//           style={styles.menuItem}
//           onMouseEnter={() => {
//             this.handleHover();
//           }}
//           onMouseLeave={() => {
//             this.handleHover();
//           }}
//           onClick={this.props.onClick}
//         >
//           {this.props.children}
//         </div>
//         <div style={styles.line} />
//       </div>
//     );
//   }
// }
