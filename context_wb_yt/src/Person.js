import React from 'react'
import MyContext from './MyContext'

export default class Person extends React.Component {
    render() {
      return (
        <div className="person">
          <MyContext.Consumer>
            {(context) => (
              <React.Fragment>
                <p>Age: {context.state.age}</p>
                <p>Name: {context.state.name}</p>
                <button onClick={context.growAYearOlder}>🎂</button>
              </React.Fragment>
            )}
          </MyContext.Consumer>
        </div>
      )
    }
  }