import React, { Component } from 'react'
import Accounts from '../components/Accounts'
import AccountInput from '../components/AccountInput'
import {connect} from 'react-redux'
import {fetchAccounts} from '../actions/fetchAccounts'



class AccountsContainer extends Component {

  componentDidMount() {
    this.props.fetchAccounts()
    console.log(fetchAccounts)
  }

  render() {
    return (
      <div>
        <AccountInput />
        <Accounts />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    accounts: state.accounts
  }
}

export default connect(mapStateToProps, {fetchAccounts})(AccountsContainer)