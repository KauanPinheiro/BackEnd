import React from "react";
import { Pressable } from "react-native";
import { View,TextInput, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import CommonStyles from "../CommonStyles";





export default props => {

    return(
        <View >

            <Pressable style={styles.container}>

                <TextInput
                    style={styles.input}
                    label={props.label}
                    textAlign="left"
                    keyboardType="name-phone-pad"
                    placeholder={props.placeholder}
                    maxLength={60}
                    placeholderTextColor="#FFECD6"
                />
                <Icon name={props.iconName} size={20} color="#FFECD6"/>

            </Pressable>

        </View>

    )
}

const styles = StyleSheet.create(
    {
        container:{
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"center", 
        },
        input:{
            fontFamily: CommonStyles.fontFamily,
            margin:15,
            borderBottomWidth:1,
            borderColor:"#FFECD6",
            borderRadius:6,
            width: 225
        }
    }
)