import { css } from 'styled-components';

export const size = {
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1200px',
  desktop: '1440px',
  desktopL: '2560px',
};

export const device = {
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktopL})`,
};

export const mixins = {
  flexSet: (
    justifyContent = 'center',
    alignItems = 'center',
    flexDirection = 'row'
  ) => css`
    display: flex;
    justify-content: ${justifyContent};
    align-items: ${alignItems};
    flex-direction: ${flexDirection};
  `,
};
