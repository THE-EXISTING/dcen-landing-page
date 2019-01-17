/* global tw */
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'react-emotion';
import { width as twWidth } from '../../tailwind';
import { hidden } from '../styles/utils';

const Wrapper = styled.svg`
  ${tw('absolute')};
  ${props => props.hiddenMobile && hidden};
  color: ${props => props.stroke};
  width: ${props => props.svgWidth};
  fill: ${props => props.fill};
  left: ${props => props.left};
  top: ${props => props.top};
  cursor: ${props => props.cursor};
  animation: MoveUpDown 0.5s infinite alternate;
  @keyframes MoveUpDown {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-10px);
    }
  }
`;

const icons = {
  scrollDown: {
    shape: (
      <React.Fragment>
        <path d="M11.0133333 9.9733333L15 13.96l3.9866667-3.9866667L20.2 11.1866667 15 16.38666667 9.8 11.1866667zM20.2 20.0266667H9.8v-1.7333334h10.4z" />
        <path
          d="M15 28.8666667C7.34165147 28.8666667 1.13333333 22.6583485 1.13333333 15 1.13333333 7.34165147 7.34165147 1.13333333 15 1.13333333c7.6583485 0 13.8666667 6.20831814 13.8666667 13.86666667 0 7.6583485-6.2083182 13.8666667-13.8666667 13.8666667zm0-1.7333334c6.701055 0 12.1333333-5.4322783 12.1333333-12.1333333C27.1333333 8.29894504 21.701055 2.86666667 15 2.86666667 8.29894504 2.86666667 2.86666667 8.29894504 2.86666667 15c0 6.701055 5.43227837 12.1333333 12.13333333 12.1333333z"
          fillRule="nonzero"
        />
      </React.Fragment>
    ),
    viewBox: '0 0 30 30',
  },
};

const SVG = ({ stroke, fill, width, icon, left, top, className, hiddenMobile, cursor }) => (
  <Wrapper
    viewBox={icons[icon].viewBox}
    stroke={stroke}
    fill={fill}
    svgWidth={twWidth[`${width}`]}
    left={left}
    top={top}
    className={className}
    hiddenMobile={hiddenMobile}
    cursor={cursor}
  >
    {icons[icon].shape}
  </Wrapper>
);

export default SVG;

SVG.propTypes = {
  stroke: PropTypes.string,
  fill: PropTypes.string,
  width: PropTypes.number,
  icon: PropTypes.oneOf(['scrollDown']).isRequired,
  left: PropTypes.string,
  top: PropTypes.string,
  className: PropTypes.string,
  hiddenMobile: PropTypes.bool,
  cursor: PropTypes.string
};

SVG.defaultProps = {
  stroke: 'transparent',
  width: 8,
  fill: 'none',
  left: '0%',
  top: '0%',
  className: 'fancy-icon',
  hiddenMobile: false,
};
