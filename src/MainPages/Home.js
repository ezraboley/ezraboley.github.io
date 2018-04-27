import React, {Component} from "react";
import {Card} from "../Card";

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