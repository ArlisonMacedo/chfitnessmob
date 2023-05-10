
import { TouchableOpacity, View, Text, ScrollView, ActivityIndicator } from 'react-native'
import { Barbell, CaretRight, UserPlus, CaretDown } from 'phosphor-react-native'
import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import dayjs from 'dayjs'

import { styles } from './styles'
import Header from '../../components/Header'
import Menu from '../../components/Menu'
import { CommonActions, useNavigation } from '@react-navigation/native'


interface User {
    id: string;
    name: string;
    whatsapp: string;
    pushings: [{
        id: string;
        day_assin: string;
        day_venc: string;
        count_day: number,
    }]
}


export default function Index() {
    const { dispatch } = useNavigation()
    const [users, setUsers] = useState<User[]>([])

    useEffect(() => {
        api.get('user').
            then(response => {
                setUsers(response.data)
            })
    }, [])


    function handleGoDetails(id: string) {
        dispatch(
            CommonActions.navigate('Details', {
                id: id
            })
        )
    }

    function handleGoNewStudy() {
        dispatch(
            CommonActions.navigate('NewStudy')
        )
        console.log('clicou')
    }

    return (
        <View style={styles.container}>
            <Header />

            <Menu />
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', flexGrow: 0.5 }}>
                    <Text style={styles.contentText}>Alunos</Text>

                    <CaretDown size={15} color='#FBEF55' weight='bold' />

                </View>
                <TouchableOpacity onPress={handleGoNewStudy}>

                    <UserPlus color='#FBEF55' size={30} />
                </TouchableOpacity>

            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.content}>


                    {
                        !users.length ?
                            (
                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <ActivityIndicator size={50} color='#fff' />
                                    <Text style={styles.contentText}>Carregando alunos...</Text>
                                </View>
                            ) : (
                                users?.map((user) => {
                                    return (
                                        <TouchableOpacity style={styles.cellButton} activeOpacity={0.7} key={user.id} onPress={() => handleGoDetails(user.id)}>
                                            <View style={{
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                justifyContent: 'space-between'
                                            }}>
                                                <View>
                                                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                                        <Text style={styles.cellButtonName} >{user.name} </Text>
                                                        <Barbell size={16} color='#FBEF55' />
                                                    </View>
                                                    {
                                                        user.pushings.map(push => {
                                                            return (
                                                                <View key={push.id}>
                                                                    <Text style={styles.cellButtonDate}>Dia assin. {'\b'}
                                                                        <Text style={{ fontWeight: 'bold' }}>
                                                                            {dayjs(push.day_assin).format('MM/DD/YYYY h:mm: A')}
                                                                        </Text>
                                                                    </Text>
                                                                    <Text style={styles.cellButtonDate}>Dia venc. {'\b'}
                                                                        <Text style={{ fontWeight: 'bold' }}>
                                                                            {dayjs(push.day_venc).format('MM/DD/YYYY h:mm: A')}
                                                                        </Text>
                                                                    </Text>
                                                                    <Text style={styles.cellButtonCountDays}>Dias ativos {'\b'}
                                                                        <Text style={{ fontWeight: 'bold', color: '#FBEF55' }}>
                                                                            {push.count_day}
                                                                        </Text>
                                                                    </Text>
                                                                </View>

                                                            )
                                                        })
                                                    }
                                                </View>
                                                <CaretRight size={28} color='#c4c4cc' />

                                            </View>
                                        </TouchableOpacity>

                                    )

                                })
                            )
                    }

                    {/* <TouchableOpacity style={styles.cellButton} activeOpacity={0.6}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}>
                            <View>
                                <Text style={styles.cellButtonName} >Arlison Macedo Pereira</Text>
                                <Text style={styles.cellButtonDate}>Dia assin. {'\b'}
                                    <Text style={{ fontWeight: 'bold' }}>22/02/2022</Text>
                                </Text>
                                <Text style={styles.cellButtonCountDays}>Dias 22</Text>
                            </View>
                            <CaretRight size={28} color='#c4c4cc' />

                        </View>
                    </TouchableOpacity> */}



                </View>
            </ScrollView>
        </View>
    )
}