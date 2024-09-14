import React, { useState } from "react";

import {Text, View, Image, TextInput, TouchableOpacity, Alert} from 'react-native';

import {style} from "./styles";

import Logo from '../../logo-tcc.png';

import {MaterialIcons} from '@expo/vector-icons'
import { themas } from "../../global/themes";
import { Input } from "../../components/Input";

export default function Login(){

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    async function getLogin(){
        try {
            if(!email || !password){
                return Alert.alert('Atenção', 'Informe os campos obrigatórios!')
            }

            setTimeout(()=>{
                Alert.alert('Logado com sucesso!')  
            }, 3000)}
    
         catch (error) {
            console.log(error);
            
        }
    }

    return (
        <View style={style.container}>
            <View style={style.boxTop}>
                <Image 
                    source={Logo}  
                    style={style.logo}   
                    resizeMode="contain"
                />
                <Text style={style.text}>Seja bem-vindo!</Text>
            </View>

            <View style={style.boxMid}>
                <Input> </Input>
                {/* <Text style={style.titleInput}>ENDEREÇO DE E-MAIL:</Text>
                <View style={style.boxInput}>
                    <TextInput 
                        style={style.input}
                        value={email}
                        onChangeText={setEmail}
                        >      
                    </TextInput>
                    <MaterialIcons name="email" size={20} color={themas.colors.secondary}></MaterialIcons>
                </View>
                
                <Text style={style.titleInput}>SENHA:</Text>
                <View  style={style.boxInput}>
                    <TextInput 
                    style={style.input}
                    value={password}
                    onChangeText={setPassword}>
                        
                    </TextInput>
                    <MaterialIcons name="remove-red-eye" size={20} color={themas.colors.secondary}></MaterialIcons>
                </View> */}
            </View>

            <View style={style.boxBottom}>
                <TouchableOpacity style={style.button} onPress={()=>getLogin}>
                    <Text style={style.textButton}>Entrar</Text>
                </TouchableOpacity>
                
            </View>

            <Text style={style.textBottom}>Não tem conta? <Text style={style.textBottomAccount}>Crie agora!</Text></Text>
            
        </View>
    )
}

