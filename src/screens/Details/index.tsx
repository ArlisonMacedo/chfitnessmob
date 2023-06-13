import { Image, Text, TouchableOpacity, View, Linking, Modal, Alert, TextInput, Pressable } from "react-native";
import Header from "../../components/Header";
import { CommonActions, useNavigation, useRoute } from "@react-navigation/native";
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

}

interface Pushing {
    id: string
    day_assin: string
    day_venc: string
    count_day: number
    userId: string
}

export default function Details() {

    const route = useRoute()
    const { id } = route.params as Routes
    const [user, setUser] = useState({} as User)
    const [pushing, setPushing] = useState<Pushing[]>([])
    const [modelVisible, setModalVisible] = useState(false)
    const [dayAssin, setDayAssin] = useState('')
    const conditionButton = ['createSignature', 'renew']
    const [labelCondition, setLabelCondition] = useState('')
    const { dispatch } = useNavigation()


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

    async function handleSetDayAssin() {
        const data = {
            day_assin: dayAssin
        }
        const response = await api.post(`pushing/${user.id}`, data)
        console.log(response.data)
        setModalVisible(!modelVisible)
        Alert.alert("Sucesso!", "Assinatura criada com sucesso, pode treina")

        api.get(`user/pushning/${id}`)
            .then(response => {
                setUser(response.data)
                setPushing(response.data.pushings)
            })
    }

    async function handleSetRenewDayAssin() {
        const data = {
            day_assin: dayAssin
        }

        pushing.map(async (push) => {
            if (push.userId === user.id) {
                const response = await api.put(`renew/user/pushing/${push.id}`, data)
                console.log(response.data)
                setModalVisible(!modelVisible)
                Alert.alert("Sucesso!", "Mesalidade atualizada.")
            }
        })

        api.get(`user/pushning/${id}`)
            .then(response => {
                setUser(response.data)
                setPushing(response.data.pushings)
            })


    }

    async function handleDeleteUser(uid: string) {
        // console.log(uid)
        const response = await api.delete(`user/${uid}`)
        console.log(response.data)
        Alert.alert("Sucesso!", "Usuário deletado com sucesso!")
        dispatch(
            CommonActions.navigate('Index')
        )
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
                        !pushing.length ? (
                            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: '20%' }}>
                                <Text style={{ color: '#c4c4cc', fontFamily: 'Nunito_400Regular' }}>Não há informações sobre mensalidade</Text>
                            </View>
                        ) : (
                            pushing.map(pusher => {
                                return (
                                    <View key={pusher.id} style={styles.pushing}>
                                        <Text style={styles.dayAssin}>Dia da assinatura: {dayjs(pusher.day_assin).format('DD/MM/YYYY h:mm: A')}</Text>
                                        <Text style={styles.dayVen}>Dia do vencimento: {dayjs(pusher.day_venc).format('DD/MM/YYYY h:mm: A')}</Text>
                                        <Text style={styles.countDay}>{pusher.count_day === 30 ? (<Text>Mensalidade realizada hoje</Text>) :
                                            (<Text>Faltam {pusher.count_day} dias para o vecimento </Text>)}</Text>
                                        {
                                            pusher.count_day >= 0 ? (
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
                        )
                    }
                </View>

                <View style={styles.footer}>
                    <View style={styles.footerContent}>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modelVisible}
                            onRequestClose={() => {

                                setModalVisible(!modelVisible)
                            }}
                        >
                            <View style={styles.modelView}>
                                <View style={styles.modelContent}>
                                    <Text style={styles.inputText}>INSIRA O DIA</Text>
                                    <TextInput
                                        keyboardType="numeric"
                                        style={styles.inputModal}
                                        onChangeText={event => setDayAssin(event)}
                                    />
                                </View>

                                {
                                    labelCondition === conditionButton[0] ?
                                        (
                                            <Pressable style={styles.modalButton} onPress={() => { handleSetDayAssin() }}>
                                                <Text style={styles.modalButtonText}>Enviar</Text>
                                            </Pressable>

                                        ) :
                                        (
                                            <Pressable style={styles.modalButton} onPress={() => { handleSetRenewDayAssin() }}>
                                                <Text style={styles.modalButtonText}>Enviar</Text>
                                            </Pressable>
                                        )
                                }


                            </View>

                        </Modal>
                        {
                            !pushing.length ? (
                                <TouchableOpacity style={styles.buttonCallRenew} activeOpacity={0.7} onPress={() => { setModalVisible(true), setLabelCondition(conditionButton[0]) }}>
                                    <Text style={styles.buttonCallRenewText}>
                                        Criar assinatura
                                    </Text>
                                </TouchableOpacity>
                            ) :
                                (
                                    <TouchableOpacity style={styles.buttonCallRenew} activeOpacity={0.7} onPress={() => { setModalVisible(true), setLabelCondition(conditionButton[1]) }} >
                                        <Text style={styles.buttonCallRenewText}>
                                            Renovar/Alterar
                                        </Text>
                                    </TouchableOpacity>
                                )
                        }
                        <TouchableOpacity
                            style={styles.buttonDelete}
                            activeOpacity={0.7}
                            onPress={() => handleDeleteUser(user.id)}
                        >
                            <Text style={styles.buttonDeleteText}>Deletar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.buttonCallWhatsapp}
                            activeOpacity={0.7}
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