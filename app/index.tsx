import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContainer}>
          <Text style={styles.teast}>Taste </Text>
          <Text style={styles.hub}>hub</Text>
        </View>
        <Image style={styles.profileImage} source={{ uri: 'https://img.freepik.com/premium-photo/shiny-gold-letter-m-plain-white-background-3d-rendering_601748-26755.jpg?ga=GA1.1.1360257794.1717265664&semt=ais_user' }} />
      </View>

      <TextInput style={styles.searchInput} placeholder="Search" />

      <ScrollView horizontal style={styles.categoryContainer}>
        {['All', 'Burger', 'Pizza', 'Dessert'].map(category => (
          <TouchableOpacity key={category} style={styles.categoryItem}>
            <Text style={styles.categoryText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.promotionContainer}>
        <Text style={styles.promotionTitle}>Promotions</Text>
        <View style={styles.promotionItem}>
          <View style={styles.promotionTextContainer}>
            <Text style={styles.promotionText}>Today's offer</Text>
            <Text style={styles.promotionText}>Free Box of Fries</Text>
            <Text style={styles.promotionSubText}>On All Orders above LKR 2500.00</Text>
          </View>
          <Image style={styles.promotionImage} source={require('../images/box.png')} />
        </View>
      </View>

      <View style={styles.popularContainer}>
        <Text style={styles.popularTitle}>Popular</Text>
        {[{ name: 'Beef Burger', price: 'LKR 800.00', image: 'https://media.istockphoto.com/id/1397632887/photo/beef-burger-sandwich-with-salad-lettuce-tomato-cheese-and-dressing.jpg?s=612x612&w=0&k=20&c=kC2e64DxrQe_yhHxMhXs0JimtAMvvXo4ZpgbKXAwDUo=' },
         { name: 'Cheese Pizza', price: 'LKR 1800.00', image: 'https://img.freepik.com/free-photo/front-view-delicious-cheese-pizza-consists-olives-pepper-tomatoes-dark-surface_179666-34391.jpg?ga=GA1.1.1360257794.1717265664&semt=sph' },
        { name: 'Pork Burger', price: 'LKR 600.00', image: 'https://img.freepik.com/premium-photo/juicy-beef-burger-black-background_109285-6287.jpg?ga=GA1.1.1360257794.1717265664&semt=ais_user' },
       ].map((item, index) => (
          <View key={index} style={styles.popularItem}>
            <Image style={styles.popularImage} source={{ uri: item.image }} />
            <Text style={styles.popularText}>{item.name}</Text>
            <Text style={styles.popularPrice}>{item.price}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  teast: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white', // White color for "Teast"
  },
  hub: {
    fontSize: 15,
    fontWeight: 'bold',
    backgroundColor: '#FFA500', // Orange background for "Hub"
    color: 'black', // Black color for "Hub"
    borderRadius: 5,
    paddingHorizontal: 8,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  searchInput: {
    backgroundColor: '#f0f0f0',
    margin: 20,
    padding: 10,
    borderRadius: 10,
  },
  categoryContainer: {
    flexDirection: 'row',
    padding: 20,
  },
  categoryItem: {
    marginLeft: 15,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  categoryText: {
    fontSize: 16,
  },
  promotionContainer: {
    padding: 20,
  },
  promotionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  promotionItem: {
    backgroundColor: '#FFC490',
    padding: 20,
    borderRadius: 10,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  promotionImage: {
    width: 80,
    height: 80,
    marginLeft: 10,
  },
  promotionTextContainer: {
    flex: 1,
  },
  promotionText: {
    fontSize: 16,
  },
  promotionSubText: {
    fontSize: 14,
    color: '#888',
  },
  popularContainer: {
    padding: 20,
  },
  popularTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  popularItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  popularImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  popularText: {
    fontSize: 16,
    marginLeft: 10,
  },
  popularPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 'auto',
  },
});

export default HomeScreen;
