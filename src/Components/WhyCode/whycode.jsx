import react from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
import './whycode.css'
export default class WhyCode extends react.Component {
render() {
return (
  <Container className="container container--whycode">
    <Row>
      <Col className="col col--top-page">
        <Image
          fluid
          className="image image--top-page"
          src="https://assets.entrepreneur.com/content/3x2/2000/20150708172005-coding-working-workspace-apple-macintosh.jpeg"
        ></Image>
        <h1 className="h1 h1--top-heading">Why Start Coding?</h1>
        <p className="p p--top-paragraph">
          Coding can end up being a life long career or a hobby! It can relieve
          high amounts of stress, and create an amazing problem solver out of
          you! If that doesn't peak your interests why should you care? On top
          of all of these major changes you could have made to your life style
          code makes up the world! Every time you open up a game, website, or
          app it was created by coders. The world of code needs people who are
          willing to take risks. Not only this, but people who can work hard and
          play harder! Code is forever changing as time passes which means if
          you decide to code you will be quick to change as a person. Which can
          be a great mentality to master. Overall coding is great for those who
          like changing what they do through time, and can solve problems at a
          fast pace! If this sounds like you time to start coding!!
        </p>
      </Col>
    </Row>
  </Container>
);
 }
}