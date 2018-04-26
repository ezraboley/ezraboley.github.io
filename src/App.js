import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import {HeaderContainer} from "./Header";
import {PageContainer} from "./PageManager";
import './style/CSS/App.css';
import {HomeContainer} from "./Home";
import {AboutMeContainer} from "./AboutMe";
import {CourseworkContainer} from "./Coursework";
import {ExperienceContainer} from "./Experience";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: <HomeContainer />
        };
        this.switchPage = this.switchPage.bind(this);
    }
    switchPage(e){
        let pages = {
            nav_0: <Link to="/"/>,
            nav_1: <Link to="/experience"/>,
            nav_2:  <CourseworkContainer />,
            nav_3: <AboutMeContainer/>,
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
              <Route exact path="/" component={HomeContainer}/>
              <Route path="/about" component={AboutMeContainer}/>
              <Route path="/coursework" component={CourseworkContainer}/>
              <Route path="/experience" component={ExperienceContainer}/>
          </div>
        </Router>
    );
  }
}

export default App;
