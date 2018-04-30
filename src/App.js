import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import {HeaderContainer} from "./Header";
import {PageContainer} from "./PageManager";
import './style/CSS/App.css';
import {HomeContainer as Home} from "./MainPages/Home";
import {AboutMeContainer as AboutMe} from "./MainPages/AboutMe";
import {CourseworkContainer as Coursework} from "./MainPages/Coursework";
import {ExperienceContainer as Experience} from "./MainPages/Experience";
import {FunContainer as Fun} from "./MainPages/Fun";


class App extends Component {
  render() {
    return (
        <Router>
          <div>
              <HeaderContainer/>
              {/*<PageContainer className={"App-content"}/>*/}
              <div className={"App-content"}>
                  <Route exact path="/" component={Home}/>
                  <Route path="/about" component={AboutMe}/>
                  <Route path="/fun" component={Fun}/>
                  <Route path="/coursework" component={Coursework}/>
                  <Route path="/experience" component={Experience}/>
              </div>
          </div>
        </Router>
    );
  }
}

export default App;
