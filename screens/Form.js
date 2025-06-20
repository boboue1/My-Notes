import { StyleSheet, Text, View } from 'react-native'

const Form = () => {
  return (
    <View style={styles.container}>
      <Text>Form</Text>
    </View>
  )
}

export default Form

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'blue',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{

    }
})