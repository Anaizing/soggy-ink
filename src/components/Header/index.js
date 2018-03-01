import React from 'react'
import Link from 'gatsby-link'
import './header.css'

const Header = () => (
  <div
    style={{
      background : "#B39DDB",
      marginBottom: "3rem",
      marginTop: "-100px",
      borderBottom: "2px solid #e6e6e6"
    }}
  >
    <div
      style={{
        margin: "0 auto",
        maxWidth: 980,
        height: '100%',
        paddingTop: '10rem'
      }}
    >
< h1 style = {{ 
          fontFamily: "Cinzel Decorative",
          textAlign: "center",
          margin: '10px auto',
          lineHeight: '3rem'
           }} >
        <Link
          to="/"
          style={{
            fontSize : '80',
          }}
        >
          Soggy Ink
        </Link>
      </h1>
    </div>
  </div>
);

export default Header;
