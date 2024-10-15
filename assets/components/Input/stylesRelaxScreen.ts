import { Dimensions, StyleSheet } from 'react-native';
import { themas } from '../../global/themes';

export const style = StyleSheet.create({

    containerRelax: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: themas.colors.secondary,  // Exemplo de cor de fundo
    },
    textTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 80,
        color: themas.colors.primary,
    },
    circle: {
        width: 200,
        height: 200,
        borderRadius: 100,
        backgroundColor: themas.colors.relaxSecondary,
        marginBottom: 50,
    },
    textInstruction: {
        fontSize: 28,
        color: themas.colors.primary,
        fontWeight: 'bold',
        marginBottom: 50,
    },
    buttonRelax: {
        backgroundColor: themas.colors.relaxSecondary,
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 25,
    },
    textButtonRelax: {
        fontSize: 18,
        color: '#FFF',
    },

})