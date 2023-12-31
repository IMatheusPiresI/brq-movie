import { FlatList } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const List = styled.FlatList.attrs({
  contentContainerStyle: {
    paddingHorizontal: 16,
    paddingVertical: 32,
  },
  columnWrapperStyle: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
})`` as unknown as typeof FlatList;

export const Separator = styled.View`
  height: 16px;
`;

export const ContentEmpty = styled.View`
  flex: 1;
`;

export const MessageEmpty = styled.Text`
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.NUNITO_BOLD};
  color: ${({ theme }) => theme.colors.secondary};
  text-align: center;
`;
