import React, { Component } from 'react'
import DropdownAlert from 'react-native-dropdownalert'
const GlobalContext = React.createContext({})

class AlertProvider extends Component {
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
