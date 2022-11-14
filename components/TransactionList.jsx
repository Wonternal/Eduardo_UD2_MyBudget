import { StyleSheet, Text, View } from "react-native";

const TransactionList = () => {
    return (
        <View style={styles.transactionListContainer}>
            <Text>Lista de transacciones</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    transactionListContainer: {
        flex: 5,
        backgroundColor: "grey",
        alignItems: "center",
    },
});

export default TransactionList;
