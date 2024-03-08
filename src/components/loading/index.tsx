import styled, { keyframes } from "styled-components";

const spinAnimation = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;

  @media (min-width: 600px) {
    margin-left: 10vw;
    margin-right: 10vw;
  }

  @media (min-width: 1200px) {
    margin-left: 1vw;
  }

  @media (min-width: 1600px) {
    margin-left: 22vw;
  }

  @media (min-width: 2560px) {
    margin: 2vw 28vw;
  }
`;

const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top: 4px solid #3498db;
  animation: ${spinAnimation} 1s linear infinite;
`;

const Loading = () => {
  return (
    <LoadingContainer>
      <Spinner />
    </LoadingContainer>
  );
};

export default Loading;
