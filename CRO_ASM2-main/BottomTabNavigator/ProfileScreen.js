import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function ProfileScreen() {
    const navigation = useNavigation();

    const handleEditProfile = () => {
        // Điều hướng đến màn hình chỉnh sửa hồ sơ
        navigation.navigate("EditProfile");
    };

    const handleLogout = () => {
        // Xử lý đăng xuất
        console.log("User logged out");
    };

    return (
        <View style={styles.container}>
            {/* Avatar */}
            <Image
                source={{ uri: "https://via.placeholder.com/100" }} // Thay bằng avatar thực tế
                style={styles.avatar}
            />

            {/* Thông tin người dùng */}
            <Text style={styles.name}>Dương Danh Hoàng</Text>
            <Text style={styles.email}>hoangddpd10772@gmail.com</Text>

            {/* Nút chỉnh sửa */}
            <TouchableOpacity style={styles.editButton} onPress={handleEditProfile}>
                <Text style={styles.editButtonText}>Chỉnh sửa hồ sơ</Text>
            </TouchableOpacity>

            {/* Danh sách tuỳ chọn */}
            <View style={styles.optionsContainer}>
                <TouchableOpacity style={styles.optionItem}>
                    <Text style={styles.optionText}>🛒 Lịch sử mua hàng</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionItem}>
                    <Text style={styles.optionText}>❤️ Mục yêu thích</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionItem}>
                    <Text style={styles.optionText}>⚙️ Cài đặt</Text>
                </TouchableOpacity>
            </View>

            {/* Nút đăng xuất */}
            <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                <Text style={styles.logoutText}>Đăng xuất</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: "center", paddingTop: 50, backgroundColor: "#fff" },
    avatar: { width: 100, height: 100, borderRadius: 50, marginBottom: 10 },
    name: { fontSize: 22, fontWeight: "bold", color: "#333" },
    email: { fontSize: 16, color: "#666", marginBottom: 20 },
    editButton: { backgroundColor: "#ff7f50", padding: 10, borderRadius: 8, marginBottom: 20 },
    editButtonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
    optionsContainer: { width: "100%", paddingHorizontal: 20 },
    optionItem: { paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: "#ddd" },
    optionText: { fontSize: 18, color: "#333" },
    logoutButton: { marginTop: 30, backgroundColor: "#d9534f", padding: 10, borderRadius: 8 },
    logoutText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});
