import { ITMDBFilm } from '@src/services/TMDB/types';
import { NativeScrollEvent, NativeSyntheticEvent } from 'react-native';

type IViewProps = {
  film: ITMDBFilm;
  safeAreaTop: number;
  rAnimateShowHeader: {
    opacity: number;
    zIndex: number;
  };
  handleSaveFilmToFavorite: () => void;
  handleGoBack: () => void;
  scrollHandler: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
};

type ISafeAreaHeaderTop = {
  safeAreaTop: number;
};
export type { IViewProps, ISafeAreaHeaderTop };
