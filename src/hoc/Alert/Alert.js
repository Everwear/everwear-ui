import React, { Component } from 'react'
import { GlobalContext } from './AlertProvider'
import capitalize from 'lodash/capitalize'

const Alert = (WrappedComponent) => {
  return class HOC extends Component {
    static navigationOptions = WrappedComponent.navigationOptions

    showNetworkError = context => (error, title = '') => {
      if (error instanceof Error) {
        const msg = capitalize(error.message.toLowerCase()
          .replace('graphql error: ', ''))
        context.alertWithType('error', title, msg)
      }
    }

    showError = context => (error, title = '') => {
      context.alertWithType('error', title, error)
    }

    showAlert = context => (message, title = '') => {
      context.alertWithType('success', title, message)
    }

    render () {
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
