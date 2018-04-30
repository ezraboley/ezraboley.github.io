import React, {Component} from "react";
import {Card} from "../Card";
import "../style/CSS/Home.css";
import {info} from "../about";

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
    constructor(props) {
        super(props);
        this.state = {title: ""};
        this.typeWriter("Welcome to my website, glad you could make it.");
    }
    typeWriter(word) {
        let currentIndex = 0;
        const typer = setInterval( () => {
            if (this.state.title === word) clearInterval(typer);
            else {
                console.log(currentIndex);
                this.setState({title: (this.state.title + word.charAt(currentIndex++))});
            }
        }, 75);
    }

    render() {
        return (
          <div>
              <Card title={this.state.title} type={"text"} content={info.homepage}/>
              <SiteMap />
          </div>
        );
    }
}

class SiteMap extends Component {
    render() {
        return (
            <div className={"box"}>
                <div className={"row"}>
                    <Card  title={"What I've Worked On"}   type={"link"} content="/experience" />
                    <Card  title={"What I've Learned"}   type={"link"} content="/coursework" />
                </div>
                <div className={"row"}>
                    <Card  title={"What I Do For Fun"} type={"link"} content="/fun"        />
                    <Card  title={"Who I Am"}     type={"link"} content="/about"      />
                </div>
            </div>
        )
    }
}