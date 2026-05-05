import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  appContainer: {
    height: '100%',
    justifyContent: 'space-between',
    backgroundColor: '#f8f8f8',
  },
  appMain: {
    flex: 1,
  },
  appBottomNavigation: {
    position: 'absolute',
    bottom: 10,
    backgroundColor: 'red'
  }
})

export default styles