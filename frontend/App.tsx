import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
    return <div>Cool beans!</div>;
}

const root = ReactDOM.createRoot(document.querySelector("#app")!);
root.render(<App />);