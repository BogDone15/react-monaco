import React, { Component } from "react";
import shopImg1 from "../assets/img/shop-img1.png";
import shopImg2 from "../assets/img/shop-img2.png";
import shopImg3 from "../assets/img/shop-img3.png";
import shopImg4 from "../assets/img/shop-img4.png";
import shopImg5 from "../assets/img/shop-img5.png";
import shopImg6 from "../assets/img/shop-img6.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default class Shop extends Component {
  render() {
    return (
      <ShopWrapper>
        <div className="container">
          <h1 className="shop__title">SHOP</h1>
          <div className="shop__wrapper-top">
            <div className="shop__wrapper-block">
              <Link to="/" className="shop__wrapper-block-item">
                <img src={shopImg1} alt="MONACO" />
                <div className="shop__wrapper-block-cover">
                  <span>Bathroom</span>
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
              <Link to="/" className="shop__wrapper-block-item">
                <img src={shopImg2} alt="MONACO" />
                <div className="shop__wrapper-block-cover">
                  <span>Perfumes</span>
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
            </div>
            <div className="shop__wrapper-block">
              <Link to="/" className="shop__wrapper-block-item">
                <img src={shopImg3} alt="MONACO" />
                <div className="shop__wrapper-block-cover">
                  <span>Bedroom</span>
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
              <Link to="/" className="shop__wrapper-block-item">
                <img src={shopImg4} alt="MONACO" />
                <div className="shop__wrapper-block-cover">
                  <span>Kitchen</span>
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
            </div>
          </div>
          <div className="shop__wrapper-bottom">
            <Link to="/" className="shop__wrapper-bottom-item">
              <img src={shopImg5} alt="MONACO" />
              <div className="shop__wrapper-block-cover">
                <span>Accessories</span>
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
            <Link to="/" className="shop__wrapper-bottom-item">
              <img src={shopImg6} alt="MONACO" />
              <div className="shop__wrapper-block-cover">
                <span>Living Room</span>
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
          </div>
        </div>
      </ShopWrapper>
    );
  }
}

const ShopWrapper = styled.section`
  padding: 70px 0 130px;
  .shop {
    &__title {
      font-weight: normal;
      font-size: 72px;
      line-height: 86px;
      text-transform: uppercase;
      color: #2e4f4d;
    }
    &__wrapper {
      &-bottom {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        margin-top: 72px;
        &-item:last-child {
          transform: translateY(-50px);
        }
      }
      &-top {
        display: flex;
        justify-content: space-between;
      }
      &-block {
        &-item {
          cursor: pointer;
          display: block;
          margin-top: 70px;
        }
        &-cover {
          display: flex;
          justify-content: space-between;
          margin-top: 22px;
        }
      }
    }
  }
`;
