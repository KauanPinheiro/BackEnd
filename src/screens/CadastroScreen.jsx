//Importando dependências do projeto
import React, { Component } from "react";
import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

//importando imagens 
import CommonStyles from "../CommonStyles";
import getImgBackground from "../../assets/img/CadastroBackground.png"

//Importando componentes
import Input from "../components/Input";

//Criando componente de class ("Esse será o compnente visto pelo usuário")
export default class CadastroScreen extends Component {

    render() {

        return(
            <SafeAreaView style={styles.container}>
                <ImageBackground source={getImgBackground} style={styles.background}>
                    <Input/>
                </ImageBackground>  
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create(
    {
        container:{
            flex:1
        },
        background:{
            flex:1
        }
    }
)