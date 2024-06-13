import React from "react";
import { View,TextInput, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';




export default props => {

    return(
        <View>
            <Icon name="envelope-o" size={30}/>
            <TextInput
                textAlign="left"
                keyboardType="name-phone-pad"
                placeholder="Email"
            />
        </View>

    )
}

const styles = StyleSheet.create(
    {
        container:{

        },
    }
)