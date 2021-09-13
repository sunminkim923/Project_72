// import React from 'react'
// import ChatListUI from './chatListPresenter'
// const ChatList = () => {
//     return(
//         <ChatListUI/>
//     )
// }
// export default ChatList

import React, {useContext, useEffect, useState} from 'react';
import {View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {Title, List, Divider} from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';
import FormButton from '../../../../commons/formButton/formButton';
// import {AuthContext} from '../navigation/AuthProvider';
import Loading from '../../../../commons/loading/loading';
import useStatusBar from '../../../../commons/statusBar/statusBar';

export default function ChatListScreen({navigation}) {
  useStatusBar('light-content');
  const [threads, setThreads] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = firestore()
      .collection('THREADS')
      .orderBy('latestMessage.createdAt', 'desc')
      .onSnapshot((querySnapshot) => {
        const threads = querySnapshot.docs.map((documentSnapshot) => {
          return {
            _id: documentSnapshot.id,
            //give defaults
            name: '',
            latestMessage: {
              text: '',
            },
            ...documentSnapshot.data(),
          };
        });
        setThreads(threads);
        if (loading) {
          setLoading(false);
        }
      });
    return () => unsubscribe();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <View style={styles.contatiner}>
      <FlatList
        key={threads}
        data={threads}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <Divider />}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Room', {thread: item})}>
            <List.Item
              title={item.name}
              description="Item description"
              titleNumberOfLines={1}
              titleStyle={styles.listTitle}
              descriptionStyle={styles.listDescription}
              descriptionNumberOfLines={1}
              // description={item.latestMessage.text}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contatiner: {
    backgroundColor: '#f5f5f5',
    flex: 1,
  },
  listTitle: {
    fontSize: 22,
  },
  listDescription: {
    fontSize: 16,
  },
});
