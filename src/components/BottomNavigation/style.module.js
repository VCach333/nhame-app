import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    
    bottomNavigation: {
        width: 240,
        height: 72,
        marginVertical: 12,
        marginHorizontal: 'auto',
        backgroundColor: '#6d64ff',
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
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottomNavigationItemLabel: {
        fontSize: 10,
        fontWeight: 500,
        color: '#fff'
    }
})

export default styles