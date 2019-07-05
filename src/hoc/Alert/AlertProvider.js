import React, { Component } from 'react'
import DropdownAlert from 'react-native-dropdownalert'
const GlobalContext = React.createContext({})

class AlertProvider extends Component {
  alert(...args) {
    this.dropdown.alert(...args)
  }

  alertWithType(...args) {
    this.dropdown.alertWithType(...args)
  }

  render() {
    const { children } = this.props

    return (
      <GlobalContext.Provider
        value={{
          alert: (...args) => {
            this.dropdown.alert(...args)
          },
          alertWithType: (...args) => {
            this.dropdown.alertWithType(...args)
          },
        }}
      >
        {children}
        <DropdownAlert
          ref={(ref) => {
            this.dropdown = ref
          }}
          infoImageSrc={null}
          warnImageSrc={null}
          errorImageSrc={null}
          successImageSrc={null}
          successColor="#19d87c"
          errorColor="#e74848"
          infoColor="#afb1b8"
          titleStyle={{
            textAlign: 'center',
            fontFamily: 'WorkSans-Semibold',
            fontSize: 14,
            color: '#fff',
          }}
          messageStyle={{
            textAlign: 'center',
            fontFamily: 'WorkSans-Semibold',
            fontSize: 14,
            color: '#fff',
          }}
        />
      </GlobalContext.Provider>
    )
  }
}

export {
  AlertProvider,
  GlobalContext
}
