import React from 'react/addons';
import {isElement} from 'react/lib/ReactTestUtils';

export default function stylesheetHotLoad(target, baobabTree) {

  return class StylesheetHotLoadingComponent extends React.Component {

    componentDidMount() {
      baobabTree.set('stilrLastUpdate', Date.now());
    }

    componentDidUpdate() {
      baobabTree.set('stilrLastUpdate', Date.now());
    }

    render() {
      if (!isElement(target)) {
        return null;
      }
      return React.createElement(target, this.props);
    }

  };

}
