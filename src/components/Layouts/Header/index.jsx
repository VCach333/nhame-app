/* hooks & utils import */
import { View, Text, TouchableOpacity, Image } from 'react-native'

/* styles import */
import styles from './style.module'

/* icon import */
//import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function Header({ pageTitle }) {

    return (
        <View style={styles.appHeader}>

            <View>
                <Text style={styles.pageTitle}>{pageTitle}</Text>
            </View>

            {pageTitle == 'Ajustes'
                ?
                <TouchableOpacity style={styles.btnSave}>
                    <Text style={styles.btnSaveText}>Salvar</Text>
                </TouchableOpacity>
                :
                <View style={styles.userNameMask}>
                    <Text style={styles.userName}>Anair Maria</Text>

                    <View style={styles.iconMask}>
                        {/* <MaterialCommunityIcons name='account-outline' size={18} color='#fff' /> */}
                        <Image
                            style={styles.icon}
                            source={require('../../../../assets/icons/user.png')}
                        />
                    </View>
                </View>
            }

        </View>
    )
}