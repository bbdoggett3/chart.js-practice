import React, { Component } from "react";
import "./App.css";
import Chart from "./components/Chart";
import Counter from "./components/Counter";
import ToastComponent from './components/ToastComponent';
import Recaptcha from 'react-recaptcha';
import Typing from './components/Typing';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chartData: {},
      isVerified: false
    }

    this.handleSubscribe = this.handleSubscribe.bind(this);
    this.recaptchaLoaded = this.recaptchaLoaded.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);
  }

  componentWillMount() {
    this.getChartData();
  }

  handleSubscribe() {
    if (this.state.isVerified) {
      alert("You have successfully subscribed!")
    } else {
      alert("Please verify that you are a human!")
    }
  }

  recaptchaLoaded() {
    console.log("capcha successfully loaded")
  }

  verifyCallback(response) {
    if(response) {
      this.setState({isVerified: true})
    }
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
        <input type="text" placeholder="email@company.com"/>

        <div className="convert" onClick={this.handleSubscribe}>
            Subscribe
        </div>

        <Recaptcha
          sitekey="6LcjHcAZAAAAAHry99oxKYIi_RDGnmbEK7MhSjCK"
          render="explicit"
          onloadCallback={this.recaptchaLoaded}
          verifyCallback={this.verifyCallback}
        />

        <Chart chartData={this.state.chartData}/>
        <Counter />
        <ToastComponent/>
        <Typing/>
      </div>
    );
  }
}

export default App;
