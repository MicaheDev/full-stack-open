import { useField } from "formik";
import TextInput from "./TextInput";
import Text from "./Text";
import { TextInputProps } from "react-native";

type FormikTextInputProps = TextInputProps & {
  name: string;
};

export default function FormikTextInput({
  name,
  ...props
}: FormikTextInputProps) {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <>
      <TextInput
        className="px-4 py-4 border rounded-md border-gray mb-2"
        onChangeText={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        {...props}
      />
      {showError && <Text className="text-red-500 my-2">{meta.error}</Text>}
    </>
  );
}
