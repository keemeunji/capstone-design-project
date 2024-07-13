import { StyleSheet } from 'react-native';

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  bubble: {
    position: 'absolute',
    backgroundColor: 'orange',
    padding: 15,
    borderRadius: 15,
    alignSelf: 'center',
    marginTop: -80,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  bubbleContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bubbleText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  bubbleTail: {
    position: 'absolute',
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 15,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#FCAE1E',
    bottom: -15,
    left: '50%',
    marginLeft: -10,
  },
});