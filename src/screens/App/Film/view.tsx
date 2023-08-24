import React from 'react';

import * as S from './styles';
import { IViewProps } from './types';
import HearthSVG from '@assets/svg/hearth.svg';
import StarSVG from '@assets/svg/star.svg';
import CalendarSVG from '@assets/svg/calendar.svg';
import BellSVG from '@assets/svg/bell.svg';
import ArrowBackDefaultSVG from '@assets/svg/arrow-back-default.svg';
import ArrowBackPrimarySVG from '@assets/svg/arrow-back-primary.svg';
import HearthDefaultSVG from '@assets/svg/hearth-default.svg';
import HearthPrimarySVG from '@assets/svg/hearth-primary.svg';

const FilmView: React.FC<IViewProps> = ({
  film,
  safeAreaTop,
  rAnimateShowHeader,
  handleSaveFilmToFavorite,
  getUrlImage,
  scrollHandler,
  handleGoBack,
}) => {
  return (
    <S.ContainerFilm>
      <S.Header safeAreaTop={safeAreaTop}>
        <S.BoxHeaderTransparent>
          <S.ButtonGoBack onPress={handleGoBack}>
            <ArrowBackDefaultSVG width={24} height={24} />
          </S.ButtonGoBack>
          <S.ButtonFavorite onPress={handleSaveFilmToFavorite}>
            <HearthDefaultSVG width={24} height={24} />
          </S.ButtonFavorite>
        </S.BoxHeaderTransparent>
        <S.BoxHeaderBackground
          safeAreaTop={safeAreaTop}
          style={rAnimateShowHeader}>
          <S.ButtonGoBack onPress={handleGoBack}>
            <ArrowBackPrimarySVG width={24} height={24} />
          </S.ButtonGoBack>
          <S.TitleHeader numberOfLines={1}>{film.name}</S.TitleHeader>
          <S.ButtonFavorite onPress={handleSaveFilmToFavorite}>
            <HearthPrimarySVG width={24} height={24} />
          </S.ButtonFavorite>
        </S.BoxHeaderBackground>
      </S.Header>
      <S.Container onScroll={scrollHandler} scrollEventThrottle={16}>
        <S.BoxFilmPoster>
          <S.ImagePoster
            source={{
              uri: getUrlImage(),
            }}
            resizeMode="cover"
          />
        </S.BoxFilmPoster>
        <S.Content>
          <S.TitleFilm>{film.name}</S.TitleFilm>
          <S.TitleSinopse>SINOPSE</S.TitleSinopse>
          <S.Sinopse>
            {film.overview !== ''
              ? film.overview
              : 'Esse produto não possui sinopse disponível'}
          </S.Sinopse>
          <S.BoxFilmInfo>
            <S.BoxRowLabel>
              <S.BoxLabel>
                <S.BoxRowHeaderLabel>
                  <HearthSVG width={24} height={24} />
                  <S.TitleBoxLabel>Label</S.TitleBoxLabel>
                </S.BoxRowHeaderLabel>
                <S.ValueBoxLabel>Text</S.ValueBoxLabel>
              </S.BoxLabel>
              <S.BoxLabel>
                <S.BoxRowHeaderLabel>
                  <StarSVG width={24} height={24} />
                  <S.TitleBoxLabel>Label</S.TitleBoxLabel>
                </S.BoxRowHeaderLabel>
                <S.ValueBoxLabel>Text</S.ValueBoxLabel>
              </S.BoxLabel>
            </S.BoxRowLabel>
            <S.BoxRowLabel>
              <S.BoxLabel>
                <S.BoxRowHeaderLabel>
                  <CalendarSVG width={24} height={24} />
                  <S.TitleBoxLabel>Label</S.TitleBoxLabel>
                </S.BoxRowHeaderLabel>
                <S.ValueBoxLabel>Text</S.ValueBoxLabel>
              </S.BoxLabel>
              <S.BoxLabel>
                <S.BoxRowHeaderLabel>
                  <BellSVG width={24} height={24} />
                  <S.TitleBoxLabel>Label</S.TitleBoxLabel>
                </S.BoxRowHeaderLabel>
                <S.ValueBoxLabel>Text</S.ValueBoxLabel>
              </S.BoxLabel>
            </S.BoxRowLabel>
          </S.BoxFilmInfo>
        </S.Content>
      </S.Container>
    </S.ContainerFilm>
  );
};

export default FilmView;
