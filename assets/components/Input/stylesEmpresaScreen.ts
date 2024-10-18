import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({

container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  partnerCard: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    alignItems: 'center',
  },
  partnerImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
  },
  partnerInfo: {
    flex: 1,
  },
  partnerName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  partnerService: {
    fontSize: 16,
    color: '#555',
  },
  partnerContact: {
    fontSize: 14,
    color: '#777',
  },

})