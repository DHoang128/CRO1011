import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Làm mờ nền để chữ dễ đọc hơn
    },
    title: {
        color: '#fff',
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        color: 'orange',
        fontSize: 14,
        marginBottom: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'rgba(211, 186, 186, 0.8)',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#333',
        marginBottom: 15,
        paddingHorizontal: 10,
    },
    errorBorder: {
        borderColor: 'red',
    },
    input: {
        flex: 1,
        padding: 12,
        color: 'blue',
    },
    eyeIcon: {
        padding: 10,
    },
    button: {
        width: '100%',
        backgroundColor: '#ffecef',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: '#f5b01a',
        fontSize: 16,
        fontWeight: 'bold',
    },
    googleButton: {
        width: '100%',
        backgroundColor: '#ffecef',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10,
    },
    googleButtonText: {
        color: '#f5b01a',
        fontSize: 16,
        fontWeight: 'bold',
    },
    linkText: {
        color: '#008fcb',
        marginTop: 10,
    },
    linkHighlight: {
        color: '#f5b01a',
        fontWeight: 'bold',
    },
    errorText: {
        color: '#008fcb',
        marginBottom: 10,
        fontSize: 14,
    },
});

export default styles;
