import { Anton_400Regular } from '@expo-google-fonts/anton';
import { processFontFamily } from 'expo-font';

import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

export default function Detail() {
 return (
    <ScrollView showsVerticalScrollIndicator={false} style={st.container}>

      <Image source={require('../../assets/detail.png')} style={ st.imageDetail }/>

      <View style={st.textTitle}>
        <Text style={st.text}>Nike Showx 20</Text>
        <TouchableOpacity style={st.icon}>
          <AntDesign name="shoppingcart" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <Text style={[st.textPrice, {opacity: 0.4}]}>CAD$ 65.00</Text>
      <Text style={st.titleDetail}>
          About
      </Text>
      <Text style={st.textDatail}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
        printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
        but also the leap into electronic typesetting, remaining essentially unchanged.
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
        printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
        but also the leap into electronic typesetting, remaining essentially unchanged.
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
        printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
        but also the leap into electronic typesetting, remaining essentially unchanged.
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
        printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
        but also the leap into electronic typesetting, remaining essentially unchanged.
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
        printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
        but also the leap into electronic typesetting, remaining essentially unchanged.
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
        printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
        but also the leap into electronic typesetting, remaining essentially unchanged.
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
        printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
        but also the leap into electronic typesetting, remaining essentially unchanged.
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
        printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
        but also the leap into electronic typesetting, remaining essentially unchanged.
      </Text>

    </ScrollView>
  );
}

const st = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    fontFamily: 'Anton_400Regular',
    fontSize: 30,
    marginHorizontal: '2%'
  },
  imageDetail: {
    width: '100%',
    marginBottom: 5,
    marginTop: 60
  },
  textPrice:{
    fontFamily: 'Anton_400Regular',
    fontSize: 20,
    marginHorizontal: '2%'
  },
  textTitle: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
  
   marginLeft: '2%'
  },
  titleDetail: {
    fontFamily: 'Anton_400Regular',
    fontSize: 20,
    marginHorizontal: '2%'

  },
  textDatail:  {
    margin: '2%'
  }

});