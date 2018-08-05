import React from "react";
import {Component} from "react";


class List extends Component {
    constructor() {
        super();
        this.state = {
            input:""
        }
    }

    handleChange=(event)=>{
        const value = event.target.value;
        this.setState({
            input: value
        });
    };

    handleClick=()=>{
        this.props.onAdd(this.state.input)
    }

    renderList=()=>{
        const list = this.props.todos.map((n,i)=>{
            return (
                <li key ={i}>
                    {n}
                </li>
            );
        })
        
        return (
            <ul>
                {list}
            </ul>
        );
    }

    render() {
        return (
            <div >
                <p>Names</p>
                <input type="text" onChange={this.handleChange}/>
                <button onClick={this.handleClick}>Press</button>
                {this.renderList()}
            </div> 
        );
    }
}

export default List;
