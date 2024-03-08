import styled from "styled-components";

export const ContainerHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 91px;
  width: 100vw;

  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const ContentAdmin = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  margin-right: 33px;
  gap: 5px;
`;

export const InfoAdmin = styled.div`
  p {
    color: #1c1e46;

    text-align: right;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

    &.email {
      font-size: 13px;
      font-weight: 400;
    }
  }
`;


export const ContentImage = styled.div `
position: relative;

`
export const Online = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  border: 1px solid #000;
  background: #62de15;

  position: absolute;
  right: 0;
  bottom: .2em;
`;
