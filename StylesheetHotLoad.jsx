import autoprefixer from 'autoprefixer-core';
import postcss from 'postcss';
import React from 'react';
import {Navigation, TransitionHook} from 'react-router';
import stilr from 'stilr';

const StylesheetHotLoad = React.createClass({
  displayName: 'StylesheetHotLoad',
  getInitialState() {
    return {
      stilrCSS: ''
    }
  },
  componentWillMount() {
    this.props.appStateTree.select('stilrLastUpdate').on(() => {
      this.setState({
        stilrCSS: postcss(autoprefixer()).process(stilr.render()).css
      });
    });
  },
  render() {
    return (
      <div>
        <style>
          {this.state.stilrCSS}
        </style>
        {this.props.children}
      </div>
    );
  }
});

module.exports = StylesheetHotLoad;
