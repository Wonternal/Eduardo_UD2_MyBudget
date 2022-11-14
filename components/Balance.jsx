import { StyleSheet, Text, View } from "react-native";

const Balance = () => {
    return (
        <View style={styles.balanceContainer}>
            <Text>Balance €</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    balanceContainer: {
        flex: 1,
        backgroundColor: "lightgreen",
        justifyContent: "center",
        alignItems: "center",
    },
});

export default Balance;
