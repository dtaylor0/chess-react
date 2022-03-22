import React from "react";
import PropTypes from "prop-types";

import "./Square.css"

export default class Square extends React.Component {
    static propTypes = {
        name: PropTypes.string,
        light: PropTypes.bool,
        piece: PropTypes.string,
        clickHandler: PropTypes.func,
    };

    handleDragEnd = event => {
        event.preventDefault();
        event.target.setAttribute("src", require("./images/none.png"))
    };
    handleDragOver = event => {
        console.log('drag over')
        event.preventDefault();
    }
    handleDrop = event => {
        event.preventDefault();
        var data = event.dataTransfer.getData("text");
        event.target.setAttribute("src", data)
    };

    render() {
        const className = [
            "component-square",
            this.props.light ? "light" : "",
            this.props.piece,
        ];
        if (this.props.piece) {
            return (
                <div className={className.join(" ").trim()}>
                    <img src={require("./images/" + this.props.piece + ".png")}
                        onDragEnd={this.handleDragEnd}
                        onDragEnter={this.handleDragEnter}
                        onDragOver={this.handleDragOver}
                        onDrop={this.handleDrop}>
                    </img>
                </div>
            );
        }
        else {
            return (
                <div className={className.join(" ").trim()}>
                    <img src={require("./images/none.png")}
                        onDragEnd={this.handleDragEnd}
                        onDragEnter={this.handleDragEnter}
                        onDragOver={this.handleDragOver}
                        onDrop={this.handleDrop}>
                    </img>
                </div>
            );
        }
    }
}