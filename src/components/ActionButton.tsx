import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

type ActionButtonType = {
  label: string,
  buttonColor: string,
  textColor: string,
  border?: boolean
}

const ActionButton = ( {label, buttonColor, textColor, border = false} : ActionButtonType) => {
  return (
    <TouchableOpacity className="border min-h-14 rounded-full items-center justify-center" style={{backgroundColor: buttonColor, borderWidth: border ? 1 : 0}}>
      <Text style={{color: textColor}} className='text-xl font-semibold'>{label}</Text>
    </TouchableOpacity>
  )
}

export default ActionButton