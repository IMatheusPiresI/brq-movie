import React, { createElement, useMemo, useRef } from 'react';
import {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputFocusEventData,
} from 'react-native';
import { IProps, IViewProps } from './types';

import View from './view';
import theme from '@src/resources/theme';

const InputAuth: React.FC<IProps> = ({
  label,
  type,
  error,
  touched,
  onClear,
  ...rest
}) => {
  const ANIMATE_TIMEOUT = 400;
  const labelAnimate = useSharedValue(0);
  const inputRef = useRef<TextInput>(null);

  const showError = !!touched && !!error;

  const handleFocus = () => {
    inputRef.current?.focus();
    labelAnimate.value = withTiming(1, { duration: ANIMATE_TIMEOUT });
  };

  const handleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    inputRef.current?.blur();
    if (rest.onBlur) {
      rest.onBlur(e);
    }
    if (rest.value && rest.value.length > 1) return;
    labelAnimate.value = withTiming(0, { duration: ANIMATE_TIMEOUT });
  };

  const handleClear = () => {
    onClear(type);
    inputRef.current?.blur();
    labelAnimate.value = withTiming(0, { duration: ANIMATE_TIMEOUT });
  };

  const rAnimateLabel = useAnimatedStyle(() => {
    const color = interpolateColor(
      labelAnimate.value,
      [0, 1],
      [theme.colors.secondary, theme.colors.primary],
    );

    return {
      fontSize: interpolate(labelAnimate.value, [0, 1], [16, 12]),
      bottom: interpolate(labelAnimate.value, [0, 1], [16, 34]),
      color,
    };
  });

  const rAnimateBorder = useAnimatedStyle(() => {
    const borderBottomColor = interpolateColor(
      labelAnimate.value,
      [0, 1],
      [
        showError ? theme.colors.error : theme.colors.secondary,
        showError ? theme.colors.error : theme.colors.primary,
      ],
    );

    return {
      borderBottomColor,
    };
  });

  const viewProps: IViewProps = {
    rAnimateLabel,
    rAnimateBorder,
    label,
    type,
    error,
    showError,
    touched,
    inputRef,
    handleClear,
    handleFocus,
    handleBlur,
    ...rest,
  };

  return createElement(View, viewProps);
};

export default InputAuth;
