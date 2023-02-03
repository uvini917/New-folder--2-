import {
  FlatList,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';

import {Icon} from 'react-native-elements';

import {useNavigation} from '@react-navigation/native';

import {useSelector} from 'react-redux';
import {selectOrigin, setOrigin} from '../slices/navSlice';

const data = [
  {
    id: '123',
    title: 'Get a ride',
    image: 'https://links.papareact.com/3pn',
    screen: 'MapScreen',
  },
  {
    id: '456',
    title: 'Order Food',
    image: 'https://links.papareact.com/28w',
    screen: 'EatsScreen',
  },
];

const NavOptions = () => {
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        horizontal
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate(item.screen)}
            style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
            disabled={!origin}>
            <View style={tw`${!origin && 'opacity-20'}`}>
              <Image
                style={{
                  width: 100,
                  height: 100,
                  resizeMode: 'contain',
                }}
                source={{uri: item.image}}
              />
            </View>
            <Text style={tw`text-lg font-semibold mt-2 `}>{item.title}</Text>
            <Icon
              style={tw`p-2 bg-black rounded-full m-2 w-10 h-10`}
              name="arrowright"
              color="white"
              type="antdesign"
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default NavOptions;

const styles = StyleSheet.create({});
