import React, { useState } from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ServicesScreen = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    // You can implement your search logic here using the `searchText` state.
    // For now, let's just log the search text.
    console.log('Search text:', searchText);
  };

  // Sample data for content creators (you can replace this with your own data)
  const contentCreators = [
    {
      id: 1,
      name: 'John Doe',
      profileImage: 'https://wallpapers.com/images/high/cool-profile-picture-1ecoo30f26bkr14o.webp', // Replace with the actual image path
    },
    {
      id: 2,
      name: 'Jane Smith',
      profileImage: 'https://wallpaperaccess.com/full/6295120.jpg', // Replace with the actual image path
    },
    // Add more content creators as needed
  ];

  const sellingItems = [
    {
      id: 1,
      brand: 'Nike',
      name: 'Air Jordan 1',
      price: 1000,
      image: 'https://wallpapers.com/images/high/cool-profile-picture-1ecoo30f26bkr14o.webp',
    },
    {
      id: 2,
      brand: 'Adidas',
      name: 'Yeezy 350',
      price: 1000,
      image: 'https://wallpapers.com/images/high/cool-profile-picture-1ecoo30f26bkr14o.webp',
    },
    {
      id: 3,
      brand: 'Nike',
      name: 'Peaceminusone Air Force 1',
      price: 1000,
      image: 'https://wallpapers.com/images/high/cool-profile-picture-1ecoo30f26bkr14o.webp',
    },
    {
      id: 4,
      brand: 'Nike',
      name: 'Air Jordan 1',
      price: 1000,
      image: 'https://wallpapers.com/images/high/cool-profile-picture-1ecoo30f26bkr14o.webp',
    }
  ]


  const pairs = [];
  for (let i = 0; i < sellingItems.length; i += 2) {
    pairs.push({
      item1: sellingItems[i],
      item2: sellingItems[i + 1],
    });
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
        <View style={{marginHorizontal: '3%'}}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', borderRadius: 10, flex: 1 }}>
                    <Ionicons name="search" size={20} color="black" style={{ marginLeft: 10 }} />
                    <TextInput
                        style={{
                        flex: 1,
                        color: 'black',
                        padding: 10,
                        }}
                        placeholder="Search..."
                        placeholderTextColor="gray"
                        onChangeText={(text) => setSearchText(text)}
                        value={searchText}
                    />
                    <TouchableOpacity style={{ marginRight: '2%' }} onPress={handleSearch}>
                        <Text style={{ color: 'red', fontSize: 16, fontWeight: 'bold' }}>Search</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <Ionicons name="cart-outline" size={30} color="white" style={{ marginLeft: 15 }} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name="menu-outline" size={30} color="white" style={{ marginLeft: 15 }} />
                </TouchableOpacity>
            </View>

            {/* Content Creators */}
            <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', marginTop: '3%' }}>Content Creators</Text>
            <ScrollView style={{ height: '20%', marginTop: '3%'}} horizontal>
                {contentCreators.map((creator) => (
                    <View key={creator.id} style={{ width: 100, height: '100%', padding: 3 }} className='items-center'>
                        <Image source={{uri: creator.profileImage}} style={{width: '100%', height: '80%', borderRadius: 30 }} />
                        <Text style={{ marginLeft: 10, fontWeight: 'semibold', color: 'white' }} className='text-sm'>{creator.name}</Text>
                    </View>
                ))}
            </ScrollView>

            {/* Selling Items */}
            <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', marginTop: '3%' }}>Trending</Text>
            <ScrollView style={{ marginTop: '3%'}} className='w-max h-max'>
                {pairs.map((pair) => (
                  <View key={pair.item1.id} style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 1, padding: 3}}>
                      <Image source={{uri: pair.item1.image}} style={{width: 150, height: 200, borderRadius: 30 }} />
                      <Text style={{ marginLeft: 10, fontWeight: 'bold', color: 'white' }} className='text-sm'>{pair.item1.brand}</Text>
                      <Text style={{ marginLeft: 10, fontWeight: 'bold', color: 'white' }} className='text-sm'>{pair.item1.name}</Text>
                      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ marginLeft: 10, fontWeight: 'bold', color: 'white' }} className='text-sm'>Price</Text>
                        <Text style={{ marginLeft: 10, fontWeight: 'bold', color: 'white' }} className='text-sm'>${pair.item1.price}</Text>
                      </View>
                    </View>
                    <View style={{ flex: 1, padding: 3}}>
                      <Image source={{uri: pair.item2.image}} style={{width: 150, height: 200, borderRadius: 30 }} />
                      <Text style={{ marginLeft: 10, fontWeight: 'bold', color: 'white' }} className='text-sm'>{pair.item2.brand}</Text>
                      <Text style={{ marginLeft: 10, fontWeight: 'bold', color: 'white' }} className='text-sm'>{pair.item2.name}</Text>
                      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ marginLeft: 10, fontWeight: 'bold', color: 'white' }} className='text-sm'>Price</Text>
                        <Text style={{ marginLeft: 10, fontWeight: 'bold', color: 'white' }} className='text-sm'>${pair.item2.price}</Text>
                      </View>
                    </View>

                  </View>
                ))}
            </ScrollView>
        </View>
      
    </SafeAreaView>
  );
};

export default ServicesScreen;
