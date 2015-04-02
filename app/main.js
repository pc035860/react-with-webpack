'use strict';

import React from 'react';
import Hello from './Hello';
import MyInput from './MyInput';

let App = React.createClass({
  render() {
    return (
      <div>
        <Hello />
        <MyInput />
      </div>
    );
  }
})

React.renderComponent(<App />, document.getElementById('content'));
