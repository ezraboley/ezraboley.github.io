import React, {Component} from "react";
import {Card} from "../Card";
import "../style/CSS/Home.css";

export class HomeContainer extends Component {
    render() {
        return (
            <div>
                <Home />
            </div>
        );
    }
}

class Home extends Component {
    render() {
        return (
          <div>
              <Card title={"Welcome"} type={"text"} content={"Under Construction"}/>
          </div>
        );
    }
}

class SiteMap extends Component {
    render() {
        return (
            <div className={"box"}>
                <Card title={"Experience"} type={"link"} content="/experience" bg={"./experience.PNG"}/>
                <Card title={"Coursework"} type={"link"} content="/coursework" bg={"./me.jpg"} />
            </div>
        )
    }
}