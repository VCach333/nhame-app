/* hook & utils import */
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'

/* style import */
import styles from './style.module'

export default function Weight() {

    return (


        <View style={styles.profileHealthIMCHeight}>

            <Text style={styles.profileHealthIMCHeightLabel}>Altura</Text>

            <TouchableOpacity style={styles.profileHealthIMCHeightBtn}>
                <Image
                    source={require('../../../../../../assets/icons/arrow-up.png')}
                    style={styles.profileHealthIMCHeightIcons}
                />
            </TouchableOpacity>

            <TextInput
                style={styles.profileHealthIMCHeightInput}
                placeholder="1.75"
            />

            <TouchableOpacity style={styles.profileHealthIMCHeightBtn}>
                <Image
                    source={require('../../../../../../assets/icons/arrow-down.png')}
                    style={styles.profileHealthIMCHeightIcons}
                />
            </TouchableOpacity>
        </View>
    )
}