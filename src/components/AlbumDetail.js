import React from 'react';
import { View, Text } from 'react-native';

const AlbumDetail = props => (
  <View>
    <View>
      <Text>Title: {props.album.title}</Text>
      <Text>Artist: {props.album.artist}</Text>
    </View>
  </View>
);

export default AlbumDetail;
