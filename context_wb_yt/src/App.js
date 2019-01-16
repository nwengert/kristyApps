import React, { Component } from 'react';
import MyProvider from './MyProvider'
import Family from './Family'

class App extends Component {
  render() {
    return (
      <MyProvider>
        <p>This is App</p>
        <div>
          <p>This is me making Kristy's app from Wes Bos's</p>
          <Family />
        </div>
      </MyProvider>
    );
  }
}


export default App;