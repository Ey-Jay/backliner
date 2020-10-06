import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 30px;
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
  background-color: rgba(255, 255, 255, 0.07)
`;

export const CommentText = styled.div``;

export const CommentDetails = styled.div`
  font-size: 0.7em;
  overflow: hidden;
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
  height: 40px;
  line-height: 40px;
  background-color: ${({ theme }) => theme.secondary};
  border: none;
  color: inherit;
  border-radius: 10px;
  padding: 0 12px;
  margin-right: 15px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 0.8rem;
  outline: none;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.secondaryDark};
  }

  &:active {
    transition: all 0.1s;
    transform: scale(0.9);
  }
`;
