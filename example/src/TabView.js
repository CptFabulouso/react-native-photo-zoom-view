import React, { Component } from 'react';
import {
  StyleSheet,
  ViewPagerAndroid,
  View,
  ScrollView,
  Platform,
  Text,
  TouchableOpacity,
} from 'react-native';
import Photo from './Photo';
import { ScrollableTabView } from 'react-native-photo-view';

const images = [
  { source: require('../img/img1.jpeg') },
  { source: require('../img/img2.jpeg') },
  { source: require('../img/img3.jpg') },
];

class TabView extends Component {
  state = { scale: 1 };

  resetScale = () => {
    if (this.state.scale === 1) {
      this.setState({ scale: 1.01 });
    } else {
      this.setState({ scale: 1 });
    }
  };

  renderImages = () => {
    return images.map(({ source }, index) => {
      console.log('index', index);
      return (
        <View tabLabel={'' + index} key={index} style={styles.page}>
          <Photo
            source={source}
            scale={this.state.scale}
            minimumZoomScale={1}
            resizeMode="contain"
            androidScaleType="fitCenter"
          />
        </View>
      );
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollableTabView>{this.renderImages()}</ScrollableTabView>
        <TouchableOpacity onPress={this.resetScale}>
          <View
            style={{
              height: 40,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text>reset scale</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  page: {
    flex: 1,
  },
});

export default TabView;
