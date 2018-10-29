import React, {Component} from 'react';
import {
  AppRegistry,
  Button,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import PhotoView from 'react-native-photo-view';

const {width} = Dimensions.get('window');

export default class Example extends Component {
  imageRef = React.createRef();

  _onScale = event => {
    console.log('_onScale', event.nativeEvent);
  };
  _onTap = event => {
    console.log('_onTap', event.nativeEvent);
  };
  _onViewTap = event => {
    console.log('_onViewTap', event.nativeEvent);
  };
  _onLoadStart = event => {
    console.log('_onLoadStart', event.nativeEvent);
  };
  _onLoad = event => {
    console.log('_onLoad', event.nativeEvent);
  };
  _onLoadEnd = event => {
    console.log('_onLoadEnd', event.nativeEvent);
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.imageWrapper}>
          <PhotoView
            source={require('./img/img.jpeg')}
            onScale={this._onScale}
            onTap={this._onTap}
            onViewTap={this._onViewTap}
            onLoadStart={this._onLoadStart}
            onLoad={this._onLoad}
            onLoadEnd={this._onLoadEnd}
            showsVerticalScrollIndicator={true}
            showsHorizontalScrollIndicator={true}
            minimumZoomScale={0.5}
            maximumZoomScale={3}
            style={styles.photo}
            ref={this.imageRef}
          />
        </View>

        <Button
          title="reset scale"
          onPress={() => {
            this.imageRef.current.resetScale();
          }}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  imageWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  photo: {
    height: 300,
    width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    backgroundColor: 'transparent',
    color: '#FFF',
  },
});

AppRegistry.registerComponent('example', () => Example);
