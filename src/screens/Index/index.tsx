
import { TouchableOpacity, View, Text, ScrollView } from 'react-native'
import { CaretRight } from 'phosphor-react-native'
import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import dayjs from 'dayjs'

import { styles } from './styles'
import Header from '../../components/Header'
import Menu from '../../components/Menu'


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

    const [users, setUsers] = useState<User[]>([])


    useEffect(() => {
        api.get('user').
            then(response => {
                setUsers(response.data)

            })


    }, [])

    return (
        <View style={styles.container}>
            <Header />

            <Menu />

            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.content}>
                    <Text style={styles.contentText}>Alunos</Text>

                    {
                        users?.map((user) => {
                            return (
                                <TouchableOpacity style={styles.cellButton} activeOpacity={0.6} key={user.id}>
                                    <View style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'space-between'
                                    }}>
                                        <View>
                                            <Text style={styles.cellButtonName} >{user.name}</Text>
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
                                                                <Text style={{ fontWeight: 'bold', color: '#fff' }}>
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