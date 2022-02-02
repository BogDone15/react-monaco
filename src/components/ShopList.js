import React, { Component } from "react";
import shopImg1 from "../assets/img/shop-img1.png";
import shopImg2 from "../assets/img/shop-img2.png";
import shopImg3 from "../assets/img/shop-img3.png";
import shopImg4 from "../assets/img/shop-img4.png";
import shopImg5 from "../assets/img/shop-img5.png";
import shopImg6 from "../assets/img/shop-img6.png";

import { Link } from "react-router-dom";

export default class ShopList extends Component {
  state = {
    shopImagesTop: [
      {
        url: shopImg1,
        name: "Bathroom",
      },
      {
        url: shopImg2,
        name: "Perfumes",
      },
    ],
    shopImagesMiddle: [
      {
        url: shopImg3,
        name: "Bedroom",
      },
      {
        url: shopImg4,
        name: "Kitchen",
      },
    ],
    shopImagesBottom: [
      {
        url: shopImg5,
        name: "Accessories",
      },
      {
        url: shopImg6,
        name: "Living Room",
      },
    ],
  };
  render() {
    return (
      <div>
        <div className="shop__wrapper-top">
          <div className="shop__wrapper-block">
            {this.state.shopImagesTop.map((item, index) => {
              return (
                <Link
                  key={index}
                  to={`/shop/${item.name.toLowerCase()}`}
                  className="shop__wrapper-block-item"
                >
                  <div className="shop__detail">
                    <span>View all</span>
                    <svg
                      width="18"
                      height="12"
                      viewBox="0 0 18 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18 6L8 0.226497L8 11.7735L18 6ZM4.37114e-08 7L9 7L9 5L-4.37114e-08 5L4.37114e-08 7Z"
                        fill="#562A14"
                      />
                    </svg>
                  </div>
                  <img src={item.url} alt="MONACO" />
                  <div className="shop__wrapper-block-cover">
                    <span>{item.name.toLowerCase()}</span>
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
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="shop__wrapper-block">
            {this.state.shopImagesMiddle.map((item, index) => {
              return (
                <Link
                  key={index}
                  to={`/shop/${item.name.toLowerCase()}`}
                  className="shop__wrapper-block-item"
                >
                  <div className="shop__detail">
                    <span>View all</span>
                    <svg
                      width="18"
                      height="12"
                      viewBox="0 0 18 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18 6L8 0.226497L8 11.7735L18 6ZM4.37114e-08 7L9 7L9 5L-4.37114e-08 5L4.37114e-08 7Z"
                        fill="#562A14"
                      />
                    </svg>
                  </div>
                  <img src={item.url} alt="MONACO" />
                  <div className="shop__wrapper-block-cover">
                    <span>{item.name.toLowerCase()}</span>
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
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="shop__wrapper-bottom">
          {this.state.shopImagesBottom.map((item, index) => {
            const direct = item.name.toLowerCase().split(" ").join("-");
            return (
              <Link
                key={index}
                to={`/shop/${direct}`}
                className="shop__wrapper-bottom-item"
              >
                <div className="shop__detail">
                  <span>View all</span>
                  <svg
                    width="18"
                    height="12"
                    viewBox="0 0 18 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 6L8 0.226497L8 11.7735L18 6ZM4.37114e-08 7L9 7L9 5L-4.37114e-08 5L4.37114e-08 7Z"
                      fill="#562A14"
                    />
                  </svg>
                </div>
                <img src={item.url} alt="MONACO" />
                <div className="shop__wrapper-block-cover">
                  <span>{item.name.toLowerCase()}</span>
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
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}
