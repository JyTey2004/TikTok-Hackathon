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
      name: '@Catcat',
      profileImage: 'https://wallpapers.com/images/high/cool-profile-picture-1ecoo30f26bkr14o.webp',
    },
    {
      id: 2,
      name: '@Rosey',
      profileImage: 'https://www.dexerto.com/cdn-cgi/image/width=1080,quality=75,format=auto/https://editors.dexerto.com/wp-content/uploads/2021/09/14/Rozy-ai-influencr-1024x576.jpg',
    },
    {
      id: 3,
      name: '@LeeLin',
      profileImage: 'https://www.dexerto.com/cdn-cgi/image/width=1080,quality=75,format=auto/https://editors.dexerto.com/wp-content/uploads/2021/09/14/Rozy-ai-influencer-1.jpg',
    }
  ];

  const sellingItems = [
    {
      id: 1,
      brand: 'Sony',
      name: 'WH1000XM4',
      price: 300.00,
      image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c29ueSUyMGhlYWRwaG9uZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60',
      numberSold: 10,
    },
    {
      id: 2,
      brand: 'B&O',
      name: 'Beoplay H95',
      price: 1400,
      image: 'https://cdn-images.farfetch-contents.com/17/34/18/84/17341884_35953642_1000.jpg',
      numberSold: 5,
    },
    {
      id: 3,
      brand: 'Apple',
      name: 'Airpods Max',
      price: 800,
      image: 'https://images.unsplash.com/photo-1628329567705-f8f7150c3cff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWlycG9kcyUyMG1heHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      numberSold: 3,
    },
    {
      id: 4,
      brand: 'Sony',
      name: 'WH1000XM5',
      price: 500,
      image: 'https://metapod.com/cdn/shop/products/SonyWH-1000XM5_Silver_1_700x.jpg?v=1681356569',
      numberSold: 2,
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
        </View>

                    {/* Content Creators */}
        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', marginTop: '3%', marginHorizontal: '3%' }}>Top Creators</Text>
        <ScrollView style={{ height: '30%', marginTop: '3%', marginHorizontal: '3%' }} horizontal>
            {contentCreators.map((creator) => (
                <TouchableOpacity key={creator.id} style={{ width: '60%', height: '100%', padding: 3 }} className='items-center'>
                    <Image source={{uri: creator.profileImage}} style={{width: '100%', height: '80%', borderRadius: 20 }} />
                    <Text style={{ marginLeft: 10, fontWeight: 'semibold', color: 'white' }} className='text-sm'>{creator.name}</Text>
                </TouchableOpacity>
            ))}
        </ScrollView>

        {/* Selling Items */}
        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', marginTop: '3%', marginHorizontal: '3%' }}>Trending</Text>
        <ScrollView style={{ marginTop: '1%', marginHorizontal: '3%'}} className='w-max h-full'>
                {pairs.map((pair) => (
                  <View key={pair.item1.id} style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 1, padding: 3}}>
                      <Image source={{uri: pair.item1.image}} style={{width: '100%', height: 200, borderRadius: 30 }} />
                      <Text style={{ marginLeft: 10, fontWeight: 'bold', color: 'white', marginTop: '2%' }} className='text-sm'>{pair.item1.brand}</Text>
                      <Text style={{ marginLeft: 10, fontWeight: 'bold', color: 'white' }} className='text-sm'>{pair.item1.name}</Text>
                      <Text style={{ marginLeft: 10, fontWeight: 'bold', color: '#ef4444' }} className='text-sm'>${pair.item1.price}.00</Text>
                      <Text style={{ marginLeft: 10, fontWeight: 'base', color: 'white' }} className='text-sm'>{pair.item1.numberSold} sold</Text>
                    </View>
                    <View style={{ flex: 1, padding: 3, marginLeft: '2%'}}>
                      <Image source={{uri: pair.item2.image}} style={{width: '100%', height: 200, borderRadius: 30 }} />
                      <Text style={{ marginLeft: 10, fontWeight: 'bold', color: 'white', marginTop: '2%'  }} className='text-sm'>{pair.item2.brand}</Text>
                      <Text style={{ marginLeft: 10, fontWeight: 'bold', color: 'white' }} className='text-sm'>{pair.item2.name}</Text>
                      <Text style={{ marginLeft: 10, fontWeight: 'bold', color: '#ef4444' }} className='text-sm'>${pair.item2.price}.00</Text>
                      <Text style={{ marginLeft: 10, fontWeight: 'base', color: 'white' }} className='text-sm'>{pair.item2.numberSold} sold</Text>
                    </View>
                  </View>
                ))}
            </ScrollView>
      
    </SafeAreaView>
  );
};

export default ServicesScreen;
