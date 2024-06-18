//Importando dependências do projeto
import React, { Component } from "react";
import { Image, ImageBackground, SafeAreaView, StyleSheet, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

import { Text } from "@rneui/themed"
//importando imagens 
import CommonStyles from "../CommonStyles";
import getImgBackground from "../../assets/img/CadastroBackground.png"
import getImgFood from "../../assets/img/imgDaTelaCadastro.png"

//Importando componentes
import Input from "../components/Input";



//Criando componente de class ("Esse será o compnente visto pelo usuário")
export default class CadastroScreen extends Component {

    render() {

        return (
            < SafeAreaView style={styles.body}>
                <ImageBackground source={getImgBackground} style={styles.background}>

                    <View style={styles.container1}>
                        <Text h1 style={styles.title}>Clean Food</Text>
                        <Image source={getImgFood} />  
                    </View>

                    <View style={styles.container2}>
                        <Text style={styles.subTitle}>Criar uma conta</Text>
                        <Input placeholder="Name" iconName="user" />
                        <Input placeholder="Email" iconName="at" />
                        <Input placeholder="Nova senha" iconName="unlock-alt" />
                        <Input placeholder="Confirmar senha" iconName="unlock-alt" />
                    </View>

                </ImageBackground>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create(
    {
        body: {
            flex: 1,
            justifyContent: "center",
        },
        background: {
            flex: 1
        },
        container1: {
            alignItems:"center",
            marginTop:100
            
        },
        container2:{
            alignItems:"center",
            justifyContent:"space-between"
        },
        title: {
            fontFamily: "Jomhuria",
            color: CommonStyles.colors.primary,
            fontWeight: "bold"
        },
        subTitle: {
            fontFamily: CommonStyles.fontFamily,
            color: CommonStyles.colors.primary,
            fontSize: 60
        }
    }
)