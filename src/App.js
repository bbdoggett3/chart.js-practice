import React, { Component } from "react";
import "./App.css";
import Chart from "./components/Chart";
import Counter from "./components/Counter";
import ToastComponent from './components/ToastComponent';



class App extends Component {
  constructor() {
    super();

    this.state = {
      chartData: {}
    }
  }

  componentWillMount() {
    this.getChartData();
  }

  getChartData(){
    //AXIOS CALL WOULD TYPICALLY GO HERE TO BRING IN THAT DATA.
    this.setState({
      // chartData: {
      //   labels: ['Affirmation', 'Gifts', 'Quality Time', 'Service', 'Touch'],
      //       datasets: [
      //           {
      //               label: 'Population',
      //               data: [
      //                   4,
      //                   2,
      //                   2,
      //                   5,
      //                   1
      //               ],
      //               backgroundColor: [
      //                   'rgba(0, 198, 248, 0.6)',
      //                   'rgba(0, 155, 245, 0.6)',
      //                   'rgba(246, 142, 206, 0.6)',
      //                   'rgba(230, 85, 174, 0.6)',
      //                   'rgba(255, 10, 160, 0.6)'
      //               ]
      //           }
      //       ]
      // }
    })
  }

  render() {
    return (
      <div className="App">
        <Chart chartData={this.state.chartData}/>
        <Counter />
        <ToastComponent/>
      </div>
    );
  }
}

export default App;
