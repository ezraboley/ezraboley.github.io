import React, {Component} from "react";
import {AboutMeContainer} from "./AboutMe";

export class PageContainer extends Component {
    render() {
        return (
          <div>
              <Page />
          </div>
        );
    }
}

class Page extends Component {
    render() {
        return (
            <div>
                <AboutMeContainer/>
            </div>
        );
    }
}