import react from 'react';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Container, Button, Col } from 'react-bootstrap';
export default class BarChartItem extends react.Component {
constructor(props) {
super(props);
this.state = {
reactbar: 0, htmlbar: 0, cssbar: 0, jquerybar: 0, nextbar: 0, threebar: 0
}
}
render() {
  
const data = [
  {
    name: "React",
    uv: this.state.reactbar,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "HTML",
    uv: this.state.htmlbar,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "CSS",
    uv: this.state.cssbar,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "JQuery",
    uv: this.state.jquerybar,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Next",
    uv: this.state.nextbar,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Three",
    uv: this.state.threebar,
    pv: 4300,
    amt: 2100,
  },
];

let onReactClick = () => {
this.setState({
reactbar: + 1
})
}

let onHtmlClick = () => {
this.setState({
  htmlbar: +1,
});
}

let onCssClick = () => {
  this.setState({
    cssbar: +1,
  });
};

let onJqueryClick = () => {
  this.setState({
    jquerybar: +1,
  });
};

let onNextClick = () => {
  this.setState({
    nextbar: +1,
  });
};

let onThreeClick = () => {
  this.setState({
    threebar: +1,
  });
};

let onReactDoubleclick = () => {
  this.setState({
    reactbar: +7,
  });
};

let onHtmlDoubleclick = () => {
  this.setState({
    htmlbar: +7,
  });
};

let onCssDoubleclick = () => {
  this.setState({
    cssbar: +7,
  });
};

let onJqueryDoubleclick = () => {
  this.setState({
    jquerybar: +7,
  });
};

let onNextDoubleclick = () => {
  this.setState({
    nextbar: +7,
  });
};

let onThreeDoubleclick = () => {
  this.setState({
    threebar: +7,
  });
};

return (
  <Container>
    <h1>Which Technology's Do You Use?</h1>
    <h1 style={{fontSize: 27}}>Double Click Your Favorites!!</h1>
    <Col
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "100px",
        marginBottom: "100px",
      }}
    >
      <BarChart
        className="barchart --barchart"
        margin={{ top: 5, right: 10, bottom: 5, left: 0 }}
        barCategoryGap='100%'
        fluid
        width={350}
        height={250}
        data={data}
      >
        <YAxis dataKey="uv" />
        <XAxis dataKey="name" />
        <Bar name="Users Favorite Technology's" dataKey="uv" fill="#8884d8" />
      </BarChart>
    </Col>
    <Button
      className="mb-5 me-2"
      onDoubleClick={onReactDoubleclick}
      onClick={onReactClick}
    >
      React
    </Button>
    <Button
      className="mb-5 me-2"
      onDoubleClick={onHtmlDoubleclick}
      onClick={onHtmlClick}
    >
      HTML
    </Button>
    <Button
      className="mb-5 me-2"
      onDoubleClick={onCssDoubleclick}
      onClick={onCssClick}
    >
      Css
    </Button>
    <Button
      className="mb-5 me-2"
      onDoubleClick={onJqueryDoubleclick}
      onClick={onJqueryClick}
    >
      JQuery
    </Button>
    <Button
      className="mb-5 me-2"
      onDoubleClick={onNextDoubleclick}
      onClick={onNextClick}
    >
      Next
    </Button>
    <Button
      className="mb-5"
      onDoubleClick={onThreeDoubleclick}
      onClick={onThreeClick}
    >
      Three
    </Button>
  </Container>
);
}
}