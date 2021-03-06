import './App.css';
import Header from './components/layout/Header/Header';
import {BrowserRouter as Router} from 'react-router-dom'
import WebFont from "webfontloader"
import React from 'react'
import Footer from './components/layout/Footer/Footer'

function App() {
  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  }, []);
  return (
    <Router>
      <Header />

      <Footer />
    </Router>
  )
}

export default App;
