
import styled from "styled-components";
import Logo404 from '../../image/imagem404.png'

const NotFoundContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f4f4f4;
`;

const Content = styled.div`
  text-align: center;
  padding: 20px;
`;

const Title = styled.h1`
  color: #333;
  font-size: 2em;
`;

const Description = styled.p`
  color: #555;
  font-size: 1.2em;
`;

const Image = styled.img`
  margin-top: 20px;
  max-width: 100%;
  height: auto;
`;

const StyledLink = styled.a`
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const NotFound = () => {
  return (
    <NotFoundContainer>
      <Content>
        <Title>404 - Página não encontrada</Title>
        <Description>Parece que você se perdeu!</Description>
        <Image src={Logo404} alt="Imagem de erro 404" />
        <Description>
          Volte para <StyledLink href="/">página inicial</StyledLink>.
        </Description>
      </Content>
    </NotFoundContainer>
  );
};

export { NotFound };
