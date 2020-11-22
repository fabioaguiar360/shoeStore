import { Anton_400Regular } from '@expo-google-fonts/anton';
import { processFontFamily } from 'expo-font';

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Detail() {
  return (
    <View style={st.container}>
      <Text style={st.text}>Detalhes</Text>
    </View>
  );
}

const st = StyleSheet.create({
  container: {

  },
  text: {
    fontFamily: 'Anton_400Regular',
    fontSize: 25,
    marginTop: 50
  }
});