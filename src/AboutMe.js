import React, {Component} from "react";
import {Card} from "./Card";
import {info} from "./about";
import "./style/CSS/AboutMe.css";
export class AboutMeContainer extends Component {
    render() {
        return (
            <div>
                <AboutMe />
            </div>
        );
    }
}

class AboutMe extends Component {
    render() {
        return (
            <div className={"About-Me"}>
                <Card type={"text"} title={"About Me"} content={info.about}/>
                <Card type={"pic"} src={ "./me.jpg"} title={"Chaco Canyon, NM"}/>
            </div>
        );
    }
}