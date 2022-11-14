import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Header from './components/Header';
import Balance from './components/Balance';
import Fab from './components/Fab';
import TransactionInput from './components/TransactionInput';
import TransactionList from './components/TransactionList';

const App = () => {
  return (

    <View style={styles.container}>

      <Header/>
      <TransactionList/>
      <Balance/>
      <Fab/>
      <StatusBar style="light"/>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});

export default App;