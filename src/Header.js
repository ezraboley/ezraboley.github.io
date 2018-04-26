import React, {Component} from "react";
import './style/CSS/Header.css';

export class HeaderContainer extends Component {

    render() {
        return (
          <div className={"Nav-Bar Nav-Bar-Container"}>
              <Title />
              <NavBar onclick={this.props.onclick}/>
          </div>
        );
    }
}

class Title extends Component {
    render() {
        return (
            <h1 className={"Nav-Bar-Title"}>
                {"Everything Ezra"}
            </h1>
        )
    }
}

class NavBar extends Component {

    render () {
        const buttonList = ["Home", "Experience", "Course Work", "$man Ezra"];
        let count = 0;
        return (
            <div className={"Nav-Bar"}>
                {buttonList.map((content) => <NavBarButton onclick={this.props.onclick} id={"nav_"+count} key={"nav_" + count++} text={content}/>)}
            </div>
        );
    }
}

class NavBarButton extends Component {

    render() {
        return (
            <button id={this.props.id} onClick={this.props.onclick} className={"Nav-Bar-Button"}>
                {this.props.text}
            </button>
        );
    }
}