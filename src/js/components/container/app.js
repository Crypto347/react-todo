import React from "react";
import {Component} from "react";

import List from "./list";

class App extends Component {
    constructor() {
        super();
        this.state = {
            b:10

        }
        this.lan.bind(this);
    }
    lan(){
        this.setState({b: this.state.b + 1})
    }
    render() {
        return (
            <div>
                <List a={this.state.b}
                l = {this.lan}>
                    HHH
                </List>
            </div>
        );
    }
}

export default App;
