import { Anton_400Regular } from '@expo-google-fonts/anton';
import { processFontFamily } from 'expo-font';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Image
                source={require('../../assets/banner.png')}
                style={styles.banner}
            />
        </View>
        <View sytle={styles.textContainer}>
            <Text style={styles.text}>TÊNIS</Text>
            <Text style={styles.text}>•</Text>
            <Text style={styles.text}>MASCULINO</Text>
        </View>
        
    </View>
  );
}
 const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff'
    },
    header:{
        marginBottom: 8
    },
    image: {
        width: '100%'
    },
    textContainer: {
        
    },
    text: {
        fontFamily: 'Anton_400Regular',
        fontSize: 25,
        margin: 10
    }
 });