import './App.css';
import Header from './components/layout/Header/Header';
import {BrowserRouter as Routes, Route} from 'react-router-dom'
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
      <Routes>
        <Header />
        <Route extact path='/' component={Home} />
        <Footer />
      </Routes>
    </div>
  )
}

export default App;
