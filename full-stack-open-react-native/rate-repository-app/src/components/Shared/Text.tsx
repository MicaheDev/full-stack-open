import { styled } from "nativewind";
import React, { ReactNode } from "react";
import {
  Text as NativeText,
  StyleProp,
  TextStyle,
} from "react-native";
import { platformFont } from "../../utils/theme";

const StyledText = styled(NativeText);

type TextProps = {
  children: ReactNode;
  className?: string;
  style?: StyleProp<TextStyle>;
};


export default function Text({ children, className, style }: TextProps) {
  return (
    <StyledText className={`${platformFont} ${className}`} style={style}>
      {children}
    </StyledText>
  );
}
