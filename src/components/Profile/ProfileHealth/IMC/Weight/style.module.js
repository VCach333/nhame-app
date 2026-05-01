import { StyleSheet } from "react-native"

const styles = StyleSheet.create({

    profileHealthIMCWeight: {
        alignItems: 'center',
        gap: 12,
        paddingLeft: 16
    },
    profileHealthIMCWeightLabel: {
        color: '#333',
    },
    profileHealthIMCWeightBtn: {
        width: 42,
        height: 42,
        backgroundColor: '#6d64ffc7',
        borderRadius: 42/2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileHealthIMCWeightIcons: {
        width: 18,
        height: 18,
        filter: 'invert(1)'
    },
    profileHealthIMCWeightInput: {
        fontSize: 18,
        fontWeight: 500,
        backgroundColor: '#f2f2f2',
        textAlign: 'center',
        width: 120,
        height: 60,
        borderRadius: 60/2
    },
})

export default styles