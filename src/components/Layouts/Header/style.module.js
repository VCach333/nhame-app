import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  appHeader: {
    backgroundColor: '#6d64ff',
    height: 168,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  pageTitle: {
    fontSize: 21,
    fontWeight: 600,
    color: '#fff',
  },
  userName: {
    color: '#6d64ff',
    fontSize: 18,
    fontWeight: 600,
    /* better font family */
  },
  userNameMask: {
    paddingStart: 12,
    paddingEnd: 6,
    paddingVertical: 6,
    backgroundColor: '#fff',
    borderRadius: 24,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6
  },
  iconMask: {
    width: 24,
    height: 24,
    backgroundColor: '#6d64ff',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default styles