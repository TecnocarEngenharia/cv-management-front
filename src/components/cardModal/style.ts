import styled from "styled-components";

export const ContentImports = styled.div`
  width: 452px;
  height: 74px;
  border-radius: 10px;
  background: #fff;

  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5em;

  @media (max-width: 450px) {
    width: 350px;
  }
`;

export const Paragraph = styled.div`
  color: #9b3f39;

  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-left: 17px;

  @media (max-width: 450px) {
    font-size: 13px;
  }
`;

export const Buttons = styled.div`
  width: 72px;
  height: 55px;
  border-radius: 10px;
  background: #b67070;

  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 32px;
  cursor: pointer;
  user-select: none;
  transition: background 0.4s ease, color 0.3s ease;
  &:hover {
    background-color: #9b3f39;
  }

  @media (max-width: 450px) {
    width: 60px;
    height: 55px;

    img {
      width: 35px;
      height: 38px;
      object-fit: cover;
    }
  }
`;
