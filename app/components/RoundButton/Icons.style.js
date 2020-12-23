import styled from 'styled-components';

const Bell = styled.i`
  position: relative;
  bottom: 3px;

  &,
  &::before {
    border-top-left-radius: 100px;
    border-top-right-radius: 100px;
  }
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    border: 2px solid;
    border-bottom: 0;
    width: 14px;
    height: 14px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
  }
  &::before {
    background: currentColor;
    width: 4px;
    height: 4px;
    top: -4px;
    left: 3px;
  }
  &::after {
    border-radius: 3px;
    width: 16px;
    height: 10px;
    border: 6px solid transparent;
    border-top: 1px solid transparent;
    box-shadow: inset 0 0 0 4px, 0 -2px 0 0;
    top: 14px;
    left: -3px;
    border-bottom-left-radius: 100px;
    border-bottom-right-radius: 100px;
  }
`;

const Profile = styled.i`
  &,
  &::after,
  &::before {
    display: block;
    box-sizing: border-box;
    border: 2px solid;
    border-radius: 100px;
  }
  & {
    overflow: hidden;
    transform: scale(var(--ggs, 1));
    width: 22px;
    height: 22px;
    position: relative;
  }
  &::after,
  &::before {
    content: '';
    position: absolute;
    top: 2px;
    left: 5px;
    width: 8px;
    height: 8px;
  }
  &::after {
    border-radius: 200px;
    top: 11px;
    left: 0px;
    width: 18px;
    height: 18px;
  }
`;

const Moon = styled.i`
  &,
  &::after {
    display: block;
    box-sizing: border-box;
    border-radius: 50%;
  }
  & {
    overflow: hidden;
    position: relative;
    transform: rotate(-135deg) scale(var(--ggs, 1));
    width: 20px;
    height: 20px;
    border: 2px solid;
    border-bottom-color: transparent;
  }
  &::after {
    content: '';
    position: absolute;
    width: 12px;
    height: 18px;
    border: 2px solid transparent;
    box-shadow: 0 0 0 2px;
    top: 8px;
    left: 2px;
  }
`;

const Search = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 16px;
    height: 16px;
    border: 2px solid;
    border-radius: 100%;
    margin-left: -4px;
    margin-top: -4px;
  }
  &::after {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    border-radius: 3px;
    width: 2px;
    height: 8px;
    background: currentColor;
    transform: rotate(-45deg);
    top: 10px;
    left: 12px;
  }
`;

const Plus = styled.i`
  position: relative;
  top: 1px;

  &,
  &::after {
    display: block;
    box-sizing: border-box;
    background: currentColor;
    border-radius: 10px;
  }
  & {
    margin-top: -2px;
    position: relative;
    transform: scale(var(--ggs, 1));
    width: 16px;
    height: 2px;
  }
  &::after {
    content: '';
    position: absolute;
    width: 2px;
    height: 16px;
    top: -7px;
    left: 7px;
  }
`;

const LogOff = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    border-radius: 16px;
    border: 2px solid;
    transform: scale(var(--ggs, 1));
    width: 16px;
    height: 16px;
    border-top: 2px solid transparent;
  }
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    border-radius: 3px;
    height: 8px;
    width: 2px;
    background: currentColor;
    left: 5px;
    bottom: 6px;
  }
`;

const ChatIcon = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 20px;
    height: 16px;
    border: 2px solid;
    border-bottom: 0;
    box-shadow: -6px 8px 0 -6px, 6px 8px 0 -6px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 8px;
  }
  &::before {
    border: 2px solid;
    border-top-color: transparent;
    border-bottom-left-radius: 20px;
    right: 4px;
    bottom: -6px;
    height: 6px;
  }
  &::after {
    height: 2px;
    background: currentColor;
    box-shadow: 0 4px 0 0;
    left: 4px;
    top: 4px;
  }
`;

const BackArrowIcon = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    border-top: 2px solid transparent;
    border-bottom: 2px solid transparent;
    box-shadow: inset 0 0 0 2px;
    width: 24px;
    height: 6px;
  }
  &::after {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 6px;
    height: 6px;
    border-top: 2px solid;
    border-right: 2px solid;
    transform: rotate(45deg);
    right: 0;
    bottom: -2px;
  }
`;

const AirplaneIcon = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    width: 18px;
    height: 18px;
    transform: scale(var(--ggs, 1));
    background: linear-gradient(to left, currentColor 22px, transparent 0)
        no-repeat center/16px 2px,
      radial-gradient(circle, currentColor 60%, transparent 40%) no-repeat right
        center/2px 2px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    position: absolute;
    box-sizing: border-box;
    width: 10px;
    height: 8px;
    border-right: 4px solid;
  }
  &::before {
    border-top-right-radius: 2px;
    top: 0;
    transform: perspective(10px) rotateX(10deg) skewX(30deg);
    box-shadow: -4px 3px 0 -2px;
  }
  &::after {
    border-bottom-right-radius: 2px;
    bottom: 0;
    transform: perspective(10px) rotateX(-10deg) skewX(-30deg);
    box-shadow: -4px -3px 0 -2px;
  }
`;

export {
  Bell,
  Profile,
  Moon,
  Search,
  Plus,
  LogOff,
  ChatIcon,
  BackArrowIcon,
  AirplaneIcon,
};
