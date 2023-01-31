import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import NavOptions from '../components/NavOptions';

const HomeScreen = () => {
  return (
    <View style={tw`p-5 h-full bg-white`}>
      <Image
        style={{
          width: 100,
          height: 100,
          resizeMode: 'contain',
          backgroundColor: 'white',
        }}
        source={{
          uri: 'https://links.papareact.com/gzs',
        }}
      />
      <NavOptions />
    </View>
  );
};

export default HomeScreen;
{
  /* // const styles = StyleSheet.create({}); */
}
