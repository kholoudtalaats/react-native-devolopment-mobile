import { StyleSheet, View, Text } from "react-native";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        },
    input: {
        paddingHorizontal: 35,
        paddingVertical: 5,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#000',
        marginTop: 10,
         },
    button: {
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 30,
        paddingVertical: 5,
        backgroundColor: '#d8d8d8',
        borderColor: '#dadae8',
    },
    button2: {
        marginTop: 10,
        paddingVertical: 5,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#dadae8',
        marginBottom: 5,
        backgroundColor: '#d8d8d8',

    },
    textButton: {
        textAlign: 'center',
    },
    textSignIn: {
        fontSize: 25,
    },
});
export default styles;