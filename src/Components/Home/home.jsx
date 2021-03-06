import react, { useState } from "react";
import Cookies from "js-cookie";
import "./home.css";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  FormControl,
  Image,
} from "react-bootstrap";
import List from "../List/list";
import NavbarItem from '../Navbar/navbar'
import BarChartItem from "../Bar Chart/barchart";
const Home = () => {
  const [inputText, setInputText] = useState("");
  let [bodyUV] = useState(0);
  let [headUV] = useState(0);
  let [styleUV] = useState(0);
  const buttonHTML = useState("<button>Click ME</button>");
  const imgHTML = useState("<img src='code.png' alt='code image'>");
  const linkHTML = useState("<a href='https://c.com'> Navigate Here! </a>");
  const paragraphHTML = useState("<p>Look This is an easy paragraph!</p>");
  const sectionHTML = useState(
    "<section>This is used as a same theme section</section> & <div>Doesn't matter the theme just used to section</div>"
  );
  const ulHTML = useState(
    "<ul>This orders the content in a unnumbered list</ul>"
  );
  const olHTML = useState(
    "<ol>this orders the content in a numbered list</ol>"
  );
  const liHTML = useState("<li>is a item inside a ul or ol</li>");
  const navHTML = useState("<nav>Your navigation section</nav>");
  const spanHTML = useState(
    "<span>This is for special customization of one element</span>"
  );
  const audioHTML = useState(
    "<audio><source src='hello.mp3' type='audio/mp3'></audio>"
  );
  const videoHTML = useState(
    "<video><source src='video.mp4' type='video/mp4'></video>"
  );
  const articleHTML = useState(
    "<article>Should be used to wrap a article</article>"
  );
  const headerHTML = useState(
    "<header>used to wrap a surrounding sections header</header>"
  );
  const footerHTML = useState(
    "<footer>used to wrap bottom of your article via copyright info or author info</footer>"
  );
  const canvasHTML = useState(
    "<canvas>This is used to create a canvas element</canvas>"
  );
  const asideHTML = useState(
    "<aside>used to markup a indirectly related paragraph in a article</aside>"
  );

  const inputHandler = (e) => {
    // lowercase text return
    let lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
    
    if (e.target.value === "button" || e.target.value === "Button") {
      // returns button code on Button/button searches
      
      return (
        document.querySelector(".button-code").classList.add("show"),
        document.querySelector(".button-code-header").classList.add("show")
      )
      }
    if (e.target.value === "image" || e.target.value === "Image") {
      // returns image code on image/Image searches
      return (
        document.querySelector(".image-code").classList.add("show"),
        document.querySelector(".image-code-header").classList.add("show")
      );
    }
    if (e.target.value === "link" || e.target.value === "Link") {
      // returns link code on link/Link searches
      return (
        document.querySelector(".link-code").classList.add("show"),
        document.querySelector(".link-code-header").classList.add("show")
      );
    }
    if (e.target.value === "paragraph" || e.target.value === "Paragraph") {
      // returns paragraph code on paragraph/Paragraph searches
      return (
        document.querySelector(".paragraph-code").classList.add("show"),
        document.querySelector(".paragraph-code-header").classList.add("show")
      );
    }
    if (
      e.target.value === "section" ||
      e.target.value === "Section" ||
      e.target.value === "div" ||
      e.target.value === "Div"
    ) {
      // returns paragraph code on section/Section searches & div/Div searches
      return (
        document.querySelector(".section-code").classList.add("show"),
        document.querySelector(".section-code-header").classList.add("show")
      );
    }
    if (
      e.target.value === "ul" ||
      e.target.value === "Ul" ||
      e.target.value === "Unordered List" ||
      e.target.value === "unordered list"
    ) {
      // returns paragraph code on section/Section searches & div/Div searches
      return (
        document.querySelector(".ul-code").classList.add("show"),
        document.querySelector(".ul-code-header").classList.add("show")
      );
    }
    if (
      e.target.value === "ol" ||
      e.target.value === "Ol" ||
      e.target.value === "Ordered List" ||
      e.target.value === "ordered list"
    ) {
      // returns paragraph code on section/Section searches & div/Div searches
      return (
        document.querySelector(".ol-code").classList.add("show"),
        document.querySelector(".ol-code-header").classList.add("show")
      );
    }
    if (
      e.target.value === "li" ||
      e.target.value === "Li" ||
      e.target.value === "List Item" ||
      e.target.value === "list item"
    ) {
      // returns paragraph code on section/Section searches & div/Div searches
      return (
        document.querySelector(".li-code").classList.add("show"),
        document.querySelector(".li-code-header").classList.add("show")
      );
    }
    if (
      e.target.value === "nav" ||
      e.target.value === "Nav" ||
      e.target.value === "Navigation" ||
      e.target.value === "navigation"
    ) {
      // returns paragraph code on section/Section searches & div/Div searches
      return (
        document.querySelector(".nav-code").classList.add("show"),
        document.querySelector(".nav-code-header").classList.add("show")
      );
    }
    if (e.target.value === "span" || e.target.value === "Span") {
      // returns paragraph code on section/Section searches & div/Div searches
      return (
        document.querySelector(".span-code").classList.add("show"),
        document.querySelector(".span-code-header").classList.add("show")
      );
    }
    if (
      e.target.value === "audio" ||
      e.target.value === "Audio" ||
      e.target.value === "Add Audio" ||
      e.target.value === "add audio"
    ) {
      // returns paragraph code on section/Section searches & div/Div searches
      return (
        document.querySelector(".audio-code").classList.add("show"),
        document.querySelector(".audio-code-header").classList.add("show")
      );
    }
    if (
      e.target.value === "video" ||
      e.target.value === "Video" ||
      e.target.value === "Add Video" ||
      e.target.value === "add video"
    ) {
      // returns paragraph code on section/Section searches & div/Div searches
      return (
        document.querySelector(".video-code").classList.add("show"),
        document.querySelector(".video-code-header").classList.add("show")
      );
    }
    if (
      e.target.value === "article" ||
      e.target.value === "Article" ||
      e.target.value === "Make Article" ||
      e.target.value === "make article"
    ) {
      // returns paragraph code on section/Section searches & div/Div searches
      return (
        document.querySelector(".article-code").classList.add("show"),
        document.querySelector(".article-code-header").classList.add("show")
      );
    }
    if (
      e.target.value === "header" ||
      e.target.value === "Header" ||
      e.target.value === "Heading" ||
      e.target.value === "heading"
    ) {
      // returns paragraph code on section/Section searches & div/Div searches
      return (
        document.querySelector(".header-code").classList.add("show"),
        document.querySelector(".header-code-header").classList.add("show")
      );
    }
    if (
      e.target.value === "footer" ||
      e.target.value === "Footer" ||
      e.target.value === "Footing" ||
      e.target.value === "footing"
    ) {
      // returns paragraph code on section/Section searches & div/Div searches
      return (
        document.querySelector(".footer-code").classList.add("show"),
        document.querySelector(".footer-code-header").classList.add("show")
      );
    }
    if (
      e.target.value === "canvas" ||
      e.target.value === "Canvas" ||
      e.target.value === "Drawing Element" ||
      e.target.value === "drawing element"
    ) {
      // returns paragraph code on section/Section searches & div/Div searches
      return (
        document.querySelector(".canvas-code").classList.add("show"),
        document.querySelector(".canvas-code-header").classList.add("show")
      );
    }
    if (e.target.value === "aside" || e.target.value === "Aside") {
      // returns paragraph code on section/Section searches & div/Div searches
      return (
        document.querySelector(".aside-code").classList.add("show"),
        document.querySelector(".aside-code-header").classList.add("show")
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
        document
          .querySelector(".paragraph-code-header")
          .classList.remove("show"),
        document.querySelector(".section-code").classList.remove("show"),
        document.querySelector(".section-code-header").classList.remove("show"),
        document.querySelector(".ul-code").classList.remove("show"),
        document.querySelector(".ul-code-header").classList.remove("show"),
        document.querySelector(".ol-code").classList.remove("show"),
        document.querySelector(".ol-code-header").classList.remove("show"),
        document.querySelector(".li-code").classList.remove("show"),
        document.querySelector(".li-code-header").classList.remove("show"),
        document.querySelector(".nav-code").classList.remove("show"),
        document.querySelector(".nav-code-header").classList.remove("show"),
        document.querySelector(".span-code").classList.remove("show"),
        document.querySelector(".span-code-header").classList.remove("show"),
        document.querySelector(".audio-code").classList.remove("show"),
        document.querySelector(".audio-code-header").classList.remove("show"),
        document.querySelector(".video-code").classList.remove("show"),
        document.querySelector(".video-code-header").classList.remove("show"),
        document.querySelector(".article-code").classList.remove("show"),
        document.querySelector(".article-code-header").classList.remove("show"),
        document.querySelector(".header-code").classList.remove("show"),
        document.querySelector(".header-code-header").classList.remove("show"),
        document.querySelector(".footer-code").classList.remove("show"),
        document.querySelector(".footer-code-header").classList.remove("show"),
        document.querySelector(".canvas-code").classList.remove("show"),
        document.querySelector(".canvas-code-header").classList.remove("show"),
        document.querySelector(".aside-code").classList.remove("show"),
        document.querySelector(".aside-code-header").classList.remove("show")
      );
    }
  };  

  if (!Cookies.get("cookie-SignIn")) {
    // if cookie-SignIn isn't seen the page will redirect to the sign in page
    return (window.location.href = "/Visual");
  }

  return (
    <Container fluid style={{ padding: "0px" }}>
      <NavbarItem />
      <Row className="row --search-bar">
        <h1 className="top-heading">CodeEasy</h1>
        <Form className="d-flex justify-content-center mt-5 search-bar">
          <FormControl
            type="Search"
            placeholder="Search"
            className="text-center"
            aria-label="Search"
            onChange={inputHandler}
          />
        </Form>
        <List input={inputText} />
      </Row>
      <Col className="col-return-box">
        <h1 className="button-code-header">HTML Button Tag</h1>
        <h3 className="button-code">{buttonHTML}</h3>
      </Col>
      <Col className="col-return-box">
        <h1 className="image-code-header">HTML Image Tag</h1>
        <h3 className="image-code">{imgHTML}</h3>
      </Col>
      <Col className="col-return-box">
        <h1 className="link-code-header">HTML Link Tag</h1>
        <h3 className="link-code">{linkHTML}</h3>
      </Col>
      <Col className="col-return-box">
        <h1 className="paragraph-code-header">HTML Paragraph Tag</h1>
        <h3 className="paragraph-code">{paragraphHTML}</h3>
      </Col>
      <Col className="col-return-box">
        <h1 className="section-code-header">HTML Section & Div Tag</h1>
        <h3 className="section-code">{sectionHTML}</h3>
      </Col>
      <Col className="col-return-box">
        <h1 className="ul-code-header">HTML Ul Tag</h1>
        <h3 className="ul-code">{ulHTML}</h3>
      </Col>
      <Col className="col-return-box">
        <h1 className="ol-code-header">HTML Ol Tag</h1>
        <h3 className="ol-code">{olHTML}</h3>
      </Col>
      <Col className="col-return-box">
        <h1 className="li-code-header">HTML Li Tag</h1>
        <h3 className="li-code">{liHTML}</h3>
      </Col>
      <Col className="col-return-box">
        <h1 className="nav-code-header">HTML Nav Tag</h1>
        <h3 className="nav-code">{navHTML}</h3>
      </Col>
      <Col className="col-return-box">
        <h1 className="span-code-header">HTML Span Tag</h1>
        <h3 className="span-code">{spanHTML}</h3>
      </Col>
      <Col className="col-return-box">
        <h1 className="audio-code-header">HTML Audio Tag</h1>
        <h3 className="audio-code">{audioHTML}</h3>
      </Col>
      <Col className="col-return-box">
        <h1 className="video-code-header">HTML Video Tag</h1>
        <h3 className="video-code">{videoHTML}</h3>
      </Col>
      <Col className="col-return-box">
        <h1 className="article-code-header">HTML Article Tag</h1>
        <h3 className="article-code">{articleHTML}</h3>
      </Col>
      <Col className="col-return-box">
        <h1 className="header-code-header">HTML Header Tag</h1>
        <h3 className="header-code">{headerHTML}</h3>
      </Col>
      <Col className="col-return-box">
        <h1 className="footer-code-header">HTML Footer Tag</h1>
        <h3 className="footer-code">{footerHTML}</h3>
      </Col>
      <Col className="col-return-box">
        <h1 className="canvas-code-header">HTML Canvas Tag</h1>
        <h3 className="canvas-code">{canvasHTML}</h3>
      </Col>
      <Col className="col-return-box">
        <h1 className="aside-code-header">HTML Aside Tag</h1>
        <h3 className="aside-code">{asideHTML}</h3>
      </Col>
      <Col className="col --end-column">
        <BarChartItem />
        <h1 className="h1 --why-code">Why Code?</h1>
        <h3 className="h3 --and-easy">Why Use Easy?</h3>
        <p className="p --end-paragraph">
          Coding is something that can make you the best you! What do I mean by
          that? Well being a coder requires brute force through the brick walls
          of problem solving. This is why only a measly 5% of people that start
          the coding journey end up successful. So I couldn't say this enough,
          not everyone is a coder or made to be a coder. One of the main tasks
          of a coder is problem solving. If you can push through code syntax
          issues, and never give up to a issue no matter how menacing it may
          look code is for you! Not only this, but when you code you will always
          be learning new things. Whether it be as big as a new framework or as
          little as a new tag. Being able to adapt yourself to anything at any
          point is a skill you'll need as a coder.
        </p>
        <p className="p --end-paragraph">
          Ok? but why does this relate to the question. Well when you decide to
          embark on your coding journey all of these skills will be learned, and
          or increased exponentially. Which means they can be used in your daily
          lives. Say you used to get moderately stressed out on somewhat easy to
          fix situations. Once you start to push through syntax issues your
          brain will be used to dealing with high stress issues over, and over
          again. Which in turn will make you better at handling those stressful
          situations we all find ourselves in when it comes to day to day life.
          Coding also gives you a brand new perspective on the world of
          technology whether it's that brand new video game that just came out,
          or a website like youtube.
        </p>
        <p className="p --end-paragraph">
         That makes sense! But why would I use CodeEasy? Code Easy is designed to make finding the day to day tags of HTML, CSS, and JS a breeze.
         When using it you can search what you are trying to make or the exact name of the tags if you ever forget those small tags at times! Like for instance a button easy enough,
         would be button in the search. When searched it will automatically bring back the tags used to create the object in this case it would bring back a button! CodeEasy makes
         learning code as well as remembering code Easy for all devs big and small!
        </p>
      </Col>
    </Container>
  );
};
export default Home;
