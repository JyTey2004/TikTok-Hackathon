import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, Image, Dimensions } from 'react-native'
import React from 'react'
import HomeCarousel from '../components/Carousel'
import { Divider } from '@react-native-material/core'
import { Ionicons } from '@expo/vector-icons'
import ServicesMiniMenu from '../components/ServicesMiniMenu'
import SnapRecords from '../components/SnapRecords'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { StyleSheet } from 'react-native'

const { width, height } = Dimensions.get('window');

const HomeScreen = () => {
  const navigation = useNavigation()
  const [selected, setSelected] = useState('Following')
  const [isExpanded, setIsExpanded] = useState(false);
  const [isReviewExpanded, setIsReviewExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
    if (isReviewExpanded) {
      setIsReviewExpanded(false);
    }
  };

  const toggleReviewExpansion = () => {
    setIsReviewExpanded(!isReviewExpanded);
  };

  const item ={
    brand: 'Sony',
    name: 'WH1000XM-4',
    price: '$300',
    rating: '96',
    image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c29ueSUyMGhlYWRwaG9uZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60',
  }

  const reviews = [
    {
      name: 'Gu*******k',
      review: 'Perfect Product, superior sound quality.',
    },
    {
      name: 'Qe*******d',
      review: 'Amazing product, I love it.',
    },
    {
      name: 'Ji*******n',
      review: 'I love it, it is so good.',
    }
  ]
  return (
    <SafeAreaView className='flex-1 bg-black'>
      <View className='flex-row items-center justify-center'>
        <TouchableOpacity className='mr-2'
          // onPress={() => navigation.navigate('CommunityScreen')}
          >
          <Text className='text-white text-xl font-semibold'>Following</Text>
        </TouchableOpacity>
        <View style={{    height: '100%', width: 1, backgroundColor: '#909090'}}></View>
        <TouchableOpacity className='ml-2'
          // onPress={() => navigation.navigate('CommunityScreen')}
          >
          <Text className='text-white text-xl font-semibold'>For You</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.username}>@Michelle</Text>
      <Text style={styles.description}>This is a random description</Text>
      <Text style={styles.tags}>#desctiprion #NothingOverHere</Text>
      <Text style={styles.music}>再见莫妮卡</Text>

      <Image 
        source={{
          url: 'https://bkimg.cdn.bcebos.com/pic/8601a18b87d6277f9e2f9244406c0830e924b8995608?x-bce-process=image/resize,m_lfit,w_536,limit_1/format,f_auto'
        }}
        style={{
          width: 40,
          height: 40,
          position: 'absolute',
          bottom: '1%',
          right: '3%',
          borderRadius: 50,
          opacity: 0.8,
          // resizeMode: 'fit',
        }}
      />
      <Ionicons
        name='arrow-redo'
        size={35}
        style={{
          position: 'absolute',
          bottom: '12%',
          right: '3%',
          color: 'white',
        }}/>
        <Text style={{ color: 'white', position: 'absolute', bottom: '9%', right: '6.5%', fontSize: 15}}>0</Text>
      <Ionicons
        name='bookmark'
        size={35}
        style={{
          position: 'absolute',
          bottom: '20%',
          right: '3%',
          color: 'white',
        }}/>
        <Text style={{ color: 'white', position: 'absolute', bottom: '17.5%', right: '6.5%', fontSize: 15}}>0</Text>
      <Ionicons
        name='chatbubble'
        size={35}
        style={{
          position: 'absolute',
          bottom: '28.5%',
          right: '3%',
          color: 'white',
        }}/>
        <Text style={{ color: 'white', position: 'absolute', bottom: '26%', right: '6.5%', fontSize: 15}}>0</Text>
      <Ionicons
        name='heart'
        size={35}
        style={{
          position: 'absolute',
          bottom: '37%',
          right: '3%',
          color: 'white',
        }}/>
        <Text style={{ color: 'white', position: 'absolute', bottom: '34%', right: '6.5%', fontSize: 15}}>0</Text>

        <Image 
        source={{
          url: 'https://bkimg.cdn.bcebos.com/pic/8601a18b87d6277f9e2f9244406c0830e924b8995608?x-bce-process=image/resize,m_lfit,w_536,limit_1/format,f_auto'
        }}
        style={{
          width: 40,
          height: 40,
          position: 'absolute',
          bottom: '45%',
          right: '2.5%',
          borderRadius: 50,
          opacity: 1,
          borderWidth: 2,
          borderColor: 'white',
          // resizeMode: 'fit',
        }}/>
        <Ionicons
        name='add-circle'
        size={20}
        style={{
          position: 'absolute',
          bottom: '43.5%',
          right: '4.5%',
          color: 'red',
        }}/>

        <TouchableOpacity 
          style={styles.sideTab}
          onPress={toggleExpansion}
          >
          <Ionicons name={isExpanded ? 'chevron-forward' : 'chevron-back'} size={20} />
        </TouchableOpacity>

        {isExpanded && (
        <View style={{
          position: 'absolute',
          bottom: '55%', // Adjust the position as needed
          right: '15%',
          width: '70%', // Adjust the width as needed
          height: '30%', // Adjust the height as needed
          backgroundColor: 'white',
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          borderBottomLeftRadius: isReviewExpanded ? 0 : 15,
          borderBottomRightRadius: isReviewExpanded ? 0 : 15,
          padding: 10,
        }}>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              height: '70%',
            }}
          >
            <Image 
              source={{
                url: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c29ueSUyMGhlYWRwaG9uZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
              }}
              style={{
                width: '50%',
                height: '100%',
                borderRadius: 15,
              }}
            />            
            <View className="w-1/2 height-max p-1 ml-1">
              <Text className="text-base font-bold ">{item.brand}</Text>
              <Text className="text-base font-bold ">{item.name}</Text>
              <View style={{ height: 1, width: "100%", backgroundColor: '#909090', marginVertical: '2%'}}></View>
              <View className="flex-row items-center justify-between">
                <Text className="text-sm font-semibold ">Price</Text>
                <Text className="text-sm font-semibold ">{item.price}</Text>
              </View>
              <View className="flex-row items-center justify-between">
                <Text className="text-sm font-semibold ">Rating</Text>
                <Text className="text-sm font-semibold ">{item.rating}%</Text>
              </View>
              <TouchableOpacity
                className="bg-red-400 rounded-xl items-center p-1 mt-1"
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  height: '20%',
                }}
                // onPress={() => navigation.navigate('')}
              >
                <Text className="text-xs font-semibold text-white ml-2">Buy Now</Text>
                <Ionicons name='chevron-forward' size={20} color='white' style={{ position: 'absolute', right: '5%'}}/>
              </TouchableOpacity>
            </View>
          </View>
          <View 
            className='flex-row bg-red-400 mt-1 rounded-xl items-center justify-between'
            style={{
              padding: '1%'
            }}
          >
            <Text className="text-base font-bold text-white ml-2">Discount Code</Text>
            <View className="flex-row items-center mr-1">
              <Ionicons name='at' size={20} color='white'/>
              <Text className="text-base text-white">Michelle</Text>
            </View>
          </View>
          <View
          className="items-center justify-between "
            style={{
              flexDirection: 'row',
              width: '100%',
              height: '18%',
              padding: '2%',
            }}
          >
            <Text className="text-base font-bold">Reviews</Text>
            <TouchableOpacity
              onPress={toggleReviewExpansion}
            >
              <Ionicons name={isReviewExpanded ? 'chevron-up' : 'chevron-down'} size={20} color='black' />
            </TouchableOpacity>
          </View>
        </View>
      )}

      {isReviewExpanded && (
        <View style={{
          position: 'absolute',
          bottom: '35%', // Adjust the position as needed
          right: '15%',
          width: '70%', // Adjust the width as needed
          height: '20%', // Adjust the height as needed
          backgroundColor: 'white',
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
          padding: 10,
          paddingTop: 0,
        }}>
          <ScrollView
            style={{
              width: '100%',
              height: '100%',
              padding: '1%',
            }}
            className='space-y-1'
          >
            {reviews.map((review) => (
              <View
                className="bg-gray-300"
                style={{
                  padding: '2%',
                  borderRadius: 5,
                }}
                key={review.name}
              >
                <Text className="text-sm font-semibold">{review.name}</Text>
                <Text className="text-xs font-base">{review.review}</Text>
              </View>
            ))}
            
          </ScrollView>
        </View>
      )}

    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  username: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: '3%',
    position: 'absolute',
    bottom: '13%',
  },
  description: {
    color: 'white',
    fontSize: 15,
    marginLeft: '3%',
    position: 'absolute',
    bottom: '9%',
  },
  tags : {
    color: 'white',
    fontSize: 15,
    marginLeft: '3%',
    position: 'absolute',
    bottom: '5%',
  },
  music: {
    color: 'white',
    fontSize: 15,
    marginLeft: '3%',
    position: 'absolute',
    bottom: '1%',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  sideTab: {
    width: '5%',
    height: '15%',
    backgroundColor: 'pink',
    position: 'absolute',
    bottom: '70%',
    right: '0%',
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },

})

export default HomeScreen