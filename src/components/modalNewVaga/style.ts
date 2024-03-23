import styled from "styled-components";

export const ModalBG = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10000;
`;

export const ModalContent = styled.div`
  width: 50%;
  height: 50vh;
  background-color: #ffffff;
  border-radius: 10px;
  border: 1px solid #6a6666;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  @media (max-width: 1300px) {
    width: 60%;
    height: 70vh;
  }

  @media (min-width: 300px) and (max-width: 700px) {
    width: 90%;
  }
`;

export const ContentTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10%;
  background-color: #f0f0f0;
  padding: 1em 2em;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  h1 {
    font-size: 1.5rem;
    margin: 0;
    color: #333;
  }

  button {
    border: none;
    background-color: #851f2c;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    cursor: pointer;
    font-size: 1rem;
    color: #ffffff;
  }

  @media (max-width: 1300px) {
    h1 {
      font-size: 1rem;
    }
  }
`;

export const Description = styled.div`
  font-size: 1.1rem;
  margin-top: 30px;
  color: #666;
  width: 100%;
  display: block;
  text-align: center;

  span {
    font-weight: bold;
    color: #333;
  }

  @media (max-width: 1300px) {
    font-size: 0.8rem;
  }

  @media (min-width: 300px) and (max-width: 700px) {
    text-align: justify;
    padding-left: 14px;
    max-width: 90%;
  }
`;

export const ContentForm = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2em 5em;

  @media (min-width: 300px) and (max-width: 700px) {
    margin: 2em 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2em;
    width: 100%;
  }
`;

export const ContentVagas = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    font-size: 1.3rem;
    margin: 0;
    color: #333;
    margin-bottom: 1em;
  }

  @media (max-width: 1300px) {
    font-size: 0.8rem;

    h3 {
      font-size: 1rem;
    }
  }
`;

export const List = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 1em;
  list-style-type: none;
  padding: 0;
  counter-reset: item;
`;

export const ListItem = styled.li`
  counter-increment: item;

  &::before {
    content: counter(item) " - ";
  }
`;

export const ContentNewVaga = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    font-size: 1.3rem;
    margin: 0;
    color: #333;
    margin-bottom: 1em;
  }

  @media (max-width: 1300px) {
    font-size: 0.8rem;
    align-items: start;

    h3 {
      font-size: 1rem;
    }
  }
`;

export const ContentButton = styled.div`
  display: flex;
  gap: 2em;
  align-items: center;

  button {
    padding: 0.5em 1em;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    background-color: #4caf50;
    color: #fff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

    &:hover {
      background-color: #45a049;
    }

    &.Nao {
      background-color: #851f2c;

      &:hover {
        background-color: #851f3d;
      }
    }
  }

  @media (max-width: 1300px) {
    align-items: start;
    justify-content: start;
  }

  @media (min-width: 300px) and (max-width: 700px) {
    width: 100%;
    justify-content: center;
    
  }
`;
export const ContentInputForm = styled.form`
  width: 100%;
  margin-top: 1em;

  label {
    margin-bottom: 0.5em;
    font-weight: bold;
  }

  button {
    margin-top: 1em;
    padding: 0.5em 1em;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    background-color: #4caf50;
    color: #fff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #45a049;
    }
  }
`;

export const ContentModalBG = styled.div`
  width: 500px;
  height: 250px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 10px;
  border: 1px solid #6a6666;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  @media (max-width: 1300px) {
    width: 300px;
    height: 200px;
  }
`;

export const ContentButtonTwo = styled.div`
  display: flex;
  width: 100%;
  gap: 1em;
  justify-content: flex-end;
  button {
    margin-top: 1em;
    padding: 0.5em 1em;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    background-color: #4caf50;
    color: #fff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #45a049;
    }

    &.Nao {
      background-color: #851f2c;
      margin-right: 1.3em;

      &:hover {
        background-color: #851f3d;
      }
    }
    &:disabled {
      background-color: #333333;
    }
  }

  @media (max-width: 1300px) {
    padding: 0.2em 0.8em;
  }
`;

export const FeedBackMessage = styled.h5`
  display: block;
  text-align: center;
  color: #4caf50;
  font-style: 600;

  &.mt {
    margin-top: 20px;
  }
`;
export const FeedBackMessageErr = styled.h5`
  display: block;
  text-align: center;
  color: #851f23;
  font-style: 600;

  &.mt {
    margin-top: 20px;
  }
`;
