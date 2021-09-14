import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ChatListScreen from '../../screens/chat/list/chatListScreen';
import AddRoomScreen from '../../screens/chat/addRoom/addRoonScreen';
import {IconButton} from 'react-native-paper';
import {Provider as PaperProvider} from 'react-native-paper';
import RoomScreen from '../../screens/chat/room/chatRoomScreen';

const ChatAppStack = createNativeStackNavigator();
const ModalStack = createNativeStackNavigator();

export default function ChatStackNavigationPage() {
  return (
    <ModalStack.Navigator
      mode="modal"
      headerMode="none"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#6646ee',
        },
        headerTintColor: '#ffffff',
        headerTitleStyle: {
          fontSize: 22,
        },
      }}>
      <ModalStack.Screen
        name="채팅리스트"
        component={ChatListScreen}
        options={({navigation}) => ({
          headerRight: () => (
            <IconButton
              icon="message-plus"
              size={28}
              color="#ffffff"
              onPress={() => navigation.navigate('AddRoom')}
            />
          ),
        })}
      />
      <ModalStack.Screen name="AddRoom" component={AddRoomScreen} />
      <ModalStack.Screen
        name="Room"
        component={RoomScreen}
        options={({route}) => ({
          title: route.params.thread.name,
        })}
      />
    </ModalStack.Navigator>
  );
}
