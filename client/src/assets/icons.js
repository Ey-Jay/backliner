import styled from 'styled-components';

export const ListViewIcon = styled.i`
  &,
  &::before {
    display: block;
    box-sizing: border-box;
    width: 16px;
    height: 2px;
    border-radius: 3px;
    background: currentColor;
    box-shadow: 0 8px 0;
  }
  & {
    margin-top: -11px;
    transform: scale(var(--ggs, 1));
    position: relative;
  }
  &::before {
    content: '';
    position: absolute;
    top: 4px;
    left: 0;
  }
`;

export const GridViewIcon = styled.i`
  & {
    transform: scale(var(--ggs, 1));
  }
  &,
  &::after,
  &::before {
    box-sizing: border-box;
    position: relative;
    display: block;
    width: 18px;
    height: 18px;
  }
  &::after,
  &::before {
    content: '';
    position: absolute;
    width: 8px;
    border-top: 8px solid;
    border-bottom: 8px solid;
  }
  &::after {
    right: 0;
  }
`;

export const MicIcon = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 16px;
    height: 12px;
    border-bottom-left-radius: 120px;
    border-bottom-right-radius: 120px;
    border: 2px solid;
    border-top: 0;
    margin-top: 3px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
  }
  &::after {
    border: 2px solid;
    width: 8px;
    height: 18px;
    left: 2px;
    top: -10px;
    border-radius: 4px;
  }
  &::before {
    width: 10px;
    height: 4px;
    top: 12px;
    left: 1px;
    border-right: 4px solid transparent;
    box-shadow: 0 2px 0, inset -2px 0 0;
  }
`;

export const LyricsIcon = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 14px;
    height: 16px;
    border: 2px solid transparent;
    border-right: 0;
    border-top: 0;
    box-shadow: 0 0 0 2px;
    border-radius: 1px;
    border-top-right-radius: 4px;
    overflow: hidden;
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
    box-shadow: 0 4px 0, -6px -4px 0;
    left: 0;
    width: 10px;
    height: 2px;
    top: 8px;
  }
  &::after {
    width: 6px;
    height: 6px;
    border-left: 2px solid;
    border-bottom: 2px solid;
    right: -1px;
    top: -1px;
  }
`;

export const VideoIcon = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    border: 2px solid;
    border-radius: 3px;
    width: 18px;
    height: 12px;
    perspective: 24px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
  }
  &::before {
    border: 2px solid;
    border-left-color: transparent;
    transform: rotateY(-70deg);
    width: 8px;
    height: 8px;
    right: -7px;
    top: 0;
  }
  &::after {
    width: 10px;
    height: 5px;
    border-top: 2px solid;
    border-right: 2px solid;
    top: -5px;
    right: 2px;
    border-top-right-radius: 2px;
  }
`;

export const ThreeDotsIcon = styled.i`
  & {
    transform: scale(var(--ggs, 1));
  }
  &,
  &::after,
  &::before {
    box-sizing: border-box;
    position: relative;
    display: block;
    width: 4px;
    height: 4px;
    background: currentColor;
    border-radius: 100%;
  }
  &::after,
  &::before {
    content: '';
    position: absolute;
  }
  &::after {
    left: 0;
    top: 6px;
  }
  &::before {
    top: -6px;
    right: 0;
  }
`;
