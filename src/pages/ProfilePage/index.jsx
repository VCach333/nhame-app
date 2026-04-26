/* hook & utils import */
import { View, Text } from 'react-native'

/* style import */
import styles from './style.module'
import Header from '../../components/Layouts/Header'

export default function ProfilePage() {

    return (

        <>
            <Header />

            <View style={styles.profileContent}>
                <Text>Profile Page</Text>
            </View>

        </>
    )
}