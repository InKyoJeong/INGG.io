import React from "react"
import { Top } from "../components/top/top"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import SwitchDark from "../components/dark-mode/switch"
import { ThemeContext } from "../context/ThemeContext"
import styled from "@emotion/styled"
import { Footer } from "./footer/footer"

const themes = {
  light: {
    foreground: "inherit",
    background: "#ffffff",
  },
  dark: {
    foreground: "#ffffff",
    background: "#292e2e",
  },
}
const ThemedLayout = styled.div`
  color: ${props => themes[props.theme.name].foreground};
  background-color: ${props => themes[props.theme.name].background};
  transition: all 0.4s ease;
  min-height: 100vh;

  .author-profile a {
    color: ${props => (props.theme.name === "light" ? "#028177" : "#4FC8C0")};
  }
  .author-name-content {
    background-color: ${props =>
      props.theme.name === "light" ? "#E1E4E3" : "#3b3b3b"};
  }
  .index-title {
    color: ${props => (props.theme.name === "light" ? "#028177" : "#4FC8C0")};
  }
  .index-date {
    color: ${props => (props.theme.name === "light" ? "#000000" : "#FFFFFF")};
  }
  .index-description {
    color: ${props => (props.theme.name === "light" ? "#000000" : "#ffffff")};
  }
  blockquote {
  }
`

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    // const headerStyle = {
    //   display: "inline-block",
    //   width: "100%",
    //   height: "100px",
    //   background: "yellow",
    // }
    let header
    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.2),
            marginBottom: rhythm(1.4),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
      // } else {
      //   header = (
      //     <h3
      //       style={{
      //         fontFamily: `Montserrat, sans-serif`,
      //         marginTop: 0,
      //       }}
      //     >
      //       <Link
      //         style={{
      //           boxShadow: `none`,
      //           textDecoration: `none`,
      //           color: `inherit`,
      //         }}
      //         to={`/`}
      //       >
      //         {title}
      //       </Link>
      //     </h3>
      //   )
    }
    return (
      <React.Fragment>
        <Top title={title} location={location} rootPath={rootPath} />
        <ThemeContext.Consumer>
          {theme => (
            <ThemedLayout theme={theme}>
              <div
                style={{
                  marginLeft: `auto`,
                  marginRight: `auto`,
                  maxWidth: rhythm(24),
                  padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
                }}
              >
                <SwitchDark theme={theme} />
                <header>{header}</header>
                <main>{children}</main>
                <Footer />
              </div>
            </ThemedLayout>
          )}
        </ThemeContext.Consumer>
      </React.Fragment>
    )
  }
}

export default Layout
