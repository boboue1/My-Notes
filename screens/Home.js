import { StyleSheet, Text, View, Button } from 'react-native'
const Home = ({navigation}) => {
  // console.log(props)
   const handlePressY= () =>{
             navigation.push('Notes')
    }
    const handlePress= () =>{
             navigation.push('Form')
    }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
      <Button onPress={handlePressY} title='My Notes'/>
      <Button onPress={handlePress} title='Add notes'/>
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
      color: '#fff',
    }
})