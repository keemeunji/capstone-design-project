import { StyleSheet } from 'react-native';
import COLORS from '../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    marginBottom: 20,
  },
  titleImage: {
    width: 55,
    height: 55,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: COLORS.orange,
  },
  inputContainer: {
    width: '80%',
    alignItems: 'center',
  },
  loginButton: {
    width: '90%',
    marginTop: 22,
    marginBottom: 4,
  },
  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 22,
  },
  signupText: {
    fontSize: 16,
    color: COLORS.black,
  },
  signupLink: {
    fontSize: 16,
    color: COLORS.orange,
    fontWeight: "bold",
    marginLeft: 6,
    marginTop: 1.5,
  },
});
