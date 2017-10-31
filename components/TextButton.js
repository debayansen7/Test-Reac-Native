import React,{Component} from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export default function TextButton({children, onPress}){
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <Text>{children}</Text>
      </TouchableOpacity>
    </View>
  )
}
