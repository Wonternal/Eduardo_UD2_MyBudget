import { Modal, Pressable, StyleSheet, Text, View, TextInput } from "react-native";
import { useState } from "react";

const EditModal = ({ showEditModal, setShowEditModal, editId, transactionList, setTransactionList, setEditId, getTransactionById }) => {
    const [descriptionValue, setDescriptionValue] = useState("");
    const [importValue, setImportValue] = useState(0);

    const handleOnAdd = () => {
        let transactionListEdited = transactionList.map((transaction) => {
            if (transaction.id === editId) {
                transaction.description = descriptionValue;
                transaction.importe = importValue;
            }
            return transaction;
        });
        setTransactionList(transactionListEdited);
        setShowEditModal(false);
        setDescriptionValue("");
        setImportValue(0);
        setEditId("");
    };

    const handleOnClear = () => {
        let transactionListEdited = transactionList.map((transaction) => {
            if (transaction.id === editId) {
                transaction.description = descriptionValue;
                transaction.importe = importValue * -1;
            }
            return transaction;
        });
        setTransactionList(transactionListEdited);
        setShowEditModal(false);
        setDescriptionValue("");
        setImportValue(0);
        setEditId("");
    };

    return (
        <Modal animationType="fade" transparent={true} visible={showEditModal}>
            <View style={styles.editModalContainer}>
                <View style={styles.inputView}>
                    <View style={styles.closeContainer}>
                        <Pressable
                            style={{ marginTop: 10, marginRight: 25 }}
                            onPress={() => {
                                setShowEditModal(false);
                                setEditId("");
                            }}
                        >
                            <Text style={styles.fontSize24}>X</Text>
                        </Pressable>
                    </View>

                    <View style={styles.inputsContainer}>
                        <TextInput
                            style={styles.inputStyles}
                            placeholder={getTransactionById(editId).description}
                            onChangeText={(value) => setDescriptionValue(value)}
                        ></TextInput>
                        <TextInput
                            style={styles.inputStyles}
                            placeholder={getTransactionById(editId).importe.toString()}
                            keyboardType="decimal-pad"
                            onChangeText={(value) => setImportValue(parseFloat(value.replace(",", ".")))}
                        ></TextInput>
                    </View>

                    <View style={styles.btnContainer}>
                        <Pressable
                            style={styles.btnAdd}
                            onPress={() => {
                                handleOnAdd();
                            }}
                        >
                            <Text>Ingreso</Text>
                        </Pressable>
                        <Pressable
                            style={styles.btnClear}
                            onPress={() => {
                                handleOnClear();
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
    editModalContainer: {
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
    whiteText: {
        color: "white",
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

export default EditModal;
