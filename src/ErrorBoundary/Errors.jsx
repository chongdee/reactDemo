import React from "react";

export default class Errors extends React.Component {
  render() {
    return (
      <ul>
        {null.map((el, index) => {
          return <li key={index}>{el}</li>;
        })}
      </ul>
    );
  }
}
