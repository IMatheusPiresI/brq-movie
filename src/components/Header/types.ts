type IViewProps = {
  showOptions: boolean;
  rAnimateShowOptions: {
    top: number;
    right: number;
  };
  handleOpenOptions: () => void;
  handleCloseOptions: () => void;
  handleLogout: () => void;
} & ISafeMarginTop;

type ISafeMarginTop = {
  safeMarginTop: number;
};

export type { IViewProps, ISafeMarginTop };
