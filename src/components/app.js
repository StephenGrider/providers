import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { fetchProviders } from '../actions';

class App extends Component {
  componentDidMount() {
    this.props.fetchProviders();
  }

  renderProviders() {
    return this.props.providers.map(({ name }) => {
      return <li key={name}>{name}</li>;
    });
  }

  render() {
    return <ul>{this.renderProviders()}</ul>;
  }
}

function mapStateToProps({ providers }, { match }) {
  return { providers: _.filter(providers, { type: match.params.provider }) };
}

export default connect(mapStateToProps, { fetchProviders })(App);
