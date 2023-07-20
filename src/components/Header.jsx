import React, { useEffect, useState } from "react";
import "../App.css";
import { ReactComponent as MySvg } from "../assets/Ellipse.svg";
import Hamburger from "../assets/Mobile/Hamburger.svg";

const Header = () => {
  const [show, setShow] = useState(false);
  const controlNavbar = () => {
    if (window.scrollY > 250) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  const [menuActive, setMenuActive] = useState(false);

  const handleMenuClick = () => {
    setMenuActive(!menuActive);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    let previousScrollPosition = 0;
    let currentScrollPosition = 0;

    window.addEventListener("scroll", function (e) {
      currentScrollPosition = window.pageYOffset;

      console.log("Scroll position", currentScrollPosition);
      console.log("Previous scroll position", previousScrollPosition);

      if (previousScrollPosition - currentScrollPosition < 0) {
        setShow(false);
      } else if (previousScrollPosition - currentScrollPosition > 0) {
        setShow(true);
      }

      previousScrollPosition = currentScrollPosition;
    });
  }, []);

  return (
    <>
      <div className="display__desktop">
        <div className="header">
          <div className="logo">Dview.io</div>
          <div className="nav">
            <a href="/">Platform</a>
            <MySvg />

            <a href="/about">Integration</a>
            <MySvg />

            <a href="/contact">Demo</a>
          </div>
          <div className="connect">
            <a href="/connect">Contact Us</a>
          </div>
        </div>{" "}
      </div>
      <div className="display__mobile ">
        <div className="mobile__header">
          <div className="logo">Dview.io</div>
          <div className="hamburger__mob">
          <a href="#primary" className={`menu-link ${menuActive ? 'active' : ''}`} onClick={handleMenuClick}>
      <span class="line line-1"></span>
      <span class="line line-2"></span>
      <span class="line line-3"></span>
    </a>
          </div>
        </div>
        {
          menuActive && (
            <div
        className={menuActive ? 'header__navs' : ''}
        >
          <div className="navs">
            <a href="a">Platform</a>
          </div>
          <div className="navs">
            <a href="a">Integration</a>
          </div>
          <div className="navs">
            <a href="a">Demo</a>
          </div>
          <div className="cta__mob__heart">
            <button>
              <a
                href="
                b"
              >
                Contact Us
              </a>
            </button>
          </div>
        </div>
          )
        }
        
      </div>
    </>
  );
};

export default Header;