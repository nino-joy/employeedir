import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import ListItem from '../components/ListItem';

const BASE_URL = 'http://www.mocky.io/v2/5d565297300000680030a986';

const HomeScreen = ({navigation}) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@data');
      if (jsonValue != null) {
        setData(JSON.parse(jsonValue));
      } else {
        const response = await fetch(BASE_URL);
        const json = await response.json();
        const jsonValue = JSON.stringify(json);
        await AsyncStorage.setItem('@data', jsonValue);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onPress = () => {
    navigation.navigate('Info');
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Employee Directory</Text>
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{}}
        renderItem={({item}) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => navigation.navigate('Info', {id: item.id})}>
            <ListItem
              name={item.name}
              imageURL={item.profile_image}
              company={item.company}
            />
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 30,
    marginBottom: 20,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
});
