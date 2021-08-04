import React from "react";
import { links } from "../data";

export default function Footer() {

    return (
      <footer>
        <div className="col-md-12">
          <div className="social-links">
          {links.map((link) => (
          <span key={link.name} className="m-4">
            <a href={link.url} target="_blank" rel="noopener noreferrer">
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
             <img src={link.image} alt="icons"></img>
             </div>
              <i className={link.class}></i>
            </a>
          </span>
          ))}
          </div>

          <div className="copyright py-4 text-center">
            <div className="container">
              <small>
                Copyright &copy;{" "}
                {"David Bosun-Arebuwa"}
              </small>
            </div>
          </div>
        </div>
      </footer>
    );

}
