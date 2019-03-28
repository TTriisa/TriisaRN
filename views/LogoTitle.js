import React from 'react';
import { Button, Image, View, Text, TouchableHighlight } from 'react-native';

export default class LogoTitle extends React.Component {
  render() {
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 6}}>
        <Image
          source={require('../assets/icon.png')}
          style={{ width: 40, height: 40 }}
        />
        <Text style={{ fontSize: 27, color: 'black', paddingLeft: 5 }}>D&D Dice Roller</Text>
      </View>
    );
  }
}
