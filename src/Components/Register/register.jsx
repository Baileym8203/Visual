import react from 'react';
import {useState} from 'react';
import { authentication } from '../Firebase/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';

const Register = () => {

 const [isSignedIn, setIsSignedIn] = useState(false)
// text input states
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const registerUser = () => {
 createUserWithEmailAndPassword(authentication, email, password)
 .then((res) => {
  setIsSignedIn(true)
  console.log(res)
  window.location.href="/home" // will register and sign you in
 })
 .catch((err) => {
  console.log(err)
 })
}

const signInUser = () => {
signInWithEmailAndPassword(authentication, email, password)
.then((res) => {
setIsSignedIn(true)
console.log(res)
window.location.href="/home" // will sign you in
})
.catch((err) => {
console.log(err)
})
}

return (
  <Container>
    <Row>
      <Col xs={12}>
        <Form>
          <Form.Group className="mb-4 mt-5" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <Form.Text className="text-muted">
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
            />
            <Form.Text className="text-muted">
              We'll never share your password with anyone EVER.
            </Form.Text>
          </Form.Group>
          <Button variant="secondary" type="button" onClick={registerUser}>
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
