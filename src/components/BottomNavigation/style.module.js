import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    bottomNavigation: {
        width: 300,
        height: 48,
        marginVertical: 12,
        marginHorizontal: 'auto',
        backgroundColor: '#18ffff',
        boxShadow: '0 8px 16px #18ffff1a',
        borderRadius: 50,
        paddingHorizontal: 12,
        paddingVertical: 6,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    bottomNavigationItem: {
        width: 32,
        height: 32,
        backgroundColor: '#fff',
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default styles