const parent = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    {
      id: "child",
      key: "1",
    },
    [
      React.createElement("h1", { key: "1.1" }, "I'm a h1 tag"),
      React.createElement("h2", { key: "1.2" }, "I'm a h2 tag"),
    ]
  ),
  React.createElement(
    "div",
    {
      id: "child2",
      key: "2",
    },
    [
      React.createElement("h1", { key: "2.1" }, "I'm a h1 tag"),
      React.createElement("h2", { key: "2.2" }, "I'm a h2 tag"),
    ]
  ),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
