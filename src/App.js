import React, { useState, useEffect } from "react";
import { hot } from "react-hot-loader";
import "./app.scss";
function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const time = setInterval(() => {
      setCount((prevData) => prevData + 1);
    }, 1000);
    return () => {
      clearInterval(time);
    };
  }, []);

  return <h1>{count}</h1>;
}

export default hot(module)(App);
