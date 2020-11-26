import { Anton_400Regular } from '@expo-google-fonts/anton';
import { processFontFamily } from 'expo-font';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Shoes from '../../component/Shoes';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
    const navigation = useNavigation();
  
    return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Image
                source={require('../../assets/banner.png')}
                style={styles.imageBanner}
            />
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.text}>TÊNIS</Text>
            <Text style={[styles.text, {color: '#CECECF'} ]}>•</Text>
            <Text style={[styles.text, {color: '#CECECF'} ]}>MASCULINO</Text>
            <TouchableOpacity style={{position: 'absolute', right: 0, alignSelf: 'center'}}>
                <MaterialIcons
                    name="filter-list"
                    size={24}
                    color="#000"
                />
            </TouchableOpacity>
        </View>
        <View style={styles.line}></View>
        <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={[styles.text, {marginLeft: '3%'}]}>LANÇAMENTOS</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
                <Shoes
                    cost="65.00"
                    img={require('../../assets/1.png')}
                    name="Nike Showx 20"
                    onClick={ () => navigation.navigate('Detail')} 
                />
                <Shoes
                    cost="565.00"
                    img={require('../../assets/2.png')}
                    name="Nike Air Soft Super Plux Master"
                    onClick={() => alert('There is no more information')}
                />
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
                <Shoes
                    cost="310.00"
                    img={require('../../assets/3.png')}
                    name="Nike Line"
                    onClick={() => alert('There is no more information')}
                />
                <Shoes
                    cost="99.99"
                    img={require('../../assets/4.png')}
                    name="Nike Army"
                    onClick={() => alert('There is no more information')}
                />
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
                <Shoes
                    cost="165.00"
                    img={require('../../assets/5.png')}
                    name="Nike Shock Impact"
                    onClick={() => alert('There is no more information')}
                />
                <Shoes
                    cost="235.00"
                    img={require('../../assets/6.png')}
                    name="Nike Air 10"
                    onClick={() => alert('There is no more information')}
                />
            </View>
            
        </ScrollView>
        
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
        marginBottom: 2,
    },
    imageBanner: {
        width: '100%'
    },
    textContainer: {
        flexDirection: 'row',
        marginHorizontal: '2%'
    },
    text: {
        fontFamily: 'Anton_400Regular',
        fontSize: 25,
        marginHorizontal: '1%'
    },
    line: {
        borderBottomColor: '#b8b8b8',
        borderBottomWidth: 2,
        marginBottom: '2%'
    }
 });