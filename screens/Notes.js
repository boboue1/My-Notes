import { View, Text, StyleSheet } from 'react-native';

const Notes = ({ route }) => {
  const { note } = route.params;
  if(!note){
    return(
      <View style={styles.container}>
        <Text style={styles.title}> No notes saved</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{note.title}</Text>
      <Text style={styles.content}>{note.content}</Text>
      <Text style={styles.priority}>Priorité : {note.priority}</Text>
    </View>
  );
};

export default Notes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#114B5F',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 15,
  },
  priority: {
    color: '#FFD166',
    fontSize: 16,
  },
});
