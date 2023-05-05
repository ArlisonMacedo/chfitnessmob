
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './screens/Home'
import Index from './screens/Index'


const { Navigator, Screen } = createNativeStackNavigator()


export default function Routes() {
    return (
        <NavigationContainer>
            <Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName='Home'
            >
                <Screen name='Home' component={Home} />
                <Screen name='Index' component={Index} />
            </Navigator>
        </NavigationContainer>
    )
}