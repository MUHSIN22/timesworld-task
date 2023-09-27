import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { errorMessageStyle, inputStyle } from "../../../theme/styles";

export default function PrimaryInput({
  label,
  errorMessage,
  register,
  required,
  type = "text",
  placeholder,
}: {
  label?: string;
  errorMessage: string | undefined;
  register: any;
  required?: boolean;
  type?: string;
  placeholder?: string;
}) {
  return (
    <FormControl isInvalid={errorMessage ? true : false} isRequired={required}>
      {
        label &&
        <FormLabel variant="primary">{label}</FormLabel>

      }
      <Input
        type={type || "text"}
        placeholder={placeholder}
        sx={inputStyle}
        {...register}
      />

      <FormErrorMessage sx={errorMessageStyle}>{errorMessage}</FormErrorMessage>
    </FormControl>
  );
}
