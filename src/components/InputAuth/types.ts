import {
  NativeSyntheticEvent,
  TextInput,
  TextInputFocusEventData,
  TextInputProps,
} from 'react-native';

type ITypeAuthInput = 'user' | 'password';
type IProps = {
  label: string;
  type: ITypeAuthInput;
  error?: string;
  touched?: boolean;
  onClear: (type: ITypeAuthInput) => void;
} & TextInputProps;

export type Invalid = {
  invalid: boolean;
};

type IViewProps = {
  rAnimateLabel: {
    fontSize: number;
    bottom: number;
  };
  rAnimateBorder: {
    borderBottomColor: string;
  };
  inputRef: React.RefObject<TextInput>;
  showError: boolean;
  label: string;
  type: ITypeAuthInput;
  error?: string;
  touched?: boolean;
  handleFocus: () => void;
  handleBlur: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  handleClear: () => void;
} & TextInputProps;

export type { IProps, IViewProps, ITypeAuthInput };
