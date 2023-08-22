import React, { createElement } from 'react';
import { IProps, IViewProps } from './types';

import View from './view';

export const Button: React.FC<IProps> = ({ title, variant, ...rest }) => {
  const viewProps: IViewProps = { title, variant, ...rest };

  return createElement(View, viewProps);
};
