import { Image, Text, TouchableOpacity, View } from "react-native";
import Header from "../../components/Header";
import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import dayjs from "dayjs";


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

    useEffect(() => {

        api.get(`user/pushning/${id}`)
            .then(response => {
                setUser(response.data)
                setPushing(response.data.pushings)
            })
    }, [])
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.content}>
                <Image
                    source={logo}
                    style={styles.logo}
                />

                <View style={styles.profile}>
                    <Text style={styles.userName}>{user.name}</Text>
                    <Text style={styles.userWhatsapp}>WhatsApp: {user.whatsapp}</Text>
                    <Text style={{ fontFamily: 'Nunito_400Regular', color: '#c4c4cc', fontSize: 18, marginTop: 20, marginLeft: 10 }}>
                        infomações da mensalidade
                    </Text>

                    {
                        pushing.map(pusher => {
                            return (
                                <View key={pusher.id} style={styles.pushing}>
                                    <Text style={styles.dayAssin}>Dia da assinatura: {dayjs(pusher.day_assin).format('DD/MM/YYYY h:mm: A')}</Text>
                                    <Text style={styles.dayVen}>Dia do vencimento: {dayjs(pusher.day_venc).format('DD/MM/YYYY h:mm: A')}</Text>
                                    <Text style={styles.countDay}>Dias usados: {pusher.count_day} </Text>
                                    {
                                        pusher.count_day <= 30 ? (
                                            <TouchableOpacity>
                                                <Text>Regular</Text>
                                            </TouchableOpacity>
                                        ) :
                                            (
                                                <TouchableOpacity>
                                                    <Text>Atrasado</Text>
                                                </TouchableOpacity>
                                            )
                                    }
                                </View>
                            )
                        })
                    }
                </View>
            </View>
        </View>
    )
}