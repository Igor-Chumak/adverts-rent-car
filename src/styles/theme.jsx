import bgimage from 'assets/car-rent-1920x1280.jpg';

export const theme = Object.freeze({
  colors: {
    white: '#ffffff',
    gray: '#9e9e9e',
    darkgrey: '#757575',
    light: '#f2f2f2',
    dark: '#212121',
    mainBackground: ['linear-gradient(to bottom, #c9d6ff,  #e2e2e2)'],
    tagBackground: ['linear-gradient(to bottom, #FFD194, #D1913C)'],
    imgBackground: 'rgba(79, 84, 92, 0.5)',
    alert: '#ec8080',
    title: 'rgb(0, 32, 105)', // #002069
    titleA: 'rgb(0, 32, 105, 0.7)', // #002069
    accent: '#3470FF',
    hover: '#0B44CD',
    borderInfo: 'rgba(18, 20, 23, 0.1)',
  },

  fontSizes: {
    smallest: '12px',
    small: '14px',
    medium: '16px',
    large: '18px',
    largest: '24px',
  },

  fontWeight: {
    regular: 400,
    medium: 500,
    semiBold: 600,
  },

  spacing: value => `${4 * value}px`,

  shadows: {
    small: '0 5px 7px -1px rgba(51, 51, 51, 0.23)',
    regular: '0px 4px 10px 4px #9e9e9e',
    medium: '0 9px 47px 11px rgba(51, 51, 51, 0.18);',
    main: '2px 3px 4px 0px rgba(0, 32, 105, 0.6)',
    btn_vol: `inset rgba(255, 255, 255, 0.2) 8px 8px 18px 5px,
    inset rgba(0, 0, 0, 0.4) -8px -8px 18px 5px`,
    btn_vol_hover: `inset rgba(0, 0, 0, 0.4) 8px 8px 18px 5px,
      inset rgba(255, 255, 255, 0.2) -8px -8px 18px 5px`,
    title: '1px 1px 1px #ffff',
  },

  animation: {
    cubicBezier: '0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98)',
  },

  bg_color: {
    item: 'rgba(248, 248, 248, 0.4)',
    rentalCond: '#F9F9F9',
    btn: 'rgba(230, 230, 230, 0.3)',
    btn_active: 'rgb(233, 232, 232, 0.8)',
  },
});

export const darkTheme = {
  bodyImage: [
    `linear-gradient(rgba(46, 47, 66, 0.7), rgba(46, 47, 66, 0.7)),           url(${bgimage}) no-repeat top left/cover`,
  ],
  body: '#121417',
  textColor: 'rgb(237,235,232)', // #edebe8
};

export const lightTheme = {
  bodyImage: [`url(${bgimage}) no-repeat top left/cover`],
  body: '#ffffff',
  textColor: 'rgb(18, 20, 23)', // #121417
};
