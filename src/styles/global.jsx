/* eslint no-unused-expressions: 0 */
import { injectGlobal } from 'emotion';
import { withPrefix } from 'gatsby';

injectGlobal`
  *, *:before, *:after {
    box-sizing: inherit;
  }
  html {
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    background-color: #161719;
    color: white;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 10px;
    @media (max-width: 575.98px) {
    font-size: 6px;
    }
  }
  html, body {
    @font-face {
      font-family: akrobat-bold;
      src: url("${withPrefix('/font/akrobat-bold.ttf')}") format('truetype');
    }
    @font-face {
      font-family: akrobat-regular;
      src: url("${withPrefix('/font/akrobat-regular.ttf')}") format('truetype');
    }
    @font-face {
      font-family: avenirnext-demi;
      src: url("${withPrefix('/font/avenirnext_demi_bold.ttf')}") format('truetype');
    }
    @font-face {
      font-family: avenirnext-medium;
      src: url("${withPrefix('/font/avenirnext_medium.ttf')}") format('truetype');
    }
    @font-face {
      font-family: avenirnext-regular;
      src: url("${withPrefix('/font/avenirnext_regular.ttf')}") format('truetype');
    }
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
`;
