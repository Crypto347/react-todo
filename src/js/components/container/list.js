import React from "react";
import {Component} from "react";


class List extends Component {
    constructor() {
        super();
        this.state = {

            names : ["Humay1","Humay2"],
            input:"",
            input2:[]
            
        }
    }

    handleChange=(event)=>{
        this.state.input2.push(event.target.value);
        
    }

    handleClick=()=>{
        this.setState({
            input: this.state.input2
        })
    }

    renderList=()=>{
        const list = this.state.input2.map((n,i)=>{
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
                <input type="text" onBlur={this.handleChange}/>
                <button onClick={this.handleClick}>Press</button>
                {this.renderList()}
            </div>
        );
    }
}

export default List;
