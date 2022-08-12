import { Link } from "gatsby";
import React from "react";

import {
  communityLinks,
  modulesLinks,
  companyLinks,
  documentationLinks,
} from "./footerLinks";
import * as styles from "./Footer.module.css";
import { StaticImage } from "gatsby-plugin-image";

function Footer() {
  return (
    <section className={styles.footer}>
      <div className="container">
        <div className={styles.community}>
          <h2>Join our growing community</h2>
          <p>Sign up for news and updates about AcceleratorApp</p>
          <form className={styles.subscribe}>
            <input type="text" placeholder="Your email" />
            <button type="submit">
              <StaticImage
                src="../../../images/icon.svg"
                alt="Site Global Language"
                placeholder="blurred"
                layout="fixed"
                width={15}
                height={15}
              />
            </button>
          </form>
        </div>

        <div className={styles.footerLinksWrapper}>
          <div className={styles.columnDisplay}>
            <h3>Community</h3>
            {communityLinks.map((communityLink) => (
              <Link key={communityLink.id} to={communityLink.link}>
                {communityLink.name}
              </Link>
            ))}
          </div>
          <div className={styles.columnDisplay}>
            <h3>Modules</h3>
            {modulesLinks.map((modulesLink) => (
              <Link key={modulesLink.id} to={modulesLink.link}>
                {modulesLink.name}
              </Link>
            ))}
          </div>
          <div className={styles.columnDisplay}>
            <h3>Company</h3>
            {companyLinks.map((companyLink) => (
              <Link key={companyLink.id} to={companyLink.link}>
                {companyLink.name}{" "}
                {companyLink.name === "Careers" && (
                  <span className={styles.career}>We're hiring!</span>
                )}
              </Link>
            ))}
          </div>
          <div className={styles.columnDisplay}>
            <h3>Documentation</h3>
            {documentationLinks.map((documentationLink) => (
              <Link key={documentationLink.id} to={documentationLink.link}>
                {documentationLink.name}
              </Link>
            ))}
          </div>
          <div className={styles.columnDisplay}>
            <h3>Follow</h3>
            <div className={styles.socialBtns}>
              <Link to="/">
                <StaticImage
                  src="../../../images/linkedin.svg"
                  alt="Linkedin Icon"
                  placeholder="blurred"
                  layout="fixed"
                  width={27}
                  height={27}
                />
              </Link>
              <Link to="/">
                <StaticImage
                  src="../../../images/facebook.svg"
                  alt="Facebook Icon"
                  placeholder="blurred"
                  layout="fixed"
                  width={27}
                  height={27}
                />
              </Link>
              <Link to="/">
                <StaticImage
                  src="../../../images/instagram.svg"
                  alt="Instagram Icon"
                  placeholder="blurred"
                  layout="fixed"
                  width={27}
                  height={27}
                />
              </Link>
              <Link to="/">
                <StaticImage
                  src="../../../images/twitter.svg"
                  alt="Twitter Icon"
                  placeholder="blurred"
                  layout="fixed"
                  width={27}
                  height={27}
                />
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.reservedFooter}>
          <div className={styles.reservedFooterLinksSm}>
            <div className={styles.rowDisplay}>
              <Link to="/">Privacy</Link>
              <Link to="/">Cookies</Link>
            </div>
            <hr className={styles.hr} />
            <div className={styles.rowDisplay}>
              <Link to="/">Terms Of Use</Link>
              <Link to="/">DPA</Link>
              <Link to="/">Subprocessors</Link>
            </div>
          </div>
          <div className={styles.reservedFooterLinksLg}>
            <Link to="/">Privacy</Link>
            <Link to="/">Cookies</Link>
            <Link to="/">Terms Of Use</Link>
            <Link to="/">DPA</Link>
            <Link to="/">Subprocessors</Link>
          </div>
          <div className={styles.reservedFooterText}>
            <p>
              Copyright &copy; <span>{new Date().getFullYear()}</span>
              AcceleratorApp All Rights Reserved
            </p>
            <span className={styles.bar}> | </span>
            <div className={styles.rowDisplay}>
              <StaticImage
                src="../../../images/globe.svg"
                alt="Site Global Language"
                placeholder="blurred"
                layout="fixed"
                width={12}
                height={12}
              />
              <span className={styles.tooltiptext}>English</span>
              <span className={styles.english}>English</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
