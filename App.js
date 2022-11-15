import { useState } from 'react'; 
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Header from './components/Header';
import Balance from './components/Balance';
import Fab from './components/Fab';
import TransactionInput from './components/TransactionInput';
import TransactionList from './components/TransactionList';

const App = () => {
  const [transactionList, setTransactionList] = useState([])
  const [showInput, setShowInput] = useState(false)
  let balance = 0;
  transactionList.forEach((transaction) => balance += transaction.import)

  return (

    <View style={styles.container}>

      <Header/>
      <TransactionList transactionList={transactionList}/>
      <Balance balance={balance}/>
      <Fab setShowInput={setShowInput}/>
      <StatusBar style="hidden"/>
      <TransactionInput style={styles.centeredView} showInput={showInput} setShowInput={setShowInput} transactionList={transactionList} setTransactionList={setTransactionList}/>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  
  centeredView: {
    position: "absolute",
    top: "50%",
    left: "50%",
  }
});

export default App;