import * as C from "./style";

interface IDadosInfo {
  name: string;
  info: string;
}

const DadosInfo = ({ info, name }: IDadosInfo) => {
  return (
    <C.Container>
      <C.Title>{name}</C.Title>
      <C.Info>{info}</C.Info>
    </C.Container>
  );
};

export { DadosInfo };
