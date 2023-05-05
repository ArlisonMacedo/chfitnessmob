import { StatusBar } from 'expo-status-bar';
import { View, ActivityIndicator } from 'react-native';
import { Roboto_400Regular, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto'

import Routes from './src/Routes';

export default function App() {

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  })

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#121214' }}>
        <ActivityIndicator size={'large'} />
      </View>
    )
  }

  return (
    <>
      <Routes />
      <StatusBar style="light" translucent />
    </>
  );
}
