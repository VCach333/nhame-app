import { StyleSheet } from "react-native"

const styles = StyleSheet.create({

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
    }
})

export default styles