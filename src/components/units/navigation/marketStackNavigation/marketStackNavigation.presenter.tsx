import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MarketListPage from '../../../../../pages/screens/market';
import MarketDetailPage from '../../../../../pages/screens/market/[marketId]';
import MarketWritePage from '../../../../../pages/screens/market/new';
const Stack = createNativeStackNavigator();
const MarketStackNavigationUI = () => {
  return (
    <>
      <Stack.Navigator screenOptions={() => ({headerShown: false})}>
        <Stack.Screen name="List" component={MarketListPage} />
        <Stack.Screen name="Detail" component={MarketDetailPage} />
        <Stack.Screen name="Write" component={MarketWritePage} />
      </Stack.Navigator>
    </>
  );
};
export default MarketStackNavigationUI;
