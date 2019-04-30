import React from 'react';
import { Text } from 'react-native';
import Card from './Card';
import CardItem from './CardItem';

const AlbumDetail = props => (
  <Card>
    <CardItem>
      <Text>Title: {props.album.title}</Text>
      <Text>Artist: {props.album.artist}</Text>
    </CardItem>
  </Card>
);

export default AlbumDetail;
