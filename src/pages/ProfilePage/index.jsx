/* hook & utils import */
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'

/* style import */
import styles from './style.module'

/* component import */
import Header from '../../components/Layouts/Header'
import ProfileUser from '../../components/Profile/ProfileUser'
import ProfileHealth from '../../components/Profile/ProfileHealth'

export default function ProfilePage() {

    return (

        <>
            <Header pageTitle='Perfil' />

            <View style={styles.profileContent}>

                <ProfileUser />

                <ProfileHealth />

            </View>

        </>
    )
}