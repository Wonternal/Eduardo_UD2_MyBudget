import { StyleSheet, Text, View } from "react-native";

const TransactionList = ({ transactionList }) => {
    return (
        <View style={styles.transactionListContainer}>
            {transactionList.map((transaction) => {
                return (
                    <Text>
                        {" "}
                        {transaction.description} | {transaction.import}€ | {transaction.fecha}
                    </Text>
                );
            })}
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
