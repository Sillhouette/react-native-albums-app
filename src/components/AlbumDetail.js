import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardItem from './CardItem';

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image } = album;
  const { thumbnailStyle, headerContentStyle } = styles;

  return (
    <Card>
      <CardItem>
        <View>
          <Image style={thumbnailStyle} source={{ uri: thumbnail_image }} />
        </View>

        <View style={headerContentStyle}>
          <Text>Title: {title}</Text>
          <Text>Artist: {artist}</Text>
        </View>
      </CardItem>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  }
};

export default AlbumDetail;
