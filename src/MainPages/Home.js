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
              <SiteMap />
          </div>
        );
    }
}

class SiteMap extends Component {
    render() {
        return (
            <div className={"box"}>
                <div className={"row"}>
                    <Card  title={"Experience"}   type={"link"} content="/experience" />
                    <Card  title={"Coursework"}   type={"link"} content="/coursework" />
                </div>
                <div className={"row"}>
                    <Card  title={"Knick-Knacks"} type={"link"} content="/fun"        />
                    <Card  title={"About Me"}     type={"link"} content="/about"      />
                </div>
            </div>
        )
    }
}