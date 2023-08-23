import React from 'react';

import { IViewProps } from './types';
import Logo from '@assets/images/logo.png';
import * as S from './styles';
import InputAuth from '@src/components/InputAuth';
import { KeyboardDismiss } from '@src/components/KeyboardDismiss';
import { Button } from '@src/components/Button';
import { KeyboardAvoid } from '@src/components/KeyboardAvoid';

const SignInView: React.FC<IViewProps> = ({ onClearInput, formik }) => (
  <S.Container>
    <S.SafeAreaContent>
      <KeyboardAvoid>
        <KeyboardDismiss>
          <S.Content>
            <S.BoxForm>
              <S.BoxImage>
                <S.LogoImage source={Logo} alt="logo BRQMovies" />
              </S.BoxImage>
              <InputAuth
                label="Usuário"
                type="user"
                value={formik.values.user}
                onChangeText={formik.handleChange('user')}
                onClear={onClearInput}
                error={formik.errors.user}
                touched={formik.touched.user}
                onBlur={formik.handleBlur('user')}
                autoCapitalize="none"
              />
              <S.BoxInputForm>
                <InputAuth
                  label="Senha"
                  type="password"
                  secureTextEntry
                  value={formik.values.password}
                  onChangeText={formik.handleChange('password')}
                  onClear={onClearInput}
                  error={formik.errors.password}
                  touched={formik.touched.password}
                  onBlur={formik.handleBlur('password')}
                  autoCapitalize="none"
                  keyboardType="numeric"
                />
              </S.BoxInputForm>
              <Button
                title="Entrar"
                disabled={!formik.isValid}
                onPress={() => formik.handleSubmit()}
              />
              <S.BoxButtonForgotPassword>
                <Button title="Esqueci a Senha" variant="secondary" />
              </S.BoxButtonForgotPassword>
            </S.BoxForm>
          </S.Content>
        </KeyboardDismiss>
      </KeyboardAvoid>
    </S.SafeAreaContent>
  </S.Container>
);

export default SignInView;
