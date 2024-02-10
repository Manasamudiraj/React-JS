{
  /* <div id="root">
  <h1>Hello from react</h1>
</div> */
}
// writing above structure in react

// const heading = React.createElement(
//   "h1",
//   { id: "heading", ariaLabel: "h1-tag" },
//   "Hello from a React"
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

{
  /* <div id="root">
  <div id="parent">
    <div id="child1">
      <h1>Hi, im h1 tag</h1>
      <h2>Hi, im h2 tag</h2>
    </div>
    <div id="child2">
      <h1>Hi, im h1 tag in child2</h1>
      <h2>Hi, im h2 tag in child2</h2>
    </div>
  </div>
</div>; */
}
// writing above structure in react

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "Im h1 tag in child1"),
    React.createElement("h2", {}, "Im h2 tag in child1"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Im h1 tag in child2"),
    React.createElement("h2", {}, "Im h2 tag in child2"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
