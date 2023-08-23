import React, { useEffect } from 'react';
import { IViewProps } from './types';

import * as S from './styles';
import {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

import UserSVG from '@assets/svg/user.svg';
import LockSVG from '@assets/svg/lock.svg';
import ClearSVG from '@assets/svg/clear.svg';

const InputAuthView: React.FC<IViewProps> = ({
  rAnimateLabel,
  label,
  type,
  inputRef,
  rAnimateBorder,
  showError,
  error,
  touched,
  handleFocus,
  handleClear,
  handleBlur,
  ...rest
}) => {
  return (
    <S.Container testID="input-auth-container">
      <S.InputContainer style={rAnimateBorder} testID="input-container">
        <S.InputText
          {...rest}
          onFocus={handleFocus}
          onBlur={handleBlur}
          ref={inputRef}
          testID="input-auth"
        />
        <S.BoxIcon>
          {type === 'password' ? (
            <LockSVG onPress={handleFocus} testID="password-icon" />
          ) : (
            <UserSVG onPress={handleFocus} testID="user-icon" />
          )}
        </S.BoxIcon>
        <S.Label style={rAnimateLabel} onPress={handleFocus}>
          {label}
        </S.Label>
        <S.ButtonClearInput onPress={handleClear} testID="input-auth-clear">
          <ClearSVG />
        </S.ButtonClearInput>
      </S.InputContainer>
      {showError && <S.Error>{error}</S.Error>}
    </S.Container>
  );
};

export default InputAuthView;
