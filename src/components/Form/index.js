import { useState } from 'react'
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Vibration,
    Pressable,
    FlatList,
} from 'react-native'
import ResultImc from './ResultImc'
import styles from './style'

const Form = () => {
    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState("preencha o peso e altura")
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")
    const [errorMessage, setErrorMessage] = useState(null)
    const [imcList, setImcList] = useState([])

    function imcCalculator() {
        let heightFormat = height.replace(",", ".")
        let totalImc = (weight / (heightFormat * heightFormat)).toFixed()
        setImcList(arr => [...arr, { id: new Date().getTime(), imc: totalImc }])
        setImc(totalImc)
    }

    function verificationImc() {
        if (imc == null) {
            Vibration.vibrate()
            setErrorMessage("Campo obrigatório*")
        }
    }

    function validationImc() {
        if (weight != null && height != null) {
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageImc("Seu imc é igual:")
            setTextButton("Calcular Novamente")
            setErrorMessage(null)
        } else {
            verificationImc()
            setImc(null)
            setTextButton("Calcular")
            setMessageImc("Preecha o peso e altura.")
        }
    }

    return (
        <View style={styles.formContext}>
            {imc == null ?
                <Pressable style={styles.form}>
                    <Text
                        style={styles.formLabel}
                    >Altura</Text>
                    <Text style={styles.errorMessage}>
                        {errorMessage}
                    </Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setHeight}
                        value={height}
                        placeholder='EX.: 1.75'
                        keyboardType='numeric'
                    />
                    <Text
                        style={styles.formLabel}
                    >Peso</Text>
                    <Text style={styles.errorMessage}>
                        {errorMessage}
                    </Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setWeight}
                        value={weight}
                        placeholder='EX.: 75.365'
                        keyboardType='numeric'
                    />
                    <TouchableOpacity
                        style={styles.buttonCalculator}
                        onPress={() => {
                            validationImc()
                        }}
                    >
                        <Text style={styles.textButtonCalculator}>
                            {textButton}
                        </Text>
                    </TouchableOpacity>
                </Pressable>
                :
                <View style={styles.exhibitionResultImc}>
                    <ResultImc messageResultImc={messageImc} resultImc={imc} />
                    <View style={styles.wrapperBtnCalcNovamente}>
                        <TouchableOpacity
                            style={styles.buttonCalculator}
                            onPress={() => { validationImc() }}
                        >
                            <Text style={styles.textButtonCalculator}>
                                {textButton}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            }
            <FlatList
                showsVerticalScrollIndicator={false}
                style={styles.listImcs}
                data={imcList}
                renderItem={({ item }) => {
                    return (
                        <Text style={styles.resultImcItem}>
                            <Text style={styles.textResultItemList}>
                                Resultado IMC =
                            </Text>
                            <Text style={styles.resultImcresultImcItem}>
                                {" "+item.imc}
                            </Text>
                        </Text>
                    )
                }}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default Form