import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import ListItem from './components/ListItem';

const BASE_URL = 'http://www.mocky.io/v2/5d565297300000680030a986';

const App = () => {
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

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Employee Directory</Text>
      <FlatList
        data={data}
        contentContainerStyle={{
          marginTop: 30,
        }}
        renderItem={ListItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 30,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
});
