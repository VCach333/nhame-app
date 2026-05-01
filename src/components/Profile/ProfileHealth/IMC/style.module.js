import { StyleSheet } from "react-native"

const styles = StyleSheet.create({

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
})

export default styles