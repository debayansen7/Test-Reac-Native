import React from 'react';
import {getMetricMetaInfo, timeToString } from '../utils/helpers';
import { Text, View, TouchableOpacity } from 'react-native';
import UdaciSlider from './UdaciSlider';
import UdaciSteppers from './UdaciSteppers';
import DateHeader from './DateHeader';

function SubmitBtn ({onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>Submit</Text>
    </TouchableOpacity>
  )
}

export default class AddEntry extends React.Component {

  state={
    run: 0,
    bike: 0,
    swim: 0,
    eat: 0,
    sleep: 0
  }

  increment = (metric) => {
    const { max, stop } = getMetricMetaInfo(metric)

    this.setState((state) => {
      const count = state[metric] + step

      return {
        ...state,
        [metric] : count > max ? max : count
      }
    })
  };

  slide = (metric, value) => {
    this.setState(() => ({
      [metric]: value,
    }))
  }

  decrement = (metric) => {

    this.setState((state) => {
      const count = state[metric] - getMetricMetaInfo(metric).step

      return {
        ...state,
        [metric] : count < 0 ? 0 : count
      }
    })
  }

  submit = () => {
    const key = timeToString();
    const entry = this.state;

    // Update Redux

    this.setState(() => ({
      run: 0,
      bike: 0,
      swim: 0,
      eat: 0,
      sleep: 0
    }))
  }

  // <DateHeader date={(new Date()).toLocaleDateString()}/>

  render() {
    const metaInfo = getMetricMetaInfo()

    // <DateHeader date={(new Date()).toString()}/>
    // <DateHeader date={(new Date()).toLocaleDateString()}/>

    return (
      <View >

        {Object.keys(metaInfo).map((key) => {
          const { getIcon, type, ...rest } = metaInfo[key]
          const value = this.state[key]

          return (
            <View key={key}>
              {getIcon()}
              {type === 'slider'
                ? <UdaciSlider
                    value = {value}
                    onChange = {(value) => this.slide(key, value)}
                    {...rest}
                  />
                : <UdaciSteppers
                    value = {value}
                    onIncrement = {(value) => this.increment(key)}
                    onDecrement = {(value) => this.decrement(key)}
                    {...rest}
                  />
              }
            </View>
          )
        })}

        <SubmitBtn onPress={this.submit} />
      </View>
    );
  }
}
