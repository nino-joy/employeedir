import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const ListItem = ({item}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: item.profile_image,
        }}
      />
      <View style={styles.content}>
        <Text style={{fontWeight: '700', fontSize: 15}}>{item.name}</Text>
        {/* <Text>{item.company.name}</Text> */}
      </View>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 15,
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
