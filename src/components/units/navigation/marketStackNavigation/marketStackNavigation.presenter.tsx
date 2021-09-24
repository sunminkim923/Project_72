import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MarketListPage from '../../../../../pages/screens/market';
import MarketDetailPage from '../../../../../pages/screens/market/[marketId]';
import MarketWritePage from '../../../../../pages/screens/market/new';
import RoomScreen from '../../screens/chat/room/chatRoomScreen';
import DialogPage from '../../../commons/dialog/dialog';
import ChatListScreen from '../../screens/chat/list/chatListScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import {GlobalContext} from '../../../../../App';

const Stack = createNativeStackNavigator();
const MarketStackNavigationUI = () => {
  const {userInfo} = useContext(GlobalContext);

  return (
    <>
      <Stack.Navigator screenOptions={() => ({headerShown: false})}>
        <Stack.Screen name="List" component={MarketListPage} />
        <Stack.Screen name="Detail" component={MarketDetailPage} />
        <Stack.Screen name="Write" component={MarketWritePage} />
        <Stack.Screen
          name="Room"
          component={RoomScreen}
          options={({route, navigation}) => ({
            headerShown: true,
            headerStyle: {
              backgroundColor: '#26EBA6',
            },
            headerTintColor: '#fff',
            title: route.params.thread.sellerName,
            headerRight: () => <DialogPage navigation={navigation} />,
          })}
        />
        <Stack.Screen
          name="ChatList"
          component={ChatListScreen}
          options={({navigation}) => ({
            title: '채팅리스트',
            headerShown: true,
            headerStyle: {
              backgroundColor: '#26EBA6',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
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
      </Stack.Navigator>
    </>
  );
};
export default MarketStackNavigationUI;
