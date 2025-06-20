import { StyleSheet, Text, View } from 'react-native'

const Notes = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>My Notes</Text>
    </View>
  )
}

export default Notes

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#114B5F',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{
      fontFamily:  'Montserrat_100Thin',
      fontSize: 13,
      color: '#fff',
    }
})