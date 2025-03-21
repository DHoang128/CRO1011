import React, { useState, useEffect, useRef } from 'react';
import {
    View, Text, TextInput, FlatList, Image, TouchableOpacity,
    ActivityIndicator, SafeAreaView, Dimensions
} from 'react-native';
import axios from 'axios';
import styles from './styles'; // Import file styles
import ProductDetail from './ProductDetail/ProductDetail';


const API_URL = 'http://172.16.53.162:5000'; // Đổi thành IP backend của bạn

const banners = [
    { id: 1, image: 'https://bizweb.dktcdn.net/100/378/907/themes/754099/assets/slider_4.jpg?1628222565520' },
    { id: 2, image: 'https://c.wallhere.com/photos/2d/58/doge_memes_face_dog-28574.jpg!d' },
    { id: 3, image: 'https://vanchuyenchomeo.com/wp-content/uploads/2020/03/10.png' },
    { id: 4, image: 'https://supremefood.vn/wp-content/uploads/2023/03/banner-2-1.jpg' },
    { id: 5, image: 'https://bizweb.dktcdn.net/100/492/700/files/banner-phu-kien-cho-meo.jpg?v=1720409785259' },
];

const HomeScreen = ({ navigation }) => {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(true);
    const [bannerIndex, setBannerIndex] = useState(0);

    const bannerRef = useRef(null);
    const screenWidth = Dimensions.get('window').width;

    useEffect(() => {
        fetchCategories();
        fetchProducts();
        startBannerAutoScroll();
    }, []);

    const fetchCategories = async () => {
        try {
            const response = await axios.get(`${API_URL}/categories`);
            setCategories(response.data);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    const fetchProducts = async () => {
        try {
            const response = await axios.get(`${API_URL}/products`);
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = () => {
        setLoading(true);
        const filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setProducts(filteredProducts);
        setLoading(false);
    };

    // Tự động chuyển banner sau 10 giây
    const startBannerAutoScroll = () => {
        setInterval(() => {
            setBannerIndex((prevIndex) => {
                let nextIndex = (prevIndex + 1) % banners.length;
                bannerRef.current?.scrollToIndex({ index: nextIndex, animated: true });
                return nextIndex;
            });
        }, 10000);
    };

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={products}
                keyExtractor={(item) => item.id.toString()}
                ListHeaderComponent={
                    <>
                        {/* Thanh tìm kiếm */}
                        <View style={styles.searchContainer}>
                            <TextInput
                                style={styles.searchInput}
                                placeholder="Tìm kiếm sản phẩm..."
                                value={searchQuery}
                                onChangeText={setSearchQuery}
                                onSubmitEditing={handleSearch}
                            />
                        </View>

                        {/* Banner quảng cáo */}
                        <FlatList
                            ref={bannerRef}
                            data={banners}
                            keyExtractor={(item) => item.id.toString()}
                            horizontal
                            pagingEnabled
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item }) => (
                                <View style={styles.bannerContainer}>
                                    <Image source={{ uri: item.image }} style={styles.bannerImage} resizeMode="contain" />
                                </View>
                            )}
                        />

                        {/* Danh mục sản phẩm */}
                        <Text style={styles.sectionTitle}>Khám phá danh mục</Text>
                        <FlatList
                            data={categories}
                            keyExtractor={(item) => item.id.toString()}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={styles.categoryList}
                            renderItem={({ item }) => (
                                <TouchableOpacity style={styles.categoryItem}>
                                    <Image source={{ uri: item.image }} style={styles.categoryImage} />
                                    <Text style={styles.categoryName}>{item.name}</Text>
                                </TouchableOpacity>
                            )}
                        />

                        {/* Tiêu đề "Sản phẩm nổi bật" */}
                        <Text style={styles.sectionTitle}>Sản phẩm nổi bật</Text>
                    </>
                }
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.productItem}
                        onPress={() => navigation.navigate('ProductDetail', { product: item })}>
                        <Image source={{ uri: item.image }} style={styles.productImage} />
                        <Text style={styles.productName}>{item.name}</Text>
                        {/* Thêm container để căn chỉnh giá và "đã bán" */}
                        <View style={styles.priceSoldContainer}>
                            <Text style={styles.productPrice}>{item.price.toLocaleString()} đ</Text>
                            <Text style={styles.productSold}>Đã bán: {Math.floor(Math.random() * 1000)}</Text>
                        </View>
                    </TouchableOpacity>
                )}
                numColumns={2}
                columnWrapperStyle={styles.productRow}
                ListFooterComponent={loading ? <ActivityIndicator size="large" color="#0000ff" /> : null}
            />
        </SafeAreaView>
    );
};

export default HomeScreen;
