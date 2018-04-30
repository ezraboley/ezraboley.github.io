import React, {Component} from "react";


export class PageContainer extends Component {
    render() {
        return (
          <div>
              <Page className={this.props.className} currentPage={this.props.currentPage}/>
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
            <div className={this.props.className}>
                {this.props.currentPage}
            </div>
        );
    }
}