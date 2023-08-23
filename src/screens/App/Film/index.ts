import { useNavigation, useRoute } from '@react-navigation/native';
import { TMDBService } from '@src/services/TMDB';
import { IResultTMDBGetFilms, ITMDBFilm } from '@src/services/TMDB/types';
import React, { createElement } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { NativeScrollEvent, NativeSyntheticEvent } from 'react-native';
import { IViewProps } from './types';

import View from './view';
import {
  interpolate,
  opacity,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import theme from '@src/resources/theme';

const Film: React.FC = () => {
  const POSTER_HEIGHT = theme.metrics.screenHeight * 0.7;
  const animateShowHeader = useSharedValue(0);
  const { top } = useSafeAreaInsets();
  const route = useRoute();
  const navigation = useNavigation();
  const { film } = route.params as { film: ITMDBFilm };

  const handleGoBack = () => {
    navigation.goBack();
  };

  const scrollHandler = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    animateShowHeader.value = event.nativeEvent.contentOffset.y;
  };

  const rAnimateShowHeader = useAnimatedStyle(
    () => ({
      opacity: interpolate(
        animateShowHeader.value,
        [0, POSTER_HEIGHT - theme.metrics.screenHeight * 0.45],
        [0, 1],
      ),
      zIndex: interpolate(
        animateShowHeader.value,
        [0, POSTER_HEIGHT - theme.metrics.screenHeight * 0.45],
        [0, 99],
      ),
    }),
    [],
  );

  const viewProps: IViewProps = {
    film,
    safeAreaTop: top,
    rAnimateShowHeader,
    scrollHandler,
    handleGoBack,
  };

  return createElement(View, viewProps);
};

export default Film;
