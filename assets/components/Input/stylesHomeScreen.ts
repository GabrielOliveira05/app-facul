import { Dimensions, StyleSheet } from 'react-native';
import { themas } from '../../global/themes';

export const style = StyleSheet.create({

  containerMenu: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f2f2f2',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  titleMenu: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonMenu: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00bfff',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 10,
  },
  summarySection: {
    marginTop: 20,
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  summaryBoxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  summaryBox: {
    width: '45%',
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  summaryText: {
    fontSize: 16,
    color: '#333',
  },
  summaryNumber: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#00bfff',
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    padding: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  navText: {
    fontSize: 12,
    marginTop: 5,
    textAlign: 'center',
  },

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

