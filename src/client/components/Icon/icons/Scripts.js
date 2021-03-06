// @flow
import React from 'react';
import styled from 'styled-components';

import type { ThemeProps } from '../../../theme';

const Svg = styled.svg`
  fill: ${(p: ThemeProps) => p.theme.colour('text')};
`;

const Scripts = (props: {}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    width="24"
    height="24"
    {...props}
  >
    <path d="M42.2 42.2c-.2-.1-.5-.1-.8 0-.2.1-.4.4-.4.7v14.3c0 .3.1.5.4.7.2.1.5.1.8 0L54 50.7c.2-.1.4-.4.4-.6s-.1-.5-.4-.6l-11.8-7.3zm.3 13.7V44.2l9.6 5.8-9.6 5.9zM11.6 7.9H33v1.5H11.6zM11.6 15.7h30.6v1.5H11.6zM11.6 23.4h30.6v1.5H11.6zM11.6 31.1h30.6v1.5H11.6zM11.6 38.8H33v1.5H11.6zM11.6 46.5h15.3V48H11.6z" />
    <path d="M5.8 1.8h32.8v8.6c0 .2.1.4.2.5.1.1.3.2.5.2h8.6v23.1h1.5V10.3c0-.2-.1-.4-.2-.5L39.9.5c-.1-.1-.3-.2-.5-.2h-35v57.1H31v-1.5H5.8V1.8zm34.3 1l6.8 6.8h-6.8V2.8z" />
    <path d="M46 36.3c-7.6 0-13.7 6.2-13.7 13.7S38.4 63.8 46 63.8a13.74 13.74 0 0 0 0-27.5zm0 26a12.25 12.25 0 0 1 0-24.5c6.8 0 12.2 5.5 12.2 12.2S52.7 62.3 46 62.3z" />
  </Svg>
);

export default Scripts;
