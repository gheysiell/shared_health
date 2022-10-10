import { View, Text, TouchableOpacity, Share } from 'react-native'
import styles from './style'

const ResultImc = (props) => {
    const onShare = async () => {
        const result = await Share.share({
            message: `Meu IMC hoje é : ${props.resultImc}`
        })
    }

    return (
        <View style={styles.contextImc}>
            <View style={styles.boxSharedButton}>                
                <Text style={styles.titleResultImc}>
                    {props.messageResultImc}
                </Text>
                <Text style={styles.resultImc}>
                    {props.resultImc}
                </Text>
                <TouchableOpacity style={styles.shared} onPress={onShare}>
                    <Text style={styles.sharedText}>
                        Share
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ResultImc