import { Platform } from "react-native";

export const platformFont =
  Platform.OS === "ios" ? "font-[Arial]" : "font-[Roboto]";
