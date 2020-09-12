import React, { Component } from 'react'
import Accounts from '../components/Accounts'
import AccountInput from '../components/AccountInput'


class AccountsContainer extends Component {
  render() {
    return (
      <div>
        <AccountInput />
        <Accounts />
      </div>
    )
  }
}

export default AccountsContainer