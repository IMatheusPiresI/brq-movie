import { TextInput, TextInputProps } from 'react-native';

type ITypeAuthInput = 'user' | 'password';
type IProps = {
  label: string;
  type: ITypeAuthInput;
  onClear: (type: ITypeAuthInput) => void;
} & TextInputProps;

type IViewProps = {
  rAnimateLabel: {
    fontSize: number;
    bottom: number;
  };
  rAnimateBorder: {
    borderBottomColor: string;
  };
  inputRef: React.RefObject<TextInput>;
  label: string;
  type: ITypeAuthInput;
  handleFocus: () => void;
  handleBlur: () => void;
  handleClear: () => void;
} & TextInputProps;

export type { IProps, IViewProps, ITypeAuthInput };
