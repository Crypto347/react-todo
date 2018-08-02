import React from "react";
import {Component} from "react";


class List extends Component {
    constructor() {
        super();
        this.state = {
            names : ["Humay1","Humay2"],
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
        const names = this.state.names.map((name)=>name);
        names.push(this.state.input);
        this.setState({
            names: names
        })
    }

    renderList=()=>{
        const list = this.state.names.map((n,i)=>{
            return (
                <li key ={i} onClick={this.deleteElement.bind(this,i)}>
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

  deleteElement(i){
    const delEl= this.state.names.map((name)=>name);
    delEl.splice(i,1);
    this.setState({
        names: delEl
    });
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
