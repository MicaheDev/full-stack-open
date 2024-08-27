import { styled } from "nativewind";
import React, { ReactNode } from "react";
import {
  Text as NativeText,
  TextProps as NativeTexProps
} from "react-native";
import { platformFont } from "@utils/theme";

const StyledText = styled(NativeText);

type TextProps = {
  children: ReactNode;
  className?: string;
};


export default function Text({ children, className, ...props }: TextProps & NativeTexProps) {
  return (
    <StyledText className={`${platformFont} ${className}`} {...props}>
      {children}
    </StyledText>
  );
}
