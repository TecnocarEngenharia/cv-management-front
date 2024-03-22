import { ChangeEvent } from "react";
import * as C from "./style";

interface InputSelectProps {
  label?: string;
  value?: string;
  options?: string[];
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
  placeholder?: string;
  disabled?: boolean;
}

const InputSelect = ({
  label,
  value,
  options,
  onChange,
  className,
  disabled
}: InputSelectProps) => (
  <C.InputWrapper className={className}>
    <C.ContentLabel className={className}>{label}</C.ContentLabel>
    <C.SelectContent className={className}>
      <select
        className={className}
        id={label}
        disabled={disabled}
        name={label}
        value={value}
        onChange={(e) =>
          onChange &&
          onChange({
            target: { value: e.target.value },
          } as ChangeEvent<HTMLSelectElement>)
        }
      >
        {options &&
          options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
      </select>
    </C.SelectContent>
  </C.InputWrapper>
);

export default InputSelect;
