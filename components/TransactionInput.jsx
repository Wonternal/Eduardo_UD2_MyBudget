import { Modal, Pressable, StyleSheet, Text, View, TextInput } from "react-native";
import { useState } from "react";
import uuid from "react-native-uuid";

const TransactionInput = ({ showInput, setShowInput, transactionList, setTransactionList }) => {
    const [descriptionValue, setDescriptionValue] = useState("");
    const [importValue, setImportValue] = useState(0);

    return (
        <Modal animationType="fade" transparent={true} visible={showInput}>
            <View style={styles.transactionInputContainer}>
                <View style={styles.inputView}>
                    <View style={styles.closeContainer}>
                        <Pressable style={{ marginTop: 10, marginRight: 25 }} onPress={() => setShowInput(false)}>
                            <Text style={styles.fontSize24}>X</Text>
                        </Pressable>
                    </View>

                    <View style={styles.inputsContainer}>
                        <TextInput style={styles.inputStyles} placeholder="Descripción" onChangeText={(value) => setDescriptionValue(value)}></TextInput>
                        <TextInput
                            style={styles.inputStyles}
                            placeholder="Importe"
                            keyboardType="number-pad"
                            onChangeText={(value) => setImportValue(parseInt(value))}
                        ></TextInput>
                    </View>

                    <View style={styles.btnContainer}>
                        <Pressable
                            style={styles.btnAdd}
                            onPress={() => {
                                setTransactionList([
                                    ...transactionList,
                                    { id: uuid.v4(), description: descriptionValue, importe: importValue, fecha: new Date(Date.now()).toUTCString() },
                                ]);
                                setShowInput(false);
                            }}
                        >
                            <Text>Ingreso</Text>
                        </Pressable>
                        <Pressable
                            style={styles.btnClear}
                            onPress={() => {
                                setTransactionList([
                                    ...transactionList,
                                    {
                                        id: uuid.v4(),
                                        description: descriptionValue,
                                        importe: importValue * -1,
                                        fecha: new Date(Date.now()).toUTCString(),
                                    },
                                ]);
                                setShowInput(false);
                            }}
                        >
                            <Text>Gasto</Text>
                        </Pressable>
                    </View>
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
        height: "25%",
        width: "70%",
        backgroundColor: "silver",
        borderRadius: 10,
    },

    closeContainer: {
        flex: 2,
        alignItems: "flex-end",
        justifyContent: "center",
    },

    inputsContainer: {
        flex: 7,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    },

    inputStyles: {
        backgroundColor: "white",
        width: 120,
        height: 25,
        textAlign: "center",
        borderRadius: 5,
    },

    btnContainer: {
        flex: 3,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "baseline",
    },

    btnClear: {
        backgroundColor: "red",
        height: 30,
        width: 60,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
    },
    btnAdd: {
        backgroundColor: "green",
        height: 30,
        width: 60,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
    },

    fontSize24: {
        fontSize: 24,
        fontWeight: "bold",
    },
});

export default TransactionInput;
