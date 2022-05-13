import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { navbar, logo, content } from './layout.module.css';

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <div className={navbar}>
        <a href="#">
          <img className={logo} src="https://developer.static.autodesk.com/forgeunified/releases/current/1.0.0.20220510190011/images/autodesk-logo-primary-rgb-black.svg"></img>
        </a>
      </div>
      <div className={content}>
        <h1>{data.site.siteMetadata.title}</h1>
        {children}
      </div>
    </>
  )
};

export default Layout;
