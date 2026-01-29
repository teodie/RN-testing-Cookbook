import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


type TextinputType = {
  label: string,
  error: string | null,
  leftIcon?: keyof typeof MaterialIcons.glyphMap
  rightIcon?: keyof typeof MaterialIcons.glyphMap
}

const Textinput = ({label, error, leftIcon}: TextinputType) => {
  const [email, setEmail] = useState<string>('juandelacruz@gmail.com')

  return (
    <View className="gap-2 ">
      <Text>{label}</Text>
      <MaterialIcons name={leftIcon} size={30} color="gray" />
      <TextInput
        className="border rounded-full border-gray-400 pl-2"
        value={email}
      />
      {error && <Text>{error}</Text>}
    </View>
  )
}

export default Textinput