
import { CommonActions, useNavigation } from '@react-navigation/native'
import { View, TouchableOpacity, Text } from 'react-native'

import { styles } from './styles'

export default function Menu() {

    const { dispatch } = useNavigation()

    function handleGotoIndex() {
        dispatch(
            CommonActions.navigate('Index')
        )
    }
    function handleGotoLate() {
        dispatch(
            CommonActions.navigate('Late')
        )
    }

    return (
        <View style={styles.menuTop}>
            <TouchableOpacity style={styles.menuTopButton} activeOpacity={0.7} onPress={handleGotoIndex}>
                <Text style={styles.menuTopText}>TODOS</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuTopButton} activeOpacity={0.7} onPress={handleGotoLate} >
                <Text style={styles.menuTopText}>ATRASADOS</Text>
            </TouchableOpacity>
        </View>
    )
}