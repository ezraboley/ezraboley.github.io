import React, {Component} from "react";


export class PageContainer extends Component {
    render() {
        return (
          <div>
              <Page currentPage={this.props.currentPage}/>
          </div>
        );
    }
}

class Page extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                {this.props.currentPage}
            </div>
        );
    }
}