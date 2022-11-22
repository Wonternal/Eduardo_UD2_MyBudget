import { StyleSheet, Text, View, FlatList, Pressable, Image } from "react-native";

const TransactionList = ({ transactionList, setShowEditModal, setEditId, handleOnRemove }) => {
    return (
        <View style={styles.transactionListContainer}>
            {transactionList.length === 0 ? (
                <View>
                    <Text style={{ marginTop: 5 }}>Aún no se han introducido productos</Text>
                </View>
            ) : (
                <FlatList
                    style={{ width: "100%", padding: 10 }}
                    data={transactionList}
                    renderItem={(transactionData) => {
                        const { id, description, importe, fecha } = transactionData.item;
                        return (
                            <View style={[styles.itemContainer, importe >= 0 ? { backgroundColor: "lightgreen" } : { backgroundColor: "red" }]}>
                                <Text key={id}>
                                    {description} | {importe}€
                                </Text>
                                <Pressable
                                    style={styles.editButton}
                                    onPress={() => {
                                        setEditId(id);
                                        setShowEditModal(true);
                                    }}
                                >
                                    <Image source={require("../assets/pencil.png")} />
                                </Pressable>
                                <Pressable onPress={() => handleOnRemove(id)} style={styles.deleteButton}>
                                    <Image source={require("../assets/trash.png")} />
                                </Pressable>
                            </View>
                        );
                    }}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    transactionListContainer: {
        flex: 5,
        backgroundColor: "grey",
        alignItems: "center",
    },
    itemContainer: {
        height: 80,
        width: "100%",
        backgroundColor: "white",
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        flexDirection: "row",
    },

    editButton: {
        width: 25,
        height: 25,

        marginLeft: 15,
        marginRight: 5,
        borderRadius: 2,
    },

    deleteButton: {
        width: 25,
        height: 25,
        borderRadius: 2,
        marginLeft: 10,
    },
});

export default TransactionList;
