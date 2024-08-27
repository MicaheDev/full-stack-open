import { useCallback } from "react";
import {
  Alert,
  Linking,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import Text from "./Text";

type LinkProps = TouchableOpacityProps & {
  url: string;
  children: string;
  textClassName?: string;
};

export default function LinkButton({
  url,
  children,
  textClassName,
  ...props
}: LinkProps) {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);
  return (
    <TouchableOpacity onPress={handlePress} {...props}>
      <Text className={textClassName}>{children}</Text>
    </TouchableOpacity>
  );
}
