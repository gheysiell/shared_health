import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    formContext: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingTop: 30,
    }, 
    form: {
        width: '100%',
        paddingTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    formLabel: {
        color: '#000',
        fontSize: 18,
        paddingLeft: 20,
        width: '95%'
    },
    input: {        
        width: '90%',
        borderRadius: 50,
        backgroundColor: '#f6f6f6',
        height: 40,
        margin: 12,
        paddingLeft: 10,
    },
    buttonCalculator: {
        borderRadius: 50,
        alignItems: 'center'  ,
        justifyContent: 'center',
        width: '90%',
        backgroundColor: "#ff0043",
        paddingTop: 14,
        paddingBottom: 14,
        marginTop: 40,
    },
    textButtonCalculator: {
        fontSize: 20,
        color: "#fff",
    },
    errorMessage: {
        fontSize: 12,
        color: 'red',
        fontWeight: 'bold',
        width: '85%',
    },
    exhibitionResultImc: {
        width: '100%',
        height: '50%',        
    },
    wrapperBtnCalcNovamente: {
        width: '100%',
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    listImcs: {
        marginTop: 20,
    },
    resultImcresultImcItem: {
        fontSize: 24,        
        color: 'red',
        height: 50,
        width: '100%',
    },
    textResultItemList: {
        fontSize: 17,
        color: "red",
    },
})

export default style