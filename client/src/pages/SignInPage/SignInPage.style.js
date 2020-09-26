import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: grid;
  place-items: center;
  text-align: center;

  h1 {
    font-family: 'Baloo Tamma 2', cursive;
    margin: 0 0 0 20px;
    position: relative;
    top: 2px;
    font-size: 3rem;
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 60px;

  svg {
    height: 60px;
    color: ${({ theme }) => theme.primary};
  }
`;

export const SignInButton = styled.button`
  background-color: #ffffff;
  display: flex;
  align-items: center;
  border: 0;
  border-radius: 5px;
  padding: 0 15px 0 0;
  margin: 0 auto;
  cursor: pointer;
`;
