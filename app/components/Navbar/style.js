import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 35px;
`;

export const UserDisplay = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto 20px;
  background-color: rgba(255, 255, 255, 0.07);
  padding: 10px;
  border-radius: 30px;
`;

export const UserImage = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  overflow: hidden;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export const UserName = styled.div`
  margin: 0 20px;
  text-align: right;
`;

export const BandDisplay = styled.header`
  display: flex;
  margin-bottom: 40px;
`;

export const BandAvatarImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 10%;
  object-fit: cover;
`;

export const BandDescription = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;

  & > * + * {
    margin-top: 10px;
  }
`;

export const BandName = styled.div`
  font-weight: 700;
`;

export const MembersContainer = styled.div`
  display: flex;

  & > * + * {
    margin-left: -7px;
  }
`;

export const MemberPortraitImg = styled.img`
  width: 30px;
  height: 30px;
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid ${({ theme }) => theme.backgroundColorDark};
`;

export const Menu = styled.nav`
  ${({ theme }) => css`
    flex: 1;

    display: flex;
    align-items: center;
    ul {
      margin: 0;
      padding: 0;
      list-style: none;

      li {
        padding: 15px;
        font-weight: 700;
        font-size: 1.2rem;
        cursor: pointer;
        transition: all 0.2s;
      }

      .active {
        color: ${theme.primary};
      }

      li:hover {
        color: ${theme.primary};
      }

      li:active {
        transition: all 0.1s;
        color: ${theme.primaryDark};
      }
    }
  `}
`;

export const Policy = styled.div`
  color: ${({ theme }) => theme.secondaryDark};
  margin-left: 15px;
  cursor: pointer;
`;
