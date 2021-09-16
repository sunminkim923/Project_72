import React, {useState, useContext, useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  GiftedChat,
  Bubble,
  Send,
  SystemMessage,
} from 'react-native-gifted-chat';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import {GlobalContext} from '../../../../../../App';
import firestore from '@react-native-firebase/firestore';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator;

export default function RoomScreen({route}) {
  const {userInfo} = useContext(GlobalContext);

  const {thread} = route.params;

  const [messages, setMessages] = useState([]);

  async function handleSend(messages) {
    const text = messages[0].text;

    firestore()
      .collection('THREADS')
      .doc(thread._id)
      .collection('MESSAGES')
      .add({
        text,
        createdAt: new Date().getTime(),
        user: {
          _id: userInfo._id,
          email: userInfo.email,
        },
      });

    await firestore()
      .collection('THREADS')
      .doc(thread._id)
      .set(
        {
          latestMessage: {
            text,
            createdAt: new Date().getTime(),
          },
        },
        {merge: true},
      );
  }

  useEffect(() => {
    const messagesListener = firestore()
      .collection('THREADS')
      .doc(thread._id)
      .collection('MESSAGES')
      .orderBy('createdAt', 'desc')
      .onSnapshot((querySnapshot) => {
        const messages = querySnapshot.docs.map((doc) => {
          const firebaseData = doc.data();

          const data = {
            _id: doc.id,
            text: '',
            createdAt: new Date().getTime(),
            ...firebaseData,
          };

          if (!firebaseData.system) {
            data.user = {
              ...firebaseData.user,
              name: userInfo.name,
            };
          }

          return data;
        });

        setMessages(messages);
      });

    return () => messagesListener();
  }, []);

  function renderBubble(props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: '#6646ee',
          },
        }}
        textStyle={{
          right: {
            color: '#fff',
          },
        }}
      />
    );
  }

  function renderSend(props) {
    return (
      <Send {...props}>
        <View style={styles.sendingContainer}>
          <Icon name="send" size={38} color="#6646ee" />
        </View>
      </Send>
    );
  }

  function renderLoading() {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#6646ee" />
      </View>
    );
  }

  function renderSystemMessage(props) {
    return (
      <SystemMessage
        {...props}
        wrapperStyle={styles.systemMessageWrapper}
        textStyle={styles.systemMessageText}
      />
    );
  }

  return (
    <GiftedChat
      messages={messages}
      onSend={handleSend}
      user={{_id: userInfo._id}}
      renderBubble={renderBubble}
      placeholder="메세지를 입력해주세요."
      showUserAvatar
      alwaysShowSend
      renderSend={renderSend}
      renderLoading={renderLoading}
      renderSystemMessage={renderSystemMessage}
    />
  );
}

const styles = StyleSheet.create({
  sendingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  systemMessageWrapper: {
    backgroundColor: '#6646ee',
    borderRadius: 4,
    padding: 5,
  },
  systemMessageText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
  },
});
