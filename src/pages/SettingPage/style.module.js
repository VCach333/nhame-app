import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    settingPage: {
        paddingVertical: 24,
        paddingHorizontal: 30,
    },
    themeContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopWidth: 1,
        borderTopColor: '#777',
        borderBottomWidth: 1,
        borderBottomColor: '#777',
        paddingHorizontal: 18,
        paddingVertical: 24,
    },
    themeContentItem: {
        gap: 6,
        alignItems: 'center',
        /*borderLeftWidth: 1,
        borderLeftColor: '#777'*/
    },
    themeIcon: {
        width: 24,
        height: 24
    },
    themeText: {
        fontSize: 12,
        fontWeight: 500
    },
})

export default styles