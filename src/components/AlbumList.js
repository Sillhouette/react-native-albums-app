import React, { Component } from 'react';
import Axios from 'axios';
import { View, Text } from 'react-native';

class AlbumList extends Component {
  state = {
    albums: []
  };

  componentWillMount() {
    Axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(response =>
      this.setState({
        albums: response.data
      })
    );
  }

  render() {
    console.log(this.state);

    return (
      <View>
        <Text>Album List!</Text>
      </View>
    );
  }
}
export default AlbumList;
