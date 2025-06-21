import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

const Home = ({ navigation }) => {
  const handlePressY = () => {
    navigation.push('Notes');
  };

  const handlePress = () => {
    navigation.push('Form');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to My Notes</Text>

      <TouchableOpacity style={styles.button} onPress={handlePressY}>
        <Text style={styles.buttonText}>My notes</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Add Notes</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#114B5F',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Montserrat_600SemiBold',

    // padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#06D6A0',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
});
