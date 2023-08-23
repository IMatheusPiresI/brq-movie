import React, { createElement } from 'react';
import { IProps, IViewProps } from './types';

import View from './view';

export const CardListFilm: React.FC<IProps> = ({ film }) => {
  const viewProps: IViewProps = {
    film,
  };
  return createElement(View, viewProps);
};
