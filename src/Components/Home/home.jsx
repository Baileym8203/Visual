import react, {useState} from 'react';
import Cookies from "js-cookie";
import './home.css'
import { Container, Row, Col, Form, Button, FormControl, Image } from 'react-bootstrap';
import List from '../List/list';
const Home = () => {

const [inputText, setInputText] = useState("");
const buttonHTML = useState("<button>Click ME</button>")
const imgHTML = useState("<img src='code.png' alt='code image'>")
const linkHTML = useState("<a href='https://c.com'> Navigate Here! </a>")
const paragraphHTML = useState("<p>Look This is an easy paragraph!</p>")
const sectionHTML = useState("<section>This is used as a same theme section</section> & <div>Doesn't matter the theme just used to section</div>");
const inputHandler = (e) => {

// lowercase text return
let lowerCase = e.target.value.toLowerCase();
setInputText(lowerCase)

if (e.target.value === '') {
return (
  document.querySelector(".button-code").classList.add("show"), // adds all classes until user starts typing the search params
  document.querySelector(".button-code-header").classList.add("show"),
  document.querySelector(".image-code").classList.add("show"),
  document.querySelector(".image-code-header").classList.add("show"),
  document.querySelector(".link-code").classList.add("show"),
  document.querySelector(".link-code-header").classList.add("show"),
  document.querySelector(".paragraph-code").classList.add("show"),
  document.querySelector(".paragraph-code-header").classList.add("show"),
  document.querySelector(".section-code").classList.add("show"),
  document.querySelector(".section-code-header").classList.add("show")
);
}

if (e.target.value === "button" || e.target.value === "Button") { // returns button code on Button/button searches
    return (
      document.querySelector(".button-code").classList.add("show"),
      document.querySelector(".button-code-header").classList.add("show")
    );
} if (e.target.value === "image" || e.target.value === "Image") { // returns image code on image/Image searches
  return (
    document.querySelector(".image-code").classList.add("show"), 
    document.querySelector(".image-code-header").classList.add("show")
  );
} if (e.target.value === "link" || e.target.value === "Link") { // returns link code on link/Link searches
  return (
    document.querySelector(".link-code").classList.add("show"),
    document.querySelector(".link-code-header").classList.add("show")
  );
} if (e.target.value === "paragraph" || e.target.value === "Paragraph") { // returns paragraph code on paragraph/Paragraph searches
  return (
    document.querySelector(".paragraph-code").classList.add("show"),
    document.querySelector(".paragraph-code-header").classList.add("show")
  );
  } if (e.target.value === "section" || e.target.value === "Section" || e.target.value === "div" || e.target.value === "Div") { // returns paragraph code on section/Section searches & div/Div searches
    return (
      document.querySelector(".section-code").classList.add("show"),
      document.querySelector(".section-code-header").classList.add("show")
    );
  } else {
    return (
      document.querySelector(".button-code").classList.remove("show"), // removes all classes unless it fits the search params
      document.querySelector(".button-code-header").classList.remove("show"),
      document.querySelector(".image-code").classList.remove("show"),
      document.querySelector(".image-code-header").classList.remove("show"),
      document.querySelector(".link-code").classList.remove("show"),
      document.querySelector(".link-code-header").classList.remove("show"),
      document.querySelector(".paragraph-code").classList.remove("show"),
      document.querySelector(".paragraph-code-header").classList.remove("show"),
      document.querySelector(".section-code").classList.remove("show"),
      document.querySelector(".section-code-header").classList.remove("show")
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
    <Col className="col-return-box">
      <h1 className="image-code-header">HTML tag Image</h1>
      <h3 className="image-code">{imgHTML}</h3>
    </Col>
    <Col className="col-return-box">
      <h1 className="link-code-header">HTML tag Link</h1>
      <h3 className="link-code">{linkHTML}</h3>
    </Col>
    <Col className="col-return-box">
      <h1 className="paragraph-code-header">HTML tag Paragraph</h1>
      <h3 className="paragraph-code">{paragraphHTML}</h3>
    </Col>
    <Col className="col-return-box">
      <h1 className="section-code-header">HTML tag Section & Div</h1>
      <h3 className="section-code">{sectionHTML}</h3>
    </Col>
  </Container>
);
 }

 export default Home;
