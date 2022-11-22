import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Header from "./components/Header";
import Balance from "./components/Balance";
import Fab from "./components/Fab";
import TransactionInput from "./components/TransactionInput";
import TransactionList from "./components/TransactionList";
import EditModal from "./components/EditModal";

const App = () => {
    const [transactionList, setTransactionList] = useState([]);
    const [showInput, setShowInput] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [editId, setEditId] = useState("");
    let balance = 0;
    transactionList.forEach((transaction) => (balance += transaction.importe));

    const handleOnRemove = (id) => {
        const listaActualizada = transactionList.filter((transaction) => {
            if (transaction.id !== id) {
                return transaction;
            }
        });
        setTransactionList(listaActualizada);
    };

    return (
        <View style={styles.container}>
            <Header />
            <TransactionList transactionList={transactionList} setShowEditModal={setShowEditModal} setEditId={setEditId} handleOnRemove={handleOnRemove} />
            <Balance balance={balance} />
            <Fab setShowInput={setShowInput} />
            <TransactionInput
                style={styles.centeredView}
                showInput={showInput}
                setShowInput={setShowInput}
                transactionList={transactionList}
                setTransactionList={setTransactionList}
            />
            <EditModal
                showEditModal={showEditModal}
                setShowEditModal={setShowEditModal}
                editId={editId}
                transactionList={transactionList}
                setTransactionList={setTransactionList}
            />
            <StatusBar style="hidden" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },

    centeredView: {
        position: "absolute",
        top: "50%",
        left: "50%",
    },
});

export default App;
