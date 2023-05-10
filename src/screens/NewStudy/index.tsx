import { View, Text, TextInput, TouchableHighlight } from "react-native";
import Header from "../../components/Header";


import { styles } from "./styles";
export default function NewStudy() {
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
                    />
                    <Text style={styles.label}>WhatsApp</Text>
                    <TextInput
                        keyboardType="numeric"
                        placeholder="Ex. 9898888-2222"
                        placeholderTextColor="#c4c4cc"
                        autoCapitalize="characters"
                        style={styles.inputText}
                    />
                    <TouchableHighlight style={styles.button} activeOpacity={1} underlayColor="#c4c4cc" onPress={() => alert('Pressed')}>
                        <Text style={styles.buttonText}>Cadastrar</Text>
                    </TouchableHighlight>
                </View>
            </View>

        </View>
    )
}