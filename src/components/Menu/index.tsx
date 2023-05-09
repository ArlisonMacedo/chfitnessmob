
import { View, TouchableOpacity, Text } from 'react-native'
import { CommonActions, useNavigation } from '@react-navigation/native'

import { styles } from './styles'

export default function Menu() {

    const { dispatch } = useNavigation()

    function handleGoLate() {
        dispatch(
            CommonActions.navigate({
                name: 'Details'
            })
        )
    }
    return (
        <View style={styles.menuTop}>
            <TouchableOpacity style={styles.menuTopButton} activeOpacity={0.7}>
                <Text style={styles.menuTopText}>TODOS</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuTopButton} activeOpacity={0.7} onPress={handleGoLate}>
                <Text style={styles.menuTopText}>ATRASADOS</Text>
            </TouchableOpacity>
        </View>
    )
}