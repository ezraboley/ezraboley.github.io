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
    constructor(props) {
        super(props);
        this.state = {
            currentPage: <Home />
        };
        this.switchPage = this.switchPage.bind(this);
    }
    switchPage(e){
        let pages = {
            nav_0: <Link to="/"/>,
            nav_1: <Link to="/experience"/>,
            nav_2:  <Coursework />,
            nav_3: <AboutMe/>,
        };
        let newPage = e.target.getAttribute("id");
        this.setState({currentPage: pages[newPage]});
    }
  render() {
    return (
        <Router>
          <div>
              <HeaderContainer/>
              <PageContainer/>
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={AboutMe}/>
              <Route path="/fun" component={Fun}/>
              <Route path="/coursework" component={Coursework}/>
              <Route path="/experience" component={Experience}/>
          </div>
        </Router>
    );
  }
}

export default App;
