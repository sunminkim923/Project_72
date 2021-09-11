import styled from 'styled-components/native';
export const Container = styled.View``;
export const Wrapper = styled.ScrollView``;
export const TitleWrapper = styled.View`
  padding: 30px;
  justify-content: center;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: #eaeaea;
`;
export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;
export const ListItemWrapper = styled.TouchableOpacity`
  flex-direction: row;
  padding: 10px 30px;
  border-bottom-width: 1px;
  border-bottom-color: #eaeaea;
`;
export const UserImage = styled.View`
  justify-content: center;
  align-items: center;
`;
export const ListItemInfoWrapper = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const ListItemLeftWrapper = styled.View`
  /* justify-content: space-between; */
  /* padding-left: 15px; */
`;
export const UserName = styled.Text`
  font-size: 16px;
  color: #333;
`;
export const ChatContents = styled.Text`
  font-size: 14px;
  color: #bdbdbd;
`;
export const ListItemRightWrapper = styled.View`
  width: 25px;
  height: 25px;
  border-radius: 25px;
  background-color: #eb4b26;
  justify-content: center;
  align-items: center;
`;
export const MessageCount = styled.Text`
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: #fff;
`;
