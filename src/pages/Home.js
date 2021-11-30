import React from "react";
import { Header } from "../components/Header";
import mainImg from "../assets/img/main-img.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <Header />
      <HomeWrapper>
        <div className="container">
          <img src={mainImg} alt="MONACO" className="home__img" />
          <Link to="/cart" className="arrow">
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
          </Link>
          <h1 className="home__title">
          Monaco brand
          </h1>
        </div>
      </HomeWrapper>
    </>
  );
};

const HomeWrapper = styled.section`
  padding: 90px 0 120px;
`;
