import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';

const HealthEnquiryScreen = () => {
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

  const chats = [
    {
      name: '@Catcat Community',
      profileImage: 'https://wallpapers.com/images/high/cool-profile-picture-1ecoo30f26bkr14o.webp',
      lastMessage: 'Super Sale! 50% off all items! Only By @Catcat',
      lastMessageTime: '10:00 AM',
      unreadMessages: 2,
      vote : null
    },
    {
      name: '@Rosey Community',
      profileImage: 'https://www.dexerto.com/cdn-cgi/image/width=1080,quality=75,format=auto/https://editors.dexerto.com/wp-content/uploads/2021/09/14/Rozy-ai-influencr-1024x576.jpg',
      lastMessage:  'New Product Review! Check it out! Vote for your favourite product!',
      lastMessageTime: '9:00 AM',
      unreadMessages: 0,
      vote: {
        'Sony': 23,
        'B&O': 12,
        'Apple': 4,
      }
    },
    {
      name: '@LeeLin Community',
      profileImage: 'https://www.dexerto.com/cdn-cgi/image/width=1080,quality=75,format=auto/https://editors.dexerto.com/wp-content/uploads/2021/09/14/Rozy-ai-influencer-1.jpg',
      lastMessage: 'New Product Review! Check it out! Vote for your favourite product!',
      lastMessageTime: '8:00 AM',
      unreadMessages: 1,
      vote: null
    }
  ]

  const [chatVotes, setChatVotes] = useState({}); // State to store chat votes

  // Function to handle voting for a chat option
  const handleVote = (chat, option) => {
    // Check if the user has already voted for this chat
    if (chatVotes[chat.name] && chatVotes[chat.name][option] === 1) {
      // User wants to change their vote, deduct from the previous option and add to the current option
      setChatVotes((prevVotes) => {
        const updatedVotes = { ...prevVotes };
        const previousOption = Object.keys(updatedVotes[chat.name]).find((key) => updatedVotes[chat.name][key] === 1);
        updatedVotes[chat.name][previousOption] = 0; // Deduct from the previous option
        updatedVotes[chat.name][option] = 1; // Add to the current option
        return updatedVotes;
      });
    } else {
      // User is either voting for the first time or changing their vote
      setChatVotes((prevVotes) => {
        const updatedVotes = { ...prevVotes };
        if (!updatedVotes[chat.name]) {
          updatedVotes[chat.name] = {};
        }
        // Deduct from the previous option if any
        const previousOption = Object.keys(updatedVotes[chat.name]).find((key) => updatedVotes[chat.name][key] === 1);
        if (previousOption) {
          updatedVotes[chat.name][previousOption] = 0;
        }
        updatedVotes[chat.name][option] = 1; // Add to the current option
        return updatedVotes;
      });
    }
  };
    
  return (
    <SafeAreaView className='bg-black' style={{ width: '100%', height: '100%'}}>
        {/* Content Creators */}
        <View className="flex-row justify-center items-center">
          <Ionicons name="add-circle-outline" size={25} color="white" style={{ position: 'absolute', left: '3%'}} />
          <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginRight: '2%' }}>Inbox</Text>
          <Ionicons name="caret-down" size={20} color="white" />
          <Ionicons name="search" size={25} color="white" style={{ position: 'absolute', right: '3%'}} />
        </View>
        
        <ScrollView style={{flex: 1, marginTop: '7%', marginHorizontal: '3%' }} horizontal>
            {contentCreators.map((creator) => (
                <TouchableOpacity key={creator.id} style={{ width: '40%', height: '100%', marginRight: 10 }} className='items-center justify-center'>
                    <Image source={{uri: creator.profileImage}} style={{width: '100%', height: '70%', borderRadius: 100 }} />
                    <Text style={{ fontWeight: 'semibold', color: 'white', marginTop: 3 }} className='text-sm'>{creator.name}</Text>
                </TouchableOpacity>
            ))}
        </ScrollView>

        {/* Messages */}
        <View style={{ width: '94%', height: 1, marginHorizontal: '3%', marginVertical: '2%' }} className='bg-white' />
          <ScrollView style={{ height: '60%', marginHorizontal: '3%' }}>
            {chats.map((chat) => (
              <View key={chat.name} style={{ flex: 1, marginBottom: chat.vote ? '13%' : 0 }}>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', height: '100%' }}>
                  <Image source={{uri: chat.profileImage}} style={{width: 70, height: 70, borderRadius: 100 }} />
                  <View style={{ marginLeft: 10, width: '65%', flex: 1}}>
                    <Text style={{ fontWeight: 'bold', color: 'white', marginTop: 3 }} className='text-base'>{chat.name}</Text>
                    <Text style={{ fontWeight: 'semibold', color: 'white', marginTop: 3 }} className='text-xs' numberOfLines={2} ellipsizeMode='tail'>{chat.lastMessage}</Text>
                  </View>
                  <View className='bg-red-500 items-center justify-center rounded-full w-5 h-5 ml-3 mt-4'>
                    <Text style={{ fontWeight: 'bold', color: 'white'}} className='text-xs'>{chat.unreadMessages}</Text>
                  </View>
                </TouchableOpacity>
                {chat.vote && (
                  <View style={{ flexDirection: 'row', marginHorizontal: 10, alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold', color: 'white' }} className='text-lg'>Vote: </Text>
                    {Object.entries(chat.vote).map(([option, count]) => (
                      <TouchableOpacity key={option} style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10, paddingHorizontal: 10, paddingVertical: 6, borderRadius: 10 }} className='bg-red-500' onPress={() => handleVote(chat, option)}>
                        <Text style={{ fontWeight: 'bold', color: 'white' }}>{option}</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10, backgroundColor: 'white', padding: 1, borderRadius: 4 }}>
                        <Text style={{ fontWeight: 'bold'}}>{chatVotes[chat.name] && chatVotes[chat.name][option] === 1 ? count + 1 : count}</Text>
                        </View>
                      </TouchableOpacity>
                    ))}
                  </View>
                )}
              </View>
            ))}
          </ScrollView>
          
          
    </SafeAreaView>
  )
}

export default HealthEnquiryScreen