import React, { Component } from "react";
import Chart from '../components/Chart';

class Counter extends Component {
    constructor() {
        super();

        this.state = {
            count: 0
        }
    }

    handleIncrement() {
        this.setState({
            count: this.state.count + 1
        })
    }
    
    handleDecrement() {
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
        return(
            <div>
                <div>{this.state.count}</div>
                <div>
                    <button onClick={() => this.handleIncrement()}>+</button>
                    <button onClick={() => this.handleDecrement()}>-</button>
                </div>
                <Chart count={this.state.count}/>
            </div>
        )
    }
}

export default Counter;