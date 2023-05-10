import { CommonActions, useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View, Text, TextInput, TouchableHighlight, Alert } from "react-native";
import Header from "../../components/Header";
import { api } from "../../services/api";


import { styles } from "./styles";
export default function NewStudy() {

    const [name, setName] = useState<String>('')
    const [whatsapp, setWhatsapp] = useState<String>('')

    const { dispatch } = useNavigation()

    async function handleCreateUser() {

        const data = {
            name, whatsapp
        }
        const response = await api.post('user', data)

        console.log(response.data)

        dispatch(
            CommonActions.navigate('Index')
        )

        Alert.alert('Aluno criado com sucesso!!!', 'Por favor atualize a pagina de alunos')
    }

    return (
        <View style={styles.container}>
            <Header />

            <View style={styles.content}>
                <Text style={styles.title}>
                    Entre com os dados do aluno
                </Text>
                <View style={styles.form}>
                    <Text style={styles.label}>Nome</Text>
                    <TextInput
                        placeholder="Ex. Rana Ribeiro"
                        placeholderTextColor="#c4c4cc"
                        autoCapitalize="words"
                        style={styles.inputText}
                        onChangeText={event => { setName(event) }}
                    />
                    <Text style={styles.label}>WhatsApp</Text>
                    <TextInput
                        keyboardType="numeric"
                        placeholder="Ex. 9898888-2222"
                        placeholderTextColor="#c4c4cc"
                        autoCapitalize="characters"
                        style={styles.inputText}
                        onChangeText={event => { setWhatsapp(event) }}
                    />
                    <TouchableHighlight style={styles.button} activeOpacity={1} underlayColor="#c4c4cc" onPress={handleCreateUser}>
                        <Text style={styles.buttonText}>Cadastrar</Text>
                    </TouchableHighlight>
                </View>
            </View>

        </View>
    )
}