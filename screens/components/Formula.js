import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, {useState} from 'react'

const Formula = () => {

    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [content, setContent] = useState('');
    
    const handleSubmit = ()=>{
        console.log({title, date, content});
    }

  return (
    <View>
        <TextInput 
          style={styles.input}
        placeholder='Title'
        value={title}
        onChangeText={setTitle}
        />
          <TextInput 
          style={styles.input}
        placeholder='Date of création'
        value={date}
        onChangeText={setDate}
        />
          <TextInput 
          style={[styles.input, {height: 100}]}
        placeholder='Content'
        value={content}
        onChangeText={setContent}
        />
      <Text>Priority</Text>
      <View>

      </View>
      <Button title='Add notes' onPress={handleSubmit}/>

    </View>
  )
}

export default Formula

const styles = StyleSheet.create({
     input: {
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 12,
    borderRadius: 6,
  },
  label: {
    color: '#fff',
    marginBottom: 5,
    fontSize: 16,
  },
}
)