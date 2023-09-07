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
            <ScrollView style={{ height: '15%', marginTop: '3%'}} horizontal>
                {contentCreators.map((creator) => (
                    <View key={creator.id} style={{ alignItems: 'center', flex: 1}}>
                        <Image source={{uri: creator.profileImage}} style={{width: 100, height: 100, borderRadius: '30%', borderColor: '#ef4444', borderWidth: '1%' }} />
                        <Text style={{ marginLeft: 10, fontWeight: 'bold', color: 'white' }} className='text-sm'>@{creator.name}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
      
    </SafeAreaView>
  );
};

export default ServicesScreen;
