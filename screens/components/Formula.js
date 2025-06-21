// import React, { useState } from 'react';
// import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';

// const Formula = ({ navigation }) => {
//   const [title, setTitle] = useState('');
//   const [content, setContent] = useState('');
//   const [priority, setPriority] = useState(null);

//   const handleSubmit = () => {
//     const note = { title, content, priority };
//     navigation.navigate('Notes', { note }); // On envoie la note à l'écran Notes
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeholder="Titre"
//         value={title}
//         onChangeText={setTitle}
//       />
//       <TextInput
//         style={[styles.input, { height: 100 }]}
//         placeholder="Contenu"
//         value={content}
//         onChangeText={setContent}
//         multiline
//       />
//       <Text style={styles.label}>Priorité :</Text>
//       <View style={styles.priorities}>
//         <TouchableOpacity
//           style={[styles.priority, { backgroundColor: '#EF476F' }]}
//           onPress={() => setPriority('Important')}
//         />
//         <TouchableOpacity
//           style={[styles.priority, { backgroundColor: '#FFD166' }]}
//           onPress={() => setPriority('Normal')}
//         />
//         <TouchableOpacity
//           style={[styles.priority, { backgroundColor: '#06D6A0' }]}
//           onPress={() => setPriority('Pense-bête')}
//         />
//       </View>

//       <TouchableOpacity style={styles.button} onPress={handleSubmit}>
//         <Text style={styles.buttonText}>Créer la note</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default Formula;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#114B5F',
//     padding: 20,
//   },
//   input: {
//     backgroundColor: '#fff',
//     padding: 10,
//     marginBottom: 15,
//     borderRadius: 6,
//   },
//   label: {
//     color: '#fff',
//     fontSize: 16,
//     marginBottom: 8,
//   },
//   priorities: {
//     flexDirection: 'row',
//     marginBottom: 20,
//   },
//   priority: {
//     width: 30,
//     height: 30,
//     borderRadius: 15,
//     marginRight: 12,
//     borderWidth: 2,
//     borderColor: '#fff',
//   },
//   button: {
//     backgroundColor: '#06D6A0',
//     padding: 12,
//     borderRadius: 6,
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
// });
