import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    bottomNavigation: {
        width: 300,
        height: 72,
        marginVertical: 12,
        marginHorizontal: 'auto',
        backgroundColor: '#ffff00',
        boxShadow: '0 8px 16px #18ffff1a',
        borderRadius: 50,
        paddingHorizontal: 24,
        paddingVertical: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    bottomNavigationItem: {
        alignItems: 'center'
    },
    bottomNavigationItemIcon: {
        /*width: 32,
        height: 32,
        marginBottom: 3,
        backgroundColor: '#fff',
        borderRadius: '50%',*/
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottomNavigationItemLabel: {
        fontSize: 10,
        fontWeight: 500,
        color: '#333'
    }
})

export default styles