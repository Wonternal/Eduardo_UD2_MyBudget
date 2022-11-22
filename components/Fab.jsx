import { Pressable, StyleSheet, Text, View } from "react-native";

const Fab = ({ setShowInput }) => {
    return (
        <Pressable style={styles.fabContainer} onPress={() => setShowInput(true)}>
            <Text style={styles.textSize}>+</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    fabContainer: {
        height: 70,
        width: 70,
        borderRadius: 50,
        backgroundColor: "black",
        position: "absolute",
        bottom: 15,
        right: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    textSize: {
        fontSize: 40,
        color: "white",
    },
});

export default Fab;
