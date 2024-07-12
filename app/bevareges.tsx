import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, Dimensions } from 'react-native';

const menuItems = [
  { id: '1', name: 'Mango Juice', price: 'LKR 400.00', image: 'https://img.freepik.com/free-photo/delicious-mango-still-life_23-2151542230.jpg?ga=GA1.1.1360257794.1717265664&semt=ais_user' },
  { id: '2', name: 'Avocado Juice', price: 'LKR 450.00', image: 'https://img.freepik.com/premium-photo/close-up-drink-table_1048944-21098849.jpg?ga=GA1.1.1360257794.1717265664&semt=ais_user' },
  { id: '3', name: 'Pineapple Juice', price: 'LKR 600.00', image: 'https://img.freepik.com/premium-photo/front-view-fresh-pineapple-dry-pineapple-slices-pineapple-juice-glasses-dark-background-copy-place_461922-26953.jpg?w=740' },
  { id: '4', name: 'Watermelon Juice', price: 'LKR 400.00', image: 'https://img.freepik.com/free-photo/watermelon-ice-cold-smoothie-with-mint-leaves-slice-watermelon_114579-1985.jpg?ga=GA1.1.1360257794.1717265664' },
  { id: '5', name: 'Papaya Juice', price: 'LKR 400.00', image: 'https://img.freepik.com/free-photo/fresh-papaya-juice-glass-with-papaya-fruit-wooden-table-black-background-ai-generative_123827-24233.jpg?ga=GA1.1.1360257794.1717265664&semt=ais_user' },
  { id: '26', name: 'Apple Juice', price: 'LKR 600.00', image: 'https://img.freepik.com/free-photo/side-view-apple-juice-gray-wooden-table-vertical_176474-1039.jpg?ga=GA1.1.1360257794.1717265664&semt=ais_user' },
  
];

const MenuScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.menuStyle}>Our Menu</Text>
      <View style={styles.menuList}>
        <Text style={styles.menuItem}>Meals</Text>
        <Text style={styles.menuItem}>Beverages</Text>
        <Text style={styles.menuItem}>Snacks</Text>
        
      </View>
      <FlatList
        style={styles.list}
        data={menuItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>{item.price}</Text>
            </View>
          </View>
        )}
        numColumns={2}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  list: {
    marginTop: 20,
  },
  menuStyle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 40,
    alignItems:'center'
  },
  menuList: {
    marginTop:50,
    flexDirection: 'row',
    alignItems:'center',
    
  },
  menuItem: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 30,
    color:'#FFA500'
    

   
  },
  itemContainer: {
    width: Dimensions.get('window').width / 2 - 20,
    height: 250,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 5,
    backgroundColor: '#fff',
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  textContainer: {
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  price: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
  },
  flatListContainer: {
    alignItems: 'center',
  },
});

export default MenuScreen;
