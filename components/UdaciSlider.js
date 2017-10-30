import React,{Component} from 'react';
import { Text, Slider, View } from 'react-native';
import {getMetricMetaInfo} from '../utils/helpers';

export default function UdaciSlider({ max, unit, step, value, onChange }){
  return (
    <View>
      <Slider
        step={step}
        value={value}
        maximumValue={max}
        minimumValue={0}
        onValueChange={onChange}
      />
      <Text>{value}</Text>
      <Text>{unit}</Text>

    </View>
  )
}
