
import { View, TouchableOpacity, Text } from 'react-native'

import { styles } from './styles'

export default function Menu() {


    return (
        <View style={styles.menuTop}>
            <TouchableOpacity style={styles.menuTopButton} activeOpacity={0.7}>
                <Text style={styles.menuTopText}>TODOS</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuTopButton} activeOpacity={0.7} >
                <Text style={styles.menuTopText}>ATRASADOS</Text>
            </TouchableOpacity>
        </View>
    )
}