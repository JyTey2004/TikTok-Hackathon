import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const CheckoutScreen = ({route}) => {
    const navigation = useNavigation()
    const item = route.params.item
    const creator = route.params.creator
  return (
    <View className='bg-black w-full h-full'>
      <View className='flex flex-row justify-between items-center pl-2 pr-2'>
        <Ionicons name='chevron-back' size={26} color='white' onPress={() => navigation.goBack()}/>
        <View className='items-center'>
            <Text className='text-white text-base font-bold'>Shopping Cart (1)</Text>
            <Text className='text-white text-xs font-base'>Address</Text>
        </View>
        <Text className='text-white text-base font-semibold'>Edit</Text>
      </View>
      <Text className='text-white text-base font-bold ml-2 mt-2'>Items</Text>
        <View className='flex flex-row justify-between items-center m-3 p-2 bg-slate-600 rounded-lg'>
            <View className='flex flex-row items-center'>
                <Image 
                    className='w-20 h-20 bg-white rounded-lg'
                    source={{uri: item.image}}
                    />
                <View className='flex flex-col ml-2'>
                    <Text className='text-white text-base font-bold'>{item.name}</Text>
                    <Text className='text-white text-xs font-base'>${item.price}</Text>
                </View>
            </View>
            <Text className='text-base font-semibold text-red-500'>Remove</Text>
        </View>
        <Text className='text-white text-base font-bold ml-2 mt-2'>Creator's discount</Text>
        <View className='flex flex-row justify-between items-center m-3 p-2 bg-slate-600 rounded-lg'>
            <View className='flex flex-row items-center'>
                <Image 
                    className='w-20 h-20 bg-white rounded-lg'
                    source={{uri: creator.image}}
                    />
                <View className='h-20 flex-1 ml-2'>
                    <Text className='text-white text-base font-bold'>{creator.name}</Text>
                    <View className='flex-1 flex-row bg-red-500 rounded-lg p-2 items-center m-1'>
                        <View className='flex-1 flex-row items-center'>
                            <Text className='text-white text-lg font-bold'>{creator.discount}</Text>
                            <Text className='text-white text-base font-bold ml-1'>OFF</Text>
                        </View>
                        
                        <Ionicons name='checkmark' size={20} color='white' className='ml-2'/>
                    </View>
                </View>
            </View>
        </View>

        <View className='flex flex-row justify-between items-center m-3 mt-1 p-2 bg-slate-600 rounded-lg'>
            <View className='flex flex-row items-center'>
                <Text className='text-white text-base font-bold'>Subtotal</Text>
            </View>
            <Text className='text-white text-base font-bold'>${((1 - 0.3) * item.price).toFixed(2)}</Text>
        </View>

        <TouchableOpacity className='flex flex-row justify-center items-center m-3 mt-1 p-1 bg-red-500 rounded-lg'>
            <Text className='text-white text-base font-bold'>Checkout</Text>
        </TouchableOpacity>
    </View>
  )
}

export default CheckoutScreen