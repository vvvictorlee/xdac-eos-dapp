import React, { Component, Fragment } from 'react';
import PropTypes from "prop-types";
import AppContent from "./parts/Content";
import "./DefaultLayout.css";

class DefaultLayout extends Component {

  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <Fragment>
        <AppContent>
          { this.props.children }
        </AppContent>
      </Fragment>
    )
  }
}

export default DefaultLayout;