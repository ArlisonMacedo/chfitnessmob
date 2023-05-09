import { Text, View } from "react-native";
import Header from "../../components/Header";
import { useEffect, useState } from "react";


import { styles } from "./styles";
import { useRoute } from "@react-navigation/native";
import { api } from "../../services/api";

interface Routes {
    id: string
}

interface User {
    id: string
    name: string
    whatsapp: string
    pushings: [{
        id: string
        day_assin: string
        day_venc: string
        count_day: number
    }]
}

export default function Details() {

    const route = useRoute()
    const { id } = route.params as Routes
    const [user, setUser] = useState({} as User)

    useEffect(() => {

        api.get(`user/pushning/${id}`)
            .then(response => {
                setUser(response.data)
            })

    }, [])
    return (
        <View style={styles.container}>
            <Header />
            <Text>{user.name}</Text>
        </View>
    )
}