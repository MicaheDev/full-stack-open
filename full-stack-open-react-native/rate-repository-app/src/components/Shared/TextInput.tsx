import { styled } from "nativewind";
import {
  StyleProp,
  TextStyle,
  TextInput as NativeTextInput,
  TextInputProps as NativeTextInputProps,
} from "react-native";
import { platformFont } from "../../utils/theme";

const StyledTextInput = styled(NativeTextInput);

type TextInputProps = NativeTextInputProps & {
  className?: string;
  style?: StyleProp<TextStyle>;
};

export default function TextInput({
  className,
  style,
  onChangeText,
  onBlur,
  value,
  ...props
}: TextInputProps) {
  return (
    <StyledTextInput
      onBlur={onBlur}
      onChangeText={onChangeText}
      className={`${platformFont} ${className}`}
      value={value}
      style={style}
      {...props}
    />
  );
}
