import styled from "styled-components";

export const ContentCard = styled.div`
  width: 409px;
  height: 502px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #fff;

  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: 100;

  @media (min-height: 0px) and (max-height: 700px) {
    height: 450px;
    width: 350px;
  }
`;

export const Image = styled.img`
  margin: 2em 0 1em 0;

  &.errorTrue {
    margin: 2em;
  }
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ContentForm = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const ContainerInputs = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 18px;
`;

export const Forgotpassword = styled.p`
  text-align: end;
  width: 87%;

  color: #000;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 8px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  @media (min-height: 0px) and (max-height: 700px) {
    font-size: 12px;
  }
`;

export const Buttons = styled.button`
  width: 127px;
  height: 40px;
  border-radius: 5px;
  background: #851f2c;
  border: none;

  color: #fff;

  text-align: center;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 2em;
  cursor: pointer;

  &:hover {
    background-color: #9f3a3e;
  }

  &.loading {
    background: #b67070;

    &:disabled {
      cursor: not-allowed;
    }
  }
`;

export const ContentCracha = styled.div`
  width: 67px;
  height: 12px;
  border-radius: 10px;
  background: #f2f2f2;
  margin-top: 10px;
`;

export const ContentPassword = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ContentLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    color: red;
    width: 100%;
    margin-bottom: 1em;
  }
`;
