import { useEffect, useState } from "react";
import { View, ActivityIndicator, Text, TouchableOpacity, ScrollView } from "react-native";
import { Barbell, CaretRight } from "phosphor-react-native";
import dayjs from "dayjs";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import { api } from "../../services/api";



import { styles } from "./styles";
import { useNavigation, CommonActions } from "@react-navigation/native";

interface User {
  id: string;

  day_assin: string;
  day_venc: string;
  count_day: number
  user: {
    id: string;
    name: string;
    whatsapp: string,
  }
}
export default function Late() {

  const [pushing, setPushing] = useState<User[]>([])
  const { dispatch } = useNavigation()

  useEffect(() => {
    api.get('pushing/expired')
      .then(response => {
        setPushing(response.data)
      })
    console.log(pushing)
  }, [])

  function handleGoDetails(id: string) {
    dispatch(
      CommonActions.navigate('Details', {
        id: id
      })
    )
  }


  return (
    <View style={styles.container}>
      <Header />
      <Menu />

      <ScrollView >


        <View style={styles.content}>


          {
            !pushing.length ?
              (
                <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                  {/* <ActivityIndicator size={50} color='#fff' /> */}
                  <Text style={styles.contentText}>Não há alunos em débitos</Text>
                </View>
              ) : (
                pushing.map((push) => {
                  return (
                    <TouchableOpacity style={styles.cellButton} activeOpacity={0.7} key={push.id} onPress={() => handleGoDetails(push.user.id)}>
                      <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                      }}>
                        <View>
                          <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                            <View style={{ flexDirection: 'column' }}>

                              <TouchableOpacity style={styles.cellButtonTouch} activeOpacity={0.9}>
                                <Text style={styles.cellButtonTitle}>Vencido</Text>
                              </TouchableOpacity>
                              <Text style={styles.cellButtonName}>
                                {push.user.name}
                                <Barbell size={16} color='#FBEF55' />
                              </Text>

                              {/* <Barbell size={16} color='#FBEF55' /> */}
                              <Text style={styles.cellButtonDate}>Dia assin. {' '}
                                <Text style={{ fontWeight: 'bold' }}>
                                  {dayjs(push.day_assin).format('DD/MM/YYYY h:mm: A')}
                                </Text>
                              </Text>
                              <Text style={styles.cellButtonDate}>Dia venc. {' '}
                                <Text style={{ fontWeight: 'bold' }}>
                                  {dayjs(push.day_venc).format('DD/MM/YYYY h:mm: A')}
                                </Text>
                              </Text>
                              <Text style={styles.cellButtonCountDays}>Dias atrasados {' '}
                                <Text style={{ fontWeight: 'bold', color: '#FBEF55' }}>
                                  {push.count_day}
                                </Text>
                              </Text>
                            </View>
                          </View>

                        </View>
                        <CaretRight size={28} color='#c4c4cc' />

                      </View>
                    </TouchableOpacity>

                  )

                })
              )
          }
        </View>
      </ScrollView>
    </View>
  )
}