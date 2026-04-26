import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  appHeader: {
    backgroundColor: '#6d64ff',
    height: 124,
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
    width: 30,
    height: 30,
    borderRadius: 50,
    overflow: 'hidden',
    backgroundColor: '#6d64ff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    width: 30,
    height: 30,
  },
  btnSave: {
    backgroundColor: '#33d49e',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 24
  },
  btnSaveText: {
    color: '#333333ab',
    fontWeight: 500
  }
})

export default styles