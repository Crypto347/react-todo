import React, {
    Component
} from "react";

import {
    connect
} from 'react-redux';
 
import {
    bindActionCreators
} from 'redux';

import * as Actions from '../../actions/todo.actions';

import List from './list';

class App extends Component {
    constructor() {
        super();        
    }
    
    render() {
        return (
            <div>
                <List todos={this.props.todos} onAdd={this.props.actions.addTodo}>
                </List>
                <List todos={this.props.todos} onAdd={this.props.actions.addTodo}>
                </List>
            </div>
        );
    }
}

export default connect(
    (state)=>{
        return {
            todos: state.todos
        };
    },
    (dispatch)=>{
        return {
            actions: bindActionCreators(Actions, dispatch)
        };
    }
)(App);
