import { StyleSheet } from 'react-native';

const profileScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
    backgroundColor: '#ffffff',
  },
  profileImageContainer: {
    width: 150,
    height: 150,
    borderRadius: 75,
    overflow: 'hidden',
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  editText: {
    fontSize: 16,
    color: '#007AFF',
    marginTop: 20,
  },
  editingText: {
    color: '#FF3B30',
  },
  logoutText: {
    fontSize: 16,
    color: '#FF3B30',
    marginTop: 20,
  },
});

export default profileScreenStyles;
