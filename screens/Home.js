import { StyleSheet, Text, View } from 'react-native'

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  )
}

export default Home

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
    }
})