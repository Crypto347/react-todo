import React from "react";
import {Component} from "react";


class List extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div onClick={this.props.l}>List {this.props.children} {this.props.a}</div>
        );
    }
}

export default List;
