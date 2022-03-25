import react from "react";
import { Container, Navbar, Nav, Image, Offcanvas, Button, CloseButton } from "react-bootstrap";
import { authentication } from "../Firebase/firebase";
import { signOut } from "firebase/auth";
import Cookies from 'js-cookie'
import NavbarLogo from '../../../src/logo-512.png.png'
import './navbar.css'
export default class NavbarItem extends react.Component {
  render() {

    if (!Cookies.get("cookie-SignIn")) {
      // if cookie-SignIn isn't seen the navbar won't be shown
    
    }

   const signOutUser = () => {
     signOut(authentication)
       .then((res) => {
        Cookies.remove('cookie-SignIn') // removes cookie
        console.log(res);
        window.location.href="/Visual" // then sends you back to login/Register
       })
       .catch((err) => {
         console.log(err);
       });
   };
   
      return (
        <Navbar className="navbar" expand={false}>
          <Container fluid>
            <Navbar.Brand href="/Visual">
              <Image className="navbar-logo" src={NavbarLogo} />
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
              <Offcanvas.Header closeButton></Offcanvas.Header>
              <Offcanvas.Body className="offcanvas-body">
                <Nav>
                  <Nav.Link className="offcanvas-links" href="/Visual/Home">
                    // Home
                  </Nav.Link>
                  <Nav.Link
                  style={{marginBottom: "25px"}}
                    variant="dark"
                    type="submit"
                    className="offcanvas-links"
                    onClick={signOutUser}
                  >
                    // Sign Out
                  </Nav.Link>
                  <Nav.Link className="offcanvas-links" href="#action1">
                    // What Is Code?
                  </Nav.Link>
                  <Nav.Link href="/Visual/WhyCode" className="offcanvas-links">
                    // Why Code?
                  </Nav.Link>
                  <Nav.Link href="#action2" className="offcanvas-links">
                    // FAQs
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      );
    }
}