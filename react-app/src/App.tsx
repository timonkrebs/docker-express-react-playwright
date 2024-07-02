import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [photos, setPhotos] = React.useState({ text: 'hy'});
  React.useEffect(() => {
    fetch('http://localhost:5000/')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setPhotos(data);
      });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {photos?.text ?? "Learn React"}
        </a>
      </header>
    </div>
  );
}

export default App;