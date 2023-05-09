import { Image, Text, TouchableOpacity, View } from "react-native";
import { SignOut, ArrowLeft } from 'phosphor-react-native'
import { useNavigation } from "@react-navigation/native";



import { styles } from "./styles";
import logo from '../../assets/logo.jpg'

export default function Header() {

    const { goBack } = useNavigation()

    function handleGoBack() {
        goBack()
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity onPress={handleGoBack} activeOpacity={0.9}>

                        <ArrowLeft
                            size={22}
                            color='#c4c4cc'
                            weight="bold"
                        />
                    </TouchableOpacity>
                    <Image
                        source={logo}
                        style={styles.logoImage}
                    />

                    <Text style={styles.iniTitle}>Olá <Text style={styles.title}>Chfitness</Text></Text>


                </View>
                <SignOut size={22} color="#c4c4cc" weight="bold" />
            </View>
        </View>
    )
}