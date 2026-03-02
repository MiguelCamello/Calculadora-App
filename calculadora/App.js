import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.displayContainer}>
        <Text style={styles.displayText} numberOfLines={1}>
          10000
        </Text>
      </View>



      <View style={style.row}>
      <TouchableOpacity style={styles.funcitonButton}>
        <text style={styles.funcitonText}>C</text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.funcitonButton}>
        <text style={styles.funcitonText}>+/-</text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.funcitonButton}>
        <text style={styles.funcitonText}>%</text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.operatorButton}>
        <text style={styles.operatorText}>÷</text>
      </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.buttonNumber}>
        <text style={styles.buttonText}>7</text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonNumber}>
        <text style={styles.buttonText}>8</text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonNumber}>
        <text style={styles.buttonText}>9</text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonNumber}>
        <text style={styles.buttonText}>x</text>
      </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.buttonNumber}>
        <text style={styles.buttonText}>4</text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonNumber}>
        <text style={styles.buttonText}>5</text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonNumber}>
        <text style={styles.buttonText}>6</text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonNumber}>
        <text style={styles.buttonText}>-</text>
      </TouchableOpacity>
      </View>
    
    <View style={styles.row}>
        <TouchableOpacity style={styles.buttonNumber}>
        <text style={styles.buttonText}>1</text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonNumber}>
        <text style={styles.buttonText}>2</text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonNumber}>
        <text style={styles.buttonText}>3</text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonNumber}>
        <text style={styles.buttonText}>+</text>
      </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.buttonNumber, styles.doubleWidthButton}>
        <text style={styles.buttonText}>0</text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonNumber}>
        <text style={styles.buttonText}>.</text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonNumber}>
        <text style={styles.buttonText}>=</text>
      </TouchableOpacity>
      </View>



    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  displayContainer: {
    flex: 2.5,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  displayText: {
    color:'#ffffff',
    fontSize: 72,
    fontWeight: '300'
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  functionButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    borderRadius: 50,
    height: '75%',
    backgroundColor: '#a5a5a5',
  },
  functionText: {
    color: '#0000',
    fontSize: 28,
  },
  oparetorButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    borderRadius: 50,
    height: '75%',
    backgroundColor: '#FF9500',
  },
  operatorText: {
    color: '#ffff',
    fontSize: 21,
  },
  buttonNumber: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    borderRadius: 50,
    height: '75%',
    backgroundColor: '#333333'
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 32,
  },
  doubleWidthButton: {
    flex: 2,
    alignItems: 'flex-start',
    paddingLeft: 32,
  },

});
