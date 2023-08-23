import { useNavigation } from '@react-navigation/native';
import React, { createElement } from 'react';
import { IProps, IViewProps } from './types';

import View from './view';

export const CardListFilm: React.FC<IProps> = ({ film }) => {
  const navigation = useNavigation();

  const handleShowFilm = () => {
    navigation.navigate('Film', {
      film,
    });
  };
  const viewProps: IViewProps = {
    film,
    handleShowFilm,
  };
  return createElement(View, viewProps);
};
