import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const ListItem = ({name, imageURL, company}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: imageURL,
        }}
      />
      <View style={styles.content}>
        <Text style={{fontWeight: '700', fontSize: 15}}>{name}</Text>
        <Text>Company Name Placeholder</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 25,
  },
  image: {
    borderRadius: 80 / 2,
    overflow: 'hidden',
    height: 80,
    width: 80,
  },
  content: {
    justifyContent: 'center',
    marginLeft: 15,
  },
});

export default ListItem;
