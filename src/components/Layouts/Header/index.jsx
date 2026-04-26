/* hooks & utils import */
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'

/* styles import */
import styles from './style.module'

export default function Header({ pageTitle }) {

    const navigation = useNavigation()

    return (
        <View style={styles.appHeader}>

            <View>
                <Text style={styles.pageTitle}>{pageTitle ? pageTitle : 'Perfil'}</Text>
            </View>

            {pageTitle == 'Ajustes'
                ?
                <TouchableOpacity style={styles.btnSave}>
                    <Text style={styles.btnSaveText}>Salvar</Text>
                </TouchableOpacity>
                :
                <TouchableOpacity
                    style={styles.userNameMask}
                    onPress={() => {navigation.navigate('profile')}}
                >
                    <Text style={styles.userName}>Anair Maria</Text>

                    <View style={styles.iconMask}>
                        <Image
                            style={styles.icon}
                            source={require('../../../../assets/icons/user.png')}
                        />
                    </View>
                </TouchableOpacity>
            }

        </View>
    )
}