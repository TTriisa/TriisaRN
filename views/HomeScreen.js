import React from 'react';
import { StyleSheet, Button, Image, View, Text, TouchableHighlight } from 'react-native';

import LogoTitle from '../views/LogoTitle';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <LogoTitle />,
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <TouchableHighlight
            onPress={() => {
              this.props.navigation.navigate('Roll', {
                rollMax: 4,
                titleParam: 'Rolling a D4',
              });
          }}>
            <View style={styles.item}>
              <Image
                source={require('../assets/d4.png')}
                style={styles.image}
              />
              <Text style={{ fontSize: 27, color: '#beda90' }}>D4</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            onPress={() => {
              this.props.navigation.navigate('Roll', {
                rollMax: 6,
                titleParam: 'Rolling a D6',
              });
          }}>
            <View style={styles.item}>
              <Image
                source={require('../assets/d6.png')}
                style={styles.image}
              />
              <Text style={{ fontSize: 27, color: '#cf98cf' }}>D6</Text>
            </View>
          </TouchableHighlight>
        </View>

        <View style={styles.row}>
          <TouchableHighlight
            onPress={() => {
              this.props.navigation.navigate('Roll', {
                rollMax: 8,
                titleParam: 'Rolling a D8',
              });
          }}>
            <View style={styles.item}>
              <Image
                source={require('../assets/d8.png')}
                style={styles.image}
              />
              <Text style={{ fontSize: 27, color: '#5cb5c5' }}>D8</Text>
            </View>

          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {
              this.props.navigation.navigate('Roll', {
                rollMax: 10,
                titleParam: 'Rolling a D10',
              });
          }}>
            <View style={styles.item}>
              <Image
                source={require('../assets/d10.png')}
                style={styles.image}
              />
              <Text style={{ fontSize: 27, color: '#bf4e46' }}>D10</Text>
            </View>
          </TouchableHighlight>
        </View>
        <View style={styles.row}>
          <TouchableHighlight
            onPress={() => {
              this.props.navigation.navigate('Roll', {
                rollMax: 12,
                titleParam: 'Rolling a D12',
              });
          }}>
            <View style={styles.item}>
              <Image
                source={require('../assets/d12.png')}
                style={styles.image}
              />
              <Text style={{ fontSize: 27, color: '#b4c7cb' }}>D12</Text>
            </View>

          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {
              this.props.navigation.navigate('Roll', {
                rollMax: 20,
                titleParam: 'Rolling a D20',
              });
          }}>
            <View style={styles.item}>
              <Image
                source={require('../assets/d20.png')}
                style={styles.image}
              />
              <Text style={{ fontSize: 27, color: '#d9b36a' }}>D20</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#424242'
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    item: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        height: 100,
        width: 100
    }
});
