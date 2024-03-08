import { ChangeEvent } from "../../types/types";
import * as C from "./style";

interface SelectUFProps {
  label?: string;
  selectedUF: string;
  onChange?: (value: string) => void;
  className?: string;
}

const SelectUF = ({
  label,
  selectedUF,
  onChange,
  className,
}: SelectUFProps) => {
  const ufs = [
    { value: "-- UF --", label: "" },
    { value: "AC", label: "Acre" },
    { value: "AL", label: "Alagoas" },
    { value: "AP", label: "Amapá" },
    { value: "AM", label: "Amazonas" },
    { value: "BA", label: "Bahia" },
    { value: "CE", label: "Ceará" },
    { value: "DF", label: "Distrito Federal" },
    { value: "ES", label: "Espírito Santo" },
    { value: "GO", label: "Goiás" },
    { value: "MA", label: "Maranhão" },
    { value: "MT", label: "Mato Grosso" },
    { value: "MS", label: "Mato Grosso do Sul" },
    { value: "MG", label: "Minas Gerais" },
    { value: "PA", label: "Pará" },
    { value: "PB", label: "Paraíba" },
    { value: "PR", label: "Paraná" },
    { value: "PE", label: "Pernambuco" },
    { value: "PI", label: "Piauí" },
    { value: "RJ", label: "Rio de Janeiro" },
    { value: "RN", label: "Rio Grande do Norte" },
    { value: "RS", label: "Rio Grande do Sul" },
    { value: "RO", label: "Rondônia" },
    { value: "RR", label: "Roraima" },
    { value: "SC", label: "Santa Catarina" },
    { value: "SP", label: "São Paulo" },
    { value: "SE", label: "Sergipe" },
    { value: "TO", label: "Tocantins" },
  ];
  const handleSelectChange = (event: ChangeEvent) => {
    const value = event.target.value;
    onChange && onChange(value);
  };

  return (
    <C.InputWrapper className={className}>
      <C.ContentLabel className={className}>{label}</C.ContentLabel>
      <C.SelectContent className={className}>
        <select
          id="ufSelect"
          value={selectedUF}
          onChange={handleSelectChange}
          className={className}
        >
          {ufs.map((uf) => (
            <option key={uf.value} value={uf.value}>
              {uf.value}
            </option>
          ))}
        </select>
      </C.SelectContent>
    </C.InputWrapper>
  );
};

export default SelectUF;
