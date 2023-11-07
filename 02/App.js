// "use strict";
import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World using React createElement"
);
// a = 10;
// console.log(a);
// function a(a, b, ...args) {
//   console.log(args.length);
// }

// a(1, 2, 3, 4, 5);

const parent = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement("div", { id: "child" }, [
      React.createElement(
        "h1",
        { display: "flex", alignitems: "center", justifycontent: "center" },
        "Nested Rendering"
      ),
      heading,
    ]),
    React.createElement("div", { id: "child" }, [
      React.createElement("h1", {}, "Nested Rendering"),
      heading,
    ]),
  ] // sibling nodes
);
console.log(parent);
const heading1 = React.createElement("h2", {}, "Hello World using React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
