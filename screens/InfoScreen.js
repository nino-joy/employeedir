import React from 'react';
import {StyleSheet, Text, View, Image, Linking, ScrollView} from 'react-native';

const InfoScreen = ({route}) => {
  const {item} = route.params;
  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <Image
          style={styles.image}
          source={{
            uri: item.profile_image,
          }}
        />
        <Text
          style={{
            fontSize: 28,
            marginTop: 15,
            fontWeight: 'bold',
          }}>
          {item.name}
        </Text>
      </View>

      <ScrollView elevation={4} style={styles.contentContainer}>
        <Text style={styles.contentTextHeading}>Username</Text>
        <Text style={styles.text}>{item.username}</Text>

        <Text style={{...styles.contentTextHeading, marginTop: 8}}>Email</Text>
        <Text style={styles.text}>{item.email}</Text>

        <Text style={{...styles.contentTextHeading, marginTop: 8}}>
          Address
        </Text>
        <Text style={styles.text}>{item.address.street}</Text>
        <Text style={styles.text}>{item.address.suite}</Text>
        <Text style={styles.text}>{item.address.city}</Text>
        <Text style={styles.text}>{item.address.zipcode}</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={{...styles.text, marginRight: 10}}>
            {item.address.geo.lat}
          </Text>
          <Text style={styles.text}>{item.address.geo.lng}</Text>
        </View>

        <Text style={{...styles.contentTextHeading, marginTop: 8}}>Phone</Text>
        <Text>{item.phone ? item.phone : 'Not Available'}</Text>

        <Text style={{...styles.contentTextHeading, marginTop: 8}}>
          Website
        </Text>
        <Text
          style={{...styles.text, color: 'blue'}}
          onPress={() => Linking.openURL('http://${item.website}')}>
          {item.website ? item.website : 'Not Available'}
        </Text>

        {item.company && (
          <View>
            <Text style={{...styles.contentTextHeading, marginTop: 8}}>
              Company
            </Text>
            <Text>{item.company.name}</Text>
            <Text>{item.company.catchPhrase}</Text>
            <Text>{item.company.bs}</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  image: {
    marginTop: 10,
    borderRadius: 160 / 2,
    overflow: 'hidden',
    height: 160,
    width: 160,
  },
  text: {
    fontSize: 16,
  },
  contentTextHeading: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  contentContainer: {
    marginTop: 10,
    borderRadius: 18,
    padding: 20,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 5,
    shadowOpacity: 0.1,
  },
});

export default InfoScreen;
