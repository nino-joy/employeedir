import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

function SearchBar() {
  const [query, setQuery] = useState('');

  return (
    <View
      style={{
        backgroundColor: '#fff',
        padding: 8,
        marginBottom: 20,
        borderRadius: 20,
      }}>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        clearButtonMode="always"
        value={query}
        onChangeText={query => setQuery(query)}
        placeholder="Search"
        style={{backgroundColor: '#fff', paddingHorizontal: 15, height: 40}}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

export default SearchBar;
