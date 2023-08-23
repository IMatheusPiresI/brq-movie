import React, { createElement, useCallback, useEffect, useState } from 'react';
import {
  Easing,
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Platform } from 'react-native';
import { IViewProps } from './types';

import View from './view';
import { StackActions, useNavigation } from '@react-navigation/native';
export const Header: React.FC = () => {
  const navigation = useNavigation();
  const animateShowOptions = useSharedValue(0);
  const [showOptions, setShowOptions] = useState<boolean>(false);

  const { top } = useSafeAreaInsets();
  const ANIMATE_POSITION = Platform.OS === 'android' ? top + 36 : top + 56;

  const handleOpenOptions = () => {
    setShowOptions(true);
  };

  const handleCloseOptions = () => {
    setShowOptions(false);
  };

  const handleLogout = () => {
    handleCloseOptions();
    navigation.dispatch(StackActions.replace('Authentication'));
  };

  const verifyShowOptions = useCallback(() => {
    if (showOptions) {
      animateShowOptions.value = withTiming(1, {
        duration: 1250,
        easing: Easing.elastic(2),
      });
      return;
    }
    animateShowOptions.value = withTiming(0, { duration: 0 });
  }, [showOptions]);

  const rAnimateShowOptions = useAnimatedStyle(() => ({
    top: interpolate(
      animateShowOptions.value,
      [0, 0.6, 1],
      [ANIMATE_POSITION - 20, ANIMATE_POSITION + 4, ANIMATE_POSITION],
      Extrapolate.CLAMP,
    ),
    right: interpolate(
      animateShowOptions.value,
      [0, 0.7, 1],
      [-117, 22, 16],
      Extrapolate.CLAMP,
    ),
  }));

  useEffect(() => {
    verifyShowOptions();
  }, [verifyShowOptions]);

  const viewProps: IViewProps = {
    safeMarginTop: top,
    showOptions,
    rAnimateShowOptions,
    handleLogout,
    handleOpenOptions,
    handleCloseOptions,
  };

  return createElement(View, viewProps);
};
