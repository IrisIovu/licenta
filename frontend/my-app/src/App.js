import React from "react";
import Routes from './Routes';
import "./App.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function App(props) {
  return (
    <div className="App container">
      {/* <NavigationBar /> */}
      <Routes />
    </div>
  );
}

export default App;