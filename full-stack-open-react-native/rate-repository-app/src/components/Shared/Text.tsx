import { styled } from "nativewind";
import React, { ReactNode } from "react";
import { Text as NativeText, StyleProp, TextStyle } from "react-native";

const StyledText = styled(NativeText);

type TextProps = {
  children: ReactNode;
  className?: string;
  style?: StyleProp<TextStyle>; // Corrige el tipo para estilos
};

export default function Text({ children, className, style }: TextProps) {
  return <StyledText className={className} style={style}>{children}</StyledText>;
}
