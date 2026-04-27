/* hook & utils import */
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'

/* style import */
import styles from './style.module'

/* component import */
import Header from '../../components/Layouts/Header'

/* icon import */
//import MaterialCommunityIcons from '@expo/vector-icons'

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
                        <View style={styles.profileUserImgIconEditContent}>
                            <Image
                                source={require('../../../assets/icons/edit.png')}
                                style={styles.profileUserImgIconEdit}
                            />
                        </View>
                    </View>

                    <Text style={styles.profileUserName}>Anair Baptista</Text>

                </View>

                <View style={styles.profileHealth}>

                    <View style={styles.profileHealthIMC}>

                        <View style={styles.profileHealthIMCHeader}>
                            <Text>IMC</Text>
                        </View>

                        <View style={styles.profileHealthIMCContent}>


                            <View style={styles.profileHealthIMCHeight}>
                                <TouchableOpacity style={styles.profileHealthIMCHeightBtn}>
                                    <Image
                                        source={require('../../../assets/icons/home.png')}
                                        style={styles.profileHealthIMCHeightIcons}
                                    />
                                </TouchableOpacity>

                                <TextInput placeholder="Seu Peso" />

                                <TouchableOpacity style={styles.profileHealthIMCHeightBtn}>
                                    <Image
                                        source={require('../../../assets/icons/home.png')}
                                        style={styles.profileHealthIMCHeightIcons}
                                    />
                                </TouchableOpacity>
                            </View>

                            <View style={styles.profileHealthIMCWeight}>
                                <TouchableOpacity style={styles.profileHealthIMCWeightBtn}>
                                    <Image
                                        source={require('../../../assets/icons/home.png')}
                                        style={styles.profileHealthIMCWeightIcons}
                                    />
                                </TouchableOpacity>

                                <TextInput placeholder="Sua Altura" />

                                <TouchableOpacity style={styles.profileHealthIMCWeightBtn}>
                                    <Image
                                        source={require('../../../assets/icons/home.png')}
                                        style={styles.profileHealthIMCWeightIcons}
                                    />
                                </TouchableOpacity>
                            </View>

                        </View>

                    </View>

                </View>

            </View>

        </>
    )
}