import { TouchableOpacityProps } from 'react-native';

type IButtonVariants = 'secondary';

type IButtonVariant = {
  variant?: IButtonVariants;
};

type IProps = {
  title: string;
} & TouchableOpacityProps &
  IButtonVariant;

type IViewProps = {
  title: string;
} & TouchableOpacityProps &
  IButtonVariant;

type IDisable = {
  disabled?: boolean;
};
export type { IProps, IViewProps, IDisable, IButtonVariant };
