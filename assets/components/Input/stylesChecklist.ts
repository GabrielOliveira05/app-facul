import { Dimensions, StyleSheet } from 'react-native';
import { themas } from '../../global/themes';

export const style = StyleSheet.create({

    containerTask: {
        flex: 1,
        padding: 60,
        backgroundColor: themas.colors.primary,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    taskContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: themas.colors.secondary,
    },
    checkbox: {
        marginRight: 10,
    },
    taskTitle: {
        fontSize: 18,
        flex: 1,
    },
    completedText: {
        textDecorationLine: 'line-through',
        color: themas.colors.secondary,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        paddingBottom: 10,
    },
    clearButton: {
        backgroundColor: '#C4C4C4',
        padding: 10,
        borderRadius: 5,
        flex: 1,
        marginRight: 5,
    },
    clearButtonText: {
        color: '#FFF',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    saveButton: {
        backgroundColor: themas.colors.secondary,
        padding: 10,
        borderRadius: 5,
        flex: 1,
        marginLeft: 5,
    },
    saveButtonText: {
        color: '#FFF',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
        width: 300,
        padding: 20,
        backgroundColor: '#FFF',
        borderRadius: 10,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'center',
    },
    modalInput: {
        borderWidth: 1,
        borderColor: '#DDD',
        padding: 10,
        marginBottom: 15,
        borderRadius: 5,
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    emptyMessage: {
        textAlign: 'center',
        fontSize: 16,
        color: '#757575',
        marginTop: 20,
    },
    removeButton: {
        paddingLeft: 10,
    },
})