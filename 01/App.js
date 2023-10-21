const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World using React"
);

const parent = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement("div", { id: "child" }, [
      React.createElement(
        "h1",
        { display: "flex", alignItems: "center", justifyContent: "center" },
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
