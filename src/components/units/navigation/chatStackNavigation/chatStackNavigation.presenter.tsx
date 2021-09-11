import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import ChatListPage from '../../../../../pages/screens/chat'
const Stack = createNativeStackNavigator()
const ChatStackNavigationUI = () => {
    return(
        <>
            <Stack.Navigator
            screenOptions={()=>({headerShown: false, })}
            >
                <Stack.Screen name='List' component={ChatListPage}/>
            </Stack.Navigator>
        </>
    )
}
export default ChatStackNavigationUI