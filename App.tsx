import { StatusBar } from 'expo-status-bar';
import { View, ActivityIndicator } from 'react-native';
import { Nunito_400Regular, Nunito_700Bold, Nunito_900Black, useFonts } from '@expo-google-fonts/nunito'

import Routes from './src/Routes';
import { Toast } from 'react-native-toast-message/lib/src/Toast';

export default function App() {

  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
    Nunito_900Black
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
      <Toast />
    </>
  );
}
