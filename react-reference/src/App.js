import React, { Component } from 'react';
import Header from './components/Header';
import './App.css';
import Footer from './components/Footer';
import Content from './components/Content';


class App extends Component {
  render() {
    return (
      <div className="App">
    <Header/>
    <Content/>
    <Footer/>
      </div>
    );
  }
}

export default App;
