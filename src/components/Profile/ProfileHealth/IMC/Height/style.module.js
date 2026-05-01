import { StyleSheet } from "react-native"

const styles = StyleSheet.create({

    profileHealthIMCHeight: {
        alignItems: 'center',
        gap: 12,
        paddingRight: 16,
        borderRightColor: '#f8f8f8',
        borderRightWidth: 2,
    },
    profileHealthIMCHeightLabel: {
        color: '#333',
    },
    profileHealthIMCHeightBtn: {
        width: 42,
        height: 42,
        backgroundColor: '#6d64ffc7',
        borderRadius: 42/2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileHealthIMCHeightIcons: {
        width: 18,
        height: 18,
        filter: 'invert(1)'
    },
    profileHealthIMCHeightInput: {
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