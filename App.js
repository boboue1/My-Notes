import { StyleSheet, Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import Home from './screens/Home'; 
import { useFonts } from 'expo-font';
import {
  Montserrat_100Thin,
  Montserrat_600SemiBold,
  Montserrat_100Thin_Italic,
  Montserrat_500Medium_Italic,
  Montserrat_600SemiBold_Italic,
} from '@expo-google-fonts/montserrat';

SplashScreen.preventAutoHideAsync();

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

  return <Home />;
};

export default App;

const styles = StyleSheet.create({});
