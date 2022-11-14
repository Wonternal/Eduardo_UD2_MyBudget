import { Modal, Pressable, StyleSheet, Text, View } from "react-native";

const TransactionInput = ({ showInput, setShowInput }) => {
    return (
        <Modal animationType="fade" transparent={true} visible={showInput}>
            <View style={styles.transactionInputContainer}>
                <View style={styles.inputView}>
                    <Pressable style={styles.btnCancel} onPress={() => setShowInput(false)}>
                        <Text>Cancelar</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    transactionInputContainer: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.7)",
        justifyContent: "center",
        alignItems: "center",
    },
    inputView: {
        height: 250,
        width: 320,
        backgroundColor: "white",
        borderRadius: 10,
    },
    btnCancel: {
        backgroundColor: "red",
        height: 30,
        width: 60,
        borderRadius: 5,
    },
});

export default TransactionInput;
