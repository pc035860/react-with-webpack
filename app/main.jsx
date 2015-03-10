'use strict';

import React from 'react';
import Hello from './Hello.jsx';
import MyInput from './MyInput.jsx';

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
