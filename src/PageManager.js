import React, {Component} from "react";

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
                <p>
                    Hey there!
                </p>
            </div>
        );
    }
}