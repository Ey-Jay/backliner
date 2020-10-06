import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 30px;

  @media (max-width: ${({ theme }) => theme.breakpointMobile}) {
  margin: 0;
  width: 85vw;
  }
`;

export const Comments = styled.ul`
  margin: 5px 5px 10px 5px;
  padding: 0;
 `;

export const Comment = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px 20px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.07);

  @media (max-width: ${({ theme }) => theme.breakpointMobile}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const CommentText = styled.div`
@media (max-width: ${({ theme }) => theme.breakpointMobile}) {
   margin-bottom: 15px;
  }
`;

export const CommentDetails = styled.div`
  font-size: 0.7em;
  overflow: hidden;

div {
  display: flex;
  align-items: center;
}

  img {
    height: 20px;
    width: 20px;
    object-fit: cover;
    border-radius: 50%;
  }

  span {
    margin-left: 5px;
  }

`;

export const NewComment = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TextField = styled.textarea`
  background-color: ${({ theme }) => theme.backgroundColorLight};
  color: white;
  resize: none;
  font-family: inherit;
  padding: 10px;
`;

export const CommentButton = styled.button`
  height: 50px;
  line-height: 50px;
  background-color: ${({ theme }) => theme.secondary};
  border: none;
  color: inherit;
  border-radius: 10px;
  padding: 0 24px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 0.8rem;
  outline: none;
  transition: all 0.2s;
  cursor: pointer;
  margin-right: 15px;

  &:hover {
    background-color: ${({ theme }) => theme.secondaryDark};
  }

  &:active {
    transition: all 0.1s;
    transform: scale(0.9);
  }
`;
