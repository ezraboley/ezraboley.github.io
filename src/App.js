import React, { Component } from 'react';
import logo from './logo.svg';
import {HeaderContainer} from "./Header";
import {PageContainer} from "./PageManager";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderContainer/>
        <PageContainer/>
      </div>
    );
  }
}

export default App;
