import React from "react";
import titleImg from "../assets/img/title.png";
import aboutImg1 from "../assets/img/about-img1.png";
import aboutImg2 from "../assets/img/about-img2.png";
import styled from "styled-components";

export const About = () => {
  return (
    <AboutWrapper>
      <div className="container">
        <div className="about__wrap">
          <div className="about__cover">
            <img src={aboutImg1} alt="MONACO" />
            <img
              src={titleImg}
              alt="MONACO"
              className="about__wrap-img-title"
            />
          </div>
          <p className="about__wrap-text">
            Have a compelling need to experience the world, humanity and nature,
            and then express our interpretations in unique and captivating ways.
            This spirit inspires our distinctive, artistic and bespoke approach
            to interior design, which resonates profoundly with the craft of
            poetry.
          </p>
        </div>
        <div className="about__block">
          <p>
            EUROPEAN FLAX <br />
            Ecological European flax is a natural fiber that is grown without
            artificial irrigation, defoliants and genetically modified seeds.
            Also, this method of cultivation reduces fertilization, all of which
            helps us conserve the earth's resources and fresh water supplies.
            The fiber production process is European Flax® certified by the
            European Flax and Hemp Confederation (CELC), a non-profit
            organization that oversees all stages of flax and hemp production
            and processing.
          </p>
          <p>
            100% RECYCLED WOOD <br />
            Recycled wood is obtained by recycling waste wood products. By
            turning this waste into a new resource, we reduce the production of
            primary raw materials as well as the consumption of water, energy
            and other natural resources.
          </p>
          <p>
            RECYCLED GLASS <br />
            Recycled glass is produced by recycling other glass products. It is
            produced using technologies that consume less energy and reduce CO2
            emissions.
          </p>
        </div>
        <img src={aboutImg2} alt="MONACO" className="about__wrap-img" />
        <div className="about__content">
          <h1>values, views and life philosophy</h1>
          <p>
            We believe that a space is defined by other dimensions than its mere
            physical measurements – like height, width and depth. A
            well-designed interior expresses your values, views and life
            philosophy. We personally take care of every step in the process;
            from sketching the very first idea to crafting even the tiniest
            detail.
          </p>
          <p>
            We have a taste for the timeless and like to construct things so
            that they’ll outlast a lifetime. We are always looking for the right
            balance between sustainability and aesthetics – which prove to go
            hand in hand. What we also find important is that we do all of this
            in an intelligent way. We source sustainable materials only and
            minimize our waste in every step of the process.
          </p>
        </div>
      </div>
    </AboutWrapper>
  );
};

const AboutWrapper = styled.section`
  padding: 140px 0 130px;
  .about {
    img {
      display: block;
      max-width: 100%;
      height: auto;
    }
    &__cover {
      position: relative;
    }
    &__wrap {
      display: flex;
      justify-content: space-between;
      &-img {
        display: block;
        max-width: 100%;
        height: auto;
      }
      &-img-title {
        position: absolute;
        left: 560px;
        top: -74px;
      }
      &-text {
        max-width: 307px;
        width: 100%;
        text-align: right;
        font-size: 16px;
        line-height: 19px;
        transform: translateY(100px);
      }
    }
    &__block {
      max-width: 528px;
      width: 100%;
      margin: 60px 0 60px auto;
      p {
        font-size: 16px;
        line-height: 19px;
        margin-bottom: 20px;
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
    &__content {
      max-width: 400px;
      width: 100%;
      margin-top: 80px;
      h1 {
        font-family: "Trajan Pro", sans-serif;
        font-weight: normal;
        font-size: 18px;
        line-height: 22px;
        text-transform: uppercase;
        margin-bottom: 15px;
      }
      p {
        font-size: 16px;
        line-height: 19px;
        margin-bottom: 30px;
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
`;
