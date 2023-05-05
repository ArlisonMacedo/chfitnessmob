import { Image, Text, View } from "react-native";
import { SignOut } from 'phosphor-react-native'

import { styles } from "./styles";
import logo from '../../assets/logo.jpg'

export default function Header() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                        source={logo}
                        style={styles.logoImage}
                    />
                    <Text style={styles.title}>Chfitness</Text>

                </View>
                <SignOut size={22} color="#c4c4cc" weight="bold" />
            </View>
        </View>
    )
}