import React from "react";
import NavbarItem from "./Components/Navbar/navbar";
import "./App.css";
import { Container, Col, Row } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./Components/Register/register";
import Home from "./Components/Home/home";
import WhyCode from "./Components/WhyCode/whycode";
export default class App extends React.Component {
  
 render() {
   if (!navigator.onLine) {
    return <p className="offline-message">You Are Offline</p>
   }

    return (
      <Router>
  
        <Container fluid>
          <Row className="text-center">
              <Routes>
                <Route exact path="/Visual" element={<Register />} />

                <Route exact path="/Visual/Home" element={<Home />} />

                <Route exact path="/Visual/WhyCode" element={<WhyCode />} />
              </Routes>
          </Row>
        </Container>
      </Router>
    );
  }
 }
