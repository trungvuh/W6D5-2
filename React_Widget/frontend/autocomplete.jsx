import React from 'react';

class Autocomplete extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      inputVal: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.selectName = this.selectName.bind(this);
  }

  handleChange(event) {
    this.setState({inputVal: event.target.value });
  }

  selectName(event) {
    let name = event.target.innerText;
    this.setState({ inputVal: name});
  }

  matches() {
    let matches = [];
    if (this.state.inputVal.length === 0) return this.props.names;

    this.props.names.map( name => {
      let subString = name.slice(0, this.state.inputVal.length);
      if (subString.toLowerCase() === this.state.inputVal.toLowerCase()) {
        matches.push(name);
      }
    });

    if (matches.length === 0) matches.push('No matches');

    return matches;
  }


  render () {
    let results = this.matches().map((result, i) => {
      return (
        <li key="i" onClick={this.selectName}>{result}</li>
      );
    });
    return (
      <div>
        <h1>Autocomplete</h1>
        <div className="auto">
          <label>
            Name:
            <input
              type="text"
              value={this.state.inputVal}
              onChange={this.handleChange}
              placeholder="Search for..." />
          </label>
          <ul>
            {results}
          </ul>
        </div>
      </div>
    );
  }
}

export default Autocomplete;
