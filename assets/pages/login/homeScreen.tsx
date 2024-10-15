import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { FontAwesome, MaterialIcons, Feather } from '@expo/vector-icons';
import { style } from "../../components/Input/stylesHomeScreen";
import Logo from '../../logo-tcc.png';

export default function HomeScreen({ navigation }: { navigation: any }) {
  return (
    <View style={style.containerMenu}>
      {/* Header */}
      <View style={style.header}>
        <Image
          source={Logo}
          style={style.profilePic}
        />
        <Text style={style.titleMenu}>LifeStyle</Text>
      </View>

      {/* Buttons Section */}
      <TouchableOpacity
        style={style.buttonMenu}
        onPress={() => navigation.navigate('ChecklistScreen')}>
        <FontAwesome name="calendar" size={24} color="white" />
        <Text style={style.buttonText}>Planejamento</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={style.buttonMenu}
        onPress={() => navigation.navigate('RelaxationScreen')}>
        <MaterialIcons name="spa" size={24} color="white" />
        <Text style={style.buttonText}>Mindfulness</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={style.buttonMenu}
        onPress={() => navigation.navigate('ReadingScreen')}>
        <Feather name="book-open" size={24} color="white" />
        <Text style={style.buttonText}>Leitura</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={style.buttonMenu}
        onPress={() => navigation.navigate('ChatbotScreen')}>
        <Feather name="message-circle" size={24} color="white" />
        <Text style={style.buttonText}>Chatbot</Text>
      </TouchableOpacity>

      {/* Resumo da Ofensiva */}
      <View style={style.summarySection}>
        <Text style={style.summaryTitle}>Resumo da ofensiva</Text>
        <View style={style.summaryBoxContainer}>
          <View style={style.summaryBox}>
            <Text style={style.summaryText}>Semana</Text>
            <Text style={style.summaryNumber}>3</Text>
          </View>
          <View style={style.summaryBox}>
            <Text style={style.summaryText}>Dia</Text>
            <Text style={style.summaryNumber}>5</Text>
          </View>
        </View>
      </View>

      <View style={style.bottomNavigation}>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
          <Feather name="home" size={24} color="black" />
          <Text style={style.navText}>Início</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('PartnersScreen')}>
          <FontAwesome name="handshake-o" size={24} color="black" />
          <Text style={style.navText}>Parcerias</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
          <Feather name="user" size={24} color="black" />
          <Text style={style.navText}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}