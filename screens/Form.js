import { StyleSheet, Text, View } from 'react-native'
import Formula from './components/Formula'

const Form = () => {
  return (
    <View style={styles.container}>
      <Formula/>
    </View>
  )
}

export default Form

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#114B5F',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{

    }
})