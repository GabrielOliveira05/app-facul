import React, { useState } from "react";
import { Text, View, Image, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { style } from "../../components/Input/styles";  // Reutiliza o mesmo arquivo de estilos
import Logo from '../../logo-tcc.png';
import { themas } from "../../global/themes";

export default function SignupEmpresarial({ }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [cnpjCpf, setCNPJCPF] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    async function handleSignup() {
        try {
            if (!name || !email || !cnpjCpf || !password || !confirmPassword) {
                return Alert.alert('Atenção', 'Todos os campos são obrigatórios!');
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                return Alert.alert('Atenção', 'Informe um e-mail válido!');
            }

            if (password.length < 6) {
                return Alert.alert('Atenção', 'A senha deve ter no mínimo 6 caracteres!');
            }

            if (password !== confirmPassword) {
                return Alert.alert('Atenção', 'As senhas não coincidem!');
            }

            setLoading(true);

            // Simulação de API de cadastro
            setTimeout(() => {
                setLoading(false);
                Alert.alert('Sucesso', 'Usuário cadastrado com sucesso!');
                // Redirecionar para a tela de login ou home
                // navigation.navigate('Login');
            }, 3000);

        } catch (error) {
            setLoading(false);
            console.log(error);
            Alert.alert('Erro', 'Ocorreu um erro ao tentar realizar o cadastro.');
        }
    }

    return (
        <View style={style.container}>
            <View style={style.boxTop}>
                <Image source={Logo} style={style.logo} resizeMode="contain" />
                <Text style={style.text}>Crie agora sua conta</Text>
            </View>

            <View style={style.boxMid}>
                <Text style={style.titleInput}>NOME COMPLETO:</Text>
                <View style={style.boxInput}>
                    <TextInput
                        style={style.input}
                        value={name}
                        onChangeText={setName}
                        autoCapitalize="words"
                    />
                    <MaterialIcons name="person" size={20} color={themas.colors.secondary} />
                </View>

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

                <Text style={style.titleInput}>CNPJ / CPF:</Text>
                <View style={style.boxInput}>
                    <TextInput
                        style={style.input}
                        value={cnpjCpf}
                        onChangeText={setCNPJCPF}
                        keyboardType="numeric"
                        placeholder="Digite seu CNPJ ou CPF"
                    />
                    <MaterialIcons name="assignment" size={20} color={themas.colors.secondary} />
                </View>

                <Text style={style.titleInput}>SENHA:</Text>
                <View style={style.boxInput}>
                    <TextInput
                        style={style.input}
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={!showPassword}
                        autoCapitalize="none"
                    />
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                        <MaterialIcons name={showPassword ? "visibility" : "visibility-off"} size={20} color={themas.colors.secondary} />
                    </TouchableOpacity>
                </View>

                <Text style={style.titleInput}>CONFIRMAÇÃO DE SENHA:</Text>
                <View style={style.boxInput}>
                    <TextInput
                        style={style.input}
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                        secureTextEntry={!showConfirmPassword}
                        autoCapitalize="none"
                    />
                    <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
                        <MaterialIcons name={showConfirmPassword ? "visibility" : "visibility-off"} size={20} color={themas.colors.secondary} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={style.boxBottom}>
                <TouchableOpacity style={[style.button, { marginTop: 20 }]} onPress={handleSignup} disabled={loading}>
                    {loading ? (
                        <ActivityIndicator color="#FFF" />
                    ) : (
                        <Text style={style.textButton}>Cadastrar</Text>
                    )}
                </TouchableOpacity>
            </View>

            <Text style={style.textBottom}>Já tem conta?</Text>
        </View>
    );
}