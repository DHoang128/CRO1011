import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        width: '90%',
        padding: 20,
        backgroundColor: 'rgba(58, 178, 214, 0.7)',
        borderRadius: 10,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#f5b01a',
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        color: '#ff8780',
        textAlign: 'center',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        backgroundColor: '#222',
        color: 'white', // ✅ Giữ màu chữ nhập vào là trắng
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    datePickerButton: {
        width: '100%',
        backgroundColor: '#222',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10,
    },
    datePickerText: {
        color: '#fff',
    },
    label: {
        fontSize: 16,
        color: '#fff',
        textAlign: 'center',
        marginBottom: 5,
    },

    genderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        width: '100%',
    },

    genderButton: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 10,
    },

    genderText: {
        fontSize: 12,
        color: '#fff',
    },

    selectedGender: {
        color: 'orange',
        fontWeight: 'bold',
    },

    button: {
        backgroundColor: '#f5b01a',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    linkText: {
        color: '#aaa',
        textAlign: 'center',
        marginTop: 10,
    },
    linkHighlight: {
        color: '#fcffd6',
        fontWeight: 'bold',
    },
});
