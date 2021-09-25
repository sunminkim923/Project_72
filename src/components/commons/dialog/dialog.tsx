import React, {useContext, useState} from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Dialog from 'react-native-dialog';
import {GlobalContext} from '../../../../App';
import FinshScreen from '../../units/screens/chat/finish/finishScreen';

export default function DialogPage(props) {
  const [visible, setVisible] = useState(false);
  const [isStart, setIsStart] = useState(false);
  const [routeData, setRouteData] = useState('');

  // console.log('프롭스', props.route.params.thread.title);
  console.log('프롭스', routeData);

  const {userInfo} = useContext(GlobalContext);

  const showDialog = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleOk = () => {
    setIsStart(true);
    setVisible(false);
  };

  const handleFinish = () => {
    setIsStart(false);
    setVisible(false);
    setRouteData(props.route.params.thread.title);
    props.navigation.navigate('Finish');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={showDialog}>
        <Text> {isStart ? '즐거운 산책중🐕 ' : '산책시작🐕'} </Text>
      </TouchableOpacity>
      <Dialog.Container visible={visible}>
        <Dialog.Title>즐거운 산책🎵</Dialog.Title>
        <Dialog.Description>
          {isStart
            ? ' 산책을 종료하시겠습니까? '
            : '즐거운 산책을 시작하시겠습니까?'}
        </Dialog.Description>
        <Dialog.Button label="아니오" onPress={handleCancel} />
        {/* <Dialog.Button label="네" onPress={isStart ? handleFinish : handleOk} /> */}
        <Dialog.Button
          label="네"
          onPress={() => {
            handleFinish(routeData);
          }}
        />
      </Dialog.Container>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 120,
    height: 40,
    backgroundColor: '#26EBA6',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    borderRadius: 8,
    borderWidth: 1,
  },
});
