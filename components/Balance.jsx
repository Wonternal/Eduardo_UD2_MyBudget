import { StyleSheet, Text, View } from "react-native";

const Balance = ({ balance }) => {
    return (
        <View style={balance >= 0 ? styles.balanceContainer : [styles.balanceContainer, { backgroundColor: "red" }]}>
            <Text style={styles.fontSize30}>{balance}€</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    balanceContainer: {
        flex: 1,
        backgroundColor: "green",
        justifyContent: "center",
        alignItems: "center",
    },

    fontSize30: {
        fontSize: 30,
    },
});

export default Balance;
