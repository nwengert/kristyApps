import React from 'react'
import MyContext from './MyContext'

export default class MyProvider extends React.Component {
  state = {
    name: 'Wes',
    age: 100,
    gender: 'noChange',
    disciplined: 'noChange',
    goal: 'noChange'
  }
  render() {
    return (
      <MyContext.Provider value={{
        state: this.state,
        growAYearOlder: () => this.setState({
          age: this.state.age + 1
        })
      }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}