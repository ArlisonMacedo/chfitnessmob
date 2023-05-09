import { ImageBackground, Image, Text, TouchableOpacity, View } from "react-native";
import { Barbell } from "phosphor-react-native";
import { useNavigation, CommonActions } from '@react-navigation/native'

import woman_bg from '../../assets/womanbg.jpg'
import { styles } from './styles'

export default function Home() {

    const navigation = useNavigation()

    function clicked() {
        navigation.dispatch(
            CommonActions.navigate({
                name: 'Index'
            })
        )
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={woman_bg} resizeMode='cover' style={styles.imageBg}>
                <View style={styles.top}>
                    <Barbell size={40} color="#FBEF55" />
                    <Text style={styles.topText}>CHFITNESS</Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={styles.subTitle}>App. Para o controle de mesalidade</Text>
                    {/* <Image
                        source={logo}
                        style={styles.logoImg}
                    /> */}
                </View>

                {/* <View style={styles.content}>
                <Text style={styles.textContent}>Acesse sua conta</Text>
                <TextInput placeholder="Usuário" placeholderTextColor={'#7c7c8a'} autoCapitalize="none" style={styles.input} />
                <TextInput placeholder="Senha" placeholderTextColor={'#7c7c8a'} autoCapitalize="none" secureTextEntry style={styles.input} />
            </View> */}

                <View style={styles.footer}>
                    <Text style={styles.footerInitText}>Welcome to</Text>
                    <Text style={styles.footerSecoText}>DASHBODY {"\n"} WORKOUT</Text>
                    <Text style={styles.footerThirText}>Archieve your body goals with us</Text>
                    <TouchableOpacity activeOpacity={0.4} style={styles.button} onPress={clicked}>
                        <Text style={styles.textButton}>Get Started</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>

        </View>
    )
}