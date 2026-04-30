/* hook & utils import */
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'

/* style import */
import styles from './style.module'

export default function ProfileUser() {

    return (
        <View style={styles.profileUser}>

            <View style={styles.profileUserImgContent}>
                <Image
                    source={require('../../../../assets/img/users/ney.png')}
                    style={styles.profileUserImg}
                />
                <View style={styles.profileUserImgIconEditContent}>
                    <Image
                        source={require('../../../../assets/icons/edit.png')}
                        style={styles.profileUserImgIconEdit}
                    />
                </View>
            </View>

            <Text style={styles.profileUserName}>Anair Baptista</Text>

        </View>
    )
}