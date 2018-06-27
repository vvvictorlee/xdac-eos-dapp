import React, { Component, Fragment } from 'react';

class AppContent extends Component {
  render() {
    return (
      <Fragment>
        { this.props.children }
      </Fragment>
    );
  }
}

export default AppContent;
