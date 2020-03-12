/** @jsx jsx */
import { Global } from "@emotion/core"
import { jsx } from "theme-ui"
import theme from "../theme"
//Components
import { MDXProvider } from "@mdx-js/react"
import FooterMDX from "../footer.mdx"
import Navbar from "./Navbar"
import AuthorsArray from "./AuthorsArray"
import Tags from "./Tags"
import Toc from "./Toc"
import Link from "./Link"
import { Layout, Card, BackTop, Row, Col } from "antd"
import SideBar from "./Sidebar"
import "antd/dist/antd.css"

const { Header, Content, Footer, Sider } = Layout

function myLayout({
  children,
  location,
  authors,
  title,
  description,
  tags,
  toc,
}) {
  // console.log('location',location);
  return (
    <Layout style={{ minHeight: "100vh", background: "#fff" }}>
      {/* <Global /> */}
      <Header
        sx={{
          position: "fixed",
          zIndex: "20",
          width: "100%",
          height: 48,
          lineHeight: "48px",
          background: "#fff",
          padding: "0px",
        }}
      >
        <Navbar />
      </Header>
      <Layout style={{ background: "#fff" }} sx={theme.layout.www}>
        <SideBar
          style={{ background: "#fff" }}
          sx={theme.layout.sidebar}
          pathname={location.pathname}
        />

        <Layout
          sx={theme.layout.main}
        >
          <Content
            style={{
              background: "#fff",
              margin: 0,
              minHeight: 280,
            }}
          >
            <Card
              title={title}
              headStyle={{ fontSize: '2.5rem' }}
              bodyStyle={{ fontSize: '16px' }}
              sx={{
                padding: "0 24px",
                p: {
                  lineHeight: "2rem",
                },
                ol: {
                  lineHeight: "2rem",
                },
                ul: {
                  lineHeight: "2rem",
                },
                color: "#304455"
              }}
              bordered={false}
            >{children}</Card>
            <Card>
              <AuthorsArray authors={authors} />
              <Tags tags={tags} />
            </Card>
            <BackTop>
              <div className="backTop"></div>
            </BackTop>
          </Content>
        </Layout>

        <Toc toc={toc} sx={theme.layout.toc} key={location.key} />

      </Layout>
      <Footer sx={theme.layout.footer}
        className="oiFooter"
      >
        <Row
          sx={{
            display: "block",
            marginTop: "50px"

          }}
        >
          <Col span={8}>
            <div className="footer-logo"></div>
          </Col>
          <Col span={8}>
            <div className="footer-right">Copyright © 2016 - 2020 OI Wiki Team</div>
          </Col>

        </Row>
      </Footer>
    </Layout>
  )
}

export default myLayout