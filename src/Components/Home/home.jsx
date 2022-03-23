import react, {useState} from 'react';
import Cookies from "js-cookie";
import './home.css'
import { Container, Row, Col, Form, Button, FormControl, Image } from 'react-bootstrap';
import List from '../List/list';
const Home = () => {

const [inputText, setInputText] = useState("");
const buttonHTML = useState("<button>Click ME</button>")

if (!navigator.onLine) {
  return alert("you are offline"); // alert when the app is offline
}

const inputHandler = (e) => {

// lowercase text return
let lowerCase = e.target.value.toLowerCase();
setInputText(lowerCase)

if (e.target.value === "button") {
    return (
      document.querySelector(".button-code").classList.add("show"),
      document.querySelector(".button-code-header").classList.add("show")
    );
}

else {
  return (
    document.querySelector(".button-code").classList.remove("show"),
    document.querySelector(".button-code-header").classList.remove("show")
  );
}
}



if (!Cookies.get('cookie-SignIn')) { // if cookie-SignIn isn't seen the page will redirect to the sign in page
  return window.location.href = "/Visual";
}

return (
  <Container>
    <h1 className="top-heading">Search a Element</h1>
    <Form className="d-flex justify-content-center mt-5">
      <FormControl
        type="Search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
        onChange={inputHandler}
      />
    </Form>
    <List input={inputText} />
    <Col className="col-return-box">
      <h1 className="button-code-header">HTML tag Button</h1>
      <h3 className="button-code">{buttonHTML}</h3>
    </Col>
  </Container>
);
 }

 export default Home;
