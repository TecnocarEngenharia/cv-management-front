import React from "react";
import * as C from './style'

interface Option {
  label: string;
  value: string;
}

interface ContentCheckLabelProps {
  title: string;
  options: Option[];
  onChange?: (value: string[]) => void; // Modificado para passar um array de valores selecionados
  checked?: string[]; // Novo estado para armazenar os valores selecionados
}

const ContentCheckLabel: React.FC<ContentCheckLabelProps> = ({
  title,
  options,
  onChange,
  checked = [], // Valor padrão como um array vazio
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    let newChecked: string[] = [];
    if (checked.includes(value)) {
      // Se estiver, remove da lista de selecionados
      newChecked = checked.filter((item) => item !== value);
    } else {
      // Caso contrário, adiciona à lista de selecionados
      newChecked = [...checked, value];
    }

    // Chama a função onChange com a nova lista de valores selecionados
    if (onChange) {
      onChange(newChecked);
    }
  };

  return (
    <C.ContentCheckLabel>
      <h3>{title}</h3>
      {options.map((option, index) => (
        <C.ContentInputsOptions key={index} className="content-inputs-options">
          <input 
            type="checkbox" 
            name={option.value} 
            value={option.value} 
            onChange={handleChange}
            // Verifica se o valor está presente na lista de valores selecionados
            checked={checked.includes(option.value)}
          />
          <span>{option.label}</span>
        </C.ContentInputsOptions>
      ))}
    </C.ContentCheckLabel>
  );
};
export { ContentCheckLabel };
