import react from 'react';
import {useState} from 'react';
import { authentication } from '../Firebase/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import Cookies from 'js-cookie'
import './register.css'
import NavbarItem from '../Navbar/navbar';

const Register = () => {

 const [isSignedIn, setIsSignedIn] = useState(false)
// text input states
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

if (Cookies.get("cookie-SignIn")) {
  // if cookie-SignIn isn't seen the page will redirect to the sign in page
  return (window.location.href = "/Visual/Home");
}

const registerUser = () => {
 createUserWithEmailAndPassword(authentication, email, password)
 .then((res) => {
  setIsSignedIn(true)
  console.log(res)
  Cookies.set('cookie-SignIn', 'cookie-In', { expires: 16}) // creates a cookie on registering
  window.location.href="/Visual/Home" // will register and sign you in
 })
 .catch((err) => {
  console.log(err)
  alert('Failed To Register')
 })
}

const signInUser = () => {
signInWithEmailAndPassword(authentication, email, password)
.then((res) => {
setIsSignedIn(true)
Cookies.set('cookie-SignIn', 'cookie-In', { expires: 16}) // creates a cookie on login
console.log(res)
window.location.href="/Visual/Home" // will sign you in'
})
.catch((err) => {
console.log(err)
alert('Failed to Sign In')
})
}

return (
  <Container className="form-container">
    <NavbarItem />
    <Row>
      <Col xs={12}>
        <Form>
          <Form.Group className="mb-4 mt-5" controlId="formBasicEmail">
            <Form.Label className='label --email'>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="control --enter-email"
            />
            <Form.Text className="text-form">
              We'll never share your email with anyone EVER.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-4" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="control --enter-password"
            />
            <Form.Text className="text-form">
              We'll never share your password with anyone EVER.
            </Form.Text>
          </Form.Group>
          <Button variant="dark" className='me-2' type="button" onClick={registerUser}>
            Register
          </Button>
          <Button variant="dark" type="button" onClick={signInUser}>
            Sign In
          </Button>
        </Form>
      </Col>
    </Row>
  </Container>
);
}

export default Register;
