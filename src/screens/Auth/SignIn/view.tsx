import React from 'react';

import { IViewProps } from './types';
import Logo from '@assets/images/logo.png';
import * as S from './styles';
import { Image, SafeAreaView, StatusBar } from 'react-native';
import InputAuth from '@src/components/InputAuth';
import { KeyboardDismiss } from '@src/components/KeyboardDismiss';

const SignInView: React.FC<IViewProps> = ({ onClearInput, formik }) => (
  <S.Container>
    <StatusBar barStyle={'light-content'} translucent />
    <KeyboardDismiss>
      <S.SafeAreaContent>
        <S.Content>
          <S.LogoImage source={Logo} alt="logo BRQMovies" />
          <S.BoxForm>
            <InputAuth
              label="Usuário"
              type="user"
              value={formik.values.user}
              onChangeText={formik.handleChange('user')}
              onClear={onClearInput}
            />
            <S.BoxInputForm>
              <InputAuth
                label="Senha"
                type="password"
                value={formik.values.password}
                onChangeText={formik.handleChange('password')}
                onClear={onClearInput}
              />
            </S.BoxInputForm>
          </S.BoxForm>
        </S.Content>
      </S.SafeAreaContent>
    </KeyboardDismiss>
  </S.Container>
);

export default SignInView;
