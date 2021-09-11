import styled from 'styled-components/native'
export const Container = styled.ScrollView`
    
`
export const Wrapper = styled.View`
    flex-direction: row;
    padding: 30px;
    border-bottom-width: 1px;
    border-bottom-color: #eaeaea;
`
export const ImageWrapper = styled.View`
    background-color: gray;
    width: 100px;
    height: 100px;
    border-radius: 10px;
`
export const ContentsWrapper = styled.View`
    padding-left: 30px;
    justify-content: space-between;
    align-items: flex-start;
`
export const ItemTitle = styled.Text`
    font-weight: bold;
    font-size: 14px;
`
export const ItemAddress = styled.Text`
    font-size:12px;
    color: #828282;
`
export const ItemPrice = styled.Text`
    font-weight: bold;
    font-size:14px;
    color: #26EBA6;
`
export const ItemLike = styled.Text`
    font-size: 12px;
    color: #828282;
`
export const ButtonWrapper = styled.View`
    justify-content: center;
    align-items: center;
    width: 65px;
    height: 65px;
    position: absolute;
    bottom: 15px;
    right: 15px;
`
export const WriteButton = styled.View`
    width: 65px;
    height: 65px;
    justify-content: center;
    align-items: center;
    border-radius: 65px;
    background-color: #26EBA6;
`