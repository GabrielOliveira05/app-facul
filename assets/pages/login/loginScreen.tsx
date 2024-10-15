import React, { useState } from "react";
import { Text, View, Image, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { style } from "../../components/Input/styles";
import Logo from '../../logo-tcc.png';
import { themas } from "../../global/themes";

export default function Login({ }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);  // Estado de carregamento
    const [showPassword, setShowPassword] = useState(false); // Mostrar/ocultar senha

    async function getLogin() {
        try {
            // Validações simples de campos
            if (!email || !password) {
                return Alert.alert('Atenção', 'Informe os campos obrigatórios!');
            }
            // Validação de e-mail simples
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                return Alert.alert('Atenção', 'Informe um e-mail válido!');
            }
            // Validação de senha
            if (password.length < 6) {
                return Alert.alert('Atenção', 'A senha deve ter no mínimo 6 caracteres!');
            }

            // Inicia o estado de carregamento
            setLoading(true);

            // Simulação de API de login
            setTimeout(() => {
                setLoading(false);
                Alert.alert('Logado com sucesso!');
                // Redirecionar para outra tela após login bem-sucedido
                // navigation.navigate('Home');
            }, 3000);

        } catch (error) {
            setLoading(false);
            console.log(error);
            Alert.alert('Erro', 'Ocorreu um erro ao tentar fazer login.');
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
                <Text style={style.titleInput}>ENDEREÇO DE E-MAIL:</Text>
                <View style={style.boxInput}>
                    <TextInput
                        style={style.input}
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                    <MaterialIcons name="email" size={20} color={themas.colors.secondary} />
                </View>

                <Text style={style.titleInput}>SENHA:</Text>
                <View style={style.boxInput}>
                    <TextInput
                        style={style.input}
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={!showPassword} // Mostrar ou ocultar a senha
                        autoCapitalize="none"
                    />
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                        <MaterialIcons name={showPassword ? "visibility" : "visibility-off"} size={20} color={themas.colors.secondary} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={style.boxBottom}>
                <TouchableOpacity style={style.button} onPress={getLogin} disabled={loading}>
                    {loading ? (
                        <ActivityIndicator color="#FFF" />
                    ) : (
                        <Text style={style.textButton}>Entrar</Text>
                    )}
                </TouchableOpacity>
            </View>

            <Text style={style.textBottom}>Não tem conta?
                {/* <Text style={style.textBottomAccount} onPress={() => navigation.navigate('Signup')}> Crie agora!</Text> */}
            </Text>
        </View>
    );
}
