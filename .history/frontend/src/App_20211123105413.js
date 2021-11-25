import './App.css';
import Header from './components/layout/Header/Header';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import WebFont from "webfontloader"
import React from 'react'
import Footer from './components/layout/Footer/Footer'
import Home from './components/layout/Home/Home'

function App() {
  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  }, []);
  return (
    <div>
      <Router>
        <Header />
        <Route  path="/" component={Home} />
        <Footer />
      </Router>
    </div>
  )
}

export default App;
