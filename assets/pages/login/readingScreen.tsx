import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Linking, StyleSheet } from 'react-native';
import { style } from "../../components/Input/stylesReadingScreen";

export default function ReadingScreen() {
    const resources = [
        { id: '1', title: 'Introdução ao JavaScript', link: 'https://tse2.mm.bing.net/th?id=OIP.qQDgUP_imfPJZfqlrT_taAHaHa&pid=Api&P=0&h=180' },
        { id: '2', title: 'React Native Documentation', link: 'https://reactnative.dev/docs/getting-started' },
        { id: '3', title: 'Clean Code - Livro', link: 'https://www.devmedia.com.br/livro-clean-code/18588' },
        { id: '4', title: 'Estruturas de Dados e Algoritmos', link: 'https://www.ime.usp.br/~pf/algoritmos/' },
        { id: '5', title: 'Python para Iniciantes', link: 'https://python.org.br/introducao/' }
    ];

    const renderItem = ({ item }: any) => (
        <TouchableOpacity style={style.item} onPress={() => Linking.openURL(item.link)}>
            <Text style={style.itemTitle}>{item.title}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={style.containerReading}>
            <Text style={style.headerReading}>Artigos e Livros Gratuitos</Text>
            <FlatList
                data={resources}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
}