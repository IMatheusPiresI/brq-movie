import React, { createElement } from 'react';
import { IProps, IViewProps } from './types';

import View from './view';

export const ListFilms: React.FC<IProps> = ({ films }) => {
  const viewProps: IViewProps = {
    films,
  };
  return createElement(View, viewProps);
};
