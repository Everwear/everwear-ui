import React, { Component } from 'react'
import { GlobalContext } from './AlertProvider'

const Alert = (WrappedComponent) => {
  return class HOC extends Component {
    static navigationOptions = WrappedComponent.navigationOptions

    showNetworkError = context => (error, title = '') => {
      console.log(error.message)
      if ((error instanceof Error) && error.message.includes('GraphQL error: ')) {
        context.alertWithType('error', title, error.message.replace('GraphQL error: ', ''))
      }
    }

    showError = context => (error, title = '') => {
      context.alertWithType('error', title, error)
    }

    showAlert = context => (message, title = '') => {
      context.alertWithType('success', title, message)
    }

    render() {
      return (
        <GlobalContext.Consumer>
          {(context) =>
            <WrappedComponent
              showNetworkError={this.showNetworkError(context)}
              showError={this.showError(context)}
              showAlert={this.showAlert(context)}
              {...this.props}
              {...context}
            />}
        </GlobalContext.Consumer>
      )
    }
  }
}

export default Alert
