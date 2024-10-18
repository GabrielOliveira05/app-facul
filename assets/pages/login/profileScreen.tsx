import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import { style } from "../../components/Input/stylesProfileScreen";
import { TextInput } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={style.container}>
      <Text style={style.headerTitle}>Perfil do Usuário</Text>

      {/* Campos de cadastro */}
      <View style={style.inputContainer}>
        <Text style={style.label}>Nome:</Text>
        <TextInput 
          style={style.input} 
          placeholder="Nome do Usuário"
          editable={false}  // Quando os dados forem puxados do banco, deixe 'editable={false}'
        />
      </View>

      <View style={style.inputContainer}>
        <Text style={style.label}>Email:</Text>
        <TextInput 
          style={style.input} 
          placeholder="Email do Usuário"
          editable={false}
        />
      </View>

      <View style={style.inputContainer}>
        <Text style={style.label}>Data de Nascimento:</Text>
        <TextInput 
          style={style.input} 
          placeholder="Data de Nascimento"
          editable={false}
        />
      </View>

      <View style={style.inputContainer}>
        <Text style={style.label}>Telefone:</Text>
        <TextInput 
          style={style.input} 
          placeholder="Telefone do Usuário"
          editable={false}
        />
      </View>

      {/* Botão para editar o perfil */}
      <TouchableOpacity style={style.button}>
        <Text style={style.buttonText}>Editar Perfil</Text>
      </TouchableOpacity>
    </View>
  );
}
