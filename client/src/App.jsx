// Style Imports
import './App.css';

// Component Imports
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import powerBrick from "./assets/images/power-brick.gif";
import { Text } from '@nextui-org/react';

export function App() {

  return (
    <div className="App d-flex flex-column align-items-center w-100" data-testid="app">
      <Router>
        <div className="app-content">
          <section className="d-flex flex-column align-items-center justify-content-center" style={{height: "100vh"}}>
            <img src={powerBrick} alt="power-brick" data-testid="lego-brick" />
            <Text h1 data-testid="title-text">BP-10700</Text>
          </section>
          {/** Place Navigation Here */}
            <Routes>
              {/** Place Routes Here */}
            </Routes>
          {/** Place Footer Here */}
        </div>
      </Router>
    </div>
  );
}

export default App;
