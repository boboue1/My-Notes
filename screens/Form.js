import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Form = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [priority, setPriority] = useState(null);

  const handleSubmit = () => {
    const note = { title, content, priority };
    if(title && content && priority){
      navigation.navigate('Notes', { note }); 
    }else{
      alert('Please tap notes')
    }
    
  };

  return (
    
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={[styles.input, { height: 100 }]}
        placeholder="Content"
        value={content}
        onChangeText={setContent}
        multiline
      />
      <Text style={styles.label}>Priority :</Text>
      <View style={styles.priorities}>
        <TouchableOpacity
          style={[styles.priority, { backgroundColor: '#EF476F' }]}
          onPress={() => setPriority('Urgency')}
        />
        <TouchableOpacity
          style={[styles.priority, { backgroundColor: '#FFD166' }]}
          onPress={() => setPriority('Attended')}
        />
        <TouchableOpacity
          style={[styles.priority, { backgroundColor: '#06D6A0' }]}
          onPress={() => setPriority('Interresting')}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>saved</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#114B5F',
    padding: 20,
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 15,
    borderRadius: 6,
  },
  label: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 8,
  },
  priorities: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  priority: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 12,
    borderWidth: 2,
    borderColor: '#fff',
  },
  button: {
    backgroundColor: '#06D6A0',
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
