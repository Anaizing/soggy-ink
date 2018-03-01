import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Sidebar from "../components/Sidebar";
import './index.css'
import "../styles/layout-overide.css";
import "../styles/blog-listing.css";
import Media from "react-media";

import "prismjs/themes/prism-fuck.css";


const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" }
      ]}
    />
    <Header />

    <div
      style={{
        margin: "0 auto",
        maxWidth: 980,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        height: "100%"
      }}
    >
      <Media query={{ maxWidth: 848 }}>
        {matches =>
          matches ? (
            <div
              style={{
                margin: "0 auto",
                maxWidth: 980,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                height: "100%",
                padding: "25px"
              }}
            >
              <div style={{ flex: 1 }}>{children()}</div>
            </div>
          ) : (
            <div
              style={{
                margin: "0 auto",
                maxWidth: 980,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                height: "100%",
                padding: "25px"
              }}
            >
              <div style={{ flex: 2.5, paddingRight: "30px" }}>
                {children()}
              </div>
              <div style={{ flex: 1 }}>
                <img src="https://scontent-syd2-1.xx.fbcdn.net/v/t1.0-9/17264574_10158305411330117_6308181233996292122_n.jpg?oh=748991fc0ccaf51f7f247f89f93ec2f3&oe=5AF3DE89" />
                <Sidebar
                  title="Soggy Ink"
                  description="Articles on Javascript, React, Node.js, CSS Grid, the walls I beat my head against and the struggle on this beautiful journey towards mastering my craft."
                />
                <Sidebar
                  title="About me"
                  description="An inquisitive Freelance Web developer with a knack for creative problem solving.&quot; At least thats what I wish people were saying about me, Im more of a latecomer to this huge web dev world trying to catch up one failure at a time, with a big fucking smile on my face! Anai Araya"
                />
                <iframe
                  width="250"
                  height="200"
                  src="https://www.youtube.com/embed/OFIWstcaoLc"
                  frameborder="0"
                  allow="autoplay; encrypted-media"
                  allowfullscreen="true"
                />
              </div>
            </div>
          )
        }
      </Media>
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
