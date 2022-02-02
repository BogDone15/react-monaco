import React, { Component } from "react";
import ShopList from "../components/ShopList";
import styled from "styled-components";
import Title from "../components/Title";

export default class Shop extends Component {
  render() {
    return (
      <ShopWrapper>
        <div className="container">
          <Title title="Shop" />
          <ShopList />
        </div>
      </ShopWrapper>
    );
  }
}

const ShopWrapper = styled.section`
  padding: 70px 0 130px;
  .shop {
    &__detail {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      background: #eae8e3;
      padding: 12px 13px;
      color: #562a14;
      font-size: 16px;
      line-height: 24px;
      text-transform: uppercase;
      transition: all 0.2s linear;
      opacity: 0;
      svg {
        margin-left: 10px;
      }
    }
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
        &-item {
          position: relative;
          img {
            transition: all 0.2s linear;
          }
          &:hover .shop__detail {
            opacity: 1;
          }
          &:hover img {
            filter: blur(3px);
          }
        }
      }
      &-top {
        display: flex;
        justify-content: space-between;
      }
      &-block {
        &-item {
          position: relative;
          cursor: pointer;
          display: block;
          margin-top: 70px;
          img {
            transition: all 0.2s linear;
          }
          &:hover .shop__detail {
            opacity: 1;
          }
          &:hover img {
            filter: blur(3px);
          }
        }
        &-cover {
          display: flex;
          justify-content: space-between;
          margin-top: 22px;
          & > span {
            text-transform: uppercase;
          }
        }
      }
    }
  }
`;
