import { React, useState } from "react";
import data from "../../mockData.json";
const List = (props) => {
  //create a new array by filtering the original array
  


  const filteredData = data.filter((el) => {
    //if no input the return the original
    if (props.input === '') {
        return el
    }

//return the item which contains the user input

else {
  return el.text.toLowerCase().includes(props.input)
}
  });

  return (
    <ul style={{display: "block", marginLeft: "-55px", marginTop: "10px"}}>
      {filteredData.map((item) => (
        <li style={{listStyleType: "none", fontFamily: "M PLUS 1 code"}} key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
}

export default List;
