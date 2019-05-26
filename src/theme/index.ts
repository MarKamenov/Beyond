import * as styledComponents from 'styled-components';

const { default: styled, css, keyframes, ThemeProvider } = styledComponents;

export const appColors = ['#50E3C2'];

export const theme = {
	titleColor: appColors[0],
	radius: '5px',
};

export { css, keyframes, ThemeProvider };
export default styled;
