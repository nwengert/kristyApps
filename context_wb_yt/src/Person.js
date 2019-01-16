import React from 'react'
import MyContext from './MyContext'

export default class Person extends React.Component {
    render() {
      return (
        <div className="person">
          <p>this is Person</p>
          <MyContext.Consumer>
            {(context) => (
              <React.Fragment>
                <p>Age: {context.state.age}</p>
                <p>Name: {context.state.name}</p>
                <p>Gender: {context.state.gender}</p>
                <p>Disciplined: {context.state.disciplined}</p>
                <p>Goal: {context.state.goal}</p>
                <button onClick={context.growAYearOlder}>🎂</button>
              </React.Fragment>
            )}
          </MyContext.Consumer>
        </div>
      )
    }
  }