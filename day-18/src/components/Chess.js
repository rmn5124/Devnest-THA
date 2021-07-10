import React from "react";
import "./Chess.css";
const ver = ["1", "2", "3", "4", "5", "6", "7", "8"];
const hor = ["a", "b", "c", "d", "e", "f", "g", "h"];
function Chess() {
  let board = [];
  for (let i = 0; i < ver.length - 1; i++) {
    for (let j = 0; i < hor.length; j++) {
      const number = j + i + 2;
      if (number % 2 === 0) {
        board.push(<div className="tile black"></div>);
      }
    }
  }
  return <div id="main">{board}</div>;
}

export default Chess;
