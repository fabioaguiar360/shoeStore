import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

function shortDesc(desc){
        if(desc.length < 25){
        return desc;
    }

    return desc.substring(0, 21)+'...';
}

export default function Shoes(props){
    return (
        <TouchableOpacity
         style={st.container}
         onPress={props.onClick}
         >
            <Image
                source={props.img}
                style={st.shoeImg}
            />
            <Text style={st.shoeText}>
                {shortDesc(props.name)}
            </Text>
            <View opacity={0.4}>
                <Text style={st.shoeText}>CAD$ {props.cost}</Text>
            </View>
        </TouchableOpacity>
                
    );
}

const st = StyleSheet.create({
    container: {
        paddingVertical: '2%',
        alignItems: 'center',
        justifyContent: 'center'

    },
    shoeImg: {
        width: 175,
        height: 175

    },
    shoeText: {
        fontSize: 16
    }
});