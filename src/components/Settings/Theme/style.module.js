import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  
    themeContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopWidth: 2,
        borderTopColor: '#d8d8d8',
        borderBottomWidth: 2,
        borderBottomColor: '#d8d8d8',
        paddingHorizontal: 18,
        paddingVertical: 24,
    },
    themeHeader: {
        marginBottom: 12
    },
    themeHeaderText: {
        fontSize: 18,
        fontWeight: 600,
        color: '#333'
    }
})

export default styles