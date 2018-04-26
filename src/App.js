import React, { Component } from 'react';
import {HeaderContainer} from "./Header";
import {PageContainer} from "./PageManager";
import './App.css';
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
            nav_0: <HomeContainer/>,
            nav_1: <ExperienceContainer />,
            nav_2:  <CourseworkContainer />,
            nav_3: <AboutMeContainer/>,
        };
        let newPage = e.target.getAttribute("id");
        this.setState({currentPage: pages[newPage]});
    }
  render() {
    return (
      <div>
        <HeaderContainer onclick={this.switchPage}/>
        <PageContainer currentPage={this.state.currentPage}/>
      </div>
    );
  }
}

export default App;
