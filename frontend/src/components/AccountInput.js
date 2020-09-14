import React, { Component } from 'react'
import {connect} from 'react-redux'

class AccountInput extends Component {

  state = {name: '', balance: ''}

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addAccount(this.state)
    this.setState({
      name: '',
      balance: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <label>Checking Account Name:</label>
          <input type="text" placeholder="Name" value={this.state.name} onChange={this.handleOnChange} />
          <br />
          <label>Checking Account Balance:</label>
          <input type="text" placeholder="Balance" value={this.state.balance} onChange={this.handleOnChange} />
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default connect(null)(AccountInput)
