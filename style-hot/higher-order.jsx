import React from 'react';

export default function stylesheetHotLoad(target, baobabTree) {

  return class StylesheetHotLoadingComponent extends React.Component {

    componentDidMount() {
      baobabTree.set('stilrLastUpdate', Date.now());
    }

    componentDidUpdate() {
      baobabTree.set('stilrLastUpdate', Date.now());
    }

    render() {
      return React.createElement(target, this.props);
    }

  };

}
