import React, {
    Component
} from "react";

import List from "./list";

class App extends Component {
    constructor() {
        super();
        this.state = {
            b:10
        }

        /**
         * Можно сделать так
         * 
         * this.hello = this.hello.bind(this);
         */
    }

    /**
     * Если написать так
     * 
     * increment() {
     *     this.setState({
     *         b: this.state.b + 1
     *     });
     * }
     */

    /**
     * Еще можно сделать так
     */

    increment = () => {
        this.setState({
            b: this.state.b + 1
        });
    }

    /**
     * Эта стрелочная функция грубо говоря сохранена в самом объекте.
     * На самом деле js так не разрешает - свойста на объекте класса можно создавать
     * только в конструкторе, как например, мы создаем this.state = {...}
     * 
     * А можем мы сейчас так писать потому что я установил дополнительный плагин на бабель
     * который называется transform-class-properties
     * Проверь .babelrc
     */
    
    render() {
        return (
            <div>
                <List
                    a={this.state.b}
                    l={this.increment}
                >
                    HHH
                </List>
            </div>
        );
    }
}

export default App;
