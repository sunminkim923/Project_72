import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ChatListScreen from '../../screens/chat/list/chatListScreen';
import AddRoomScreen from '../../screens/chat/addRoom/addRoonScreen';
import {IconButton} from 'react-native-paper';
import RoomScreen from '../../screens/chat/room/chatRoomScreen';

const ChatAppStack = createNativeStackNavigator();
const ModalStack = createNativeStackNavigator();

function ChatApp() {
  return (
    <ChatAppStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#6646ee',
        },
        headerTintColor: '#ffffff',
        headerTitleStyle: {
          fontSize: 22,
        },
      }}>
      <ChatAppStack.Screen
        name="Home"
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
      <ChatAppStack.Screen
        name="Room"
        component={RoomScreen}
        options={({route}) => ({
          title: route.params.thread.name,
        })}
      />
    </ChatAppStack.Navigator>
  );
}

export default function HomeStack() {
  return (
    <ModalStack.Navigator
      mode="modal"
      headerMode="none"
      screenOptions={() => ({headerShown: false})}>
      <ModalStack.Screen name="ChatApp" component={ChatApp} />
      <ModalStack.Screen name="AddRoom" component={AddRoomScreen} />
      <ModalStack.Screen name="ChatList" component={ChatListScreen} />
      <ModalStack.Screen name="ChatRoom" component={RoomScreen} />
    </ModalStack.Navigator>
  );
}
