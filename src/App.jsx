import React from "react";
import NavbarItem from "./Components/Navbar/navbar";
import "./App.css";
import { Container, Col, Row } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./Components/Register/register";
import Home from "./Components/Home/home";
import Cookies from 'js-cookie'
export default class App extends React.Component {
  state = {
    Page: "only on login screen",
  };

  render() {
    if (!navigator.onLine && !Cookies.get("cookie-SignIn")) {
    return (
      <Router>
        <NavbarItem signInPage={this.state.Page} />
        <Container fluid>
          <Row>
            <Col xs={12} className="text-center">
              <Routes>
                <Route exact path="/Visual/Home" element={<Home />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    );
    }
    return (
      <Router>
        <NavbarItem signInPage={this.state.Page} />
        <Container fluid>
          <Row>
            <Col xs={12} className="text-center">
              <Routes>
                <Route exact path="/Visual" element={<Register />} />

                <Route exact path="/Visual/Home" element={<Home />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    );
  }
}
