import React, {Component} from "react";
import "./style/CSS/Card.css"
import {Link} from "react-router-dom";
export class Card extends Component {
    constructor(props) {
        super(props);
        this.handleLink = this.handleLink.bind(this);
    }

    handleLink(title, type) {
        let elem;
        if (this.props.bg === undefined) {
            elem =
                <div className={"card " + type}>
                    <Link className="link-btn" to={this.props.content}>
                    {title}
                    <span/>
                    </Link>
                </div>;
        } else {
            elem = <Link to={this.props.content}>
                <div className={"card " + type}>
                    {title}
                    <img src={this.props.bg} alt={this.props.title}/>
                </div>
            </Link> ;
        }

        return elem;
    }

    render() {
        let type = this.props.type;
        let title = <h2>{this.props.title}</h2>;
        let innerElement;
        if (type === "pic") {
            innerElement = <img src={this.props.src} alt={"Take a guess a what I look like"}/>;

        } else if (type === "text") {
            innerElement = <p>{this.props.content}</p>;
        } else if (type === "link") {
            return (this.handleLink(title, type));
        }
        let finalCard = <div className={"card " + type}>
            {title}
            {innerElement}
        </div>;
        return (
            finalCard
        );
    }
}