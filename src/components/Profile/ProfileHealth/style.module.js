import { StyleSheet } from "react-native"

const styles = StyleSheet.create({

    profileHealth: {
        marginTop: 48,
    },
    profileHealthIMC: {
        gap: 24,
        backgroundColor: '#e9e8faff',
        boxShadow: '0 8px 16px #6d64ff3a',
        paddingHorizontal: 12,
        paddingVertical: 24,
        borderRadius: 12,
    },
    profileHealthIMCHeader: {
        alignItems: 'center',
        padding: 6,
        backgroundColor: '#6d64ff',
        borderRadius: 24,
        marginTop: -36
    },
    profileHealthIMCHeaderText: {
        fontSize: 18,
        fontWeight: 700,
        color: '#fff',
    },
    profileHealthIMCContent: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
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