import React, {
    Component
} from "react";

import List from "./list";

class App extends Component {
    constructor() {
        super();
        this.state = {
            b:19
           
        }
         
    }
    
    // addName(){
    //     this.setState({names: this.state.names.push()})
    // }
    render() {
        return (
            <div>
                <List a={this.state.b}>
                </List>
            </div>
        );
    }
}

export default App;
