import React, {Component} from "react";
import './style/Header.css';

export class HeaderContainer extends Component {


    render() {
        return (
          <div>
              <Title />
              <NavBar/>
          </div>
        );
    }
}

class Title extends Component {
    render() {
        return (
            <h1>
                {"Everything Ezra"}
            </h1>
        )
    }
}

class NavBar extends Component {

    render () {
        const buttonList = ["Home", "Experience", "Course Work", "About Me"];
        const navButtons = buttonList.map((button) =>
            <NavBarButton text={button}/>
        );
        return (
            <div className={"Nav-Bar"}>
                {buttonList.map((content) => <NavBarButton text={content}/>)}
            </div>
        );
    }
}

class NavBarButton extends Component {

    render() {
        return (
            <button className={"Nav-Bar-Button"}>
                {this.props.text}
            </button>
        );
    }
}