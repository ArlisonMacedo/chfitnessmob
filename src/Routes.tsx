
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './screens/Home'
import Index from './screens/Index'
import Details from './screens/Details'
import NewStudy from './screens/NewStudy'
import Late from './screens/Late'


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
                <Screen name='Details' component={Details} />
                <Screen name='NewStudy' component={NewStudy} />
                <Screen name='Late' component={Late} />
            </Navigator>
        </NavigationContainer>
    )
}