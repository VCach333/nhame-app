/* hook & utils import */
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'

/* style import */
import styles from './style.module'

/* components import */
import Weight from './Weight'
import Height from './Height'

export default function IMC() {

    return (

        <View style={styles.profileHealthIMC}>

            <View style={styles.profileHealthIMCHeader}>
                <Text style={styles.profileHealthIMCHeaderText}>Índice de Massa Corporal</Text>
            </View>

            <View style={styles.profileHealthIMCContent}>

                <Height />

                <Weight />

            </View>

        </View>
    )
}