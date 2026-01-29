import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import OAuthButton from '@/src/components/OAuthButton'
import Textinput from '@/src/components/Textinput'
import ActionButton from '@/src/components/ActionButton'

const LoginScreen = () => {
  const googleLogo = require("@/assets/images/google_icon.png")
  const facebookLogo = require("@/assets/images/facebook_icon.png")

  return (
    <View className='flex-1 px-5 gap-5 bg-white justify-end pb-4'>

      <View className='flex-row flex gap-2'>
        <OAuthButton provider='Google' bgColor='white' txtColor='gray' outline={true} providerIcon={googleLogo} />
        <OAuthButton provider='Facebook' bgColor='#21399B' txtColor='white' providerIcon={facebookLogo} />
      </View>

      <View className=" self-center">
        <Text className="text-gray-500 text-base font-medium ">or with</Text>
      </View>

      <Textinput label='Email' error={null} leftIcon='mail' />
      <Textinput label='Password' error="Invalid Password" leftIcon='lock' rightIcon='remove-red-eye' />

      <TouchableOpacity className="self-end">
        <Text>
          Forgot Password?
        </Text>
      </TouchableOpacity>

      <ActionButton label="Login" buttonColor='#21399B' textColor='white' />

      <View className="flex-row items-center self-center">
        <Text> Don't have an Account? </Text>
        <TouchableOpacity>
          <Text>SignUp</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default LoginScreen