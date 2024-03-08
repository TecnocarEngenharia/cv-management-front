import { ChangeEvent } from "react";
import * as C from "./style";

interface InputFieldProps {
  label?: string;
  value?: string;
  type?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  className?: string;
  disabled?: boolean;
  placeholder?: string;
  required?: boolean;
  name?: string;
}

const InputField = ({
  label,
  value,
  type,
  onChange,
  className,
  disabled,
  placeholder,
  required,
  name,

}: InputFieldProps) => (
  <C.InputWrapper className={className}>
    <C.Label className={className}>{label}</C.Label>
    <C.Input
      value={value}
      type={type}
      onChange={onChange}
      disabled={disabled}
      placeholder={placeholder}
      className={className}
      required={required}
      name={name}
    />
    
  </C.InputWrapper>
);

export default InputField;
