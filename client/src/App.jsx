// Style Imports
import './App.css';
import "./libraries/Web-Legos/Layouts/wl.css";

// Component Imports
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createContext } from 'react';

import {WLThemeProvider, createWLTheme} from "./libraries/Web-Legos/Layouts/WLThemes"

// API Imports
import { firebaseConfig } from './api/firebase.ts'
import { AuthenticationManager, WLPermissionsConfig } from './libraries/Web-Legos/api/auth.ts'
import { AnalyticsManager } from './libraries/Web-Legos/api/analytics.ts'
import Navbar from './components/Navbar';
import Homepage from './routes/Homepage';
import HomepageV2 from './routes/HomepageV2';
import {MailManager} from "./libraries/Web-Legos/api/mail.ts"

/** Context to keep track whether we're running tests right now */
export const TestingContext = createContext();

/** Site specific permissions */
const permissions = new WLPermissionsConfig();

/** Site AuthenticationManager */
const authenticationManager = new AuthenticationManager(firebaseConfig, permissions);
authenticationManager.initialize();

/** Site AnalyticsManager */
const analyticsManager = new AnalyticsManager(firebaseConfig)
analyticsManager.initialize();

const backgroundColor1 = "rgb(44, 44, 45)";
const backgroundColor2 = "rgb(26, 26, 30)";
export const platformGradient = `linear-gradient(239.59deg, ${backgroundColor1} -44.65%, ${backgroundColor2} 75.57%)`;

const theme = createWLTheme();

export const TAGMailManager = new MailManager();
TAGMailManager.addRecipientEmail("joedobbelaar@gmail.com");

export function App(props) {

  /** Whether this is a testing environment */
  const isTestingEnvironment = props.isTestingEnvironment;

  /** Provider for all app contexts */
  function AppContextProvider(props) {
    return (
      <AuthenticationManager.Context.Provider value={{AuthenticationManager}} >
      <AnalyticsManager.Provider.Context.Provider value={{analyticsManager}} >
      <TestingContext.Provider value={{isTestingEnvironment}} >
        {props.children}
      </TestingContext.Provider>
      </AnalyticsManager.Provider.Context.Provider>
      </AuthenticationManager.Context.Provider >
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
    <WLThemeProvider theme={theme}>
      <div className="App d-flex flex-column align-items-center w-100" data-testid="app">
        { isTestingEnvironment && <meta data-testid="wl-testing-flag" /> }
        <Router>
          <div className="app-content" >
            {/* <Navbar /> */}
              <Routes>
                <Route path="*" element={<HomepageV2 />} />
              </Routes>
            {/** Place Footer Here */}
          </div>
        </Router>
      </div>
    </WLThemeProvider>
  );
}

export default App;
