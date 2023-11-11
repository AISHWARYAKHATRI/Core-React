import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", {}, "I was nested inside a div"),
  React.createElement("div", {}, "We are siblings btw"),
  React.createElement("div", {}, "I am too"),
]);
const jsxHeading = <h1 className="hello ">{heading}</h1>;

const HeadingComponent = () => {
  return <h1>React Functional Component</h1>;
};
console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
