import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  appHeader: {
    backgroundColor: '#6d64ff',
    height: 120,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  userName: {
    color: '#6d64ff',
    fontSize: 18,
    fontWeight: 600,
    /* better font family */
  },
  userNameMask: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#fff',
    borderRadius: 24
  },
  iconMask: {
    width: 32,
    height: 32,
    backgroundColor: '#fff',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default styles