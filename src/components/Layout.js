import * as React from "react";
import { Helmet } from "react-helmet";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./all.sass";
// import "./all.scss";
import useSiteMetadata from "./SiteMetadata";
import { withPrefix } from "gatsby";

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/favicon_v2/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon_v2/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon_v2/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/favicon_v2/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix("/")}img/hornetlab/og-image_v1-4.jpg`}
        />
        {/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"></link> */}
      </Helmet>
      <Navbar />
      <div className="has-navbar-fixed-top">{children}</div>
      <Footer />

      {/* <div className="youtube-iframe-container">
        <iframe src="https://www.youtube.com/embed/0LFdMk27UxM" referrerpolicy="strict-origin-when-cross-origin"></iframe>
      </div> */}

    </div>
  );
};

export default TemplateWrapper;
