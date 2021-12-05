import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__col">
            <img src={logo} alt="MONACO" />
            <p className="footer__text">Ⓒ MONACO 2021</p>
          </div>
          <div className="footer__col">
            <h3 className="footer__title">Navigation</h3>
            <ul>
              <li>
                <Link to="/catalog">Catalog</Link>
              </li>
              <li>
                <Link to="/furniture">Furniture</Link>
              </li>
              <li>
                <Link to="/about">about</Link>
              </li>
            </ul>
          </div>
          <div className="footer__col">
            <h3 className="footer__title">contacts</h3>
            <ul>
              <li>
                <a href="tel:+38 066 874 52 33">+38 066 874 52 33</a>
              </li>
              <li>
                <a href="malito:contact_monaco@gmail.com">
                  contact_monaco@gmail.com
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__col">
            <h3 className="footer__title">Social network</h3>
            <ul>
              <li>
                <Link to="/instagram">instagram</Link>
              </li>
              <li>
                <Link to="/facebook">facebook</Link>
              </li>
              <li>
                <Link to="/youtube">youtube</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
