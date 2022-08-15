import React, { useEffect } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

function Header() {
  const toggleMobileMenu = () => {
    let topNav: HTMLElement | null = document.getElementById("topNav");
    let navIcon: HTMLElement | null = document.getElementById("navIcon");

    if (topNav?.className === "navs") {
      navIcon ? (navIcon.className += " mobile") : "";
      topNav ? (topNav.className += " responsive") : "";
    } else {
      navIcon ? (navIcon.className += "navIcon") : "";
      topNav ? (topNav.className = "navs") : "";
    }
  };

  const changeBackground = () => {
    let topNavWrapper: HTMLElement | null = document.getElementById("topNavWrapper");
    if (window.scrollY >= 90) {
      topNavWrapper ? (topNavWrapper.className = "topNavWrapper active") : "";
    } else {
      topNavWrapper ? (topNavWrapper.className = "topNavWrapper") : "";
    }
  }

  const ensureNavIconIsHiddenOnLg = () => {
    const { innerWidth } = window;
    let topNav: HTMLElement | null = document.getElementById("topNav");
    let navIcon: HTMLElement | null = document.getElementById("navIcon");
    if (innerWidth > 946) {
      topNav ? (topNav.className = "navs") : "";
      navIcon ? (navIcon.className = "navIcon") : "";
    }
  }

  useEffect(() => {
    changeBackground()
    // adding the event when scroll change Logo
    window.addEventListener("scroll", changeBackground);
  }, [])

  useEffect(() => {
    ensureNavIconIsHiddenOnLg();
    // adding the event when resize to ensure NavIcon is hidden on large devices
    window.addEventListener("resize", ensureNavIconIsHiddenOnLg);
  }, [])

  return (
    <section className="topNavWrapper" id="topNavWrapper">
      <div className="container topNav">
        <a href="/" className="logo">
          <StaticImage
            src="../../images/logo.svg"
            alt="AcceleratorApp Logo"
            placeholder="blurred"
            layout="fixed"
            width={35}
            height={35}
          />
          <span>AcceleratorApp</span>
        </a>
        <div
          className="navIcon"
          id="navIcon"
          onClick={() => toggleMobileMenu()}
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
        </div>
        <div className="navs container" id="topNav">
          <Link to="/" className="active">
            Community
          </Link>
          <Link to="/">Modules</Link>
          <Link to="/">Company</Link>
          <Link to="/">Pricing</Link>
          <Link to="/" className="signin">
            Sign In
          </Link>
          <Link to="/" className="demo">
            Request a Demo
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Header;
