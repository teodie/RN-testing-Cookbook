import { View, Text } from 'react-native'
import React from 'react'
import OAuthButton from '../components/OAuthButton'
import Textinput from '../components/Textinput'

const LoginScreen = () => {
  const googleLogo = require("../../assets/images/google_icon.png")
  const facebookLogo = require("../../assets/images/facebook_icon.png")

  return (
    <View className='flex-1 px-5 gap-5'>

      <View className='flex-row flex gap-2'>
        <OAuthButton provider='Google' bgColor='white' txtColor='gray' outline={true} providerIcon={googleLogo} />
        <OAuthButton provider='Facebook' bgColor='#21399B' txtColor='white' providerIcon={facebookLogo} />
      </View>

      <Textinput label='Email' error={null} />
      <Textinput label='Password' error="Invalid Password" />
    </View>
  )
}

export default LoginScreen