import React from 'react';
import {View, Text, Image, StyleSheet, ImageBackground} from 'react-native';
export default function FinshScreen({navigation}: any) {
  return (
    <View style={styles.topWrapper}>
      <Text style={styles.titleStyle}>산책이 종료되었습니다.</Text>
      <View>
        <ImageBackground
          source={require('../../../../../imgs/course.png')}
          style={styles.imageWrapper}
        />
      </View>
      <Text> </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  topWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#26EBA6',
    color: 'white',
    width: 250,
    height: 40,
    paddingTop: 6,
    textAlign: 'center',
  },
  imageWrapper: {
    width: 300,
    height: 150,
    marginTop: 20,
    borderWidth: 2,
  },
});
