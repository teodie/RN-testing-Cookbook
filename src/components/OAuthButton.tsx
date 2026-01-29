import { Text, TouchableOpacity, Image, ImageSourcePropType } from 'react-native'
import React from 'react'

type OAuthButtonTypes = {
  provider: string,
  bgColor: string,
  txtColor: string,
  outline?: boolean,
  providerIcon: ImageSourcePropType,
}

const OAuthButton = ({ provider, bgColor, outline = false, txtColor, providerIcon }: OAuthButtonTypes) => {

  return (
    <TouchableOpacity className="rounded-full py-4 items-center justify-center flex-grow flex-row gap-2" style={{ backgroundColor: bgColor, borderColor: 'gray', borderWidth: outline ? 1 : 0 }}>
      <Image source={providerIcon} resizeMode="contain" className='h-5 w-5' />
      <Text style={{ color: txtColor }}>{provider}</Text>
    </TouchableOpacity>
  )
}

export default OAuthButton