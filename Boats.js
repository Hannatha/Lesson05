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
const PRODUCTS_DATA = [
  {
    name: 'Sea Ray 500 Sundancer',
    description:
      'Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away.',
    picture: require('./img/sea_ray.jpg'),
  },
  {
    name: 'Four Winns Horizon 180',
    description:
      'A sporty look and refined details truly set the Horizon 180 above all others.',
    picture: require('./img/four_winns.jpg'),
  },
  {
    name: 'Flipper 640 ST',
    description:
      'A modern take on the classic, traditional hardtop and perfect for a family picnic.',
    picture: require('./img/flipper.jpg'),
  },
  {
    name: 'Princess V48',
    description:
      'There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior.',
    picture: require('./img/princess.jpg'),
  },
  {
    name: 'Bayliner 175 Bowrider',
    description:
      'Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance.',
    picture: require('./img/bayliner.jpg'),
  },
  {
    name: 'Fairline Targa 47',
    description:
      'Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit.',
    picture: require('./img/fairline.jpg'),
  },
];

export const BoatList = () => {
  return PRODUCTS_DATA.map((data) => (
    <View>
      <Text style={divName}>
        {'\n'}
        {'\n'}
        {data.name}
      </Text>
      <Image source={data.picture} />
      <Text style={divDesc}>
        {data.description}
        {'\n'}
      </Text>
    </View>
  ));
};

const divDesc = {
  color: 'black',
  backgroundColor: 'orange',
  textAlign: 'center',
  fontSize: 15,
};

const divName = {
  color: 'purple',
  textAlign: 'center',
  fontWeight: 'bold',
  textDecorationLine: 'underline',
  fontStyle: 'italic',
  fontSize: 20,
};
