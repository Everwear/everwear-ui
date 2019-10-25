import React, { useState } from 'react'
import { Image } from 'react-native'

const RemoteImage = ({
  uri,
  ...props
}) => {
  const [ loadAttempt, setLoadAttempt ] = useState(1)
  const [ URI, setURI ] = useState(uri)

  const onError = () => {
    setTimeout(() => {
      setURI(`${uri}#${Date.now()}`)
      setLoadAttempt(loadAttempt+1)
    }, 1000 * loadAttempt)
  }

  return (
    <Image
      {...props}
      source={{
        uri: URI,
        cache: 'force-cache',
      }}
      onError={onError}
    />
  )
}

export default RemoteImage
