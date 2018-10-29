import React, { Component } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import PhotoView from 'react-native-photo-view';

const { height, width } = Dimensions.get('window');

export default class Photo extends Component {
  static defaultProps = {
    scale: 1,
    minimumZoomScale: 1,
  };

  ref = null;

  _onScale = event => {
    console.log('_onScale', event.nativeEvent);
  };
  // _onTap = event => {
  //   console.log('_onTap', event.nativeEvent);
  // };
  // _onViewTap = event => {
  //   console.log('_onViewTap', event.nativeEvent);
  // };
  // _onLoadStart = event => {
  //   console.log('_onLoadStart', event.nativeEvent);
  // };
  // _onLoad = event => {
  //   console.log('_onLoad', event.nativeEvent);
  // };
  // _onLoadEnd = event => {
  //   console.log('_onLoadEnd', event.nativeEvent);
  // };
  // _onDrag = event => {
  //   console.log('_onLoadEnd', event.nativeEvent);
  // };

  componentWillReceiveProps(nextProps) {
    if (this.props.scale !== nextProps.scale) {
      this.ref && this.ref.setScale && this.ref.setScale(1);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <PhotoView
          ref={ref => {
            this.ref = ref;
          }}
          source={this.props.source}
          // onScale={this._onScale}
          scale={this.props.scale}
          // onTap={this._onTap}
          // onViewTap={this._onViewTap}
          // onDrag={this._onDrag}
          // onLoadStart={this._onLoadStart}
          // onLoad={this._onLoad}
          // onLoadEnd={this._onLoadEnd}
          // showsVerticalScrollIndicator={true}
          // showsHorizontalScrollIndicator={true}
          minimumZoomScale={1}
          maximumZoomScale={3}
          style={styles.photo}
          // resizeMode="contain"
          // androidScaleType="fitCenter"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  photo: {
    width,
    height,
    backgroundColor: 'black',
  },
  text: {
    backgroundColor: 'transparent',
    color: '#FFF',
  },
});
