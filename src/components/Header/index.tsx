import React, { createElement } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { IViewProps } from './types';

import View from './view';
export const Header: React.FC = () => {
  const { top } = useSafeAreaInsets();

  const viewProps: IViewProps = {
    safeMarginTop: top,
  };

  return createElement(View, viewProps);
};
