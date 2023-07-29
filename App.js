import React from "react";
import ReactDOM from "react-dom/client";

export default function App() {
  const title = <h1>Namste React using JSX 🚀</h1>;
  return (
    <div>
      {title}
      <h1>Namaste React functinal component</h1>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
