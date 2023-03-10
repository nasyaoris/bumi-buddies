import React from 'react'
import { SvgIcon } from "@mui/material";
import theme from '../../../styles/theme/theme';

const RightArrow = (props) => (
  <SvgIcon
    width="48" 
    height="48" 
    viewBox="0 0 48 48"
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <g opacity="0.5">
      <path d="M15.9393 39.0607C15.4068 38.5281 15.3584 37.6948 15.7941 37.1076L15.9393 36.9393L28.878 24L15.9393 11.0607C15.4068 10.5281 15.3584 9.6948 15.7941 9.10758L15.9393 8.93934C16.4719 8.40681 17.3052 8.35839 17.8924 8.7941L18.0607 8.93934L32.0607 22.9393C32.5932 23.4719 32.6416 24.3052 32.2059 24.8924L32.0607 25.0607L18.0607 39.0607C17.4749 39.6464 16.5251 39.6464 15.9393 39.0607Z" fill="#1C1C1C"/>
    </g>
  </SvgIcon>
);

export default RightArrow;