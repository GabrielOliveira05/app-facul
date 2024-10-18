import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import { style } from "../../components/Input/stylesEmpresaScreen";

export default function PartnersScreen() {
  // Dados de exemplo de parceiros
  const partners = [
    {
      id: '1',
      name: 'João Silva',
      contact: '(11) 98765-4321',
      service: 'Designer Gráfico',
      imageUrl: 'https://via.placeholder.com/150', // URL da imagem
    },
    {
      id: '2',
      name: 'Maria Oliveira',
      contact: '(21) 92345-6789',
      service: 'Desenvolvedora Web',
      imageUrl: 'https://via.placeholder.com/150', // URL da imagem
    },
    {
      id: '3',
      name: 'Carlos Almeida',
      contact: '(31) 91234-5678',
      service: 'Consultoria em Marketing',
      imageUrl: 'https://via.placeholder.com/150', // URL da imagem
    },
    // Adicione mais parceiros aqui
  ];

  // Renderizando cada parceiro
  const renderPartner = ({ item }: { item: any }) => (
    <View style={style.partnerCard}>
      <Image source={{ uri: item.imageUrl }} style={style.partnerImage} />
      <View style={style.partnerInfo}>
        <Text style={style.partnerName}>{item.name}</Text>
        <Text style={style.partnerService}>{item.service}</Text>
        <Text style={style.partnerContact}>{item.contact}</Text>
      </View>
    </View>
  );

  return (
    <View style={style.container}>
      <Text style={style.headerTitle}>Parceiros</Text>
      <FlatList
        data={partners}
        renderItem={renderPartner}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}