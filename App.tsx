import { StatusBar } from 'react-native';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import { theme } from './src/assets/theme';
import { HomeScreen } from './src/screens';
import { Loading } from './src/Components/Loading';

export default function App() {

 const [fontsLoaded] = useFonts({
   Inter_400Regular,
   Inter_700Bold
 })

  return (
    <>
      {fontsLoaded ? <HomeScreen/> : <Loading/>}
      <StatusBar 
      barStyle="light-content" 
      backgroundColor={'transparent'}
      translucent 
      /> 
    </>
  );
}
