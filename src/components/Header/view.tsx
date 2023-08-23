import React from 'react';
import { Modal, TouchableWithoutFeedback } from 'react-native';

import { IViewProps } from './types';
import * as S from './styles';

import OptionsSVG from '@assets/svg/options.svg';
import DotsSVG from '@assets/svg/dots.svg';
import LogoutSVG from '@assets/svg/logout.svg';

const HeaderView: React.FC<IViewProps> = ({
  safeMarginTop,
  showOptions,
  rAnimateShowOptions,
  handleCloseOptions,
  handleOpenOptions,
  handleLogout,
}) => {
  return (
    <S.Container safeMarginTop={safeMarginTop}>
      <S.TitleApp numberOfLines={1}>BRQ Movies</S.TitleApp>
      <S.ButtonOptions
        activeOpacity={0.7}
        onPress={handleOpenOptions}
        testID="show-options">
        {showOptions ? (
          <OptionsSVG width={24} height={24} />
        ) : (
          <DotsSVG width={24} height={24} testID="icon-show-options" />
        )}
      </S.ButtonOptions>
      <Modal visible={showOptions} transparent>
        <TouchableWithoutFeedback
          onPress={handleCloseOptions}
          touchSoundDisabled
          testID="close-options">
          <S.ModalContent>
            <S.BoxOptions style={rAnimateShowOptions} testID="box-options">
              <S.Option onPress={handleLogout} testID="option-logout">
                <LogoutSVG width={24} height={24} />
                <S.LogoutTitle>Sair</S.LogoutTitle>
              </S.Option>
            </S.BoxOptions>
          </S.ModalContent>
        </TouchableWithoutFeedback>
      </Modal>
    </S.Container>
  );
};

export default HeaderView;
