import React, {Component} from "react";
import "./style/CSS/Card.css"

export class Card extends Component {
    render() {
        let type = this.props.type;
        let title = <h2>{this.props.title}</h2>;
        let innerElement;
        if (type === "pic") {
            innerElement = <img src={this.props.src} alt={"Take a guess a what I look like"}/>;

        } else if (type === "text") {
            innerElement = <p>{this.props.content}</p>;
        }

        return (
            <div className={"card " + type}>
                {title}
                {innerElement}
            </div>
        );
    }
}