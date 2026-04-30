/* hook & utils import */
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'

/* style import */
import styles from './style.module'

export default function ProfileHealth() {

    return (

        <View style={styles.profileHealth}>

            <View style={styles.profileHealthIMC}>

                <View style={styles.profileHealthIMCHeader}>
                    <Text style={styles.profileHealthIMCHeaderText}>Índice de Massa Corporal</Text>
                </View>

                <View style={styles.profileHealthIMCContent}>

                    <View style={styles.profileHealthIMCHeight}>

                        <Text style={styles.profileHealthIMCHeightLabel}>Altura</Text>

                        <TouchableOpacity style={styles.profileHealthIMCHeightBtn}>
                            <Image
                                source={require('../../../../assets/icons/arrow-up.png')}
                                style={styles.profileHealthIMCHeightIcons}
                            />
                        </TouchableOpacity>

                        <TextInput
                            style={styles.profileHealthIMCHeightInput}
                            placeholder="1.75"
                        />

                        <TouchableOpacity style={styles.profileHealthIMCHeightBtn}>
                            <Image
                                source={require('../../../../assets/icons/arrow-down.png')}
                                style={styles.profileHealthIMCHeightIcons}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.profileHealthIMCWeight}>

                        <Text style={styles.profileHealthIMCWeightLabel}>Peso</Text>

                        <TouchableOpacity style={styles.profileHealthIMCWeightBtn}>
                            <Image
                                source={require('../../../../assets/icons/arrow-up.png')}
                                style={styles.profileHealthIMCWeightIcons}
                            />
                        </TouchableOpacity>

                        <TextInput
                            style={styles.profileHealthIMCWeightInput}
                            placeholder="65"
                        />

                        <TouchableOpacity style={styles.profileHealthIMCWeightBtn}>
                            <Image
                                source={require('../../../../assets/icons/arrow-down.png')}
                                style={styles.profileHealthIMCWeightIcons}
                            />
                        </TouchableOpacity>
                    </View>

                </View>

            </View>

        </View>
    )
}