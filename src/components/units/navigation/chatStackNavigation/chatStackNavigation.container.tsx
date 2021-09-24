import React, {createContext, useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ChatListScreen from '../../screens/chat/list/chatListScreen';
import AddRoomScreen from '../../screens/chat/addRoom/addRoonScreen';
import RoomScreen from '../../screens/chat/room/chatRoomScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import DialogPage from '../../../commons/dialog/dialog';
import FinshScreen from '../../screens/chat/finish/finishScreen';

const ModalStack = createNativeStackNavigator();

export default function ChatStackNavigationPage() {
  return (
    <ModalStack.Navigator
      mode="modal"
      headerMode="none"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#26EBA6',
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
            <Icon
              name="chatbubbles-sharp"
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
        options={({route, navigation}) => ({
          title: route.params.thread.sellerName,
          headerRight: () => <DialogPage navigation={navigation} />,
        })}
      />
      <ModalStack.Screen name="Finish" component={FinshScreen} />
    </ModalStack.Navigator>
  );
}
