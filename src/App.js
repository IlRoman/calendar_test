import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.scss'
import Header from './components/header/Header'
import Main from './components/main/Main'
import AboutUs from './components/about-us/AboutUs'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/about-us">
          <AboutUs />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
