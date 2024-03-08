import { ChangeEvent } from "react";
import * as C from "./style";

interface InputRadioProps {
  label?: string;
  value?: string;
  options?: string[];
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void; 
}

const InputRadio = ({ label, value, options, onChange }: InputRadioProps) => (
  <C.InputWrapper>
    <C.ContentLabel>{label}</C.ContentLabel>
    <C.Content>
      {options &&
        options.map((option, index) => (
          <C.ContentInput key={index}>
            <input
              type="radio"
              id={`${label}_${option}`}
              name={label}
              value={option}
              checked={value === option}
              onChange={() =>
                onChange &&
                onChange({
                  target: { value: option },
                } as ChangeEvent<HTMLInputElement>)
              }
            />
            <label htmlFor={`${label}_${option}`}>{option}</label>
          </C.ContentInput>
        ))}
    </C.Content>
  </C.InputWrapper>
);

export default InputRadio;
