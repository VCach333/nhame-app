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
            <Header pageTitle='Perfil' />

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
                            <Text style={styles.profileHealthIMCHeaderText}>IMC</Text>
                        </View>

                        <View style={styles.profileHealthIMCContent}>


                            <View style={styles.profileHealthIMCHeight}>
                                <TouchableOpacity style={styles.profileHealthIMCHeightBtn}>
                                    <Image
                                        source={require('../../../assets/icons/arrow-up.png')}
                                        style={styles.profileHealthIMCHeightIcons}
                                    />
                                </TouchableOpacity>

                                <TextInput
                                    style={styles.profileHealthIMCHeightInput}
                                    placeholder="Seu Peso"
                                />

                                <TouchableOpacity style={styles.profileHealthIMCHeightBtn}>
                                    <Image
                                        source={require('../../../assets/icons/arrow-down.png')}
                                        style={styles.profileHealthIMCHeightIcons}
                                    />
                                </TouchableOpacity>
                            </View>

                            <View style={styles.profileHealthIMCWeight}>
                                <TouchableOpacity style={styles.profileHealthIMCWeightBtn}>
                                    <Image
                                        source={require('../../../assets/icons/arrow-up.png')}
                                        style={styles.profileHealthIMCWeightIcons}
                                    />
                                </TouchableOpacity>

                                <TextInput
                                    style={styles.profileHealthIMCWeightInput}
                                    placeholder="Sua Altura"
                                />

                                <TouchableOpacity style={styles.profileHealthIMCWeightBtn}>
                                    <Image
                                        source={require('../../../assets/icons/arrow-down.png')}
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