import React, {Component} from "react";
import './style/CSS/Header.css';
import {Link} from "react-router-dom";
export class HeaderContainer extends Component {

    render() {
        return (
          <div className={"Nav-Bar Nav-Bar-Container"}>
              <Title title="Everything Ezra"/>
              <NavBar />
          </div>
        );
    }
}

class Title extends Component {
    render() {
        return (
            <Link to={"/"}>
                <h1 className={"Nav-Bar-Title"}>
                    {this.props.title}
                </h1>
            </Link>
        )
    }
}

class NavBar extends Component {
    render () {
        const buttonList = ["Home", "Experience", "Coursework", "Knick-Knacks", "$man Ezra"];
        const links = ["/", "/experience", "/coursework", "/fun", "/about"];
        let count = 0;
        return (
            <div className={"Nav-Bar"}>
                {buttonList.map((content, index) => <NavBarButton link={links[index]} id={"nav_"+count} key={"nav_" + count++} text={content}/>)}
            </div>
        );
    }
}

class NavBarButton extends Component {

    render() {
        return (
            <Link to={this.props.link}>
                <button id={this.props.id} className={"Nav-Bar-Button"}>
                {this.props.text}
                </button>
            </Link>
        );
    }
}