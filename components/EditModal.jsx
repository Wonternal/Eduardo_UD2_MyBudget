import { Modal, Pressable, StyleSheet, Text, View, TextInput } from "react-native";
import { useState } from "react";

const EditModal = ({ showEditModal, setShowEditModal, editId, transactionList, setTransactionList }) => {
    return (
        <Modal animationType="fade" transparent={true} visible={showEditModal}>
            <View style={styles.editModalContainer}>
                <View style={styles.inputView}>
                    <Text></Text>
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
});

export default EditModal;
