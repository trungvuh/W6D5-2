import React from 'react';
import CurrenciesIndex from './currencies_index';
// url: `http://api.fixer.io/latest?base=${this.state.baseCurrency}`

class Widget extends React.Component {
  constructor() {
    super();
    this.state = {
      baseCurrency: "",
      rates: {}
    }
  }

  setBaseCurrency(baseCurrency) {
    return () => {
      this.setState({ baseCurrency }, this.fetchConversionRates);
    };
  }

  fetchConversionRates() {
    $.ajax({
      url: `http://api.fixer.io/latest?base=${this.state.baseCurrency}`,
      method: 'GET'
    }).then(res => {
      this.setState({ rates: res.rates });
    });
  }

  optionOne(baseCurrency) {
    this.setState({ baseCurrency });
  }

  optionThree() {
    this.setState({baseCurrency: "Option3"});
  }

  optionFour = () => {
    this.setState({baseCurrency: "Option4"});
  }

  render() {
    return (
      <div>
        <h1>Super Currency Info Machine</h1>
        <button onClick={this.setBaseCurrency("USD")}>USD</button>
        <button onClick={() => this.optionOne("CAD")}>CAD</button>
        <button onClick={this.optionThree.bind(this)}>CZK</button>
        <button onClick={this.optionFour}>CZK</button>
        <h2>Base Currency: {this.state.baseCurrency}</h2>
        <CurrenciesIndex rates={this.state.rates} />
      </div>
    );
  }
}

export default Widget;
