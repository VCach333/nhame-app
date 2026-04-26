/* hook & utils import */
import { View, Text, Image } from 'react-native'

/* style import */
import styles from './style.module'

/* component import */
import Header from '../../components/Layouts/Header'

export default function ProfilePage() {

    return (

        <>
            <Header />

            <View style={styles.profileContent}>

                <View style={styles.profileUser}>

                    <View style={styles.profileUserImgContent}>
                        <Image
                            source={require('../../../assets/img/users/ney.png')}
                            style={styles.profileUserImg}
                        />
                        {/* <Image
                            source={require('../../../assets/img/users/ney.png')}
                            style={styles.profileUserImgIconEdit}
                        /> */}
                    </View>

                    <Text style={styles.profileUserName}>Anair Baptista</Text>

                </View>

            </View>

        </>
    )
}