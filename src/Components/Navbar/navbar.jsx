import react from "react";
import { Container, Navbar, Nav, Image, Offcanvas, Button, CloseButton } from "react-bootstrap";
import { authentication } from "../Firebase/firebase";
import { signOut } from "firebase/auth";
import Cookies from 'js-cookie';
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
            <Navbar.Brand className="brand --navbar-logo" href="/Visual">
              CodeEasy
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="offcanvasNavbar"
              className="offcanvas-navbar-toggle"
              id="offcanvas-navbar-toggle"
            />
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="bottom"
              className="off-canvas-navbar"
            >
              <Offcanvas.Header closeButton></Offcanvas.Header>
              <Offcanvas.Body className="offcanvas-body">
                <Nav>
                  <Nav.Link
                    type="submit"
                    className="offcanvas-links"
                    onClick={signOutUser}
                  >
                    // Sign Out
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      );
    }
}