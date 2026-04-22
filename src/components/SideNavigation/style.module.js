import { StyleSheet } from "react-native"

const styles = StyleSheet.create({

    sideNavigationContent: {
        width: 48,
        height: 252,
        backgroundColor: '#e9e8faff',
        boxShadow: '0 6px 12px #6d64ff7a',
        position: 'absolute',
        top: 222,
        right: 6,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 6
    },
    sideNavigationContentItem: {
        alignItems: 'center'
    },
    iconMask: {
        backgroundColor: '#6d64ff',
        width: 36,
        height: 36,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconDesc: {
        fontSize: 9,
        fontWeight: 500
    }
})

export default styles