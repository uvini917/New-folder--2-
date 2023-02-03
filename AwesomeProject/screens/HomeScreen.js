import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY} from '@env';
import {useDispatch} from 'react-redux';
import {setDestination, setOrigin} from '../slices/navSlice';
import NavFavourites from '../components/NavFavourites';

const HomeScreen = () => {
  const dispatch = useDispatch();

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
      <GooglePlacesAutocomplete
        styles={{
          container: {
            flex: 0,
          },
          textInput: {
            fontSize: 18,
          },
        }}
        onPress={(data, details = null) => {
          dispatch(
            setOrigin({
              location: details.geometry.location,
              description: data.description,
            }),
            setDestination(null),
          );
        }}
        fetchDetails={true}
        returnKeyType={'search'}
        enablePoweredByContainer={false}
        minLength={2}
        query={{
          key: GOOGLE_MAPS_APIKEY,
          language: 'en',
        }}
        nearbyPlacesAPI="GooglePlaceSearch"
        debounce={400}
        placeholder="Where From?"
      />
      <NavOptions />
      <NavFavourites />
    </View>
  );
};

export default HomeScreen;
{
  /* // const styles = StyleSheet.create({}); */
}
