import { Dimensions, StyleSheet } from 'react-native';
import { themas } from '../../global/themes';

export const style = StyleSheet.create({

    containerReading: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5'
    },
    headerReading: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
        textAlign: 'center'
    },
    item: {
        backgroundColor: '#e0e0e0',
        padding: 15,
        borderRadius: 5,
        marginVertical: 8,
    },
    itemTitle: {
        fontSize: 18,
        color: '#007bff',
    }

})