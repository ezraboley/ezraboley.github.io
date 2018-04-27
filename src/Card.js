import React, {Component} from "react";
import "./style/CSS/Card.css"
import {Link} from "react-router-dom";
export class Card extends Component {
    render() {
        let type = this.props.type;
        let title = <h2>{this.props.title}</h2>;
        let innerElement;
        if (type === "pic") {
            innerElement = <img src={this.props.src} alt={"Take a guess a what I look like"}/>;

        } else if (type === "text") {
            innerElement = <p>{this.props.content}</p>;
        } else if (type === "link") {
            if (this.props.bg !== undefined) {
                innerElement = <Link to={this.props.content}> <img src={this.props.bg} alt={this.props.title}/> </Link> ;
            } else {
                innerElement = <Link to={this.props.content}><span></span></Link>
            }
        }

        return (
            <div className={"card " + type}>
                {title}
                {innerElement}
            </div>
        );
    }
}