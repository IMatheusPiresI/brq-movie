import { ITMDBFilm } from '@src/services/TMDB/types';
import React from 'react';
import { ListRenderItemInfo } from 'react-native';
import { CardListFilm } from '../CardListFilm';

import * as S from './styles';
import { IViewProps } from './types';

const ListFilmsView: React.FC<IViewProps> = ({ films }) => {
  const renderItem = ({ item }: ListRenderItemInfo<ITMDBFilm>) => {
    return <CardListFilm film={item} />;
  };
  const renderSeparator = () => {
    return <S.Separator />;
  };

  return (
    <S.Container>
      <S.List
        data={films}
        numColumns={2}
        keyExtractor={(item) => `${item.id}`}
        initialNumToRender={10}
        decelerationRate="fast"
        renderItem={renderItem}
        ListEmptyComponent={() => (
          <S.ContentEmpty>
            <S.MessageEmpty>Nenhum filme, encontrado!</S.MessageEmpty>
          </S.ContentEmpty>
        )}
        ItemSeparatorComponent={renderSeparator}
      />
    </S.Container>
  );
};

export default ListFilmsView;
