import { Image, Text, TouchableOpacity, View, Linking } from "react-native";
import Header from "../../components/Header";
import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import dayjs from "dayjs";

import { WhatsappLogo } from "phosphor-react-native";
import logo from '../../assets/back.jpg'
import { styles } from "./styles";
interface Routes {
    id: string
}

interface User {
    id: string
    name: string
    whatsapp: string
    pushings: {
        id: string
        day_assin: string
        day_venc: string
        count_day: number
    }
}

interface Pushing {
    id: string
    day_assin: string
    day_venc: string
    count_day: number
}

export default function Details() {

    const route = useRoute()
    const { id } = route.params as Routes
    const [user, setUser] = useState({} as User)
    const [pushing, setPushing] = useState<Pushing[]>([])
    // const [whatsappNum, setWhatsappNum] = useState('')

    useEffect(() => {

        api.get(`user/pushning/${id}`)
            .then(response => {
                setUser(response.data)
                setPushing(response.data.pushings)
            })
    }, [])

    function handleGoCallWahtsapp(whatsapp: string) {
        Linking.openURL(`whatsapp://send?text=Olá, a sua mensalidade está atrasada, por favor regulare-se&phone=+55${whatsapp}`)
    }


    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.content}>
                <Image
                    source={logo}
                    style={styles.logo}
                />

                <View style={styles.profile}>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.userName}>{user.name}</Text>
                        <Text style={styles.userWhatsapp}>WhatsApp: {user.whatsapp ? user.whatsapp : 'sem número'}</Text>
                        <Text style={{ fontFamily: 'Nunito_400Regular', color: '#c4c4cc', fontSize: 18, marginTop: 20, marginLeft: 10 }}>
                            infomações da mensalidade
                        </Text>
                    </View>

                    {
                        pushing.map(pusher => {
                            return (
                                <View key={pusher.id} style={styles.pushing}>
                                    <Text style={styles.dayAssin}>Dia da assinatura: {dayjs(pusher.day_assin).format('DD/MM/YYYY h:mm: A')}</Text>
                                    <Text style={styles.dayVen}>Dia do vencimento: {dayjs(pusher.day_venc).format('DD/MM/YYYY h:mm: A')}</Text>
                                    <Text style={styles.countDay}>Dias usados: {pusher.count_day} Dias </Text>
                                    {
                                        pusher.count_day <= 30 ? (
                                            <TouchableOpacity style={styles.statusV}>
                                                <Text style={styles.statusText}>Regular</Text>
                                            </TouchableOpacity>
                                        ) :
                                            (
                                                <TouchableOpacity style={styles.statusX}>
                                                    <Text style={styles.statusText}>Atrasado</Text>
                                                </TouchableOpacity>
                                            )
                                    }
                                </View>
                            )
                        })
                    }
                </View>

                <View style={styles.footer}>
                    <View style={styles.footerContent}>
                        <TouchableOpacity style={styles.buttonCallRenew}>
                            <Text style={styles.buttonCallRenewText}>
                                Renovar
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.buttonCallWhatsapp}
                            onPress={() => { handleGoCallWahtsapp(user.whatsapp) }}
                        >
                            <Text style={styles.buttonCallWhatsappText}>
                                Chamar
                            </Text>
                            <WhatsappLogo size={27} color='#000' weight="light" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}