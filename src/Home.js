import React, {Component} from "react";

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
              <h1>
                  {"Hello World"}
              </h1>
          </div>
        );
    }
}