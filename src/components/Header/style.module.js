import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  appHeader: {
    backgroundColor: '#ffff00',
    height: 120,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  userName: {
    fontSize: 24,
    fontWeight: 600,
    /* better font family */
  },
  userNameMask: {

  },
  iconMask: {
    width: 32,
    height: 32,
    backgroundColor: '#333',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default styles