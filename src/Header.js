import React, {Component} from "react";
import './style/CSS/Header.css';

export class HeaderContainer extends Component {


    render() {
        return (
          <div className={"Nav-Bar Nav-Bar-Container"}>
              <Title />
              <NavBar/>
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