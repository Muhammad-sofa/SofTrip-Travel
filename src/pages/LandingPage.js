import React, { Component } from 'react';
import Header from 'part/Header';

export default class LandingPage extends Component {
  render() {
    return (
      <>
      <Header {...this.props}></Header>
      </>
    )
  }
}
