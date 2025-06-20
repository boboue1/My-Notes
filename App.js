import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import Home from './screens/Home'; 
import Form from './screens/Form'; 
import Infos from './screens/Notes'; 


import { useFonts } from 'expo-font';
import {
  Montserrat_100Thin,
  Montserrat_600SemiBold,
  Montserrat_100Thin_Italic,
  Montserrat_500Medium_Italic,
  Montserrat_600SemiBold_Italic,
} from '@expo-google-fonts/montserrat';
import Notes from './screens/Notes';

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

const App = () => {
  const [fontsLoaded] = useFonts({
    Montserrat_100Thin,
    Montserrat_600SemiBold,
    Montserrat_100Thin_Italic,
    Montserrat_500Medium_Italic,
    Montserrat_600SemiBold_Italic,
  });

  if (!fontsLoaded) {
    return null;
  } else {
    SplashScreen.hideAsync();
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Form' component={Form}/>
        <Stack.Screen name='Notes' component={Notes}/>
      </Stack.Navigator>
  </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
