import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: grid;
  place-items: center;
  text-align: center;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 80px;

  svg:first-child {
    height: 100px;
    margin-bottom: 25px;
  }

  svg:last-child {
    height: 40px;
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

export const Policy = styled.div`
  color: ${({ theme }) => theme.secondaryDark};
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
`;
