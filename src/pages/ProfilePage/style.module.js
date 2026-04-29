import { StyleSheet } from "react-native"

const styles = StyleSheet.create({

    profileContent: {
        paddingHorizontal: 30,
        paddingVertical: 36
    },
    profileUser: {
        alignItems: 'center'
    },
    profileUserImgContent: {
        width: 200,
        height: 200,
        borderRadius: 100,
        borderColor: '#6d64ff',
        borderWidth: 6,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center'
    },
    profileUserImg: {
        width: 200,
        height: 200,
        borderRadius: 100
    },
    profileUserName: {
        marginTop: 12,
        fontSize: 36,
        fontWeight: 500,
        color: '#6d64ff'
    },
    profileUserImgIconEditContent: {
        position: 'absolute',
        bottom: 3,
        backgroundColor: '#f8f8f83f',
        padding: 6,
        borderRadius: 50
    },
    profileUserImgIconEdit: {
        width: 18,
        height: 18,
        filter: 'invert(1)',
        opacity: .4
    },
    profileHealth: {
        marginTop: 48
    },
    profileHealthIMC: {
        gap: 24,
        backgroundColor: '#ddd',
        paddingHorizontal: 12,
        paddingVertical: 24
    },
    profileHealthIMCHeader: {
        alignItems: 'center'
    },
    profileHealthIMCHeaderText: {
        fontSize: 18,
        fontWeight: 700,
        color: '#777'
    },
    profileHealthIMCContent: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    profileHealthIMCHeight: {
        alignItems: 'center',
        gap: 12,
    },
    profileHealthIMCHeightBtn: {
        width: 42,
        height: 42,
        backgroundColor: '#d8d8d8',
        borderRadius: 42/2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileHealthIMCHeightIcons: {
        width: 18,
        height: 18,
        opacity: .5,
    },
    profileHealthIMCHeightInput: {
        fontSize: 18,
        fontWeight: 500,
        backgroundColor: '#d8d8d8',
        textAlign: 'center',
        width: 120,
        height: 60,
        borderRadius: 60/2
    },
    profileHealthIMCWeight: {
        alignItems: 'center',
        gap: 12,
    },
    profileHealthIMCWeightBtn: {
        width: 42,
        height: 42,
        backgroundColor: '#d8d8d8',
        borderRadius: 42/2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileHealthIMCWeightIcons: {
        width: 18,
        height: 18,
        opacity: .5,
    },
    profileHealthIMCWeightInput: {
        fontSize: 18,
        fontWeight: 500,
        backgroundColor: '#d8d8d8',
        textAlign: 'center',
        width: 120,
        height: 60,
        borderRadius: 60/2
    },
})

export default styles