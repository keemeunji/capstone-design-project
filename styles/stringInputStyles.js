import { StyleSheet } from 'react-native';
import COLORS from '../constants/colors';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    marginTop: 15,
    marginBottom: 8,
  },
  inputContainer: {
    width: '100%',
    height: 48,
    borderWidth: 1,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: -10,
    justifyContent: 'center',
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  input: {
    flex: 1,
    fontSize: 14,
  },
  invalidInput: {
    borderColor: 'red',
  },
  errorMessage: {
    marginHorizontal: 4,
    color: 'red',
  },
  successMessage: {
    marginHorizontal: 4,
    color: 'blue',
  },
});
