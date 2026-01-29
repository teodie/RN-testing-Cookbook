import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


type TextinputType = {
  label: string,
  error: string | null,
  leftIcon?: keyof typeof MaterialIcons.glyphMap,
  rightIcon?: keyof typeof MaterialIcons.glyphMap,
}

const Textinput = ({ label, error, leftIcon, rightIcon }: TextinputType) => {
  const [email, setEmail] = useState<string>('juandelacruz@gmail.com')

  return (
    <View className="gap-2 ">
      <Text className="text-xl">{label}</Text>
      <View className="flex flex-row border border-gray-400 bg-white items-center rounded-full px-2">
        {leftIcon && <MaterialIcons name={leftIcon} size={25} color="gray" />}
        <TextInput
          className="rounded-full flex-grow pl-2"
          value={email}
        />
        {rightIcon && <MaterialIcons name={rightIcon} size={25} color="gray" />}
      </View>
      {error && <Text className="text-red-600">{error}</Text>}
    </View>
  )
}

export default Textinput