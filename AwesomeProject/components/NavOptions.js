import {
  FlatList,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import tw from 'twrnc';

import {Icon} from 'react-native-elements';
// import FastBackwardOutlined from '@ant-design/icons';
import {useNavigation} from '@react-navigation/native';
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
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        horizontal
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate(item.screen)}
            style={tw`bg-gray-200 p-6 rounded-5 m-2`}>
            <View>
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
            {/* <FastBackwardOutlined /> */}
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default NavOptions;

const styles = StyleSheet.create({});
