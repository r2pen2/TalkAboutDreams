// Style Imports
import './App.css';

// Component Imports
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import powerBrick from "./assets/images/power-brick.gif";
import { Text } from '@nextui-org/react';
import { createContext } from 'react';

/** Context to keep track whether we're running tests right now */
export const TestingContext = createContext();

export function App(props) {

  /** Whether this is a testing environment */
  const isTestingEnvironment = props.isTestingEnvironment;

  /** Provider for all app contexts */
  function AppContextProvider(props) {
    return (
      <TestingContext.Provider value={{isTestingEnvironment}} >
        {props.children}
      </TestingContext.Provider>
    )
  }

  // If we're testing, just place everything in context provider
  if (props.children) {
    return (
      <AppContextProvider >
        { isTestingEnvironment && <meta data-testid="wl-testing-flag" /> }
        {props.children}
      </AppContextProvider>
    )
  }

  // Return the app
  return (
    <div className="App d-flex flex-column align-items-center w-100" data-testid="app">
      { isTestingEnvironment && <meta data-testid="wl-testing-flag" /> }
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
