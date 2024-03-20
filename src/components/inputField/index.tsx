import { ChangeEvent, FocusEvent } from "react";
import * as C from "./style";

interface InputFieldProps {
  label?: string;
  value?: string;
  type?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void; // tornando onBlur opcional
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
  onBlur, // adicionando onBlur aos argumentos
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
      onBlur={onBlur} // passando onBlur para o input
      disabled={disabled}
      placeholder={placeholder}
      className={className}
      required={required}
      name={name}
      autoComplete="off"
    />
  </C.InputWrapper>
);

export default InputField;
