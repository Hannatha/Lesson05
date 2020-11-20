import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';

const movie = {title: 'Doctor Sleep', year: '2019'};

export class Movie extends React.Component {
  render() {
    return (
      <Text>
        {movie.title} {'\n'} {movie.year}
      </Text>
    );
  }
}

const MOVIE_DATA = [
  {
    title: 'Doctor Sleep',
    year: '2019',
    poster: require('./img/doctor-sleep.jpg'),
  },
  {
    title: 'Midway',
    year: '2019',
    poster: require('./img/midway.jpg'),
  },
];

const divStyle = {
  color: 'blue',
};

const divImage = {

};

export const MovieList = () => {
  return MOVIE_DATA.map((data) => (
    <View>
      <Text style={divStyle}>
        {'\n'}
        {data.title} {'\n'} {data.year}
      </Text>
      <Image style={divImage} source={data.poster} />
    </View>
  ));
};
