import React from "react";
import Header from "../components/Header";
import { Footer } from "../components/Footer";
import mainImg from "../assets/img/main-img.png";
import brandImg from "../assets/img/brand-img.png";
import imageYear from "../assets/img/ImageYear.png";
import img1 from "../assets/img/home-img1.png";
import img2 from "../assets/img/home-img2.png";
import img3 from "../assets/img/home-img3.png";
import img4 from "../assets/img/home-img4.png";
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
          <h1 className="home__title">Monaco brand</h1>
          <div className="brand__wrapper">
            <img src={brandImg} alt="MONACO" />
            <div className="brand__content">
              <h1 className="brand__content-title">
                TELLING STORIES THROUGH EXQUISITE INTERIORS
              </h1>
              <p className="brand__content-text">
                Ever since she was a child, Alice Wang has been fascinated by
                the world of interior design. For 15 years Alice worked in
                fashion, and when she turned 40, she felt it was time to devote
                herself to her real passion. That's when her personal Monaco
                project, dedicated to family comfort and exquisite interiors,
                was born.
              </p>
              <Link to="/cart" className="brand__content-btn">
                learn more
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 12L11 6.2265L11 17.7735L21 12ZM3 13L12 13L12 11L3 11L3 13Z"
                    fill="#562A14"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <h1 className="home__title home__title-second">Inside out</h1>
          <div className="inside__wrapper">
            <img src={imageYear} alt="MONACO" />
            <p className="inside__text">
              The connection between nature, color and form, the true beauty of
              imperfection. <br />
              This Belgian house seems to speak to us with colors in the details
              of the interior and the greenery of the garden. Harmony of space
              and coziness. Subtle colored notes of the interior are combined
              with complex objects, and the feeling of harmony is emphasized by
              the dialogue between architecture, nature and colors. <br />
              Even the minimalist design gives warmth, and the connection with
              the surrounding landscape awakens an even greater sense of unity.
            </p>
          </div>
          <img src={img1} alt="MONACO" className="inside__img-first" />
          <img src={img2} alt="MONACO" className="inside__img-second" />
          <div className="inside__block">
            <p className="inside__text">
              Villa was the ideal setting for our new collection. The organic
              shapes, natural fabrics and natural textures, such as clay peels,
              textured wood and linen from the autumn-winter 2021 collection,
              blend harmoniously into the original concept of the building.
            </p>
            <img src={img3} alt="MONACO" />
          </div>
          <img src={img4} alt="MONACO" className="inside__img-fourth" />
        </div>
      </HomeWrapper>
      <Footer />
    </>
  );
};

const HomeWrapper = styled.section`
  padding: 90px 0 120px;
`;
