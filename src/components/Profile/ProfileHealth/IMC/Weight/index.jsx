/* hook & utils import */
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'

/* style import */
import styles from './style.module'

export default function Weight() {

    return (

        <View style={styles.profileHealthIMCWeight}>

            <Text style={styles.profileHealthIMCWeightLabel}>Peso</Text>

            <TouchableOpacity style={styles.profileHealthIMCWeightBtn}>
                <Image
                    source={require('../../../../../../assets/icons/arrow-up.png')}
                    style={styles.profileHealthIMCWeightIcons}
                />
            </TouchableOpacity>

            <TextInput
                style={styles.profileHealthIMCWeightInput}
                placeholder="65"
            />

            <TouchableOpacity style={styles.profileHealthIMCWeightBtn}>
                <Image
                    source={require('../../../../../../assets/icons/arrow-down.png')}
                    style={styles.profileHealthIMCWeightIcons}
                />
            </TouchableOpacity>
        </View>
    )
}