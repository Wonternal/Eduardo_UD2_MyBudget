import { StyleSheet, Text, View } from "react-native";

const Fab = () => {
    return (
        <View style={styles.fabContainer}>
            <Text style={styles.textSize}>+</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    fabContainer: {
        height: 50,
        width: 50,
        borderRadius: 30,
        backgroundColor: "blue",
        position: "absolute",
        bottom: 10,
        right: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    textSize: {
        fontSize: 40,
    },
});

export default Fab;
