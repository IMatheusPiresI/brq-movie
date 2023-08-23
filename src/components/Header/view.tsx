import React from 'react';
import { Modal, TouchableWithoutFeedback } from 'react-native';

import { IViewProps } from './types';
import * as S from './styles';

import OptionsSVG from '@assets/svg/options.svg';
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
      <S.ButtonOptions activeOpacity={0.7} onPress={handleOpenOptions}>
        <OptionsSVG width={24} height={24} />
      </S.ButtonOptions>
      <Modal visible={showOptions} transparent>
        <TouchableWithoutFeedback
          onPress={handleCloseOptions}
          touchSoundDisabled>
          <S.ModalContent>
            <S.BoxOptions style={rAnimateShowOptions}>
              <S.Option onPress={handleLogout}>
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
