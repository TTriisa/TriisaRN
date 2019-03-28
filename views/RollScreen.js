import React from 'react';
import { StyleSheet, Button, Image, View, Text, TouchableHighlight, TouchableOpacity } from 'react-native';

import LogoTitle from '../views/LogoTitle';

export default class RollScreen extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    return {
      title: navigation.getParam('titleParam', ''),
      headerStyle: {
        backgroundColor: navigationOptions.headerStyle.backgroundColor,
      },
      headerTintColor: "black",
    };
  };

  render() {
    const { navigation } = this.props;
    const rollMax = navigation.getParam('rollMax', '');
    const titleParam = navigation.getParam('titleParam', '');

    return (
      <View style={styles.container}>
        <Text style={styles.text}>You rolled:</Text>
        <Text style={styles.number}>{JSON.stringify(getRandomInt(rollMax))}</Text>
        <View style={styles.buttons}>
          <TouchableOpacity  style={styles.button}
            onPress={() => this.props.navigation.setParams()}
          >
            <Text style={styles.buttonText}>Roll again</Text>
          </TouchableOpacity >
          <TouchableOpacity style={styles.button}
            onPress={() => this.props.navigation.goBack()}
          >
            <Text style={styles.buttonText}>Go back</Text>
          </TouchableOpacity >
        </View>
      </View>
    );
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max))+1;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#424242'
    },
    text: {
        fontSize: 36,
        color: 'orange',
    },
    number: {
        fontSize: 156,
        color: 'white',
    },
    buttons: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        width: '100%',

    },
    button: {
        height: 'auto',
        width: 'auto',
        backgroundColor: 'orange',
        borderRadius: 6,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#eeb44f',
        paddingVertical: 6,
        paddingHorizontal: 12,
    },
    buttonText: {
        fontSize: 23,
        fontWeight: 'bold',
        color: 'black',
    },
});