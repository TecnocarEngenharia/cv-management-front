import * as M from "./styled";

interface IModalProps {
  text?: string;
  onclose?: (() => void) | undefined;
}
const ModalResumo = ({ text, onclose }: IModalProps) => {
  return (
    <M.ModalBG>
      <M.Container>
        <M.Title> Resumo profissional</M.Title>
        <M.Resumo>{text}</M.Resumo>
        <M.Button onClick={onclose}> Fechar</M.Button>
      </M.Container>
    </M.ModalBG>
  );
};

export { ModalResumo };
