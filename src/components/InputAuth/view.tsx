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
    <S.Container>
      <S.InputContainer style={rAnimateBorder}>
        <S.InputText
          {...rest}
          onFocus={handleFocus}
          onBlur={handleBlur}
          ref={inputRef}
        />
        <S.BoxIcon>
          {type === 'password' ? (
            <LockSVG onPress={handleFocus} />
          ) : (
            <UserSVG onPress={handleFocus} />
          )}
        </S.BoxIcon>
        <S.Label style={rAnimateLabel} onPress={handleFocus}>
          {label}
        </S.Label>
        <S.ButtonClearInput onPress={handleClear}>
          <ClearSVG />
        </S.ButtonClearInput>
      </S.InputContainer>
      {showError && <S.Error>{error}</S.Error>}
    </S.Container>
  );
};

export default InputAuthView;
