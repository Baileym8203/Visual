import react from "react";
import { Container, Navbar, Nav, Image, Offcanvas, Button } from "react-bootstrap";
import { authentication } from "../Firebase/firebase";
import { signOut } from "firebase/auth";

import './navbar.css'
export default class NavbarItem extends react.Component {
  render() {

   const signOutUser = () => {
     signOut(authentication)
       .then((res) => {
        console.log(res);
         window.location.href="/Visual"
       })
       .catch((err) => {
         console.log(err);
       });
   };
   
      return (
        <Navbar bg="dark" expand={false}>
          <Container fluid>
            <Navbar.Brand href="/Visual">
              <Image
                className="navbar-logo"
                src="https://static.thenounproject.com/png/1171-200.png"
              />
            </Navbar.Brand>
            <Navbar.Brand>
              <h3 className="CodeEasy">//CodeEasy</h3>
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="offcanvasNavbar"
              className="navbar-dark offcanvas-navbar-toggle"
              id="offcanvas-navbar-toggle"
            />
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="end"
              className="off-canvas-navbar"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel">//</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav>
                  <Nav.Link className="offcanvas-links" href="#action1">
                    What Is Code?
                  </Nav.Link>
                  <Nav.Link href="#action2" className="offcanvas-links">
                    Why Code?
                  </Nav.Link>
                  <Nav.Link href="#action2" className="offcanvas-links">
                    FAQs
                  </Nav.Link>
                  <Button variant="dark" type="submit" onClick={signOutUser}>
                    Sign Out
                  </Button>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      );
    }
}